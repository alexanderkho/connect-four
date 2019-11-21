/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./client/src/index.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/src/components/Board.jsx":
/*!*****************************************!*\
  !*** ./client/src/components/Board.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Column_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Column.jsx */ \"./client/src/components/Column.jsx\");\n/* harmony import */ var _GameInfo_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GameInfo.jsx */ \"./client/src/components/GameInfo.jsx\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\nvar Board =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(Board, _React$Component);\n\n  function Board(props) {\n    var _this;\n\n    _classCallCheck(this, Board);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(Board).call(this, props));\n    _this.state = {\n      redActive: true,\n      columns: [[0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0]]\n    };\n    _this.toggleColumn = _this.toggleColumn.bind(_assertThisInitialized(_this));\n    return _this;\n  }\n\n  _createClass(Board, [{\n    key: \"toggleColumn\",\n    value: function toggleColumn(colIndex) {\n      //red piece: 1, black piece: 2\n      var newPiece = this.state.redActive === true ? 1 : 2;\n      console.log('toggling column!' + colIndex);\n      var newCols = Array.from(this.state.columns); // const bottomPiece = newCols[colIndex].indexOf(1);\n\n      var bottomPiece = newCols[colIndex].findIndex(function (n) {\n        return n !== 0;\n      });\n\n      if (bottomPiece !== -1) {\n        newCols[colIndex][bottomPiece - 1] = newPiece;\n      } else {\n        newCols[colIndex][newCols[colIndex].length - 1] = newPiece;\n      }\n\n      this.setState({\n        redActive: !this.state.redActive,\n        columns: newCols\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      console.log(this.state.columns);\n      return React.createElement(\"div\", {\n        className: \"board\"\n      }, React.createElement(_GameInfo_jsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        redActive: this.state.redActive\n      }), this.state.columns.map(function (column, i) {\n        return React.createElement(\"div\", {\n          className: \"column\",\n          key: i,\n          onClick: function onClick() {\n            _this2.toggleColumn(i);\n          }\n        }, React.createElement(_Column_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n          pieces: column\n        }));\n      }));\n    }\n  }]);\n\n  return Board;\n}(React.Component);\n\n;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Board);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvQm9hcmQuanN4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9jb21wb25lbnRzL0JvYXJkLmpzeD8zNGRhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb2x1bW4gZnJvbSAnLi9Db2x1bW4uanN4JztcbmltcG9ydCBHYW1lSW5mbyBmcm9tICcuL0dhbWVJbmZvLmpzeCc7XG5cblxuY2xhc3MgQm9hcmQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHJlZEFjdGl2ZTogdHJ1ZSwgXG4gICAgICAgICAgICBjb2x1bW5zIDogW1xuICAgICAgICAgICAgICAgIFswLDAsMCwwLDAsMF0sXG4gICAgICAgICAgICAgICAgWzAsMCwwLDAsMCwwXSxcbiAgICAgICAgICAgICAgICBbMCwwLDAsMCwwLDBdLFxuICAgICAgICAgICAgICAgIFswLDAsMCwwLDAsMF0sXG4gICAgICAgICAgICAgICAgWzAsMCwwLDAsMCwwXSxcbiAgICAgICAgICAgICAgICBbMCwwLDAsMCwwLDBdLFxuICAgICAgICAgICAgICAgIFswLDAsMCwwLDAsMF1cbiAgICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnRvZ2dsZUNvbHVtbiA9IHRoaXMudG9nZ2xlQ29sdW1uLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgdG9nZ2xlQ29sdW1uKGNvbEluZGV4KSB7XG4gICAgICAgIC8vcmVkIHBpZWNlOiAxLCBibGFjayBwaWVjZTogMlxuICAgICAgICBjb25zdCBuZXdQaWVjZSA9IHRoaXMuc3RhdGUucmVkQWN0aXZlID09PSB0cnVlID8gMSA6IDI7XG4gICAgICAgIGNvbnNvbGUubG9nKCd0b2dnbGluZyBjb2x1bW4hJyArIGNvbEluZGV4KVxuICAgICAgICBsZXQgbmV3Q29scyA9IEFycmF5LmZyb20odGhpcy5zdGF0ZS5jb2x1bW5zKTtcbiAgICAgICAgLy8gY29uc3QgYm90dG9tUGllY2UgPSBuZXdDb2xzW2NvbEluZGV4XS5pbmRleE9mKDEpO1xuICAgICAgICBjb25zdCBib3R0b21QaWVjZSA9IG5ld0NvbHNbY29sSW5kZXhdLmZpbmRJbmRleCgobikgPT4gbiE9PSAwKTtcbiAgICAgICAgaWYgKGJvdHRvbVBpZWNlICE9PSAtMSkge1xuICAgICAgICAgICAgbmV3Q29sc1tjb2xJbmRleF1bYm90dG9tUGllY2UgLSAxXSA9IG5ld1BpZWNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbmV3Q29sc1tjb2xJbmRleF1bbmV3Q29sc1tjb2xJbmRleF0ubGVuZ3RoIC0gMV0gPSBuZXdQaWVjZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHJlZEFjdGl2ZTogIXRoaXMuc3RhdGUucmVkQWN0aXZlLFxuICAgICAgICAgICAgY29sdW1uczogbmV3Q29sc1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUuY29sdW1ucyk7XG4gICAgICAgIHJldHVybiAoPGRpdiBjbGFzc05hbWU9XCJib2FyZFwiPlxuICAgICAgICAgICAgPEdhbWVJbmZvIHJlZEFjdGl2ZT17dGhpcy5zdGF0ZS5yZWRBY3RpdmV9IC8+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5jb2x1bW5zLm1hcCgoY29sdW1uLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5cIiBrZXk9e2l9IG9uQ2xpY2s9eygpID0+IHt0aGlzLnRvZ2dsZUNvbHVtbihpKX19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbHVtbiBwaWVjZXM9e2NvbHVtbn0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+KVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgQm9hcmQ7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBOzs7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBWUE7QUFkQTtBQWVBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFJQTs7OztBQWpEQTtBQUNBO0FBaURBO0FBRUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./client/src/components/Board.jsx\n");

/***/ }),

/***/ "./client/src/components/Column.jsx":
/*!******************************************!*\
  !*** ./client/src/components/Column.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Piece_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Piece.jsx */ \"./client/src/components/Piece.jsx\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\nvar Column =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(Column, _React$Component);\n\n  function Column(props) {\n    _classCallCheck(this, Column);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(Column).call(this, props));\n  }\n\n  _createClass(Column, [{\n    key: \"render\",\n    value: function render() {\n      return this.props.pieces.map(function (piece) {\n        return React.createElement(_Piece_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n          active: piece\n        });\n      });\n    }\n  }]);\n\n  return Column;\n}(React.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Column);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvQ29sdW1uLmpzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NsaWVudC9zcmMvY29tcG9uZW50cy9Db2x1bW4uanN4PzIwOGQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBpZWNlIGZyb20gJy4vUGllY2UuanN4JztcblxuY2xhc3MgQ29sdW1uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgdGhpcy5wcm9wcy5waWVjZXMubWFwKChwaWVjZSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxQaWVjZSBhY3RpdmU9e3BpZWNlfSAvPlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbHVtbjtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7Ozs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFFQTtBQUNBOzs7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBR0E7QUFFQTs7OztBQWRBO0FBQ0E7QUFnQkEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./client/src/components/Column.jsx\n");

/***/ }),

/***/ "./client/src/components/GameInfo.jsx":
/*!********************************************!*\
  !*** ./client/src/components/GameInfo.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar GameInfo = function GameInfo(props) {\n  return React.createElement(\"div\", {\n    className: \"game-info\"\n  }, React.createElement(\"h1\", null, \"Welcome to Connect 4 aka Vertical Checkers!\"), React.createElement(\"p\", null, \"Current Turn:\", React.createElement(\"span\", {\n    className: props.redActive === true ? \"red-turn\" : \"black-turn\"\n  }, props.redActive === true ? \" Red\" : \" Black\")));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (GameInfo);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvR2FtZUluZm8uanN4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9jb21wb25lbnRzL0dhbWVJbmZvLmpzeD82MmIwIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEdhbWVJbmZvID0gKHByb3BzKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnYW1lLWluZm9cIj5cbiAgICAgICAgICAgIDxoMT5XZWxjb21lIHRvIENvbm5lY3QgNCBha2EgVmVydGljYWwgQ2hlY2tlcnMhPC9oMT5cbiAgICAgICAgICAgIDxwPkN1cnJlbnQgVHVybjogIFxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lID0ge3Byb3BzLnJlZEFjdGl2ZSA9PT0gdHJ1ZT8gXCJyZWQtdHVyblwiIDogXCJibGFjay10dXJuXCJ9Pntwcm9wcy5yZWRBY3RpdmUgPT09IHRydWUgPyBcIiBSZWRcIiA6IFwiIEJsYWNrXCJ9PC9zcGFuPjwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBHYW1lSW5mbzsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFHQTtBQUFBO0FBR0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./client/src/components/GameInfo.jsx\n");

/***/ }),

/***/ "./client/src/components/Piece.jsx":
/*!*****************************************!*\
  !*** ./client/src/components/Piece.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar Piece = function Piece(props) {\n  return React.createElement(\"div\", {\n    className: props.active === 0 ? \"piece inactive\" : props.active === 1 ? \"piece red\" : \"piece black\"\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Piece); // class Piece extends React.Component {\n//     constructor(props) {\n//         super(props);\n//         this.toggle = props.toggle;\n//     }\n//     render() {\n//         return (\n//             <div className=\"piece\" onClick={}></div>\n//         )\n//     }\n// }//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvUGllY2UuanN4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9jb21wb25lbnRzL1BpZWNlLmpzeD85NDRkIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFBpZWNlID0gKHByb3BzKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e1xuICAgICAgICAgICAgcHJvcHMuYWN0aXZlID09PSAwID8gXCJwaWVjZSBpbmFjdGl2ZVwiXG4gICAgICAgICAgICA6IHByb3BzLmFjdGl2ZSA9PT0gMSA/IFwicGllY2UgcmVkXCIgOiBcInBpZWNlIGJsYWNrXCJcbiAgICAgICAgfT48L2Rpdj5cbiAgICApXG59O1xuXG5leHBvcnQgZGVmYXVsdCBQaWVjZTtcblxuLy8gY2xhc3MgUGllY2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuLy8gICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4vLyAgICAgICAgIHN1cGVyKHByb3BzKTtcbi8vICAgICAgICAgdGhpcy50b2dnbGUgPSBwcm9wcy50b2dnbGU7XG4vLyAgICAgfVxuXG4vLyAgICAgcmVuZGVyKCkge1xuLy8gICAgICAgICByZXR1cm4gKFxuLy8gICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwaWVjZVwiIG9uQ2xpY2s9e30+PC9kaXY+XG4vLyAgICAgICAgIClcbi8vICAgICB9XG4vLyB9Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBS0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./client/src/components/Piece.jsx\n");

/***/ }),

/***/ "./client/src/index.jsx":
/*!******************************!*\
  !*** ./client/src/index.jsx ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_Board_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Board.jsx */ \"./client/src/components/Board.jsx\");\n\nReactDOM.render(React.createElement(_components_Board_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], null), document.getElementById(\"app\"));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvc3JjL2luZGV4LmpzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NsaWVudC9zcmMvaW5kZXguanN4P2QwMzAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJvYXJkIGZyb20gJy4vY29tcG9uZW50cy9Cb2FyZC5qc3gnO1xuXG5SZWFjdERPTS5yZW5kZXIoPEJvYXJkIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcFwiKSk7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUVBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./client/src/index.jsx\n");

/***/ })

/******/ });