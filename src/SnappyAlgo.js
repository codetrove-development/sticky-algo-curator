import SnapperCore, { helpers as helpers } from 'snappy-grid-core'

export default class SnapAlgo {
    getItemInitialData( itemProps ) {
        return {
            previousX: itemProps.x,
            previousY: itemProps.y,
            previousWidth: itemProps.width,
            previousHeight: itemProps.height
        }
    }

    updatedItem( item, newX, newY, newWidth, newHeight ) {
        item.x = newX
        item.y = newY
        item.width = newWidth
        item.height = newHeight
        item.newX = newX
        item.newY = newY
        item.newWidth = newWidth
        item.newHeight = newHeight
    }

    onGridItemRemoved( item, grid, gridOptions ) {
        const { previousX, previousY } = item.algoData
        const revertedItems = this.revertPreviousMovements( item, previousX, previousY, grid, gridOptions )

        return revertedItems
    }

    run ( state, itemProps, newX, newY, newWidth, newHeight ) {
        const { grid, gridOptions, items } = state
        const { gridColumns, gridRows } = gridOptions
        const item = {
            ...itemProps,
        }
        const allItems = {}
        state.items.forEach(i => allItems[ i.id ] = i)

        // get any collisions for this movement
        const collisions = this.getCollisions( allItems, grid, newX, newY, newWidth, newHeight, [ itemProps.id ] )

        // hitting a glued element stops any movement possibility
        if ( this.hasHitGluedElement( collisions ) )
            return { success: false }

        // get a copy of the item
        this.updatedItem( item, newX, newY, newWidth, newHeight )

        // ok, this item can go where it wants. update the grid
        SnapperCore.updateGridWithItemMovement( grid, item, itemProps.x, itemProps.y, itemProps.width, itemProps.height )

        // remove any previously registered movements resulting from collisions
        this.setPreviousMovements( item, true )

        // set the resize directions as according to the users supplied options
        this._canResizeX = gridOptions.itemsCanResizeGrid && gridOptions.resizeGridDirections !== 'y'
        this._canResizeY = gridOptions.itemsCanResizeGrid && gridOptions.resizeGridDirections !== 'x'

        // run the algo
        const { itemsToMove, maxRows, maxCols } = this.getMoveDetails( allItems, grid, item, newX, newY, newWidth, newHeight, collisions)
 
        const updatedItems = {}
        // for each updated item, update the grid and add it to the list of updated items
        itemsToMove.forEach( itm => {
            const i = allItems[ itm.id ]
            const clone = { ...i }

            this.updatedItem( clone, itm.newX, itm.newY, itm.width, itm.height )
            SnapperCore.updateGridWithItemMovement(grid, clone, i.x, i.y, i.width, i.height)
            
            updatedItems[ i.id ] = clone
        })

        // add the currently moved item to the update list
        updatedItems[ item.id ] = item

        // try to move any items back to where they were if possible
        const revertedItems = this.revertPreviousMovements( item, itemProps.x, itemProps.y, grid, gridOptions, items, collisions )

        // add all reverted items to the update list
        revertedItems.forEach( i => {
            const { x, y } = i

            updatedItems[ i.id ] = {
                ...allItems[ i.id ],
                x,
                y,
            }
        })

        return {
            success: true,
            itemsToMove: updatedItems,
            collisionCount: collisions.length,
            items,
            gridRows: Math.max( maxRows, gridOptions.gridRows, newY + newHeight ),
            gridColumns: Math.max( maxCols, gridOptions.gridColumns, newX + newWidth ),
            item
        }
    }

    addItemToGrid( grid, gridOptions, gridSizing, items, itemProps ) {
        const result = this.run( grid, gridOptions, gridSizing, items, itemProps, itemProps.x, itemProps.y, itemProps.width, itemProps.height  )
        return result
    }

    setPreviousMovements( item, force ) {
        if ( force || ( item.algoData.previousX === item.x && item.algoData.previousY === item.y )) {
            item.algoData.previousX = item.x
            item.algoData.previousY = item.y
        }
    }

    revertPreviousMovements( movedItem, previousX, previousY, grid, gridOptions ) {
        const { resizeGridDirections } = gridOptions

        if ( resizeGridDirections === 'y' ) {
            return this.revertInYDirection( movedItem, previousX, previousY, grid, gridOptions )
        }
        else {

        }
    }

    revertInYDirection( movedItem, previousX, previousY, grid, gridOptions ) {
        const { gridRows, gridColumns } = gridOptions
        const xLimit = previousX + movedItem.width
        const revertedItems = []

        for ( let y = previousY + movedItem.height; y < gridRows; y++ ) {
            if ( !grid[ y ] )
                return revertedItems

            for ( let x = previousX; x < xLimit; x++ ) {
                const item = grid[ y ][ x ]

                if ( !helpers.isDefined( item ))
                    continue

                if (this._getCloserPosition( item, item.algoData.previousX, item.algoData.previousY, grid, gridOptions )) {
                    const { x, y } = item
                    item.x = item.newX
                    item.y = item.newY
                    SnapperCore.updateGridWithItemMovement( grid, item, x, y, item.width, item.height )
                    revertedItems.push( item )
                }

                if ( item.width + item.x >= xLimit ) {
                    x = xLimit
                    y = item.y + item.height - 1
                }
                else {
                    x = item.x + item.width
                }
            }
        }

        return revertedItems
    }

    revertPreviousMovementsOld( movedItem, grid, gridOptions, items, collisions ) {
        //let collisionCount = collisions.length
        let movedIds = []
        let revertedItems = []

        // if the user does not want sticky elements, then
        // ignore this request 
        if (!gridOptions.stickyElements)
            return

        // sort by x first then y. may need to change this to 
        // see what direction the dragged item is moving in
        const previousMovements = items
            .filter( ( item ) => {
                return ( item.algoData.previousX != item.x || item.algoData.previousY != item.y )
                    && item.id !== movedItem.id
            } )
            .sort((m1, m2) => {
                const xDiff = m1.x - m2.x

                if (xDiff !== 0)
                    return xDiff

                return m1.y - m2.y
            })

        for (let i = 0; i < previousMovements.length; i++) {
            const item = previousMovements[i]
            const { previousX, previousY } = item.algoData

            if (this._getCloserPosition( item, previousX, previousY, grid, gridOptions )) {
                const { x, y } = item
                item.x = item.newX
                item.y = item.newY
                SnapperCore.updateGridWithItemMovement( grid, item, x, y, item.width, item.height )
                revertedItems[ item.id ] = item

                if (previousX === item.x && previousY === item.y) {
                    movedIds.push(item._id);
                }
            }
        }

        return {
            revertedItems,
            //unmovedCollisions: collisions,
        }
    }

    _getCloserPosition( item, x, y, grid, gridOptions ) {
        const diffY = item.y - y
        const diffX = item.x - x

        let yIterator = Math.sign( diffY )
        let xIterator = Math.sign( diffX )
        let newX = x
        let newY = y

        if (diffX + diffY === 0)
            return false;

        while (true) {
            if (this.canFit( newX, newY, item.width, item.height, item.id, grid, gridOptions )) {
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
                return false;

            else if (newX > gridOptions.gridColumns || newX < 0 || newY > gridOptions.gridRows || newY < 0)
                return false;
        }
    }

    canFit( x, y, width, height, id, grid, gridOptions ) {
        const {
            gridColumns,
            gridRows
        } = gridOptions

        if ( x + width > gridColumns 
            || x < 0
            || y + height > gridRows 
            || y < 0
        )
            return false;

        for ( let j = y; j < y + height; j++ ) {
            const block = grid[j];

            if ( !helpers.isDefined( block ) ) {
                grid[j] = [];
                continue;
            }

            for ( let i = x; i < x + width; i++ ) {
                if ( helpers.isDefined( block[i] ) && block[i].id != id)
                    return false;
            }
        }

        return true;
    }

    hasHitGluedElement(items) {
        return this.findGluedElement( items ) != null;
    }
   
    findGluedElement( items ) {
        return items.find( item => item.glued )
    }

    findLargestGluedElement(items) {
        const gluedElements = items.filter( i => i.glued )
        const gluedItemsCount = gluedElements.length

        if ( gluedItemsCount === 0 )
            return null;

        let largestEl = gluedElements[0];

        for ( let i = 1; i < gluedItemsCount; i++) {
            const iteratedItem = gluedElements[i];

            if ( this._canResizeX )
                largestEl = largestEl.width + largestEl.x > iteratedItem.width + iteratedItem.x ? largestEl : iteratedItem;

            else
                largestEl = largestEl.height + largestEl.y > iteratedItem.height + iteratedItem.y ? largestEl : iteratedItem;
        }

        return largestEl;
    }

    getCollisions( allItems, grid, newX, newY, width, height, whitelistIds ) {
        const yLimit = newY + height
        const xLimit = newX + width

        let collisions = []
        
        for ( let y = newY; y < yLimit; y++ ) {
            grid[ y ] = grid[ y ] || [];

            for ( let x = newX; x < xLimit; x++ ) {
                const cell = grid[ y ][ x ]

                if ( !cell )
                    continue

                const gridItem = allItems[ cell.id ]

                if (gridItem.visible && whitelistIds.indexOf( gridItem.id ) == -1 && !helpers.objIsInArray(collisions, gridItem, 'id'))
                    collisions.push( gridItem );

                const correctedX = gridItem.x + gridItem.width - 1

                if ( correctedX < x )
                    throw 'x invalid for grid item - incorrectly placed in grid'

                x = correctedX
            }
        }

        return collisions;
    }

    getMoveDetails( allItems, grid, draggedItem, newX, newY, newWidth, newHeight, collisions) {
        let itemsToMove = {}
        let maxRows = 0
        let maxCols = 0

        this.handleCollisions( newX, newY, newWidth, newHeight, collisions );

        while (collisions.length > 0) {
            let newCollisions = []

            for (var i = 0; i < collisions.length; i++) {
                const currentCollision = collisions[i];

                // todo change this to 
                // 1. a) check if it's in the previous movements array and could move back 
                //    b) get next free spot - jump over glued items ( x dir if xresizeable, else ydir if yresizeable, else nearest if +ve y/x)
                // 3. get collisions, add to the new collisions array
                // 4. update maxRows, maxCols
                // 5. return success = false if hit boundary and unable to get out

                const nextCollisions = this.getNextGluedFreeCollisions( allItems, grid, draggedItem, currentCollision);
                this.handleCollisions( currentCollision.newX, currentCollision.newY, currentCollision.width, currentCollision.height, nextCollisions );

                newCollisions = newCollisions.concat(nextCollisions);
                itemsToMove[currentCollision.id] = currentCollision;

                const rowsRequired = currentCollision.newY + currentCollision.height
                const columnsRequired = currentCollision.newX + currentCollision.width

                if ( rowsRequired > maxRows )
                    maxRows = rowsRequired

                if ( columnsRequired > maxCols )
                    maxCols = columnsRequired
            }

            collisions = newCollisions;
        }

        return { 
            itemsToMove: Object.keys(itemsToMove).map(key => itemsToMove[ key ]),
            maxRows, 
            maxCols 
        }
    }

    getNextGluedFreeCollisions(allItems, grid, draggedItem, currentCollision) {
        var nextCollisions,
            gluedElement = {},
            movingXDir = this._canResizeX;

        while (gluedElement != null) {
            nextCollisions = this.getCollisions(
                allItems,
                grid,
                currentCollision.newX,
                currentCollision.newY,
                currentCollision.width,
                currentCollision.height,
                [ draggedItem.id, currentCollision.id ]);

            gluedElement = this.findLargestGluedElement(nextCollisions);

            if (gluedElement != null) {
                if (movingXDir)
                    currentCollision.newX = gluedElement.x + gluedElement.width;

                else
                    currentCollision.newY = gluedElement.y + gluedElement.height;
            }
        }

        return nextCollisions;
    }

    handleCollisions( newX, newY, newWidth, newHeight, collisions ) {
        var yOffset = 0,
            xOffset = 0,
            limit,
            i,
            collision,
            minY = Number.MAX_SAFE_INTEGER,
            minX = Number.MAX_SAFE_INTEGER;

        if (collisions.length === 0)
            return;
        
        if (this._canResizeX) {
            for (i = 0, limit = collisions.length; i < limit; i++) {
                collision = collisions[i];
                minX = Math.min(minX, collision.x);
            }

            xOffset = Math.max(0, newX - minX) + newWidth - Math.max(0, minX - newX);
        }
        else {
            for (i = 0, limit = collisions.length; i < limit; i++) {
                collision = collisions[i];
                minY = Math.min(minY, collision.y);
            }

            yOffset = Math.max(0, newY - minY) + newHeight - Math.max(0, minY - newY);
        }

        for (i = 0, limit = collisions.length; i < limit; i++) {
            collision = collisions[i]
            collision.newX = collision.x + xOffset
            collision.newY = collision.y + yOffset

            this.setPreviousMovements( collision, false )
        }
    }
}