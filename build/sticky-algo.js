(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["StickyAlgo"] = factory();
	else
		root["StickyAlgo"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/StickyAlgo.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/curator-core/build/curator-core.js":
/*!*********************************************************!*\
  !*** ./node_modules/curator-core/build/curator-core.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/curator-core.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/curator-core.js":
/*!*****************************!*\
  !*** ./src/curator-core.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ "./src/helpers.js");
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./options */ "./src/options.js");
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Snapper core is responsible for handling all logic for interacting with the grid
// except:
// 1. direct ui manipulation (responsibility of the wrapper)
// 2. internal grid determination (responsibility of the algorithm)
// 3. Maintenence of state (responsibility of the wrapper)


/* harmony default export */ __webpack_exports__["default"] = ({
  getItemStyles: function getItemStyles() {
    return {
      boxSizing: 'border-box',
      position: 'absolute'
    };
  },
  getEmptyGrid: function getEmptyGrid(gridRows) {
    return Array.from(Array(gridRows), function (_) {
      return [];
    });
  },
  /// 
  /// Calculate the position of the item within the grid
  ///
  getItemPosition: function getItemPosition(gridWidth, gridHeight, gridRows, gridCols, width, height, left, top, renderMode) {
    var flex = renderMode === _options__WEBPACK_IMPORTED_MODULE_1__["renderModeType"].flex; // even though the container could change and these calculations need to rerun on that event,
    // it looks much nicer if theyre percentages on the widgets - even if it temporarily gives a 1px gap
    // and then closes the gap on mouse up, than having px values 

    if (flex) {
      return _objectSpread({}, this.getItemPositionPixels(gridWidth, gridHeight, gridRows, gridCols, width, height, left, top), this.getItemPositionPercentages(gridWidth, gridHeight, gridRows, gridCols, width, height, left, top));
    } else {
      return this.getItemPositionPixels(gridWidth, gridHeight, gridRows, gridCols, width, height, left, top);
    }
  },
  getItemPositionPercentages: function getItemPositionPercentages(gridWidth, gridHeight, gridRows, gridCols, width, height, left, top) {
    var leftPct = left / gridCols * 100;
    var topPct = top / gridRows * 100;
    var widthPct = width / gridCols * 100;
    var heightPct = height / gridRows * 100;
    var ending = '%';
    return {
      leftPct: leftPct,
      widthPct: widthPct,
      topPct: topPct,
      heightPct: heightPct,
      ending: ending
    };
  },
  getItemPositionPixels: function getItemPositionPixels(gridWidth, gridHeight, gridRows, gridCols, width, height, left, top) {
    var widthPx = gridWidth / gridCols * width;
    var heightPx = gridHeight / gridRows * height;
    var topPx = gridHeight / gridRows * top;
    var leftPx = gridWidth / gridCols * left;
    var ending = 'px';
    return {
      widthPx: widthPx,
      heightPx: heightPx,
      topPx: topPx,
      leftPx: leftPx,
      ending: ending
    };
  },
  updateMovedItem: function updateMovedItem(item, gridSizing, gridOptions) {
    var newX = item.newX,
        newY = item.newY,
        newWidth = item.newWidth,
        newHeight = item.newHeight;
    var widthPx = gridSizing.widthPx,
        heightPx = gridSizing.heightPx,
        gridRows = gridSizing.gridRows,
        gridColumns = gridSizing.gridColumns;
    var renderMode = gridOptions.renderMode;

    var movedItem = _objectSpread({}, item);

    if (!(newWidth && newHeight)) {
      // todo
      console.error("Item ".concat(key, " does not have a newWidth or newHeight value. Unable to correctly resize item"));
      return item;
    } // update the values with the set new values


    movedItem.x = newX;
    movedItem.y = newY;
    movedItem.width = newWidth;
    movedItem.height = newHeight;
    var position = this.getItemPosition(gridWidth, gridHeight, gridRows, gridColumns, movedItem.width, movedItem.height, movedItem.x, movedItem.y, renderMode);
    var styles = this.getItemPositionStyles(gridOptions, movedItem.styles, position);
    movedItem.position = _objectSpread({}, position);
    movedItem.styles = _objectSpread({}, styles);
    return movedItem;
  },
  getUpdatedMovedItems: function getUpdatedMovedItems(items, draggedItemId, newTopPx, newLeftPx, newWidthPx, newHeightPx, gridSizing, gridOptions) {
    var _this = this;

    return items.forEach(function (item) {
      var movedItem = _this.updateMovedItem(item, gridSizing, gridOptions);

      if (key === draggedItemId) {
        // todo sync the %
        var position = _objectSpread({}, movedItem.position, {
          ending: 'px',
          topPx: newTopPx,
          leftPx: newLeftPx,
          widthPx: newWidthPx,
          heightPx: newHeightPx
        });

        var styles = _this.getItemPositionStyles(gridOptions, movedItem.styles, position);

        movedItem.position = _objectSpread({}, position);
        movedItem.styles = _objectSpread({}, styles);
      }

      return movedItem;
    });
  },
  getUpdatedGridSizeItems: function getUpdatedGridSizeItems(items, gridOptions, gridSizing) {
    var _this2 = this;

    var ignoreIds = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
    var gridRows = gridOptions.gridRows,
        gridColumns = gridOptions.gridColumns,
        renderMode = gridOptions.renderMode;
    var heightPx = gridSizing.heightPx,
        widthPx = gridSizing.widthPx;
    return items.map(function (item) {
      if (ignoreIds.indexOf(item.id) > -1) return;

      var position = _this2.getItemPosition(widthPx, heightPx, gridRows, gridColumns, item.width, item.height, item.x, item.y, renderMode);

      var styles = _this2.getItemPositionStyles(gridOptions, item.styles, position);

      return _objectSpread({}, item, {
        position: position,
        styles: styles
      });
    });
  },
  getGridBoundaries: function getGridBoundaries(gridSizing) {
    var widthPx = gridSizing.widthPx,
        heightPx = gridSizing.heightPx;
    return {
      leftBoundary: 0,
      rightBoundary: widthPx,
      topBoundary: 0,
      bottomBoundary: heightPx
    };
  },
  getItemSizing: function getItemSizing(itemProps, gridSizing) {
    var widthPx = gridSizing.widthPx,
        heightPx = gridSizing.heightPx;
    var width = itemProps.width,
        height = itemProps.height;
    var pxPerColumn = widthPx / gridColumns;
    var pxPerRow = heightPx / gridRows;
    var itemWidthPx = width * pxPerColumn;
    var itemHeightPx = height * pxPerRow;
    return {
      itemWidthPx: itemWidthPx,
      itemHeightPx: itemHeightPx
    };
  },
  calculateGridMatrixSize: function calculateGridMatrixSize(items, gridOptions, gridSizing) {
    var itemsCanResizeGrid = gridOptions.itemsCanResizeGrid,
        resizeGridDirections = gridOptions.resizeGridDirections;
    var gridRows = gridSizing.gridRows,
        gridColumns = gridSizing.gridColumns;
    var canResizeX = itemsCanResizeGrid && resizeGridDirections !== 'y';
    var canResizeY = itemsCanResizeGrid && resizeGridDirections !== 'x';

    if (!(canResizeX || canResizeY)) {
      return {
        rows: gridRows,
        columns: gridColumns
      };
    }

    var rowsRequired = 0;
    var columnsRequired = 0;
    items.forEach(function (item) {
      var rightBoundary = item.x + item.width;
      var bottomBoundary = item.y + item.height;
      if (rightBoundary > columnsRequired) columnsRequired = rightBoundary;
      if (bottomBoundary > rowsRequired) rowsRequired = bottomBoundary;
    });
    return {
      rows: canResizeY ? Math.max(rowsRequired, gridRows) : gridRows,
      columns: canResizeX ? Math.max(columnsRequired, gridColumns) : gridColumns
    };
  },
  calculateGridSize: function calculateGridSize(gridSizing, gridOptions, newRowCount, newColumnCount) {
    var gridRows = gridOptions.gridRows,
        gridColumns = gridOptions.gridColumns;
    var widthPx = gridSizing.widthPx,
        heightPx = gridSizing.heightPx;
    var newGridWidth = widthPx / gridColumns * newColumnCount;
    var newGridHeight = heightPx / gridRows * newRowCount;
    return {
      newGridWidth: newGridWidth,
      newGridHeight: newGridHeight
    };
  },
  calculateMovementChange: function calculateMovementChange(itemProps, gridOptions, gridSizing, movementDetails) {
    var gridResizeable = gridOptions.itemsCanResizeGrid;
    var canResizeX = gridResizeable && gridOptions.resizeGridDirections !== 'y';
    var canResizeY = gridResizeable && gridOptions.resizeGridDirections !== 'x';
    var pxPerColumn = gridSizing.widthPx / gridOptions.gridColumns;
    var pxPerRow = gridSizing.heightPx / gridOptions.gridRows;
    var xDiff = movementDetails.currentMouseX - movementDetails.initialMouseX;
    var yDiff = movementDetails.currentMouseY - movementDetails.initialMouseY;
    var newLeftPx = movementDetails.initialLeft + xDiff;
    var newTopPx = movementDetails.initialTop + yDiff;
    var newX = Math.round(newLeftPx / pxPerColumn);
    var newY = Math.round(newTopPx / pxPerRow);

    if (newX < 0) {
      newX = 0;
    } else if (newX + 1 > gridOptions.gridColumns && !canResizeX) {
      newX = gridOptions.gridColumns - 1;
    }

    if (newY < 0) {
      newY = 0;
    } else if (newY + 1 > gridOptions.gridRows && !canResizeY) {
      newY = gridOptions.gridRows - 1;
    }

    return {
      newX: newX,
      newY: newY,
      newLeftPx: newLeftPx,
      newTopPx: newTopPx
    };
  },
  calculateResizeChange: function calculateResizeChange(itemProps, gridOptions, gridSizing, movementDetails) {
    var pxPerColumn = gridSizing.widthPx / gridOptions.gridColumns;
    var pxPerRow = gridSizing.heightPx / gridOptions.gridRows;
    var xDiff = movementDetails.currentMouseX - movementDetails.initialMouseX;
    var yDiff = movementDetails.currentMouseY - movementDetails.initialMouseY;
    var newWidthPx = movementDetails.initialWidth + xDiff;
    var newHeightPx = movementDetails.initialHeight + yDiff;
    var newWidth = Math.round(newWidthPx / pxPerColumn);
    var newHeight = Math.round(newHeightPx / pxPerRow);

    if (newWidthPx < pxPerColumn) {
      newWidth = 1;
      newWidthPx = pxPerColumn;
    }

    if (newHeightPx < pxPerRow) {
      newHeight = 1;
      newHeightPx = pxPerRow;
    }

    return {
      newWidthPx: newWidthPx,
      newHeightPx: newHeightPx,
      newWidth: newWidth,
      newHeight: newHeight,
      newLeftPx: itemProps.position.leftPx,
      newTopPx: itemProps.position.topPx
    };
  },
  calculatePositionChange: function calculatePositionChange(itemProps, state) {
    var gridSizing = state.gridSizing,
        gridOptions = state.gridOptions;
    var pxPerColumn = gridSizing.widthPx / gridOptions.gridColumns;
    var pxPerRow = gridSizing.heightPx / gridOptions.gridRows;
    var newWidthPx = pxPerColumn * itemProps.width;
    var newHeightPx = pxPerRow * itemProps.height;
    var newLeftPx = pxPerColumn * itemProps.x;
    var newTopPx = pxPerRow * itemProps.y;
    return {
      newWidthPx: newWidthPx,
      newHeightPx: newHeightPx,
      newLeftPx: newLeftPx,
      newTopPx: newTopPx,
      newX: itemProps.x,
      newY: itemProps.y,
      newWidth: itemProps.width,
      newHeight: itemProps.height
    };
  },
  getNoMovementResult: function getNoMovementResult(state, itemProps, movementChange) {
    var targetItem = _objectSpread({}, itemProps, {
      position: _objectSpread({}, itemProps.position, {
        ending: 'px',
        topPx: Math.max(0, movementChange.newTopPx),
        leftPx: Math.max(0, movementChange.newLeftPx),
        widthPx: Math.max(0, movementChange.newWidthPx),
        heightPx: Math.max(0, movementChange.newHeightPx)
      })
    });

    var updatedItems = state.items.map(function (item) {
      if (item.id == targetItem.id) {
        return targetItem;
      }

      return item;
    });
    return {
      success: true,
      // todo should this be false?
      grid: state.grid,
      updatedItems: updatedItems,
      targetItem: targetItem,
      gridSizing: state.gridSizing,
      movementChange: movementChange,
      itemsMoved: false
    };
  },
  itemHasMoved: function itemHasMoved(itemProps, movementChange) {
    return movementChange.newX != itemProps.x || movementChange.newY != itemProps.y;
  },
  itemHasResized: function itemHasResized(itemProps, movementChange) {
    return movementChange.newWidth !== itemProps.width || movementChange.newHeight !== itemProps.height;
  },
  checkProposedGridSizing: function checkProposedGridSizing(state, proposedGridColumns, proposedGridRows) {
    var gridOptions = state.gridOptions;
    var itemsCanResizeGrid = gridOptions.itemsCanResizeGrid,
        resizeGridDirections = gridOptions.resizeGridDirections;
    var canResizeX = itemsCanResizeGrid && resizeGridDirections !== _options__WEBPACK_IMPORTED_MODULE_1__["resizeOptions"].y;
    var canResizeY = itemsCanResizeGrid && resizeGridDirections !== _options__WEBPACK_IMPORTED_MODULE_1__["resizeOptions"].x;
    if (!canResizeX && proposedGridColumns !== gridOptions.gridColumns || gridOptions.gridColumns < 1) throw 'Invalid grid column proposition from algorithm';else if (!canResizeY && proposedGridRows !== gridOptions.gridRows || gridOptions.gridRows < 1) throw 'Invalid grid row proposition from algorithm';
  },
  getPlaceholderStyles: function getPlaceholderStyles(position) {
    return _objectSpread({}, _options__WEBPACK_IMPORTED_MODULE_1__["defaultPlaceholderStyles"], {
      left: "".concat(position.leftPx, "px"),
      top: "".concat(position.topPx, "px"),
      width: "".concat(position.widthPx, "px"),
      height: "".concat(position.heightPx, "px")
    });
  },
  addItemToGrid: function addItemToGrid(itemProps, state) {
    var movementChange = {
      newX: itemProps.x,
      newY: itemProps.y,
      newWidth: itemProps.width,
      newHeight: itemProps.height,
      newTopPx: itemProps.position.topPx,
      newLeftPx: itemProps.position.leftPx,
      newWidthPx: itemProps.position.widthPx,
      newHeightPx: itemProps.position.heightPx
    };
    return this.onItemMovement(itemProps, state, movementChange);
  },
  movementIsWithinBounds: function movementIsWithinBounds(movementChange, gridOptions) {
    var gridColumns = gridOptions.gridColumns,
        gridRows = gridOptions.gridRows,
        itemsCanResizeGrid = gridOptions.itemsCanResizeGrid,
        resizeGridDirections = gridOptions.resizeGridDirections;
    var newX = movementChange.newX,
        newY = movementChange.newY,
        newWidth = movementChange.newWidth,
        newHeight = movementChange.newHeight;
    var canResizeX = itemsCanResizeGrid && resizeGridDirections !== 'y';
    var canResizeY = itemsCanResizeGrid && resizeGridDirections !== 'x';
    return (canResizeX || newX + newWidth <= gridColumns) && (canResizeY || newY + newHeight <= gridRows) && newX >= 0 && newY >= 0 && newWidth > 0 && newHeight > 0;
  },
  onItemMovement: function onItemMovement(itemProps, state, movementChange) {
    var _this3 = this;

    var renderMode = state.gridOptions.renderMode;
    var gridOptions = state.gridOptions;
    var defaultResult = this.getNoMovementResult(state, itemProps, movementChange);

    var draggedItem = _objectSpread({}, itemProps);

    if (!this.movementIsWithinBounds(movementChange, gridOptions)) {
      return defaultResult;
    }

    var dragResult = gridOptions.algo.run(state, draggedItem, movementChange.newX, movementChange.newY, movementChange.newWidth, movementChange.newHeight);

    if (!dragResult.success) {
      return defaultResult;
    }

    var gridResized = dragResult.gridColumns !== gridOptions.gridColumns || dragResult.gridRows !== gridOptions.gridRows;
    var gridWidth = state.gridSizing.widthPx;
    var gridHeight = state.gridSizing.heightPx;

    if (gridResized) {
      this.checkProposedGridSizing(state, dragResult.gridColumns, dragResult.gridRows);
      var newSize = this.calculateGridSize(state.gridSizing, gridOptions, dragResult.gridRows, dragResult.gridColumns);
      gridWidth = newSize.newGridWidth;
      gridHeight = newSize.newGridHeight;
    }

    var updatedItems = Object.keys(dragResult.itemsToMove).map(function (key) {
      var movedItem = dragResult.itemsToMove[key];
      var _movedItem$meta = movedItem.meta,
          isDragging = _movedItem$meta.isDragging,
          isResizing = _movedItem$meta.isResizing;

      var position = _this3.getItemPosition(gridWidth, gridHeight, dragResult.gridRows, dragResult.gridColumns, movedItem.width, movedItem.height, movedItem.x, movedItem.y, renderMode); // without these the item will jitter


      if (movedItem.id === draggedItem.id && (isDragging || isResizing)) {
        var placeholderStyles = _this3.getPlaceholderStyles(position);

        movedItem.meta = _objectSpread({}, movedItem.meta, {
          placeholderStyles: placeholderStyles
        });
        movedItem.position = _objectSpread({}, movedItem.position, {
          ending: 'px',
          // movedItem.meta.isDragging || movedItem.meta.isResizing ? 'px' : '%',
          topPx: movementChange.newTopPx,
          leftPx: movementChange.newLeftPx,
          widthPx: movementChange.newWidthPx,
          heightPx: movementChange.newHeightPx
        });
        movedItem.styles = _this3.getItemPositionStyles(gridOptions, movedItem.styles, movedItem.position);
      } else {
        movedItem.position = position;
        movedItem.styles = _this3.getItemPositionStyles(gridOptions, movedItem.styles, position);
      }

      return movedItem;
    });
    return {
      success: dragResult.success,
      grid: state.grid,
      updatedItems: updatedItems,
      itemsMoved: Object.keys(dragResult.itemsToMove).length > 1,
      targetItem: draggedItem,
      movementChange: movementChange,
      gridSizing: {
        gridRows: dragResult.gridRows,
        gridColumns: dragResult.gridColumns,
        heightPx: gridHeight,
        widthPx: gridWidth
      }
    };
  },
  onItemPositionChanged: function onItemPositionChanged(itemProps, previousItemProps, state) {
    var positionChange = this.calculatePositionChange(itemProps, state);

    if (!this.positionHasChanged(itemProps, previousItemProps)) {
      return this.getNoMovementResult(state, previousItemProps, positionChange);
    }

    return this.onItemMovement(previousItemProps, state, positionChange);
  },
  positionHasChanged: function positionHasChanged(itemProps, previousItemProps) {
    return itemProps.x !== previousItemProps.x || itemProps.y !== previousItemProps.y || itemProps.width !== previousItemProps.width || itemProps.height !== previousItemProps.height;
  },
  onItemDragStart: function onItemDragStart(itemProps) {
    if (itemProps.glued) return {
      item: itemProps,
      success: false
    };
    var placeholderStyles = this.getPlaceholderStyles(itemProps.position);

    var item = _objectSpread({}, itemProps, {
      meta: _objectSpread({}, itemProps.meta, {
        isDragging: true,
        placeholderStyles: placeholderStyles
      })
    });

    return {
      item: item,
      success: true
    };
  },
  ///
  /// Handles all drag logic
  ///
  onItemDrag: function onItemDrag(itemProps, state, movementDetails) {
    var movementChange = _objectSpread({}, this.calculateMovementChange(itemProps, state.gridOptions, state.gridSizing, movementDetails), {
      newWidth: itemProps.width,
      newHeight: itemProps.height,
      newWidthPx: itemProps.position.widthPx,
      newHeightPx: itemProps.position.heightPx
    });

    if (!itemProps.meta.isDragging || itemProps.glued) {
      return this.getNoMovementResult(state, itemProps, movementChange);
    } else if (!this.itemHasMoved(itemProps, movementChange)) {
      return this.getNoMovementResult(state, itemProps, movementChange);
    }

    return this.onItemMovement(itemProps, state, movementChange);
  },
  onItemDragStop: function onItemDragStop(itemProps, items, gridWidth, gridHeight, gridOptions, gridSizing) {
    var width = itemProps.width,
        height = itemProps.height,
        x = itemProps.x,
        y = itemProps.y;
    var gridRows = gridOptions.gridRows,
        gridColumns = gridOptions.gridColumns,
        renderMode = gridOptions.renderMode;

    var meta = _objectSpread({}, itemProps.meta, {
      isDragging: false
    });

    var position = this.getItemPosition(gridWidth, gridHeight, gridRows, gridColumns, width, height, x, y, renderMode);
    var styles = this.getItemPositionStyles(gridOptions, itemProps.styles, position);

    var updatedItem = _objectSpread({}, itemProps, {
      position: position,
      styles: styles,
      meta: meta
    });

    return updatedItem;
  },
  onItemResizeStart: function onItemResizeStart(itemProps) {
    if (itemProps.glued) {
      return {
        item: itemProps,
        success: false
      };
    }

    var item = _objectSpread({}, itemProps, {
      meta: _objectSpread({}, itemProps.meta, {
        isResizing: true
      })
    });

    return {
      item: item,
      success: true
    };
  },
  onItemResize: function onItemResize(itemProps, state, movementDetails) {
    var movementChange = _objectSpread({}, this.calculateResizeChange(itemProps, state.gridOptions, state.gridSizing, movementDetails), {
      newX: itemProps.x,
      newY: itemProps.y,
      newLeftPx: itemProps.position.leftPx,
      newTopPx: itemProps.position.topPx
    });

    if (!itemProps.meta.isResizing || itemProps.glued) {
      return this.getNoMovementResult(state, itemProps, movementChange);
    } else if (!this.itemHasResized(itemProps, movementChange)) {
      return this.getNoMovementResult(state, itemProps, movementChange);
    }

    return this.onItemMovement(itemProps, state, movementChange);
  },
  onItemResizeStop: function onItemResizeStop(itemProps, items, gridWidth, gridHeight, gridOptions, gridSizing) {
    var width = itemProps.width,
        height = itemProps.height,
        x = itemProps.x,
        y = itemProps.y;
    var gridRows = gridOptions.gridRows,
        gridColumns = gridOptions.gridColumns,
        renderMode = gridOptions.renderMode;

    var meta = _objectSpread({}, itemProps.meta, {
      isResizing: false
    });

    var position = this.getItemPosition(gridWidth, gridHeight, gridRows, gridColumns, width, height, x, y, renderMode);
    var styles = this.getItemPositionStyles(gridOptions, itemProps.styles, position);

    var updatedItem = _objectSpread({}, itemProps, {
      position: position,
      styles: styles,
      meta: meta
    });

    return updatedItem;
  },
  ///
  /// Updates the internal 2d grid with the new item position. itemProps should contain the current values, prior to being updated
  ///
  updateGridWithItemMovement: function updateGridWithItemMovement(grid, itemProps, oldX, oldY, oldWidth, oldHeight) {
    var id = itemProps.id,
        x = itemProps.x,
        y = itemProps.y,
        width = itemProps.width,
        height = itemProps.height;
    this.ensureGridHasRow(grid, y);
    this.setGridWithValue(grid, id, oldX, oldY, oldWidth, oldHeight, undefined, false);
    this.setGridWithValue(grid, id, x, y, width, height, itemProps, true);
  },
  updateGridWithItem: function updateGridWithItem(grid, itemProps) {
    var id = itemProps.id,
        x = itemProps.x,
        y = itemProps.y,
        width = itemProps.width,
        height = itemProps.height;
    this.setGridWithValue(grid, id, x, y, width, height, itemProps, true);
  },
  removeGridItem: function removeGridItem(state, itemProps) {
    var _this4 = this;

    var grid = state.grid,
        items = state.items,
        gridOptions = state.gridOptions,
        gridSizing = state.gridSizing;
    var id = itemProps.id,
        x = itemProps.x,
        y = itemProps.y,
        width = itemProps.width,
        height = itemProps.height;
    var widthPx = gridSizing.widthPx,
        heightPx = gridSizing.heightPx;
    var renderMode = gridOptions.renderMode;
    this.ensureGridHasRow(grid, y);
    this.setGridWithValue(grid, id, x, y, width, height, undefined, true); // todo handle grid resize

    var itemsReverted = gridOptions.algo.onGridItemRemoved(state, itemProps);
    var updatedItems = items.map(function (item) {
      var revertDetails = itemsReverted.find(function (i) {
        return i.id === item.id;
      });
      if (!revertDetails) return null;
      var x = revertDetails.x,
          y = revertDetails.y,
          width = revertDetails.width,
          height = revertDetails.height;

      var movedItem = _objectSpread({}, item, {
        x: x,
        y: y,
        width: width,
        height: height
      });

      var position = _this4.getItemPosition(widthPx, heightPx, gridOptions.gridRows, gridOptions.gridColumns, width, height, x, y, renderMode);

      movedItem.position = position;
      movedItem.styles = _this4.getItemPositionStyles(gridOptions, movedItem.styles, position);
      return movedItem;
    }).filter(function (item) {
      return item != null;
    });
    return {
      updatedItems: updatedItems
    };
  },
  ensureGridHasRow: function ensureGridHasRow(grid, rowIndex) {
    if (!grid[rowIndex]) grid[rowIndex] = [];
  },
  ///
  /// Set the internal 2d grid with the value specified within the { x, x + width, y, y + height } range as long as the cell does not contain a different item already
  ///
  setGridWithValue: function setGridWithValue(grid, id, x, y, width, height, value) {
    var overwrite = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : false;

    for (var j = y; j < y + height; j++) {
      for (var i = x; i < x + width; i++) {
        var cellValue = grid[j][i];
        if (!_helpers__WEBPACK_IMPORTED_MODULE_0__["default"].isDefined(cellValue) || cellValue.id == id || overwrite) grid[j][i] = value;
      }
    }
  },
  getItemPositionStyles: function getItemPositionStyles(gridOptions, styles, position) {
    var _ref = styles || {},
        transform = _ref.transform,
        left = _ref.left,
        top = _ref.top,
        otherStyles = _objectWithoutProperties(_ref, ["transform", "left", "top"]);

    if (position.ending === '%') {
      return _objectSpread({}, otherStyles, {
        left: "".concat(position.leftPct, "%"),
        top: "".concat(position.topPct, "%"),
        width: "".concat(position.widthPct, "%"),
        height: "".concat(position.heightPct, "%")
      });
    } else if (gridOptions.enableCSS3) {
      return _objectSpread({}, otherStyles, {
        width: "".concat(position.widthPx, "px"),
        height: "".concat(position.heightPx, "px"),
        transform: "translate(".concat(position.leftPx, "px, ").concat(position.topPx, "px)")
      });
    }

    return _objectSpread({}, otherStyles, {
      left: "".concat(position.leftPx, "px"),
      top: "".concat(position.topPx, "px"),
      width: "".concat(position.widthPx, "px"),
      height: "".concat(position.heightPx, "px")
    });
  },
  ///
  /// Gets the internal grid x,y equivalent for the supplied top & left px values
  ///
  getGridXY: function getGridXY(gridSizing, topPx, leftPx) {
    var widthPx = gridSizing.widthPx,
        heightPx = gridSizing.heightPx,
        gridRows = gridSizing.gridRows,
        gridColumns = gridSizing.gridColumns;
    var x = this.getGridPosition(gridWidth, leftPx, gridColumns);
    var y = this.getGridPosition(gridHeight, topPx, gridRows);
    return {
      x: x,
      y: y
    };
  },
  getGridWH: function getGridWH(gridWidth, gridHeight, widthPx, heightPx, gridSizing) {
    var gridRows = gridSizing.gridRows,
        gridColumns = gridSizing.gridColumns;
    var width = this.getGridPosition(gridWidth, widthPx, gridColumns);
    var height = this.getGridPosition(gridHeight, heightPx, gridRows);
    return {
      width: width,
      height: height
    };
  },
  getGridPosition: function getGridPosition(gridPixels, itemPixels, matrixLevels) {
    return Math.max(1, Math.round(itemPixels / gridPixels * matrixLevels));
  },
  getBoundaryLimitedSizing: function getBoundaryLimitedSizing(currentLeftPx, currentTopPx, currentWidthPx, currentHeightPx, boundaries, gridOptions) {
    var resizeGridDirections = gridOptions.resizeGridDirections,
        itemsCanResizeGrid = gridOptions.itemsCanResizeGrid;
    var rightBoundary = boundaries.rightBoundary,
        bottomBoundary = boundaries.bottomBoundary;
    var xResizeable = itemsCanResizeGrid && resizeGridDirections !== _options__WEBPACK_IMPORTED_MODULE_1__["resizeOptions"].y;
    var yResizeable = itemsCanResizeGrid && resizeGridDirections !== _options__WEBPACK_IMPORTED_MODULE_1__["resizeOptions"].x;
    var widthPx = xResizeable ? currentWidthPx : Math.min(currentWidthPx, rightBoundary - currentLeftPx);
    var heightPx = yResizeable ? currentHeightPx : Math.min(currentHeightPx, bottomBoundary - currentTopPx);
    return {
      widthPx: widthPx,
      heightPx: heightPx
    };
  }
});

/***/ }),

/***/ "./src/helpers.js":
/*!************************!*\
  !*** ./src/helpers.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var isDefined = function isDefined(item) {
  return typeof item !== 'undefined' && item != null;
};

var objIsInArray = function objIsInArray(array, obj, key) {
  var objKeyValue = obj[key];
  return array.find(function (item) {
    return item[key] === objKeyValue;
  }) != null;
};

/* harmony default export */ __webpack_exports__["default"] = ({
  isDefined: isDefined,
  objIsInArray: objIsInArray
});

/***/ }),

/***/ "./src/options.js":
/*!************************!*\
  !*** ./src/options.js ***!
  \************************/
/*! exports provided: renderModeType, resizeOptions, defaultItemOptions, defaultGridOptions, defaultPlaceholderStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderModeType", function() { return renderModeType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resizeOptions", function() { return resizeOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultItemOptions", function() { return defaultItemOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultGridOptions", function() { return defaultGridOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultPlaceholderStyles", function() { return defaultPlaceholderStyles; });
var renderModeType = {
  // flex = percentages
  flex: 'flex',
  // fixed = px
  fixed: 'fixed'
};
var resizeOptions = {
  // boxes are fixed width
  none: 'none',
  // resize x direction only
  x: 'x',
  // resize y direction 
  y: 'y',
  // resize both
  both: 'both'
};
var defaultItemOptions = {
  x: 0,
  y: 0,
  width: 1,
  height: 1,
  className: 'grid-item',
  glued: false,
  // not yet supported but is partially done in the algo, do not alter
  visible: true,
  displayResize: true,
  position: {
    topPx: 0,
    leftPx: 0,
    topPct: 0,
    leftPct: 0,
    widthPx: 0,
    heightPx: 0,
    widthPct: 0,
    heightPct: 0,
    ending: 'px'
  },
  meta: {
    isDragging: false,
    isResizing: false
  }
};
var defaultPlaceholderStyles = {
  position: 'absolute',
  border: '2px dashed grey',
  zIndex: -1
};
var defaultGridOptions = {
  gridColumns: 12,
  gridRows: 12,
  width: '100%',
  height: '100%',
  className: 'curator-grid',
  // whether to render the grid items using percentages or pixel values
  renderMode: renderModeType.flex,
  // when a dragged element pushes others out of the way, they may return to their 
  // old spot if dragging continues
  stickyElements: true,
  // show the grid lines: not currently supported
  //showGrid: false,
  // can resize the grid by dragging elements
  itemsCanResizeGrid: true,
  // which directions the grid can resize in (either dragging handle or items)
  resizeGridDirections: resizeOptions.y,
  // move items using transitions
  useTransition: true,
  // specific options for transitions
  transitionDuration: 600,
  // On an individual transition completed for an element (multiple fires when multiple elements moved)
  onTransitionComplete: function onTransitionComplete(element, details, eventIfFired) {},
  // On all transitions completed for a given element
  onAllTransitionsComplete: function onAllTransitionsComplete(element, details, eventIfFired) {},
  // class name for the resize handle
  resizeClassName: 'resize-handle',
  enableCSS3: true,
  algo: null
};


/***/ })

/******/ });
});
//# sourceMappingURL=curator-core.js.map

/***/ }),

/***/ "./node_modules/curator-core/build/helpers.js":
/*!****************************************************!*\
  !*** ./node_modules/curator-core/build/helpers.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/helpers.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/helpers.js":
/*!************************!*\
  !*** ./src/helpers.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var isDefined = function isDefined(item) {
  return typeof item !== 'undefined' && item != null;
};

var objIsInArray = function objIsInArray(array, obj, key) {
  var objKeyValue = obj[key];
  return array.find(function (item) {
    return item[key] === objKeyValue;
  }) != null;
};

/* harmony default export */ __webpack_exports__["default"] = ({
  isDefined: isDefined,
  objIsInArray: objIsInArray
});

/***/ })

/******/ });
});
//# sourceMappingURL=helpers.js.map

/***/ }),

/***/ "./node_modules/curator-core/build/options.js":
/*!****************************************************!*\
  !*** ./node_modules/curator-core/build/options.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/options.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/options.js":
/*!************************!*\
  !*** ./src/options.js ***!
  \************************/
/*! exports provided: renderModeType, resizeOptions, defaultItemOptions, defaultGridOptions, defaultPlaceholderStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderModeType", function() { return renderModeType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resizeOptions", function() { return resizeOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultItemOptions", function() { return defaultItemOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultGridOptions", function() { return defaultGridOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultPlaceholderStyles", function() { return defaultPlaceholderStyles; });
var renderModeType = {
  // flex = percentages
  flex: 'flex',
  // fixed = px
  fixed: 'fixed'
};
var resizeOptions = {
  // boxes are fixed width
  none: 'none',
  // resize x direction only
  x: 'x',
  // resize y direction 
  y: 'y',
  // resize both
  both: 'both'
};
var defaultItemOptions = {
  x: 0,
  y: 0,
  width: 1,
  height: 1,
  className: 'grid-item',
  glued: false,
  // not yet supported but is partially done in the algo, do not alter
  visible: true,
  displayResize: true,
  position: {
    topPx: 0,
    leftPx: 0,
    topPct: 0,
    leftPct: 0,
    widthPx: 0,
    heightPx: 0,
    widthPct: 0,
    heightPct: 0,
    ending: 'px'
  },
  meta: {
    isDragging: false,
    isResizing: false
  }
};
var defaultPlaceholderStyles = {
  position: 'absolute',
  border: '2px dashed grey',
  zIndex: -1
};
var defaultGridOptions = {
  gridColumns: 12,
  gridRows: 12,
  width: '100%',
  height: '100%',
  className: 'curator-grid',
  // whether to render the grid items using percentages or pixel values
  renderMode: renderModeType.flex,
  // when a dragged element pushes others out of the way, they may return to their 
  // old spot if dragging continues
  stickyElements: true,
  // show the grid lines: not currently supported
  //showGrid: false,
  // can resize the grid by dragging elements
  itemsCanResizeGrid: true,
  // which directions the grid can resize in (either dragging handle or items)
  resizeGridDirections: resizeOptions.y,
  // move items using transitions
  useTransition: true,
  // specific options for transitions
  transitionDuration: 600,
  // On an individual transition completed for an element (multiple fires when multiple elements moved)
  onTransitionComplete: function onTransitionComplete(element, details, eventIfFired) {},
  // On all transitions completed for a given element
  onAllTransitionsComplete: function onAllTransitionsComplete(element, details, eventIfFired) {},
  // class name for the resize handle
  resizeClassName: 'resize-handle',
  enableCSS3: true,
  algo: null
};


/***/ })

/******/ });
});
//# sourceMappingURL=options.js.map

/***/ }),

/***/ "./node_modules/curator-core/index.js":
/*!********************************************!*\
  !*** ./node_modules/curator-core/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const options = __webpack_require__(/*! ./build/options */ "./node_modules/curator-core/build/options.js")

module.exports = __webpack_require__(/*! ./build/curator-core */ "./node_modules/curator-core/build/curator-core.js").default
module.exports.helpers = __webpack_require__(/*! ./build/helpers */ "./node_modules/curator-core/build/helpers.js").default
module.exports.defaultGridOptions = options.defaultGridOptions
module.exports.defaultItemOptions = options.defaultItemOptions
module.exports.renderModeType = options.renderModeType
module.exports.resizeOptions = options.resizeOptions
module.exports.defaultPlaceholderStyles = options.defaultPlaceholderStyles

/***/ }),

/***/ "./src/StickyAlgo.js":
/*!***************************!*\
  !*** ./src/StickyAlgo.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return StickyAlgo; });
/* harmony import */ var curator_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! curator-core */ "./node_modules/curator-core/index.js");
/* harmony import */ var curator_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(curator_core__WEBPACK_IMPORTED_MODULE_0__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var StickyAlgo =
/*#__PURE__*/
function () {
  function StickyAlgo() {
    _classCallCheck(this, StickyAlgo);
  }

  _createClass(StickyAlgo, [{
    key: "getItemInitialData",
    value: function getItemInitialData(itemProps) {
      return {
        previousX: itemProps.x,
        previousY: itemProps.y,
        previousWidth: itemProps.width,
        previousHeight: itemProps.height
      };
    }
  }, {
    key: "run",
    value: function run(state, itemProps, newX, newY, newWidth, newHeight) {
      var _this = this;

      var grid = state.grid,
          gridOptions = state.gridOptions,
          items = state.items;

      var item = _objectSpread({}, itemProps);

      var allItems = {};
      items.forEach(function (i) {
        return allItems[i.id] = i;
      });

      this._setOptions(state);

      var result = this.placeItem(this._grid, allItems, item, newX, newY, newWidth, newHeight);

      if (result == null) {
        return {
          success: false
        };
      }

      var updateItems = {};
      result.forEach(function (itm) {
        var i = allItems[itm.id];

        var clone = _objectSpread({}, i);

        _this._updateItem(clone, itm.newX, itm.newY, itm.newWidth, itm.newHeight);

        curator_core__WEBPACK_IMPORTED_MODULE_0___default.a.updateGridWithItemMovement(_this._grid, clone, i.x, i.y, i.width, i.height);

        _this._registerItemMovement(itm.newX, itm.newY, itm.newWidth, itm.newHeight);

        updateItems[i.id] = clone;
      }); // remove any previously registered movements resulting from collisions

      this.setPreviousMovements(updateItems[item.id]);
      var revertedItems = this.revertPreviousMovements(_objectSpread({}, allItems, updateItems));
      revertedItems.forEach(function (itm) {
        updateItems[itm.id] = itm;

        _this._registerItemMovement(itm.x, itm.y, itm.width, itm.height);
      });
      this.printGrid();
      return {
        success: true,
        itemsToMove: updateItems,
        gridRows: this._gridRows,
        gridColumns: this._gridColumns
      };
    }
  }, {
    key: "onGridItemRemoved",
    value: function onGridItemRemoved(state, itemProps) {
      var allItems = {};

      this._setOptions(state);

      state.items.forEach(function (i) {
        return allItems[i.id] = i;
      });
      var revertedItems = this.revertPreviousMovements(allItems);
      return revertedItems;
    }
  }, {
    key: "printGrid",
    value: function printGrid() {
      if (!window.DEBUG_ALGO) return;
      console.clear();

      for (var y = 0; y < this._grid.length; y++) {
        var row = this._grid[y];

        if (!row) {
          console.log(' ');
          continue;
        }

        var line = '';

        for (var x = 0; x < row.length; x++) {
          line += row[x] ? row[x].id.toString().padEnd(3) : '   ';
        }

        console.log(line);
      }
    }
  }, {
    key: "placeItem",
    value: function placeItem(grid, allitems, item, x, y, width, height) {
      var _this2 = this;

      var collisions = this._getCollisions(allitems, grid, x, y, width, height, [item.id]);

      var lowestGluedEl = this._findLargestGluedElement(collisions);

      if (lowestGluedEl != null) return this.placeItem(grid, allitems, item, x, lowestGluedEl.y + lowestGluedEl.height, width, height);
      item.newX = x;
      item.newY = y;
      item.newWidth = width;
      item.newHeight = height;
      var movedItems = [item];
      collisions.forEach(function (col) {
        // expects current settings of always having a resize direciton
        var newX = _this2._canResizeX && !_this2._canResizeY ? col.x + width : col.x;
        var newY = _this2._canResizeY ? Math.max(col.y, y) + height : col.y;

        var result = _this2.placeItem(grid, allitems, col, newX, newY, col.width, col.height);

        if (result == null) return null;
        movedItems = movedItems.concat(result);
      });
      return movedItems;
    }
  }, {
    key: "addItemToGrid",
    value: function addItemToGrid(grid, gridOptions, gridSizing, items, itemProps) {
      var allItems = [].concat(_toConsumableArray(items), [itemProps]);
      var result = this.run(grid, gridOptions, gridSizing, allItems, itemProps, itemProps.x, itemProps.y, itemProps.width, itemProps.height);
      return result;
    }
  }, {
    key: "setPreviousMovements",
    value: function setPreviousMovements(item) {
      item.algoData.previousX = item.x;
      item.algoData.previousY = item.y;
    }
  }, {
    key: "revertPreviousMovements",
    value: function revertPreviousMovements(allItems) {
      var _this3 = this;

      var itemsOfInterest = Object.keys(allItems).map(function (key) {
        return allItems[key];
      }).filter(function (i) {
        return i.x !== i.algoData.previousX || i.y !== i.algoData.previousY;
      }).sort(function (i1, i2) {
        return i1.y - i2.y || i1.x - i2.x;
      });
      var revertedItems = [];
      itemsOfInterest.forEach(function (item) {
        var _item$algoData = item.algoData,
            previousX = _item$algoData.previousX,
            previousY = _item$algoData.previousY;

        if (_this3._getCloserPosition(item, previousX, previousY)) {
          var x = item.x,
              y = item.y;

          _this3._updateItem(item, item.newX, item.newY, item.width, item.height);

          curator_core__WEBPACK_IMPORTED_MODULE_0___default.a.updateGridWithItemMovement(_this3._grid, item, x, y, item.width, item.height);
          revertedItems.push(item);
        }
      });
      return revertedItems;
    }
  }, {
    key: "_setOptions",
    value: function _setOptions(state) {
      var gridOptions = state.gridOptions,
          grid = state.grid;
      var itemsCanResizeGrid = gridOptions.itemsCanResizeGrid,
          resizeGridDirections = gridOptions.resizeGridDirections,
          gridRows = gridOptions.gridRows,
          gridColumns = gridOptions.gridColumns;
      this._gridOptions = gridOptions;
      this._canResizeX = itemsCanResizeGrid && resizeGridDirections !== 'y';
      this._canResizeY = itemsCanResizeGrid && resizeGridDirections !== 'x';
      this._gridRows = gridRows;
      this._gridColumns = gridColumns;
      this._grid = grid;
    }
  }, {
    key: "_updateItem",
    value: function _updateItem(item, newX, newY, newWidth, newHeight) {
      item.x = newX;
      item.y = newY;
      item.width = newWidth;
      item.height = newHeight;
    }
  }, {
    key: "_registerItemMovement",
    value: function _registerItemMovement(x, y, width, height) {
      if (this._canResizeY) {
        this._gridRows = Math.max(this._gridRows, y + height);
      }

      if (this._canResizeX) {
        this._gridColumns = Math.max(this._gridColumns, x + width);
      }
    }
  }, {
    key: "_getCloserPosition",
    value: function _getCloserPosition(item, x, y) {
      var diffY = item.y - y;
      var diffX = item.x - x;
      var yIterator = Math.sign(diffY);
      var xIterator = Math.sign(diffX);
      var newX = x;
      var newY = y;
      if (diffX + diffY === 0) return false;

      while (true) {
        if (this._canFit(newX, newY, item.width, item.height, item.id)) {
          item.newX = newX;
          item.newY = newY;
          return true;
        } // safe as Math.sign(0) === 0


        if (newX !== item.x) newX += xIterator;
        if (newY !== item.y) newY += yIterator;
        if (newX === item.x) xIterator = 0;
        if (newY === item.y) yIterator = 0;
        if (xIterator + yIterator === 0) return false;
      }
    }
  }, {
    key: "_canFit",
    value: function _canFit(x, y, width, height, id) {
      var _this$_gridOptions = this._gridOptions,
          gridColumns = _this$_gridOptions.gridColumns,
          gridRows = _this$_gridOptions.gridRows;
      if (x + width > gridColumns && !this._canResizeX || x < 0 || y + height > gridRows && !this._canResizeY || y < 0) return false;

      for (var j = y; j < y + height; j++) {
        var block = this._grid[j];

        if (!block) {
          this._grid[j] = [];
          continue;
        }

        for (var i = x; i < x + width; i++) {
          if (block[i] && block[i].id != id) return false;
        }
      }

      return true;
    }
  }, {
    key: "_findLargestGluedElement",
    value: function _findLargestGluedElement(items) {
      var gluedElements = items.filter(function (i) {
        return i.glued;
      });
      var gluedItemsCount = gluedElements.length;
      if (gluedItemsCount === 0) return null;
      var largestEl = gluedElements[0];

      for (var i = 1; i < gluedItemsCount; i++) {
        var iteratedItem = gluedElements[i];

        if (this._canResizeX) {
          largestEl = largestEl.width + largestEl.x > iteratedItem.width + iteratedItem.x ? largestEl : iteratedItem;
        } else {
          largestEl = largestEl.height + largestEl.y > iteratedItem.height + iteratedItem.y ? largestEl : iteratedItem;
        }
      }

      return largestEl;
    }
  }, {
    key: "_getCollisions",
    value: function _getCollisions(allItems, grid, newX, newY, width, height, whitelistIds) {
      var yLimit = newY + height;
      var xLimit = newX + width;
      var collisions = [];

      for (var y = newY; y < yLimit; y++) {
        grid[y] = grid[y] || [];

        for (var x = newX; x < xLimit; x++) {
          var gridItem = grid[y][x];
          if (!gridItem) continue;
          if (whitelistIds.indexOf(gridItem.id) == -1 && gridItem.visible && !curator_core__WEBPACK_IMPORTED_MODULE_0__["helpers"].objIsInArray(collisions, gridItem, 'id')) collisions.push(gridItem);
          var correctedX = gridItem.x + gridItem.width - 1;
          if (correctedX < x) throw 'x invalid for grid item - incorrectly placed in grid';
          x = correctedX;
        }
      }

      return collisions;
    }
  }]);

  return StickyAlgo;
}();



/***/ })

/******/ });
});
//# sourceMappingURL=sticky-algo.js.map