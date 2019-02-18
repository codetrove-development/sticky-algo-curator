(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["StickyAlgo"] = factory();
	else
		root["StickyAlgo"] = factory();
})(window, function() {
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
})(window, function() {
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

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

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
  getItemClasses: function getItemClasses() {
    var itemOptions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _options__WEBPACK_IMPORTED_MODULE_1__["defaultItemOptions"];

    var classes = _toConsumableArray(itemOptions.classes).concat([itemOptions.itemClassName]);

    if (itemOptions.glued) {
      classes.push('snapper-glued');
    }

    return classes;
  },
  getEmptyGrid: function getEmptyGrid(gridRows) {
    var grid = [];

    for (var r = 0; r < gridRows; r++) {
      grid.push([]);
    }

    return grid;
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
    var pxPerColFloored = Math.floor(gridWidth / gridCols);
    var pxPerRowFloored = Math.floor(gridHeight / gridRows);
    var colRemainderPx = gridWidth - pxPerColFloored * gridCols;
    var rowRemainderPx = gridHeight - pxPerRowFloored * gridRows; // todo check if need to * by required precision and floor to avoid decimal calc

    var widthPxOffset = 49 / gridWidth / 100;
    var heightPxOffset = 49 / gridHeight / 100;
    var extraLeft = Math.min(left, colRemainderPx);
    var extraWidth = Math.min(width + left, colRemainderPx) - extraLeft;
    var extraTop = Math.min(top, rowRemainderPx);
    var extraHeight = Math.min(height + top, rowRemainderPx) - extraTop; // shift it by 2/5 px percent to always count for rounding errors
    // could do anything below 1/2 but this is sufficient as 
    // (40 / x = 0.01% limit => pxLimit = 40 / 0.01 = 4000px

    var leftPct = (left * pxPerColFloored + extraLeft) * 100 / gridWidth + widthPxOffset;
    var widthPct = (width * pxPerColFloored + extraWidth) * 100 / gridWidth + widthPxOffset;
    var topPct = (top * pxPerRowFloored + extraTop) * 100 / gridHeight + heightPxOffset;
    var heightPct = (height * pxPerRowFloored + extraHeight) * 100 / gridHeight + heightPxOffset;
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
    var pxPerColFloored = Math.floor(gridWidth / gridCols);
    var pxPerRowFloored = Math.floor(gridHeight / gridRows);
    var colRemainderPx = gridWidth - pxPerColFloored * gridCols;
    var rowRemainderPx = gridHeight - pxPerRowFloored * gridRows;
    var extraLeft = Math.min(left, colRemainderPx);
    var extraWidth = Math.min(width + left, colRemainderPx) - extraLeft;
    var extraTop = Math.min(top, rowRemainderPx);
    var extraHeight = Math.min(height + top, rowRemainderPx) - extraTop;
    var widthPx = pxPerColFloored * width + extraWidth;
    var heightPx = pxPerRowFloored * height + extraHeight;
    var topPx = pxPerRowFloored * top + extraTop;
    var leftPx = pxPerColFloored * left + extraLeft;
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
    var gridWidth = gridSizing.gridWidth,
        gridHeight = gridSizing.gridHeight,
        gridRows = gridSizing.gridRows,
        gridColumns = gridSizing.gridColumns;
    var renderMode = gridOptions.renderMode;

    var movedItem = _objectSpread({}, item);

    if (!(newWidth && newHeight)) {
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
  updateGridWithMovedItems: function updateGridWithMovedItems(grid, items) {
    for (var _key in items) {
      var movedItem = items[_key];
      this.updateGridWithItemMovement(grid, movedItem, movedItem.x, movedItem.y, movedItem.width, movedItem.height);
    }
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
    var renderMode = gridOptions.renderMode;
    var gridRows = gridSizing.gridRows,
        gridColumns = gridSizing.gridColumns,
        gridHeight = gridSizing.gridHeight,
        gridWidth = gridSizing.gridWidth;
    return items.map(function (item) {
      if (ignoreIds.indexOf(item.id) > -1) return;

      var position = _this2.getItemPosition(gridWidth, gridHeight, gridRows, gridColumns, item.width, item.height, item.x, item.y, renderMode);

      var styles = _this2.getItemPositionStyles(gridOptions, item.styles, position);

      return _objectSpread({}, item, {
        position: position,
        styles: styles
      });
    });
  },
  getGridBoundaries: function getGridBoundaries(gridSizing) {
    var gridWidth = gridSizing.gridWidth,
        gridHeight = gridSizing.gridHeight;
    return {
      leftBoundary: 0,
      rightBoundary: gridWidth,
      topBoundary: 0,
      bottomBoundary: gridHeight
    };
  },
  getItemSizing: function getItemSizing(itemProps, gridSizing) {
    var gridWidth = gridSizing.gridWidth,
        gridHeight = gridSizing.gridHeight;
    var width = itemProps.width,
        height = itemProps.height;
    var pxPerColumn = gridWidth / gridColumns;
    var pxPerRow = gridHeight / gridRows;
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
    return {
      newWidthPx: Math.round(pxPerColumn * itemProps.width),
      newHeightPx: Math.round(pxPerRow * itemProps.height),
      newLeftPx: Math.round(pxPerColumn * itemProps.x),
      newTopPx: Math.round(pxPerRow * itemProps.y),
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
        topPx: movementChange.newTopPx,
        // todo this is wrong
        leftPx: movementChange.newLeftPx,
        widthPx: movementChange.newWidthPx,
        heightPx: movementChange.newHeightPx
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
    var canResizeX = gridOptions.resizeGridDirections !== _options__WEBPACK_IMPORTED_MODULE_1__["resizeOptions"].y;
    var canResizeY = gridOptions.resizeGridDirections !== _options__WEBPACK_IMPORTED_MODULE_1__["resizeOptions"].x;
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
    return (canResizeX || newX + newWidth <= gridColumns) && (canResizeY || newY + newHeight <= gridRows);
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

      var position = _this3.getItemPosition(gridWidth, gridHeight, dragResult.gridRows, dragResult.gridColumns, movedItem.width, movedItem.height, movedItem.x, movedItem.y, renderMode); // without these the item will jitter


      if (movedItem.id === draggedItem.id) {
        var placeholderStyles = _this3.getPlaceholderStyles(position);

        movedItem.meta = _objectSpread({}, movedItem.meta, {
          placeholderStyles: placeholderStyles
        });
        movedItem.position = _objectSpread({}, movedItem.position, {
          ending: 'px',
          topPx: movementChange.newTopPx,
          leftPx: movementChange.newLeftPx,
          widthPx: movementChange.newWidthPx,
          heightPx: movementChange.newHeightPx
        });
        movedItem.styles = _this3.getItemPositionStyles(gridOptions, movedItem.styles, movedItem.position);
        console.log(movedItem.styles);
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
  removeGridItem: function removeGridItem(gridItems, grid, itemProps, gridOptions, gridSizing) {
    var _this4 = this;

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

    var itemsReverted = gridOptions.algo.onGridItemRemoved(itemProps, grid, gridOptions);
    var updatedItems = gridItems.map(function (item) {
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
    var gridWidth = gridSizing.gridWidth,
        gridHeight = gridSizing.gridHeight,
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
  classes: [],
  glued: false,
  // not yet supported but is partially done in the algo, do not alter
  visible: true,
  canResize: true,
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
    isDragging: false
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
  itemClassName: 'grid-item',
  // any extra classes to add to the element
  classes: [],
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
  resizeClassName: 'snap-resize-handle',
  enableCSS3: true,
  algorithm: null
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
})(window, function() {
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
})(window, function() {
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
  classes: [],
  glued: false,
  // not yet supported but is partially done in the algo, do not alter
  visible: true,
  canResize: true,
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
    isDragging: false
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
  itemClassName: 'grid-item',
  // any extra classes to add to the element
  classes: [],
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
  resizeClassName: 'snap-resize-handle',
  enableCSS3: true,
  algorithm: null
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
    key: "updatedItem",
    value: function updatedItem(item, newX, newY, newWidth, newHeight) {
      item.x = newX;
      item.y = newY;
      item.width = newWidth;
      item.height = newHeight;
      item.newX = newX;
      item.newY = newY;
      item.newWidth = newWidth;
      item.newHeight = newHeight;
    }
  }, {
    key: "onGridItemRemoved",
    value: function onGridItemRemoved(item, grid, gridOptions) {
      var _item$algoData = item.algoData,
          previousX = _item$algoData.previousX,
          previousY = _item$algoData.previousY;
      var revertedItems = this.revertPreviousMovements(item, previousX, previousY, grid, gridOptions);
      return revertedItems;
    }
  }, {
    key: "run",
    value: function run(state, itemProps, newX, newY, newWidth, newHeight) {
      var _this = this;

      var grid = state.grid,
          gridOptions = state.gridOptions,
          items = state.items;
      var gridColumns = gridOptions.gridColumns,
          gridRows = gridOptions.gridRows;

      var item = _objectSpread({}, itemProps);

      var allItems = {};
      state.items.forEach(function (i) {
        return allItems[i.id] = i;
      }); // get any collisions for this movement

      var collisions = this.getCollisions(allItems, grid, newX, newY, newWidth, newHeight, [itemProps.id]); // hitting a glued element stops any movement possibility

      if (this.hasHitGluedElement(collisions)) return {
        success: false // get a copy of the item

      };
      this.updatedItem(item, newX, newY, newWidth, newHeight); // ok, this item can go where it wants. update the grid

      curator_core__WEBPACK_IMPORTED_MODULE_0___default.a.updateGridWithItemMovement(grid, item, itemProps.x, itemProps.y, itemProps.width, itemProps.height); // remove any previously registered movements resulting from collisions

      this.setPreviousMovements(item, true); // set the resize directions as according to the users supplied options

      this._canResizeX = gridOptions.itemsCanResizeGrid && gridOptions.resizeGridDirections !== 'y';
      this._canResizeY = gridOptions.itemsCanResizeGrid && gridOptions.resizeGridDirections !== 'x'; // run the algo

      var _this$getMoveDetails = this.getMoveDetails(allItems, grid, item, newX, newY, newWidth, newHeight, collisions),
          itemsToMove = _this$getMoveDetails.itemsToMove,
          maxRows = _this$getMoveDetails.maxRows,
          maxCols = _this$getMoveDetails.maxCols;

      var updatedItems = {}; // for each updated item, update the grid and add it to the list of updated items

      itemsToMove.forEach(function (itm) {
        var i = allItems[itm.id];

        var clone = _objectSpread({}, i);

        _this.updatedItem(clone, itm.newX, itm.newY, itm.width, itm.height);

        curator_core__WEBPACK_IMPORTED_MODULE_0___default.a.updateGridWithItemMovement(grid, clone, i.x, i.y, i.width, i.height);
        updatedItems[i.id] = clone;
      }); // add the currently moved item to the update list

      updatedItems[item.id] = item; // try to move any items back to where they were if possible

      var revertedItems = this.revertPreviousMovements(item, itemProps.x, itemProps.y, grid, gridOptions, items, collisions); // add all reverted items to the update list

      revertedItems.forEach(function (i) {
        var x = i.x,
            y = i.y;
        updatedItems[i.id] = _objectSpread({}, allItems[i.id], {
          x: x,
          y: y
        });
      });
      return {
        success: true,
        itemsToMove: updatedItems,
        collisionCount: collisions.length,
        items: items,
        gridRows: Math.max(maxRows, gridOptions.gridRows, newY + newHeight),
        gridColumns: Math.max(maxCols, gridOptions.gridColumns, newX + newWidth),
        item: item
      };
    }
  }, {
    key: "addItemToGrid",
    value: function addItemToGrid(grid, gridOptions, gridSizing, items, itemProps) {
      var result = this.run(grid, gridOptions, gridSizing, items, itemProps, itemProps.x, itemProps.y, itemProps.width, itemProps.height);
      return result;
    }
  }, {
    key: "setPreviousMovements",
    value: function setPreviousMovements(item, force) {
      if (force || item.algoData.previousX === item.x && item.algoData.previousY === item.y) {
        item.algoData.previousX = item.x;
        item.algoData.previousY = item.y;
      }
    }
  }, {
    key: "revertPreviousMovements",
    value: function revertPreviousMovements(movedItem, previousX, previousY, grid, gridOptions) {
      var resizeGridDirections = gridOptions.resizeGridDirections;

      if (resizeGridDirections === 'y') {
        return this.revertInYDirection(movedItem, previousX, previousY, grid, gridOptions);
      } else {}
    }
  }, {
    key: "revertInYDirection",
    value: function revertInYDirection(movedItem, previousX, previousY, grid, gridOptions) {
      var gridRows = gridOptions.gridRows,
          gridColumns = gridOptions.gridColumns;
      var xLimit = previousX + movedItem.width;
      var revertedItems = [];

      for (var y = previousY + movedItem.height; y < gridRows; y++) {
        if (!grid[y]) return revertedItems;

        for (var x = previousX; x < xLimit; x++) {
          var item = grid[y][x];
          if (!curator_core__WEBPACK_IMPORTED_MODULE_0__["helpers"].isDefined(item)) continue;

          if (this._getCloserPosition(item, item.algoData.previousX, item.algoData.previousY, grid, gridOptions)) {
            var _x = item.x,
                _y = item.y;
            item.x = item.newX;
            item.y = item.newY;
            curator_core__WEBPACK_IMPORTED_MODULE_0___default.a.updateGridWithItemMovement(grid, item, _x, _y, item.width, item.height);
            revertedItems.push(item);
          }

          if (item.width + item.x >= xLimit) {
            x = xLimit;
            y = item.y + item.height - 1;
          } else {
            x = item.x + item.width;
          }
        }
      }

      return revertedItems;
    }
  }, {
    key: "revertPreviousMovementsOld",
    value: function revertPreviousMovementsOld(movedItem, grid, gridOptions, items, collisions) {
      //let collisionCount = collisions.length
      var movedIds = [];
      var revertedItems = []; // if the user does not want sticky elements, then
      // ignore this request 

      if (!gridOptions.stickyElements) return; // sort by x first then y. may need to change this to 
      // see what direction the dragged item is moving in

      var previousMovements = items.filter(function (item) {
        return (item.algoData.previousX != item.x || item.algoData.previousY != item.y) && item.id !== movedItem.id;
      }).sort(function (m1, m2) {
        var xDiff = m1.x - m2.x;
        if (xDiff !== 0) return xDiff;
        return m1.y - m2.y;
      });

      for (var i = 0; i < previousMovements.length; i++) {
        var item = previousMovements[i];
        var _item$algoData2 = item.algoData,
            previousX = _item$algoData2.previousX,
            previousY = _item$algoData2.previousY;

        if (this._getCloserPosition(item, previousX, previousY, grid, gridOptions)) {
          var x = item.x,
              y = item.y;
          item.x = item.newX;
          item.y = item.newY;
          curator_core__WEBPACK_IMPORTED_MODULE_0___default.a.updateGridWithItemMovement(grid, item, x, y, item.width, item.height);
          revertedItems[item.id] = item;

          if (previousX === item.x && previousY === item.y) {
            movedIds.push(item._id);
          }
        }
      }

      return {
        revertedItems: revertedItems //unmovedCollisions: collisions,

      };
    }
  }, {
    key: "_getCloserPosition",
    value: function _getCloserPosition(item, x, y, grid, gridOptions) {
      var diffY = item.y - y;
      var diffX = item.x - x;
      var yIterator = Math.sign(diffY);
      var xIterator = Math.sign(diffX);
      var newX = x;
      var newY = y;
      if (diffX + diffY === 0) return false;

      while (true) {
        if (this.canFit(newX, newY, item.width, item.height, item.id, grid, gridOptions)) {
          item.newX = newX;
          item.newY = newY;
          return true;
        } // safe as Math.sign(0) === 0


        if (newX !== item.x) newX += xIterator;
        if (newY !== item.y) newY += yIterator;
        if (newX === item.x) xIterator = 0;
        if (newY === item.y) yIterator = 0;
        if (xIterator + yIterator === 0) return false;else if (newX > gridOptions.gridColumns || newX < 0 || newY > gridOptions.gridRows || newY < 0) return false;
      }
    }
  }, {
    key: "canFit",
    value: function canFit(x, y, width, height, id, grid, gridOptions) {
      var gridColumns = gridOptions.gridColumns,
          gridRows = gridOptions.gridRows;
      if (x + width > gridColumns || x < 0 || y + height > gridRows || y < 0) return false;

      for (var j = y; j < y + height; j++) {
        var block = grid[j];

        if (!curator_core__WEBPACK_IMPORTED_MODULE_0__["helpers"].isDefined(block)) {
          grid[j] = [];
          continue;
        }

        for (var i = x; i < x + width; i++) {
          if (curator_core__WEBPACK_IMPORTED_MODULE_0__["helpers"].isDefined(block[i]) && block[i].id != id) return false;
        }
      }

      return true;
    }
  }, {
    key: "hasHitGluedElement",
    value: function hasHitGluedElement(items) {
      return this.findGluedElement(items) != null;
    }
  }, {
    key: "findGluedElement",
    value: function findGluedElement(items) {
      return items.find(function (item) {
        return item.glued;
      });
    }
  }, {
    key: "findLargestGluedElement",
    value: function findLargestGluedElement(items) {
      var gluedElements = items.filter(function (i) {
        return i.glued;
      });
      var gluedItemsCount = gluedElements.length;
      if (gluedItemsCount === 0) return null;
      var largestEl = gluedElements[0];

      for (var i = 1; i < gluedItemsCount; i++) {
        var iteratedItem = gluedElements[i];
        if (this._canResizeX) largestEl = largestEl.width + largestEl.x > iteratedItem.width + iteratedItem.x ? largestEl : iteratedItem;else largestEl = largestEl.height + largestEl.y > iteratedItem.height + iteratedItem.y ? largestEl : iteratedItem;
      }

      return largestEl;
    }
  }, {
    key: "getCollisions",
    value: function getCollisions(allItems, grid, newX, newY, width, height, whitelistIds) {
      var yLimit = newY + height;
      var xLimit = newX + width;
      var collisions = [];

      for (var y = newY; y < yLimit; y++) {
        grid[y] = grid[y] || [];

        for (var x = newX; x < xLimit; x++) {
          var cell = grid[y][x];
          if (!cell) continue;
          var gridItem = allItems[cell.id];
          if (gridItem.visible && whitelistIds.indexOf(gridItem.id) == -1 && !curator_core__WEBPACK_IMPORTED_MODULE_0__["helpers"].objIsInArray(collisions, gridItem, 'id')) collisions.push(gridItem);
          var correctedX = gridItem.x + gridItem.width - 1;
          if (correctedX < x) throw 'x invalid for grid item - incorrectly placed in grid';
          x = correctedX;
        }
      }

      return collisions;
    }
  }, {
    key: "getMoveDetails",
    value: function getMoveDetails(allItems, grid, draggedItem, newX, newY, newWidth, newHeight, collisions) {
      var itemsToMove = {};
      var maxRows = 0;
      var maxCols = 0;
      this.handleCollisions(newX, newY, newWidth, newHeight, collisions);

      while (collisions.length > 0) {
        var newCollisions = [];

        for (var i = 0; i < collisions.length; i++) {
          var currentCollision = collisions[i]; // todo change this to 
          // 1. a) check if it's in the previous movements array and could move back 
          //    b) get next free spot - jump over glued items ( x dir if xresizeable, else ydir if yresizeable, else nearest if +ve y/x)
          // 3. get collisions, add to the new collisions array
          // 4. update maxRows, maxCols
          // 5. return success = false if hit boundary and unable to get out

          var nextCollisions = this.getNextGluedFreeCollisions(allItems, grid, draggedItem, currentCollision);
          this.handleCollisions(currentCollision.newX, currentCollision.newY, currentCollision.width, currentCollision.height, nextCollisions);
          newCollisions = newCollisions.concat(nextCollisions);
          itemsToMove[currentCollision.id] = currentCollision;
          var rowsRequired = currentCollision.newY + currentCollision.height;
          var columnsRequired = currentCollision.newX + currentCollision.width;
          if (rowsRequired > maxRows) maxRows = rowsRequired;
          if (columnsRequired > maxCols) maxCols = columnsRequired;
        }

        collisions = newCollisions;
      }

      return {
        itemsToMove: Object.keys(itemsToMove).map(function (key) {
          return itemsToMove[key];
        }),
        maxRows: maxRows,
        maxCols: maxCols
      };
    }
  }, {
    key: "getNextGluedFreeCollisions",
    value: function getNextGluedFreeCollisions(allItems, grid, draggedItem, currentCollision) {
      var nextCollisions,
          gluedElement = {},
          movingXDir = this._canResizeX;

      while (gluedElement != null) {
        nextCollisions = this.getCollisions(allItems, grid, currentCollision.newX, currentCollision.newY, currentCollision.width, currentCollision.height, [draggedItem.id, currentCollision.id]);
        gluedElement = this.findLargestGluedElement(nextCollisions);

        if (gluedElement != null) {
          if (movingXDir) currentCollision.newX = gluedElement.x + gluedElement.width;else currentCollision.newY = gluedElement.y + gluedElement.height;
        }
      }

      return nextCollisions;
    }
  }, {
    key: "handleCollisions",
    value: function handleCollisions(newX, newY, newWidth, newHeight, collisions) {
      var yOffset = 0,
          xOffset = 0,
          limit,
          i,
          collision,
          minY = Number.MAX_SAFE_INTEGER,
          minX = Number.MAX_SAFE_INTEGER;
      if (collisions.length === 0) return;

      if (this._canResizeX) {
        for (i = 0, limit = collisions.length; i < limit; i++) {
          collision = collisions[i];
          minX = Math.min(minX, collision.x);
        }

        xOffset = Math.max(0, newX - minX) + newWidth - Math.max(0, minX - newX);
      } else {
        for (i = 0, limit = collisions.length; i < limit; i++) {
          collision = collisions[i];
          minY = Math.min(minY, collision.y);
        }

        yOffset = Math.max(0, newY - minY) + newHeight - Math.max(0, minY - newY);
      }

      for (i = 0, limit = collisions.length; i < limit; i++) {
        collision = collisions[i];
        collision.newX = collision.x + xOffset;
        collision.newY = collision.y + yOffset;
        this.setPreviousMovements(collision, false);
      }
    }
  }]);

  return StickyAlgo;
}();



/***/ })

/******/ });
});
//# sourceMappingURL=sticky-algo.js.map