(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["SnappyAlgo"] = factory();
	else
		root["SnappyAlgo"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/SnappyAlgo.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/snappy-grid-core/dist/snappy-grid-core.min.js":
/*!********************************************************************!*\
  !*** ./node_modules/snappy-grid-core/dist/snappy-grid-core.min.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e():undefined}(window,function(){return function(t){var e={};function i(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,i),o.l=!0,o.exports}return i.m=t,i.c=e,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(n,o,function(e){return t[e]}.bind(null,o));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=0)}([function(t,e,i){"use strict";i.r(e);var n=function(t){return void 0!==t&&null!=t},o={flex:"flex",fixed:"fixed"},r={none:"none",x:"x",y:"y",both:"both"},s={x:0,y:0,width:1,height:1,classes:[],glued:!1,visible:!0,canResize:!0,displayResize:!0,position:{topPx:0,leftPx:0,topPct:0,leftPct:0,widthPx:0,heightPx:0,widthPct:0,heightPct:0,ending:"px"},meta:{isDragging:!1}},d={position:"absolute",border:"2px dashed grey",zIndex:-1},h={gridColumns:12,gridRows:12,width:"100%",height:"100%",itemClassName:"grid-item",classes:[],renderMode:o.flex,stickyElements:!0,itemsCanResizeGrid:!0,resizeGridDirections:r.y,useTransition:!0,transitionDuration:600,onTransitionComplete:function(t,e,i){},onAllTransitionsComplete:function(t,e,i){},resizeClassName:"snap-resize-handle",enableCSS3:!0,algorithm:null};function u(t,e){if(null==t)return{};var i,n,o=function(t,e){if(null==t)return{};var i,n,o={},r=Object.keys(t);for(n=0;n<r.length;n++)i=r[n],e.indexOf(i)>=0||(o[i]=t[i]);return o}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)i=r[n],e.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(t,i)&&(o[i]=t[i])}return o}function a(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{},n=Object.keys(i);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(i).filter(function(t){return Object.getOwnPropertyDescriptor(i,t).enumerable}))),n.forEach(function(e){g(t,e,i[e])})}return t}function g(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function l(t){return function(t){if(Array.isArray(t)){for(var e=0,i=new Array(t.length);e<t.length;e++)i[e]=t[e];return i}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}i.d(e,"renderModeType",function(){return o}),i.d(e,"resizeOptions",function(){return r}),i.d(e,"defaultItemOptions",function(){return s}),i.d(e,"defaultGridOptions",function(){return h});e.default={getItemStyles:function(){return{boxSizing:"border-box",position:"absolute"}},getItemClasses:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,e=l(t.classes).concat([t.itemClassName]);return t.glued&&e.push("snapper-glued"),e},getEmptyGrid:function(t){for(var e=[],i=0;i<t;i++)e.push([]);return e},getItemPosition:function(t,e,i,n,r,s,d,h,u){return u===o.flex?a({},this.getItemPositionPixels(t,e,i,n,r,s,d,h),this.getItemPositionPercentages(t,e,i,n,r,s,d,h)):this.getItemPositionPixels(t,e,i,n,r,s,d,h)},getItemPositionPercentages:function(t,e,i,n,o,r,s,d){var h=Math.floor(t/n),u=Math.floor(e/i),a=t-h*n,g=e-u*i,l=49/t/100,c=49/e/100,m=Math.min(s,a),f=Math.min(o+s,a)-m,p=Math.min(d,g);return{leftPct:100*(s*h+m)/t+l,widthPct:100*(o*h+f)/t+l,topPct:100*(d*u+p)/e+c,heightPct:100*(r*u+(Math.min(r+d,g)-p))/e+c,ending:"%"}},getItemPositionPixels:function(t,e,i,n,o,r,s,d){var h=Math.floor(t/n),u=Math.floor(e/i),a=t-h*n,g=e-u*i,l=Math.min(s,a),c=Math.min(o+s,a)-l,m=Math.min(d,g);return{widthPx:h*o+c,heightPx:u*r+(Math.min(r+d,g)-m),topPx:u*d+m,leftPx:h*s+l,ending:"px"}},updateMovedItem:function(t,e,i){var n=t.newX,o=t.newY,r=t.newWidth,s=t.newHeight,d=e.gridWidth,h=e.gridHeight,u=e.gridRows,g=e.gridColumns,l=i.renderMode,c=a({},t);if(!r||!s)return console.error("Item ".concat(key," does not have a newWidth or newHeight value. Unable to correctly resize item")),t;c.x=n,c.y=o,c.width=r,c.height=s;var m=this.getItemPosition(d,h,u,g,c.width,c.height,c.x,c.y,l),f=this.getItemPositionStyles(i,c.styles,m);return c.position=a({},m),c.styles=a({},f),c},updateGridWithMovedItems:function(t,e){for(var i in e){var n=e[i];this.updateGridWithItemMovement(t,n,n.x,n.y,n.width,n.height)}},getUpdatedMovedItems:function(t,e,i,n,o,r,s,d){var h=this;return t.forEach(function(t){var u=h.updateMovedItem(t,s,d);if(key===e){var g=a({},u.position,{ending:"px",topPx:i,leftPx:n,widthPx:o,heightPx:r}),l=h.getItemPositionStyles(d,u.styles,g);u.position=a({},g),u.styles=a({},l)}return u})},getUpdatedGridSizeItems:function(t,e,i){var n=this,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],r=e.renderMode,s=i.gridRows,d=i.gridColumns,h=i.gridHeight,u=i.gridWidth;return t.map(function(t){if(!(o.indexOf(t.id)>-1)){var i=n.getItemPosition(u,h,s,d,t.width,t.height,t.x,t.y,r);return a({},t,{position:i,styles:n.getItemPositionStyles(e,t.styles,i)})}})},getGridBoundaries:function(t){return{leftBoundary:0,rightBoundary:t.gridWidth,topBoundary:0,bottomBoundary:t.gridHeight}},getItemSizing:function(t,e){var i=e.gridWidth,n=e.gridHeight,o=t.width,r=t.height;return{itemWidthPx:o*(i/gridColumns),itemHeightPx:r*(n/gridRows)}},calculateGridMatrixSize:function(t,e,i){var n=e.itemsCanResizeGrid,o=e.resizeGridDirections,r=i.gridRows,s=i.gridColumns,d=n&&"y"!==o,h=n&&"x"!==o;if(!d&&!h)return{rows:r,columns:s};var u=0,a=0;return t.forEach(function(t){var e=t.x+t.width,i=t.y+t.height;e>a&&(a=e),i>u&&(u=i)}),{rows:h?Math.max(u,r):r,columns:d?Math.max(a,s):s}},calculateGridSize:function(t,e,i,n){var o=e.gridRows,r=e.gridColumns;return{newGridWidth:t.widthPx/r*n,newGridHeight:t.heightPx/o*i}},calculateMovementChange:function(t,e,i,n){var o=e.itemsCanResizeGrid,r=o&&"y"!==e.resizeGridDirections,s=o&&"x"!==e.resizeGridDirections,d=i.widthPx/e.gridColumns,h=i.heightPx/e.gridRows,u=n.currentMouseX-n.initialMouseX,a=n.currentMouseY-n.initialMouseY,g=n.initialLeft+u,l=n.initialTop+a,c=Math.round(g/d),m=Math.round(l/h);return c<0?c=0:c+1>e.gridColumns&&!r&&(c=e.gridColumns-1),m<0?m=0:m+1>e.gridRows&&!s&&(m=e.gridRows-1),{newX:c,newY:m,newLeftPx:g,newTopPx:l}},calculateResizeChange:function(t,e,i,n){var o=i.widthPx/e.gridColumns,r=i.heightPx/e.gridRows,s=n.currentMouseX-n.initialMouseX,d=n.currentMouseY-n.initialMouseY,h=n.initialWidth+s,u=n.initialHeight+d,a=Math.round(h/o),g=Math.round(u/r);return h<o&&(a=1,h=o),u<r&&(g=1,u=r),{newWidthPx:h,newHeightPx:u,newWidth:a,newHeight:g,newLeftPx:t.position.leftPx,newTopPx:t.position.topPx}},calculatePositionChange:function(t,e){var i=e.gridSizing,n=e.gridOptions,o=i.widthPx/n.gridColumns,r=i.heightPx/n.gridRows;return{newWidthPx:Math.round(o*t.width),newHeightPx:Math.round(r*t.height),newLeftPx:Math.round(o*t.x),newTopPx:Math.round(r*t.y),newX:t.x,newY:t.y,newWidth:t.width,newHeight:t.height}},getNoMovementResult:function(t,e,i){var n=a({},e,{position:a({},e.position,{ending:"px",topPx:i.newTopPx,leftPx:i.newLeftPx,widthPx:i.newWidthPx,heightPx:i.newHeightPx})}),o=t.items.map(function(t){return t.id==n.id?n:t});return{success:!0,grid:t.grid,updatedItems:o,targetItem:n,gridSizing:t.gridSizing,movementChange:i,itemsMoved:!1}},itemHasMoved:function(t,e){return e.newX!=t.x||e.newY!=t.y},itemHasResized:function(t,e){return e.newWidth!==t.width||e.newHeight!==t.height},checkProposedGridSizing:function(t,e,i){var n=t.gridOptions,o=n.resizeGridDirections!==r.y,s=n.resizeGridDirections!==r.x;if(!o&&e!==n.gridColumns||n.gridColumns<1)throw"Invalid grid column proposition from algorithm";if(!s&&i!==n.gridRows||n.gridRows<1)throw"Invalid grid row proposition from algorithm"},getPlaceholderStyles:function(t){return a({},d,{left:"".concat(t.leftPx,"px"),top:"".concat(t.topPx,"px"),width:"".concat(t.widthPx,"px"),height:"".concat(t.heightPx,"px")})},addItemToGrid:function(t,e){var i={newX:t.x,newY:t.y,newWidth:t.width,newHeight:t.height,newTopPx:t.position.topPx,newLeftPx:t.position.leftPx,newWidthPx:t.position.widthPx,newHeightPx:t.position.heightPx};return this.onItemMovement(t,e,i)},movementIsWithinBounds:function(t,e){var i=e.gridColumns,n=e.gridRows,o=e.itemsCanResizeGrid,r=e.resizeGridDirections,s=t.newX,d=t.newY,h=t.newWidth,u=t.newHeight;return(o&&"y"!==r||s+h<=i)&&(o&&"x"!==r||d+u<=n)},onItemMovement:function(t,e,i){var n=this,o=e.gridOptions.renderMode,r=e.gridOptions,s=this.getNoMovementResult(e,t,i),d=a({},t);if(!this.movementIsWithinBounds(i,r))return s;var h=r.algo.run(e,d,i.newX,i.newY,i.newWidth,i.newHeight);if(!h.success)return s;var u=h.gridColumns!==r.gridColumns||h.gridRows!==r.gridRows,g=e.gridSizing.widthPx,l=e.gridSizing.heightPx;if(u){this.checkProposedGridSizing(e,h.gridColumns,h.gridRows);var c=this.calculateGridSize(e.gridSizing,r,h.gridRows,h.gridColumns);g=c.newGridWidth,l=c.newGridHeight}var m=Object.keys(h.itemsToMove).map(function(t){var e=h.itemsToMove[t],s=n.getItemPosition(g,l,h.gridRows,h.gridColumns,e.width,e.height,e.x,e.y,o);if(e.id===d.id){var u=n.getPlaceholderStyles(s);e.meta=a({},e.meta,{placeholderStyles:u}),e.position=a({},e.position,{ending:"px",topPx:i.newTopPx,leftPx:i.newLeftPx,widthPx:i.newWidthPx,heightPx:i.newHeightPx}),e.styles=n.getItemPositionStyles(r,e.styles,e.position),console.log(e.styles)}else e.position=s,e.styles=n.getItemPositionStyles(r,e.styles,s);return e});return{success:h.success,grid:e.grid,updatedItems:m,itemsMoved:Object.keys(h.itemsToMove).length>1,targetItem:d,movementChange:i,gridSizing:{gridRows:h.gridRows,gridColumns:h.gridColumns,heightPx:l,widthPx:g}}},onItemPositionChanged:function(t,e,i){var n=this.calculatePositionChange(t,i);return this.positionHasChanged(t,e)?this.onItemMovement(e,i,n):this.getNoMovementResult(i,e,n)},positionHasChanged:function(t,e){return t.x!==e.x||t.y!==e.y||t.width!==e.width||t.height!==e.height},onItemDragStart:function(t){if(t.glued)return{item:t,success:!1};var e=this.getPlaceholderStyles(t.position);return{item:a({},t,{meta:a({},t.meta,{isDragging:!0,placeholderStyles:e})}),success:!0}},onItemDrag:function(t,e,i){var n=a({},this.calculateMovementChange(t,e.gridOptions,e.gridSizing,i),{newWidth:t.width,newHeight:t.height,newWidthPx:t.position.widthPx,newHeightPx:t.position.heightPx});return!t.meta.isDragging||t.glued?this.getNoMovementResult(e,t,n):this.itemHasMoved(t,n)?this.onItemMovement(t,e,n):this.getNoMovementResult(e,t,n)},onItemDragStop:function(t,e,i,n,o,r){var s=t.width,d=t.height,h=t.x,u=t.y,g=o.gridRows,l=o.gridColumns,c=o.renderMode,m=a({},t.meta,{isDragging:!1}),f=this.getItemPosition(i,n,g,l,s,d,h,u,c);return a({},t,{position:f,styles:this.getItemPositionStyles(o,t.styles,f),meta:m})},onItemResizeStart:function(t){return t.glued?{item:t,success:!1}:{item:a({},t,{meta:a({},t.meta,{isResizing:!0})}),success:!0}},onItemResize:function(t,e,i){var n=a({},this.calculateResizeChange(t,e.gridOptions,e.gridSizing,i),{newX:t.x,newY:t.y,newLeftPx:t.position.leftPx,newTopPx:t.position.topPx});return!t.meta.isResizing||t.glued?this.getNoMovementResult(e,t,n):this.itemHasResized(t,n)?this.onItemMovement(t,e,n):this.getNoMovementResult(e,t,n)},onItemResizeStop:function(t,e,i,n,o,r){var s=t.width,d=t.height,h=t.x,u=t.y,g=o.gridRows,l=o.gridColumns,c=o.renderMode,m=a({},t.meta,{isResizing:!1}),f=this.getItemPosition(i,n,g,l,s,d,h,u,c);return a({},t,{position:f,styles:this.getItemPositionStyles(o,t.styles,f),meta:m})},updateGridWithItemMovement:function(t,e,i,n,o,r){var s=e.id,d=e.x,h=e.y,u=e.width,a=e.height;this.ensureGridHasRow(t,h),this.setGridWithValue(t,s,i,n,o,r,void 0,!1),this.setGridWithValue(t,s,d,h,u,a,e,!0)},updateGridWithItem:function(t,e){var i=e.id,n=e.x,o=e.y,r=e.width,s=e.height;this.setGridWithValue(t,i,n,o,r,s,e,!0)},removeGridItem:function(t,e,i,n,o){var r=this,s=i.id,d=i.x,h=i.y,u=i.width,g=i.height,l=o.widthPx,c=o.heightPx,m=n.renderMode;this.ensureGridHasRow(e,h),this.setGridWithValue(e,s,d,h,u,g,void 0,!0);var f=n.algo.onGridItemRemoved(i,e,n);return{updatedItems:t.map(function(t){var e=f.find(function(e){return e.id===t.id});if(!e)return null;var i=e.x,o=e.y,s=e.width,d=e.height,h=a({},t,{x:i,y:o,width:s,height:d}),u=r.getItemPosition(l,c,n.gridRows,n.gridColumns,s,d,i,o,m);return h.position=u,h.styles=r.getItemPositionStyles(n,h.styles,u),h}).filter(function(t){return null!=t})}},ensureGridHasRow:function(t,e){t[e]||(t[e]=[])},setGridWithValue:function(t,e,i,o,r,s,d){for(var h=arguments.length>7&&void 0!==arguments[7]&&arguments[7],u=o;u<o+s;u++)for(var a=i;a<i+r;a++){var g=t[u][a];n(g)&&g.id!=e&&!h||(t[u][a]=d)}},getItemPositionStyles:function(t,e,i){var n=e||{},o=(n.transform,n.left,n.top,u(n,["transform","left","top"]));return"%"===i.ending?a({},o,{left:"".concat(i.leftPct,"%"),top:"".concat(i.topPct,"%"),width:"".concat(i.widthPct,"%"),height:"".concat(i.heightPct,"%")}):t.enableCSS3?a({},o,{width:"".concat(i.widthPx,"px"),height:"".concat(i.heightPx,"px"),transform:"translate(".concat(i.leftPx,"px, ").concat(i.topPx,"px)")}):a({},o,{left:"".concat(i.leftPx,"px"),top:"".concat(i.topPx,"px"),width:"".concat(i.widthPx,"px"),height:"".concat(i.heightPx,"px")})},getGridXY:function(t,e,i){var n=t.gridWidth,o=t.gridHeight,r=t.gridRows,s=t.gridColumns;return{x:this.getGridPosition(n,i,s),y:this.getGridPosition(o,e,r)}},getGridWH:function(t,e,i,n,o){var r=o.gridRows,s=o.gridColumns;return{width:this.getGridPosition(t,i,s),height:this.getGridPosition(e,n,r)}},getGridPosition:function(t,e,i){return Math.max(1,Math.round(e/t*i))},getBoundaryLimitedSizing:function(t,e,i,n,o,s){var d=s.resizeGridDirections,h=s.itemsCanResizeGrid,u=o.rightBoundary,a=o.bottomBoundary,g=h&&d!==r.x;return{widthPx:h&&d!==r.y?i:Math.min(i,u-t),heightPx:g?n:Math.min(n,a-e)}}}}])});

/***/ }),

/***/ "./src/SnappyAlgo.js":
/*!***************************!*\
  !*** ./src/SnappyAlgo.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var snappy_grid_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! snappy-grid-core */ "./node_modules/snappy-grid-core/dist/snappy-grid-core.min.js");
/* harmony import */ var snappy_grid_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(snappy_grid_core__WEBPACK_IMPORTED_MODULE_0__);
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var SnapAlgo =
/*#__PURE__*/
function () {
  function SnapAlgo() {
    _classCallCheck(this, SnapAlgo);
  }

  _createClass(SnapAlgo, [{
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

      snappy_grid_core__WEBPACK_IMPORTED_MODULE_0___default.a.updateGridWithItemMovement(grid, item, itemProps.x, itemProps.y, itemProps.width, itemProps.height); // remove any previously registered movements resulting from collisions

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

        snappy_grid_core__WEBPACK_IMPORTED_MODULE_0___default.a.updateGridWithItemMovement(grid, clone, i.x, i.y, i.width, i.height);
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
          if (!snappy_grid_core__WEBPACK_IMPORTED_MODULE_0__["helpers"].isDefined(item)) continue;

          if (this._getCloserPosition(item, item.algoData.previousX, item.algoData.previousY, grid, gridOptions)) {
            var _x = item.x,
                _y = item.y;
            item.x = item.newX;
            item.y = item.newY;
            snappy_grid_core__WEBPACK_IMPORTED_MODULE_0___default.a.updateGridWithItemMovement(grid, item, _x, _y, item.width, item.height);
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
          snappy_grid_core__WEBPACK_IMPORTED_MODULE_0___default.a.updateGridWithItemMovement(grid, item, x, y, item.width, item.height);
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

        if (!snappy_grid_core__WEBPACK_IMPORTED_MODULE_0__["helpers"].isDefined(block)) {
          grid[j] = [];
          continue;
        }

        for (var i = x; i < x + width; i++) {
          if (snappy_grid_core__WEBPACK_IMPORTED_MODULE_0__["helpers"].isDefined(block[i]) && block[i].id != id) return false;
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
          if (gridItem.visible && whitelistIds.indexOf(gridItem.id) == -1 && !snappy_grid_core__WEBPACK_IMPORTED_MODULE_0__["helpers"].objIsInArray(collisions, gridItem, 'id')) collisions.push(gridItem);
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

  return SnapAlgo;
}();

/* harmony default export */ __webpack_exports__["default"] = (SnapAlgo);

/***/ })

/******/ });
});
//# sourceMappingURL=snappy-algo.js.map