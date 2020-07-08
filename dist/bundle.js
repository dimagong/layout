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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _script_form_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./script/form.js */ \"./src/script/form.js\");\n/* harmony import */ var _script_slider_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./script/slider.js */ \"./src/script/slider.js\");\n/* harmony import */ var _script_slider_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_script_slider_js__WEBPACK_IMPORTED_MODULE_1__);\n\r\n\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/script/dataInput.js":
/*!*********************************!*\
  !*** ./src/script/dataInput.js ***!
  \*********************************/
/*! exports provided: fileRegister */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fileRegister\", function() { return fileRegister; });\n\r\nconst  fileRegister = [\r\n    {   title: 'Email',\r\n        type: 'email',\r\n        placeholder: 'Email',\r\n        id: 1   \r\n    },\r\n    {   title: 'Password',\r\n        type: 'password',\r\n        placeholder: 'Password',\r\n        id: 2\r\n    },\r\n    {   title: 'Country',\r\n        type: 'text',\r\n        placeholder: 'Country',\r\n        id: 3\r\n    },  \r\n    {   title: 'Country 1',\r\n        type: 'hidden',\r\n        placeholder: 'Country 1',\r\n        id: 4   \r\n    },\r\n    {   title: 'Country 2',\r\n        type: 'hidden',\r\n        placeholder: 'Country 2',\r\n        id: 5  \r\n    },\r\n    {   title: 'Country 3',\r\n        type: 'hidden',\r\n        placeholder: 'Country 3',\r\n        id: 6  \r\n    },\r\n    {   title: 'Country 4',\r\n        type: 'hidden',\r\n        placeholder: 'Country 4',\r\n        id: 7  \r\n    }\r\n        \r\n];\n\n//# sourceURL=webpack:///./src/script/dataInput.js?");

/***/ }),

/***/ "./src/script/form.js":
/*!****************************!*\
  !*** ./src/script/form.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dataInput_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dataInput.js */ \"./src/script/dataInput.js\");\n\r\n\r\n\r\nvar formElem;\r\n//.........created div elements and input elements for form.......//\r\nconst CreateFormInput = () => {\r\n    var startPlaceList = document.getElementById('0');\r\n\r\n        formElem = _dataInput_js__WEBPACK_IMPORTED_MODULE_0__[\"fileRegister\"].map( ({ id, type, placeholder}) => {\r\n        \r\n        var divinput = document.createElement('div');\r\n        divinput.className = \"divinput\";\r\n\r\n        var input_el = document.createElement('input');\r\n    \r\n        input_el.setAttribute('id', `${id}`); \r\n        input_el.setAttribute('type', `${type}`);\r\n        input_el.setAttribute('placeholder', `${placeholder}`);  \r\n        \r\n        startPlaceList.append(divinput);\r\n        divinput.append(input_el);\r\n        return input_el;\r\n    \r\n    });\r\n}\r\nCreateFormInput();\r\n\r\n\r\nvar open_list = document.getElementById('3');\r\nvar toggle = false;\r\n\r\n//\r\n//..........create arow down for input in form ...........................//\r\n//\r\n\r\nconst SetArrowDown = () => {\r\n    var getDivinput = document.getElementsByClassName('divinput');\r\n    var divArrow = document.createElement('div');\r\n    divArrow.className = \"arrow-down\";\r\n    divArrow.id = 'arrow';\r\n    getDivinput[2].append(divArrow);  \r\n}\r\nSetArrowDown();\r\n\r\nconst ChangeArrowUpDown = () => {\r\n    var changeArrow =  document.getElementById('arrow');\r\n    changeArrow.removeAttribute('className');\r\n    if(formElem[3].type == 'hidden'){\r\n        \r\n        changeArrow.className = \"arrow-down\";\r\n    }else{  \r\n        changeArrow.className = \"arrow-up\";\r\n    }\r\n}\r\n\r\n\r\n//.........created drop-down list.......//\r\nconst OpenCloseList = () => {\r\n\r\n      \r\n    const OpenClose = () => {\r\n\r\n        for(var i = 3; i < formElem.length; i++){\r\n            if(formElem[i].type == 'hidden'){\r\n                formElem[i].setAttribute('type', 'text');\r\n                formElem[i].setAttribute('name', 'open');\r\n                \r\n            }else{\r\n                formElem[i].setAttribute('type', 'hidden');\r\n                formElem[i].setAttribute('name', 'close');\r\n                \r\n            }\r\n        }       \r\n        AddScroll();\r\n        ChangeArrowUpDown();  ////////////////////////\r\n    }\r\n    var upDownArrow =  document.getElementById('arrow');\r\n    upDownArrow.onclick = () => OpenClose();\r\n    open_list.onclick = () => OpenClose();\r\n}\r\nOpenCloseList();\r\n\r\n//.......select input element from drop-down list ......//\r\n\r\nconst ChangeCountry = () => {\r\n    for(let j = 3; j < formElem.length; j++){\r\n        formElem[j].onclick = () => {\r\n            var context = formElem[j].getAttribute('placeholder');\r\n            open_list.value = context;\r\n            for(let q = 3; q < formElem.length; q++ ) {\r\n                formElem[q].setAttribute('type', 'hidden');\r\n            }\r\n            AddScroll();\r\n            ChangeArrowUpDown();\r\n        }\r\n    }\r\n    \r\n}\r\nChangeCountry();\r\n\r\n\r\n//.......created scroll element for div element if it is open.........//\r\nconst AddScroll = () => {\r\n\r\n    var getDivinput = document.getElementsByClassName('divinput');\r\n    \r\n    for(var i = 3; i < getDivinput.length; i++){\r\n\r\n        var checkToOpenInput = formElem[i].getAttribute('type');\r\n        \r\n        \r\n        if(checkToOpenInput == 'text') {\r\n            var divscroll = document.createElement('div');\r\n            divscroll.className = \"divscroll\";\r\n            getDivinput[i].append(divscroll);\r\n        }else{\r\n            var divscroll = document.getElementsByClassName('divscroll'); \r\n            divscroll[0].remove();\r\n        }\r\n    }\r\n   AddRunToScroll();\r\n}\r\n\r\n//.......add style fot scroll element when done event onmouseover.........//\r\nconst AddRunToScroll = () => {\r\n    let allDivWithInput = document.getElementsByClassName('divinput');\r\n    let divAddScroll = document.getElementsByClassName('divscroll');\r\n\r\n    for(let i = 3; i < allDivWithInput.length; i++){\r\n            allDivWithInput[i].onmouseover = () => {\r\n                divAddScroll[i - 3].setAttribute('id', 'run-scroll');\r\n            }\r\n            allDivWithInput[i].onmouseout  = () => {\r\n                divAddScroll[i - 3].removeAttribute('id');\r\n             }     \r\n    }\r\n    \r\n}\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/script/form.js?");

/***/ }),

/***/ "./src/script/slider.js":
/*!******************************!*\
  !*** ./src/script/slider.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\r\n\r\n const SlideSwow = () => {\r\n    var sircleList = document.getElementsByClassName('sircle');\r\n    sircleList[0].setAttribute('id', 'dark-sircle');\r\n\r\n    var arrowLeft = document.getElementById('arrow-left');\r\n    var arrowRight = document.getElementById('arrow-right');\r\n    var imageForChange = document.getElementById('main-illustration');\r\n\r\n        arrowLeft.onclick = () => {\r\n            var sircleBaseElemDark = document.getElementById('dark-sircle');\r\n            var darkIndex = Array.from(sircleList).indexOf(sircleBaseElemDark);\r\n            //alert(darkIndex);\r\n\r\n            sircleList[darkIndex].removeAttribute('id'); \r\n            if(darkIndex == 0) {\r\n                darkIndex = sircleList.length;\r\n            }\r\n            sircleList[darkIndex - 1].setAttribute('id', 'dark-sircle'); \r\n            var numderPhoto = darkIndex - 1;\r\n            ImageState(numderPhoto);          \r\n        }\r\n        arrowRight.onclick = () => {\r\n            var sircleBaseElemDark = document.getElementById('dark-sircle');\r\n            var darkIndex = Array.from(sircleList).indexOf(sircleBaseElemDark);\r\n            //alert(darkIndex);\r\n\r\n            sircleList[darkIndex].removeAttribute('id'); \r\n            if(darkIndex == sircleList.length - 1) {\r\n                darkIndex = -1;\r\n            }\r\n            sircleList[darkIndex + 1].setAttribute('id', 'dark-sircle'); \r\n            var numderPhoto = darkIndex + 1;\r\n            ImageState(numderPhoto);          \r\n        } \r\n}\r\nSlideSwow();\r\n\r\nconst ImageState = (data) => {\r\n    var elementGetPhoto = document.getElementById('main-illustration');\r\n   switch(data){\r\n         case 0: \r\n            elementGetPhoto.style.background = \"#eeeeee url(img/run.jpg)\";\r\n         break;\r\n         case 1:\r\n             elementGetPhoto.style.background = '#eeeeee url(img/run1.jpg)';\r\n        break;\r\n         case 2: \r\n            elementGetPhoto.style.background = 'url(img/run2.jpg)';\r\n         break;\r\n         case 3: \r\n             elementGetPhoto.style.background = 'url(img/run3.jpg)';\r\n         break;\r\n        case 4: \r\n             elementGetPhoto.style.background = 'url(img/run4.jpg)';\r\n         break;\r\n     }\r\n}\n\n//# sourceURL=webpack:///./src/script/slider.js?");

/***/ })

/******/ });