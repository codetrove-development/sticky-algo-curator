import SnapperCore, { helpers } from 'curator-core'

export default class StickyAlgo {
    getItemInitialData( itemProps ) {
        return {
            previousX: itemProps.x,
            previousY: itemProps.y,
            previousWidth: itemProps.width,
            previousHeight: itemProps.height
        }
    }

    run ( state, itemProps, newX, newY, newWidth, newHeight ) {
        const { grid, gridOptions, items } = state
        const item = {
            ...itemProps,
        }
        const allItems = {}
        items.forEach(i => allItems[ i.id ] = i)

        this._setOptions( state )

        const result = this.placeItem( this._grid, allItems, item, newX, newY, newWidth, newHeight )

        if ( result == null ) {
            return { success: false }
        }

        const updateItems = {}
        result.forEach( itm => {
            const i = allItems[ itm.id ]
            const clone = { ...i }

            this._updateItem( clone, itm.newX, itm.newY, itm.newWidth, itm.newHeight )
            SnapperCore.updateGridWithItemMovement( this._grid, clone, i.x, i.y, i.width, i.height)
            this._registerItemMovement( itm.newX, itm.newY, itm.newWidth, itm.newHeight )
            updateItems[ i.id ] = clone
        })

        // remove any previously registered movements resulting from collisions
        this.setPreviousMovements( updateItems[ item.id ] )

        const revertedItems = this.revertPreviousMovements( {
            ...allItems,
            ...updateItems
        } )
        
        revertedItems.forEach( itm => {
            updateItems[ itm.id ] = itm
            this._registerItemMovement( itm.x, itm.y, itm.width, itm.height )
        })

        this.printGrid()
     
        return {
            success: true,
            itemsToMove: updateItems,
            gridRows: this._gridRows,
            gridColumns: this._gridColumns,
        }
    }

    onGridItemRemoved( state, itemProps ) {
        const allItems = {}

        this._setOptions( state )

        state.items.forEach(i => allItems[ i.id ] = i)

        const revertedItems = this.revertPreviousMovements( allItems )

        return revertedItems
    }

    printGrid() {
        if ( typeof window === 'object' && !window.DEBUG_ALGO )
            return

        console.clear()

        for( let y = 0; y < this._grid.length; y++) {
            const row = this._grid[ y ]

            if (!row) {
                console.log( ' ' )
                continue
            }

            let line = ''
            
            for( let x = 0; x < row.length; x++) {
                line += row[ x ] ? ( row[ x ].id ).toString().padEnd( 3 ) : '   '
            }

            console.log( line )
        }
    }

    placeItem( grid, allitems, item, x, y, width, height ) {
        const collisions = this._getCollisions( allitems, grid, x, y, width, height, [ item.id ] )
        const lowestGluedEl = this._findLargestGluedElement( collisions )

        if ( lowestGluedEl != null )
            return this.placeItem( grid, allitems, item, x, lowestGluedEl.y + lowestGluedEl.height, width, height )

        item.newX = x
        item.newY = y
        item.newWidth = width
        item.newHeight = height
        
        let movedItems = [ item ]

        collisions.forEach( col => {
            // expects current settings of always having a resize direciton
            const newX = this._canResizeX && !this._canResizeY 
                ? col.x + width 
                : col.x

            const newY = this._canResizeY
                ? Math.max( col.y, y ) + height
                : col.y

            const result = this.placeItem( grid, allitems, col, newX, newY, col.width, col.height )

            if ( result == null )
                return null

            movedItems = movedItems.concat( result )
        })

        return movedItems
    }

    addItemToGrid( grid, gridOptions, gridSizing, items, itemProps ) {
        const allItems = [
            ...items,
            itemProps
        ]

        const result = this.run( grid, gridOptions, gridSizing, allItems, itemProps, itemProps.x, itemProps.y, itemProps.width, itemProps.height  )
        return result
    }

    setPreviousMovements( item ) {
        item.algoData.previousX = item.x
        item.algoData.previousY = item.y
    }

    revertPreviousMovements( allItems ) {
        const itemsOfInterest = Object.keys( allItems )
            .map( key => allItems[ key ] )
            .filter( i => i.x !== i.algoData.previousX || i.y !== i.algoData.previousY )
            .sort((i1, i2) => i1.y - i2.y || i1.x - i2.x)

        const revertedItems = []

        itemsOfInterest.forEach(item => {
            const { previousX, previousY } = item.algoData

            if ( this._getCloserPosition( item, previousX, previousY ) ) {
                const { x, y } = item
                this._updateItem( item, item.newX, item.newY, item.width, item.height )
                SnapperCore.updateGridWithItemMovement( this._grid, item, x, y, item.width, item.height)
                revertedItems.push( item )
            }
        })

        return revertedItems
    }

    _setOptions( state ) {
        const { gridOptions, grid } = state
        const { itemsCanResizeGrid, resizeGridDirections, gridRows, gridColumns } = gridOptions

        this._gridOptions = gridOptions
        this._canResizeX = itemsCanResizeGrid && resizeGridDirections !== 'y'
        this._canResizeY = itemsCanResizeGrid && resizeGridDirections !== 'x'

        this._gridRows = gridRows
        this._gridColumns = gridColumns

        this._grid = grid
    }

    _updateItem( item, newX, newY, newWidth, newHeight ) {
        item.x = newX
        item.y = newY
        item.width = newWidth
        item.height = newHeight
    }

    _registerItemMovement( x, y, width, height ) {
        if ( this._canResizeY ) {
            this._gridRows = Math.max( this._gridRows, y + height )
        }
        
        if ( this._canResizeX ) {
            this._gridColumns = Math.max( this._gridColumns, x + width )
        }
    }

    _getCloserPosition( item, x, y ) {
        const diffY = item.y - y
        const diffX = item.x - x

        let yIterator = Math.sign( diffY )
        let xIterator = Math.sign( diffX )
        let newX = x
        let newY = y

        if (diffX + diffY === 0)
            return false

        while ( true ) {
            if ( this._canFit( newX, newY, item.width, item.height, item.id ) ) {
                item.newX = newX;
                item.newY = newY;
                return true;
            }

            // safe as Math.sign(0) === 0
            if (newX !== item.x)
                newX += xIterator

            if (newY !== item.y)
                newY += yIterator

            if ( newX === item.x )
                xIterator = 0

            if ( newY === item.y )
                yIterator = 0

            if ( xIterator + yIterator === 0)
                return false
        }
    }

    _canFit( x, y, width, height, id ) {
        const { gridColumns, gridRows } = this._gridOptions

        if ( ( x + width > gridColumns && !this._canResizeX ) 
            || ( x < 0 )
            || ( y + height > gridRows && !this._canResizeY )
            || ( y < 0 )
        )
            return false

        for ( let j = y; j < y + height; j++ ) {
            const block = this._grid[ j ]

            if ( !block ) {
                this._grid[ j ] = []
                continue
            }

            for ( let i = x; i < x + width; i++ ) {
                if ( block[ i ] && block[ i ].id != id)
                    return false
            }
        }

        return true
    }

    _findLargestGluedElement(items) {
        const gluedElements = items.filter( i => i.glued )
        const gluedItemsCount = gluedElements.length

        if ( gluedItemsCount === 0 )
            return null

        let largestEl = gluedElements[ 0 ]

        for ( let i = 1; i < gluedItemsCount; i++ ) {
            const iteratedItem = gluedElements[ i ]

            if ( this._canResizeX ) {
                largestEl = largestEl.width + largestEl.x > iteratedItem.width + iteratedItem.x 
                    ? largestEl 
                    : iteratedItem
            }
            else {
                largestEl = largestEl.height + largestEl.y > iteratedItem.height + iteratedItem.y 
                    ? largestEl 
                    : iteratedItem
            }
        }

        return largestEl;
    }

    _getCollisions( allItems, grid, newX, newY, width, height, whitelistIds ) {
        const yLimit = newY + height
        const xLimit = newX + width

        let collisions = []
        
        for ( let y = newY; y < yLimit; y++ ) {
            grid[ y ] = grid[ y ] || [];

            for ( let x = newX; x < xLimit; x++ ) {
                const gridItem = grid[ y ][ x ]

                if ( !gridItem )
                    continue

                if ( whitelistIds.indexOf( gridItem.id ) == -1 && gridItem.visible && !helpers.objIsInArray( collisions, gridItem, 'id' ) )
                    collisions.push( gridItem )

                const correctedX = gridItem.x + gridItem.width - 1

                if ( correctedX < x )
                    throw 'x invalid for grid item - incorrectly placed in grid'

                x = correctedX
            }
        }

        return collisions;
    }
}