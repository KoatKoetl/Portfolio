/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/JS/Animations.js":
/*!******************************!*\
  !*** ./src/JS/Animations.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   animation: () => (/* binding */ animation),
/* harmony export */   enable_AllAnimations: () => (/* binding */ enable_AllAnimations)
/* harmony export */ });
/* harmony import */ var scrollreveal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! scrollreveal */ "./node_modules/scrollreveal/dist/scrollreveal.es.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var Animations = /*#__PURE__*/function () {
  function Animations() {
    _classCallCheck(this, Animations);
    this.skillsSection = document.querySelector('.skills');
  }
  _createClass(Animations, [{
    key: "enable_Animations",
    value: function enable_Animations() {
      // Animate the skills section to appear on scroll
      (0,scrollreveal__WEBPACK_IMPORTED_MODULE_0__["default"])().reveal(this.skillsSection, {
        distance: '150px',
        reset: true
      });
    }
  }]);
  return Animations;
}();
var animation = new Animations();
function enable_AllAnimations() {
  animation.enable_Animations();
}


/***/ }),

/***/ "./src/JS/App.js":
/*!***********************!*\
  !*** ./src/JS/App.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ enableApp)
/* harmony export */ });
/* harmony import */ var _Animations_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Animations.js */ "./src/JS/Animations.js");
/* harmony import */ var _Burger_menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Burger-menu.js */ "./src/JS/Burger-menu.js");
/* harmony import */ var _Projects_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Projects.js */ "./src/JS/Projects.js");
/* harmony import */ var _Skills_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Skills.js */ "./src/JS/Skills.js");




function enableApp() {
  (0,_Burger_menu_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
  (0,_Skills_js__WEBPACK_IMPORTED_MODULE_3__.enable_SkillSection)();
  (0,_Projects_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
  (0,_Animations_js__WEBPACK_IMPORTED_MODULE_0__.enable_AllAnimations)();
}

/***/ }),

/***/ "./src/JS/Burger-menu.js":
/*!*******************************!*\
  !*** ./src/JS/Burger-menu.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ enable_HeaderBurgerMenu)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var BurgerMenu = /*#__PURE__*/function () {
  function BurgerMenu() {
    _classCallCheck(this, BurgerMenu);
    this.hamburgerMenuButton = document.querySelector('.header__hamburger-menu');
    this.hamburgerMenuCheckbox = document.querySelector('.header__hamburger-menu-checkbox');
    this.hamburgerMenuLinks = Array.from(document.querySelectorAll('.header__hamburger-menu-sidebar .header__nav-link'));
    this.hamburgerMenuSidebar = document.querySelector('.header__hamburger-menu-sidebar');
  }

  // open hamburger menu when clicked
  _createClass(BurgerMenu, [{
    key: "open_HamburgerMenu",
    value: function open_HamburgerMenu() {
      var _this = this;
      this.hamburgerMenuButton.addEventListener('click', function () {
        if (_this.hamburgerMenuCheckbox.checked === false) {
          _this.hamburgerMenuCheckbox.checked = true;
          _this.hamburgerMenuSidebar.style.right = '0';
          document.body.style.overflow = 'hidden';
        } else {
          _this.hamburgerMenuCheckbox.checked = false;
          _this.hamburgerMenuSidebar.style.right = '100%';
          document.body.style.overflow = 'scroll';
        }
      });
    }

    // Close menu when clicked on link
  }, {
    key: "open_HamburgerMenuLink",
    value: function open_HamburgerMenuLink() {
      var _this2 = this;
      this.hamburgerMenuLinks.forEach(function (link) {
        link.addEventListener('click', function () {
          _this2.hamburgerMenuCheckbox.checked = false;
          _this2.hamburgerMenuSidebar.style.right = '100%';
          document.body.style.overflow = 'scroll';
        });
      });
    }

    // Hide menu if screen width is resized
  }, {
    key: "hide_HamburgerMenuOnResize",
    value: function hide_HamburgerMenuOnResize() {
      var _this3 = this;
      window.addEventListener('resize', function () {
        var windowWidth = window.innerWidth;
        if (windowWidth > 850) {
          _this3.hamburgerMenuCheckbox.checked = false;
          _this3.hamburgerMenuSidebar.style.right = '100%';
          document.body.style.overflow = 'scroll';
        }
      });
    }
  }]);
  return BurgerMenu;
}();
var headerBurgerMenu = new BurgerMenu();
function enable_HeaderBurgerMenu() {
  headerBurgerMenu.open_HamburgerMenu();
  headerBurgerMenu.open_HamburgerMenuLink();
  headerBurgerMenu.hide_HamburgerMenuOnResize();
}

/***/ }),

/***/ "./src/JS/Data/Projects_Data.js":
/*!**************************************!*\
  !*** ./src/JS/Data/Projects_Data.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// All projects from GitHub
var projects = [];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projects);

/***/ }),

/***/ "./src/JS/Data/Skills_Data.js":
/*!************************************!*\
  !*** ./src/JS/Data/Skills_Data.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Add skill name and link to image to display skill on page
var data_AllSkills = [{
  name: 'HMTL5',
  imageURL: 'assets/html-5-svgrepo-com.svg'
}, {
  name: 'CSS3',
  imageURL: 'assets/css-3-svgrepo-com.svg'
}, {
  name: 'JavaScript',
  imageURL: 'assets/javascript-svgrepo-com.svg'
}, {
  name: 'TailwindCSS',
  imageURL: 'assets/tailwind-svgrepo-com.svg'
}, {
  name: 'Jest',
  imageURL: 'assets/jest-svgrepo-com.svg'
}, {
  name: 'Webpack',
  imageURL: 'assets/webpack-svgrepo-com.svg'
}, {
  name: 'Babel',
  imageURL: 'assets/babel-svgrepo-com.svg'
}, {
  name: 'ESLint',
  imageURL: 'assets/eslint-svgrepo-com.svg'
}, {
  name: 'Git',
  imageURL: 'assets/git-svgrepo-com.svg'
}, {
  name: 'NPM',
  imageURL: 'assets/npm-svgrepo-com.svg'
}, {
  name: 'React',
  imageURL: 'assets/react-svgrepo-com.svg'
}];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (data_AllSkills);

/***/ }),

/***/ "./src/JS/Projects.js":
/*!****************************!*\
  !*** ./src/JS/Projects.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ render_ProjectsSection)
/* harmony export */ });
/* harmony import */ var scrollreveal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! scrollreveal */ "./node_modules/scrollreveal/dist/scrollreveal.es.js");
/* harmony import */ var _Data_Projects_Data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Data/Projects_Data */ "./src/JS/Data/Projects_Data.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


var projects_content = document.querySelector('.projects__content');
var Projects = /*#__PURE__*/function () {
  function Projects() {
    _classCallCheck(this, Projects);
  }
  _createClass(Projects, [{
    key: "create_NewProject",
    value: function create_NewProject(imageURL, projectTitle, description, technologies, websiteURL, GitHubURL) {
      var projectData = {
        imageURL: imageURL,
        projectTitle: projectTitle,
        description: description,
        technologies: technologies,
        websiteURL: websiteURL,
        GitHubURL: GitHubURL
      };
      _Data_Projects_Data__WEBPACK_IMPORTED_MODULE_1__["default"].push(projectData);
    }
  }, {
    key: "store_Projects",
    value: function store_Projects() {
      this.create_NewProject("assets/website-image__clothes-store.webp", "Landing_Website-template--ClothesStore", "This project is free figma layout that I found on Figma website. <br>\n      The project itself is a sort of clothes store. <br>\n      I used all my FrontEnd skills and build a responsive layout, that matches the figma design <br>\n      Also because it is not a customer job task I choose to add animation some of the buttons on page.\n       ", "HTML5(BEM method), CSS3, JavaScript, Webpack5.", "https://koatkoetl.github.io/Landing_Website-template--ClothesStore/", "https://github.com/KoatKoetl/Landing_Website-template--ClothesStore");
      this.create_NewProject("assets/website-image__education.webp", "Simple-website-template__Sort-of-Education-website", "This project is free figma layout that I found on Figma website. <br>\n      It is a sort of course website where is a lot of different sections about the prices, course links, packages and reviews. <br>\n      I build the website trying to stick to the figma design. <br>\n      Also I choose to add to some elements animations because it is a personal project. Otherwise, I would follow the clients' requirements.\n      ", "HTML5(BEM method), CSS3, JavaScript, Webpack5.", "https://koatkoetl.github.io/Simple-website-template__Sort-of-Education-website/", "https://github.com/KoatKoetl/Simple-website-template__Sort-of-Education-website");
      this.create_NewProject("assets/website-image__my-favorite-music.webp", "My Favorite Music", "This is my personal project created using React and Tailwind for the first time. <br />\n      The design was created during the process of creating the page, and I managed to make it exactly as I imagined it.  <br />\n      The website itself contains sections of my favorite bands <br />\n      These are only two sections because they are all look the same, and two is enough to show all the functions and style design differences in them.\n      ", "HTML5, CSS3, JS, React, TailwindCSS, Vite.", "https://koatkoetl.github.io/Music-Website/", "https://github.com/KoatKoetl/Music-Website");
    }
  }, {
    key: "check_ProjectDataIntegrity",
    value: function check_ProjectDataIntegrity() {
      _Data_Projects_Data__WEBPACK_IMPORTED_MODULE_1__["default"].forEach(function (project) {
        Object.keys(project).forEach(function (key) {
          if (key === 'imageURL' && !project['imageURL']) {
            project['imageURL'] = 'assets/missing-flag-image.webp';
          }
          if (!project[key]) {
            project[key] = 'No available information';
          }
        });
      });
    }
  }, {
    key: "render_Projects",
    value: function render_Projects() {
      this.store_Projects();
      this.check_ProjectDataIntegrity();
      _Data_Projects_Data__WEBPACK_IMPORTED_MODULE_1__["default"].forEach(function (project) {
        projects_content.innerHTML += "\n    <div class = 'projects__project-block'>\n        <div class = 'projects__image-block'>\n            <img src = '".concat(project.imageURL, "' class = 'projects__image' alt='Project: ").concat(project.projectTitle, " main page image'>\n        </div>\n        <div class='projects__info-block'>\n            <h3 class = 'projects__item-title section__title--h3'>").concat(project.projectTitle, "</h3>\n            <div class='projects__desctiption-block'>\n            <h4 class='projects__description-title section__title--h4'>About this project</h4>\n            <p class = 'projects__content-description section__text'>").concat(project.description, "</p>\n            </div>\n            <p class = 'projects__technologies section__text'><b>Technologies: <br></b> ").concat(project.technologies, "</p>\n            <div class = 'projects__nav'>\n                <a href = '").concat(project.websiteURL, "' class = 'projects__nav-link section__text' target='_blank'>Live Preview <img src='assets/website-svgrepo-com.svg' class='projects__link-icon projects__link-icon--webpage' alt='Webpage dark icon'></a>\n                <a href = '").concat(project.GitHubURL, "' class = 'projects__nav-link section__text' target='_blank'>GitHub <img src='assets/github-svgrepo-com--project-link-icon.svg' class='projects__link-icon projects__link-icon--github' alt='GitHub dark icon'></a>\n            </div>\n        </div> \n    </div>");
      });
      var allProjects = document.querySelectorAll('.projects__project-block');
      allProjects.forEach(function (project) {
        return (0,scrollreveal__WEBPACK_IMPORTED_MODULE_0__["default"])().reveal(project, {
          distance: '200px',
          reset: true,
          origin: 'left'
        });
      });
    }
  }]);
  return Projects;
}();
var newProject = new Projects();
function render_ProjectsSection() {
  newProject.render_Projects();
}

/***/ }),

/***/ "./src/JS/Skills.js":
/*!**************************!*\
  !*** ./src/JS/Skills.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SkillSets: () => (/* binding */ SkillSets),
/* harmony export */   enable_SkillSection: () => (/* binding */ enable_SkillSection)
/* harmony export */ });
/* harmony import */ var scrollreveal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! scrollreveal */ "./node_modules/scrollreveal/dist/scrollreveal.es.js");
/* harmony import */ var _Data_Skills_Data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Data/Skills_Data */ "./src/JS/Data/Skills_Data.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


var SkillSets = /*#__PURE__*/function () {
  function SkillSets(data_Skills) {
    _classCallCheck(this, SkillSets);
    this.allSkills = data_Skills;
  }

  // Check if data_AllSkills missing at all, and change name and imageURL to default values
  _createClass(SkillSets, [{
    key: "check_dataIntegrity",
    value: function check_dataIntegrity() {
      var dataLength = this.allSkills.length;
      if (dataLength !== 0) {
        return this.allSkills.map(function (skill) {
          if (!skill.name) {
            skill.name = 'No info';
          }
          if (!skill.imageURL) {
            skill.imageURL = 'assets/missing-skill-image.svg';
          }
          return {
            name: skill.name,
            imageURL: skill.imageURL
          };
        });
      } else {
        return [];
      }
    }

    // Render the skillSet on page
  }, {
    key: "render_skills",
    value: function render_skills() {
      var verified_SkillsData = this.check_dataIntegrity();
      var skills_section = document.querySelector('.skills__content-cards');
      verified_SkillsData.forEach(function (skill) {
        skills_section.innerHTML += "<div class = 'skills__card'>\n        <img src = '".concat(skill.imageURL, "' alt = '").concat(skill.name, " icon' class = 'skills__card-icon'>\n        <h4 class = 'skills__card-title section__title--h4'>").concat(skill.name, "</h4>\n      </div>");
      });

      // Animate skill__card to appear one after another
      var allSkillCards = document.querySelectorAll('.skills__card');
      allSkillCards.forEach(function (card, index) {
        return (0,scrollreveal__WEBPACK_IMPORTED_MODULE_0__["default"])().reveal(card, {
          distance: '50px',
          origin: 'top',
          delay: index * 300
        });
      });
    }
  }]);
  return SkillSets;
}();
var skillSet = new SkillSets(_Data_Skills_Data__WEBPACK_IMPORTED_MODULE_1__["default"]);
function enable_SkillSection() {
  skillSet.render_skills();
}


/***/ }),

/***/ "./node_modules/is-dom-node-list/dist/is-dom-node-list.es.js":
/*!*******************************************************************!*\
  !*** ./node_modules/is-dom-node-list/dist/is-dom-node-list.es.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var is_dom_node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! is-dom-node */ "./node_modules/is-dom-node/dist/is-dom-node.es.js");
/*! @license is-dom-node-list v1.2.1

	Copyright 2018 Fisssion LLC.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.

*/


function isDomNodeList(x) {
	var prototypeToString = Object.prototype.toString.call(x);
	var regex = /^\[object (HTMLCollection|NodeList|Object)\]$/;

	return typeof window.NodeList === 'object'
		? x instanceof window.NodeList
		: x !== null &&
				typeof x === 'object' &&
				typeof x.length === 'number' &&
				regex.test(prototypeToString) &&
				(x.length === 0 || (0,is_dom_node__WEBPACK_IMPORTED_MODULE_0__["default"])(x[0]))
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isDomNodeList);


/***/ }),

/***/ "./node_modules/is-dom-node/dist/is-dom-node.es.js":
/*!*********************************************************!*\
  !*** ./node_modules/is-dom-node/dist/is-dom-node.es.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/*! @license is-dom-node v1.0.4

	Copyright 2018 Fisssion LLC.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.

*/
function isDomNode(x) {
	return typeof window.Node === 'object'
		? x instanceof window.Node
		: x !== null &&
				typeof x === 'object' &&
				typeof x.nodeType === 'number' &&
				typeof x.nodeName === 'string'
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isDomNode);


/***/ }),

/***/ "./src/CSS/style.css":
/*!***************************!*\
  !*** ./src/CSS/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/miniraf/dist/miniraf.es.js":
/*!*************************************************!*\
  !*** ./node_modules/miniraf/dist/miniraf.es.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/*! @license miniraf v1.0.0

	Copyright 2018 Fisssion LLC.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.

*/
var polyfill = (function () {
	var clock = Date.now();

	return function (callback) {
		var currentTime = Date.now();
		if (currentTime - clock > 16) {
			clock = currentTime;
			callback(currentTime);
		} else {
			setTimeout(function () { return polyfill(callback); }, 0);
		}
	}
})();

var index = window.requestAnimationFrame ||
	window.webkitRequestAnimationFrame ||
	window.mozRequestAnimationFrame ||
	polyfill;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (index);


/***/ }),

/***/ "./node_modules/rematrix/dist/rematrix.es.js":
/*!***************************************************!*\
  !*** ./node_modules/rematrix/dist/rematrix.es.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   format: () => (/* binding */ format),
/* harmony export */   identity: () => (/* binding */ identity),
/* harmony export */   inverse: () => (/* binding */ inverse),
/* harmony export */   multiply: () => (/* binding */ multiply),
/* harmony export */   parse: () => (/* binding */ parse),
/* harmony export */   rotate: () => (/* binding */ rotate),
/* harmony export */   rotateX: () => (/* binding */ rotateX),
/* harmony export */   rotateY: () => (/* binding */ rotateY),
/* harmony export */   rotateZ: () => (/* binding */ rotateZ),
/* harmony export */   scale: () => (/* binding */ scale),
/* harmony export */   scaleX: () => (/* binding */ scaleX),
/* harmony export */   scaleY: () => (/* binding */ scaleY),
/* harmony export */   scaleZ: () => (/* binding */ scaleZ),
/* harmony export */   skew: () => (/* binding */ skew),
/* harmony export */   skewX: () => (/* binding */ skewX),
/* harmony export */   skewY: () => (/* binding */ skewY),
/* harmony export */   toString: () => (/* binding */ toString),
/* harmony export */   translate: () => (/* binding */ translate),
/* harmony export */   translateX: () => (/* binding */ translateX),
/* harmony export */   translateY: () => (/* binding */ translateY),
/* harmony export */   translateZ: () => (/* binding */ translateZ)
/* harmony export */ });
/*! @license Rematrix v0.3.0

	Copyright 2018 Julian Lloyd.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in
	all copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	THE SOFTWARE.
*/
/**
 * @module Rematrix
 */

/**
 * Transformation matrices in the browser come in two flavors:
 *
 *  - `matrix` using 6 values (short)
 *  - `matrix3d` using 16 values (long)
 *
 * This utility follows this [conversion guide](https://goo.gl/EJlUQ1)
 * to expand short form matrices to their equivalent long form.
 *
 * @param  {array} source - Accepts both short and long form matrices.
 * @return {array}
 */
function format(source) {
	if (source.constructor !== Array) {
		throw new TypeError('Expected array.')
	}
	if (source.length === 16) {
		return source
	}
	if (source.length === 6) {
		var matrix = identity();
		matrix[0] = source[0];
		matrix[1] = source[1];
		matrix[4] = source[2];
		matrix[5] = source[3];
		matrix[12] = source[4];
		matrix[13] = source[5];
		return matrix
	}
	throw new RangeError('Expected array with either 6 or 16 values.')
}

/**
 * Returns a matrix representing no transformation. The product of any matrix
 * multiplied by the identity matrix will be the original matrix.
 *
 * > **Tip:** Similar to how `5 * 1 === 5`, where `1` is the identity.
 *
 * @return {array}
 */
function identity() {
	var matrix = [];
	for (var i = 0; i < 16; i++) {
		i % 5 == 0 ? matrix.push(1) : matrix.push(0);
	}
	return matrix
}

/**
 * Returns a matrix describing the inverse transformation of the source
 * matrix. The product of any matrix multiplied by its inverse will be the
 * identity matrix.
 *
 * > **Tip:** Similar to how `5 * (1/5) === 1`, where `1/5` is the inverse.
 *
 * @param  {array} source - Accepts both short and long form matrices.
 * @return {array}
 */
function inverse(source) {
	var m = format(source);

	var s0 = m[0] * m[5] - m[4] * m[1];
	var s1 = m[0] * m[6] - m[4] * m[2];
	var s2 = m[0] * m[7] - m[4] * m[3];
	var s3 = m[1] * m[6] - m[5] * m[2];
	var s4 = m[1] * m[7] - m[5] * m[3];
	var s5 = m[2] * m[7] - m[6] * m[3];

	var c5 = m[10] * m[15] - m[14] * m[11];
	var c4 = m[9] * m[15] - m[13] * m[11];
	var c3 = m[9] * m[14] - m[13] * m[10];
	var c2 = m[8] * m[15] - m[12] * m[11];
	var c1 = m[8] * m[14] - m[12] * m[10];
	var c0 = m[8] * m[13] - m[12] * m[9];

	var determinant = 1 / (s0 * c5 - s1 * c4 + s2 * c3 + s3 * c2 - s4 * c1 + s5 * c0);

	if (isNaN(determinant) || determinant === Infinity) {
		throw new Error('Inverse determinant attempted to divide by zero.')
	}

	return [
		(m[5] * c5 - m[6] * c4 + m[7] * c3) * determinant,
		(-m[1] * c5 + m[2] * c4 - m[3] * c3) * determinant,
		(m[13] * s5 - m[14] * s4 + m[15] * s3) * determinant,
		(-m[9] * s5 + m[10] * s4 - m[11] * s3) * determinant,

		(-m[4] * c5 + m[6] * c2 - m[7] * c1) * determinant,
		(m[0] * c5 - m[2] * c2 + m[3] * c1) * determinant,
		(-m[12] * s5 + m[14] * s2 - m[15] * s1) * determinant,
		(m[8] * s5 - m[10] * s2 + m[11] * s1) * determinant,

		(m[4] * c4 - m[5] * c2 + m[7] * c0) * determinant,
		(-m[0] * c4 + m[1] * c2 - m[3] * c0) * determinant,
		(m[12] * s4 - m[13] * s2 + m[15] * s0) * determinant,
		(-m[8] * s4 + m[9] * s2 - m[11] * s0) * determinant,

		(-m[4] * c3 + m[5] * c1 - m[6] * c0) * determinant,
		(m[0] * c3 - m[1] * c1 + m[2] * c0) * determinant,
		(-m[12] * s3 + m[13] * s1 - m[14] * s0) * determinant,
		(m[8] * s3 - m[9] * s1 + m[10] * s0) * determinant
	]
}

/**
 * Returns a 4x4 matrix describing the combined transformations
 * of both arguments.
 *
 * > **Note:** Order is very important. For example, rotating 45°
 * along the Z-axis, followed by translating 500 pixels along the
 * Y-axis... is not the same as translating 500 pixels along the
 * Y-axis, followed by rotating 45° along on the Z-axis.
 *
 * @param  {array} m - Accepts both short and long form matrices.
 * @param  {array} x - Accepts both short and long form matrices.
 * @return {array}
 */
function multiply(m, x) {
	var fm = format(m);
	var fx = format(x);
	var product = [];

	for (var i = 0; i < 4; i++) {
		var row = [fm[i], fm[i + 4], fm[i + 8], fm[i + 12]];
		for (var j = 0; j < 4; j++) {
			var k = j * 4;
			var col = [fx[k], fx[k + 1], fx[k + 2], fx[k + 3]];
			var result =
				row[0] * col[0] + row[1] * col[1] + row[2] * col[2] + row[3] * col[3];

			product[i + k] = result;
		}
	}

	return product
}

/**
 * Attempts to return a 4x4 matrix describing the CSS transform
 * matrix passed in, but will return the identity matrix as a
 * fallback.
 *
 * > **Tip:** This method is used to convert a CSS matrix (retrieved as a
 * `string` from computed styles) to its equivalent array format.
 *
 * @param  {string} source - `matrix` or `matrix3d` CSS Transform value.
 * @return {array}
 */
function parse(source) {
	if (typeof source === 'string') {
		var match = source.match(/matrix(3d)?\(([^)]+)\)/);
		if (match) {
			var raw = match[2].split(', ').map(parseFloat);
			return format(raw)
		}
	}
	return identity()
}

/**
 * Returns a 4x4 matrix describing Z-axis rotation.
 *
 * > **Tip:** This is just an alias for `Rematrix.rotateZ` for parity with CSS
 *
 * @param  {number} angle - Measured in degrees.
 * @return {array}
 */
function rotate(angle) {
	return rotateZ(angle)
}

/**
 * Returns a 4x4 matrix describing X-axis rotation.
 *
 * @param  {number} angle - Measured in degrees.
 * @return {array}
 */
function rotateX(angle) {
	var theta = Math.PI / 180 * angle;
	var matrix = identity();

	matrix[5] = matrix[10] = Math.cos(theta);
	matrix[6] = matrix[9] = Math.sin(theta);
	matrix[9] *= -1;

	return matrix
}

/**
 * Returns a 4x4 matrix describing Y-axis rotation.
 *
 * @param  {number} angle - Measured in degrees.
 * @return {array}
 */
function rotateY(angle) {
	var theta = Math.PI / 180 * angle;
	var matrix = identity();

	matrix[0] = matrix[10] = Math.cos(theta);
	matrix[2] = matrix[8] = Math.sin(theta);
	matrix[2] *= -1;

	return matrix
}

/**
 * Returns a 4x4 matrix describing Z-axis rotation.
 *
 * @param  {number} angle - Measured in degrees.
 * @return {array}
 */
function rotateZ(angle) {
	var theta = Math.PI / 180 * angle;
	var matrix = identity();

	matrix[0] = matrix[5] = Math.cos(theta);
	matrix[1] = matrix[4] = Math.sin(theta);
	matrix[4] *= -1;

	return matrix
}

/**
 * Returns a 4x4 matrix describing 2D scaling. The first argument
 * is used for both X and Y-axis scaling, unless an optional
 * second argument is provided to explicitly define Y-axis scaling.
 *
 * @param  {number} scalar    - Decimal multiplier.
 * @param  {number} [scalarY] - Decimal multiplier.
 * @return {array}
 */
function scale(scalar, scalarY) {
	var matrix = identity();

	matrix[0] = scalar;
	matrix[5] = typeof scalarY === 'number' ? scalarY : scalar;

	return matrix
}

/**
 * Returns a 4x4 matrix describing X-axis scaling.
 *
 * @param  {number} scalar - Decimal multiplier.
 * @return {array}
 */
function scaleX(scalar) {
	var matrix = identity();
	matrix[0] = scalar;
	return matrix
}

/**
 * Returns a 4x4 matrix describing Y-axis scaling.
 *
 * @param  {number} scalar - Decimal multiplier.
 * @return {array}
 */
function scaleY(scalar) {
	var matrix = identity();
	matrix[5] = scalar;
	return matrix
}

/**
 * Returns a 4x4 matrix describing Z-axis scaling.
 *
 * @param  {number} scalar - Decimal multiplier.
 * @return {array}
 */
function scaleZ(scalar) {
	var matrix = identity();
	matrix[10] = scalar;
	return matrix
}

/**
 * Returns a 4x4 matrix describing shear. The first argument
 * defines X-axis shearing, and an optional second argument
 * defines Y-axis shearing.
 *
 * @param  {number} angleX   - Measured in degrees.
 * @param  {number} [angleY] - Measured in degrees.
 * @return {array}
 */
function skew(angleX, angleY) {
	var thetaX = Math.PI / 180 * angleX;
	var matrix = identity();

	matrix[4] = Math.tan(thetaX);

	if (angleY) {
		var thetaY = Math.PI / 180 * angleY;
		matrix[1] = Math.tan(thetaY);
	}

	return matrix
}

/**
 * Returns a 4x4 matrix describing X-axis shear.
 *
 * @param  {number} angle - Measured in degrees.
 * @return {array}
 */
function skewX(angle) {
	var theta = Math.PI / 180 * angle;
	var matrix = identity();

	matrix[4] = Math.tan(theta);

	return matrix
}

/**
 * Returns a 4x4 matrix describing Y-axis shear.
 *
 * @param  {number} angle - Measured in degrees
 * @return {array}
 */
function skewY(angle) {
	var theta = Math.PI / 180 * angle;
	var matrix = identity();

	matrix[1] = Math.tan(theta);

	return matrix
}

/**
 * Returns a CSS Transform property value equivalent to the source matrix.
 *
 * @param  {array} source - Accepts both short and long form matrices.
 * @return {string}
 */
function toString(source) {
	return ("matrix3d(" + (format(source).join(', ')) + ")")
}

/**
 * Returns a 4x4 matrix describing 2D translation. The first
 * argument defines X-axis translation, and an optional second
 * argument defines Y-axis translation.
 *
 * @param  {number} distanceX   - Measured in pixels.
 * @param  {number} [distanceY] - Measured in pixels.
 * @return {array}
 */
function translate(distanceX, distanceY) {
	var matrix = identity();
	matrix[12] = distanceX;

	if (distanceY) {
		matrix[13] = distanceY;
	}

	return matrix
}

/**
 * Returns a 4x4 matrix describing X-axis translation.
 *
 * @param  {number} distance - Measured in pixels.
 * @return {array}
 */
function translateX(distance) {
	var matrix = identity();
	matrix[12] = distance;
	return matrix
}

/**
 * Returns a 4x4 matrix describing Y-axis translation.
 *
 * @param  {number} distance - Measured in pixels.
 * @return {array}
 */
function translateY(distance) {
	var matrix = identity();
	matrix[13] = distance;
	return matrix
}

/**
 * Returns a 4x4 matrix describing Z-axis translation.
 *
 * @param  {number} distance - Measured in pixels.
 * @return {array}
 */
function translateZ(distance) {
	var matrix = identity();
	matrix[14] = distance;
	return matrix
}




/***/ }),

/***/ "./node_modules/scrollreveal/dist/scrollreveal.es.js":
/*!***********************************************************!*\
  !*** ./node_modules/scrollreveal/dist/scrollreveal.es.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tealight__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tealight */ "./node_modules/tealight/dist/tealight.es.js");
/* harmony import */ var rematrix__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rematrix */ "./node_modules/rematrix/dist/rematrix.es.js");
/* harmony import */ var miniraf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! miniraf */ "./node_modules/miniraf/dist/miniraf.es.js");
/*! @license ScrollReveal v4.0.9

	Copyright 2021 Fisssion LLC.

	Licensed under the GNU General Public License 3.0 for
	compatible open source projects and non-commercial use.

	For commercial sites, themes, projects, and applications,
	keep your source code private/proprietary by purchasing
	a commercial license from https://scrollrevealjs.org/
*/




var defaults = {
	delay: 0,
	distance: '0',
	duration: 600,
	easing: 'cubic-bezier(0.5, 0, 0, 1)',
	interval: 0,
	opacity: 0,
	origin: 'bottom',
	rotate: {
		x: 0,
		y: 0,
		z: 0
	},
	scale: 1,
	cleanup: false,
	container: document.documentElement,
	desktop: true,
	mobile: true,
	reset: false,
	useDelay: 'always',
	viewFactor: 0.0,
	viewOffset: {
		top: 0,
		right: 0,
		bottom: 0,
		left: 0
	},
	afterReset: function afterReset() {},
	afterReveal: function afterReveal() {},
	beforeReset: function beforeReset() {},
	beforeReveal: function beforeReveal() {}
};

function failure() {
	document.documentElement.classList.remove('sr');

	return {
		clean: function clean() {},
		destroy: function destroy() {},
		reveal: function reveal() {},
		sync: function sync() {},
		get noop() {
			return true
		}
	}
}

function success() {
	document.documentElement.classList.add('sr');

	if (document.body) {
		document.body.style.height = '100%';
	} else {
		document.addEventListener('DOMContentLoaded', function () {
			document.body.style.height = '100%';
		});
	}
}

var mount = { success: success, failure: failure };

function isObject(x) {
	return (
		x !== null &&
		x instanceof Object &&
		(x.constructor === Object ||
			Object.prototype.toString.call(x) === '[object Object]')
	)
}

function each(collection, callback) {
	if (isObject(collection)) {
		var keys = Object.keys(collection);
		return keys.forEach(function (key) { return callback(collection[key], key, collection); })
	}
	if (collection instanceof Array) {
		return collection.forEach(function (item, i) { return callback(item, i, collection); })
	}
	throw new TypeError('Expected either an array or object literal.')
}

function logger(message) {
	var details = [], len = arguments.length - 1;
	while ( len-- > 0 ) details[ len ] = arguments[ len + 1 ];

	if (this.constructor.debug && console) {
		var report = "%cScrollReveal: " + message;
		details.forEach(function (detail) { return (report += "\n — " + detail); });
		console.log(report, 'color: #ea654b;'); // eslint-disable-line no-console
	}
}

function rinse() {
	var this$1 = this;

	var struct = function () { return ({
		active: [],
		stale: []
	}); };

	var elementIds = struct();
	var sequenceIds = struct();
	var containerIds = struct();

	/**
	 * Take stock of active element IDs.
	 */
	try {
		each((0,tealight__WEBPACK_IMPORTED_MODULE_0__["default"])('[data-sr-id]'), function (node) {
			var id = parseInt(node.getAttribute('data-sr-id'));
			elementIds.active.push(id);
		});
	} catch (e) {
		throw e
	}
	/**
	 * Destroy stale elements.
	 */
	each(this.store.elements, function (element) {
		if (elementIds.active.indexOf(element.id) === -1) {
			elementIds.stale.push(element.id);
		}
	});

	each(elementIds.stale, function (staleId) { return delete this$1.store.elements[staleId]; });

	/**
	 * Take stock of active container and sequence IDs.
	 */
	each(this.store.elements, function (element) {
		if (containerIds.active.indexOf(element.containerId) === -1) {
			containerIds.active.push(element.containerId);
		}
		if (element.hasOwnProperty('sequence')) {
			if (sequenceIds.active.indexOf(element.sequence.id) === -1) {
				sequenceIds.active.push(element.sequence.id);
			}
		}
	});

	/**
	 * Destroy stale containers.
	 */
	each(this.store.containers, function (container) {
		if (containerIds.active.indexOf(container.id) === -1) {
			containerIds.stale.push(container.id);
		}
	});

	each(containerIds.stale, function (staleId) {
		var stale = this$1.store.containers[staleId].node;
		stale.removeEventListener('scroll', this$1.delegate);
		stale.removeEventListener('resize', this$1.delegate);
		delete this$1.store.containers[staleId];
	});

	/**
	 * Destroy stale sequences.
	 */
	each(this.store.sequences, function (sequence) {
		if (sequenceIds.active.indexOf(sequence.id) === -1) {
			sequenceIds.stale.push(sequence.id);
		}
	});

	each(sequenceIds.stale, function (staleId) { return delete this$1.store.sequences[staleId]; });
}

var getPrefixedCssProp = (function () {
	var properties = {};
	var style = document.documentElement.style;

	function getPrefixedCssProperty(name, source) {
		if ( source === void 0 ) source = style;

		if (name && typeof name === 'string') {
			if (properties[name]) {
				return properties[name]
			}
			if (typeof source[name] === 'string') {
				return (properties[name] = name)
			}
			if (typeof source[("-webkit-" + name)] === 'string') {
				return (properties[name] = "-webkit-" + name)
			}
			throw new RangeError(("Unable to find \"" + name + "\" style property."))
		}
		throw new TypeError('Expected a string.')
	}

	getPrefixedCssProperty.clearCache = function () { return (properties = {}); };

	return getPrefixedCssProperty
})();

function style(element) {
	var computed = window.getComputedStyle(element.node);
	var position = computed.position;
	var config = element.config;

	/**
	 * Generate inline styles
	 */
	var inline = {};
	var inlineStyle = element.node.getAttribute('style') || '';
	var inlineMatch = inlineStyle.match(/[\w-]+\s*:\s*[^;]+\s*/gi) || [];

	inline.computed = inlineMatch ? inlineMatch.map(function (m) { return m.trim(); }).join('; ') + ';' : '';

	inline.generated = inlineMatch.some(function (m) { return m.match(/visibility\s?:\s?visible/i); })
		? inline.computed
		: inlineMatch.concat( ['visibility: visible']).map(function (m) { return m.trim(); }).join('; ') + ';';

	/**
	 * Generate opacity styles
	 */
	var computedOpacity = parseFloat(computed.opacity);
	var configOpacity = !isNaN(parseFloat(config.opacity))
		? parseFloat(config.opacity)
		: parseFloat(computed.opacity);

	var opacity = {
		computed: computedOpacity !== configOpacity ? ("opacity: " + computedOpacity + ";") : '',
		generated: computedOpacity !== configOpacity ? ("opacity: " + configOpacity + ";") : ''
	};

	/**
	 * Generate transformation styles
	 */
	var transformations = [];

	if (parseFloat(config.distance)) {
		var axis = config.origin === 'top' || config.origin === 'bottom' ? 'Y' : 'X';

		/**
		 * Let’s make sure our our pixel distances are negative for top and left.
		 * e.g. { origin: 'top', distance: '25px' } starts at `top: -25px` in CSS.
		 */
		var distance = config.distance;
		if (config.origin === 'top' || config.origin === 'left') {
			distance = /^-/.test(distance) ? distance.substr(1) : ("-" + distance);
		}

		var ref = distance.match(/(^-?\d+\.?\d?)|(em$|px$|%$)/g);
		var value = ref[0];
		var unit = ref[1];

		switch (unit) {
			case 'em':
				distance = parseInt(computed.fontSize) * value;
				break
			case 'px':
				distance = value;
				break
			case '%':
				/**
				 * Here we use `getBoundingClientRect` instead of
				 * the existing data attached to `element.geometry`
				 * because only the former includes any transformations
				 * current applied to the element.
				 *
				 * If that behavior ends up being unintuitive, this
				 * logic could instead utilize `element.geometry.height`
				 * and `element.geoemetry.width` for the distance calculation
				 */
				distance =
					axis === 'Y'
						? (element.node.getBoundingClientRect().height * value) / 100
						: (element.node.getBoundingClientRect().width * value) / 100;
				break
			default:
				throw new RangeError('Unrecognized or missing distance unit.')
		}

		if (axis === 'Y') {
			transformations.push((0,rematrix__WEBPACK_IMPORTED_MODULE_1__.translateY)(distance));
		} else {
			transformations.push((0,rematrix__WEBPACK_IMPORTED_MODULE_1__.translateX)(distance));
		}
	}

	if (config.rotate.x) { transformations.push((0,rematrix__WEBPACK_IMPORTED_MODULE_1__.rotateX)(config.rotate.x)); }
	if (config.rotate.y) { transformations.push((0,rematrix__WEBPACK_IMPORTED_MODULE_1__.rotateY)(config.rotate.y)); }
	if (config.rotate.z) { transformations.push((0,rematrix__WEBPACK_IMPORTED_MODULE_1__.rotateZ)(config.rotate.z)); }
	if (config.scale !== 1) {
		if (config.scale === 0) {
			/**
			 * The CSS Transforms matrix interpolation specification
			 * basically disallows transitions of non-invertible
			 * matrixes, which means browsers won't transition
			 * elements with zero scale.
			 *
			 * That’s inconvenient for the API and developer
			 * experience, so we simply nudge their value
			 * slightly above zero; this allows browsers
			 * to transition our element as expected.
			 *
			 * `0.0002` was the smallest number
			 * that performed across browsers.
			 */
			transformations.push((0,rematrix__WEBPACK_IMPORTED_MODULE_1__.scale)(0.0002));
		} else {
			transformations.push((0,rematrix__WEBPACK_IMPORTED_MODULE_1__.scale)(config.scale));
		}
	}

	var transform = {};
	if (transformations.length) {
		transform.property = getPrefixedCssProp('transform');
		/**
		 * The default computed transform value should be one of:
		 * undefined || 'none' || 'matrix()' || 'matrix3d()'
		 */
		transform.computed = {
			raw: computed[transform.property],
			matrix: (0,rematrix__WEBPACK_IMPORTED_MODULE_1__.parse)(computed[transform.property])
		};

		transformations.unshift(transform.computed.matrix);
		var product = transformations.reduce(rematrix__WEBPACK_IMPORTED_MODULE_1__.multiply);

		transform.generated = {
			initial: ((transform.property) + ": matrix3d(" + (product.join(', ')) + ");"),
			final: ((transform.property) + ": matrix3d(" + (transform.computed.matrix.join(', ')) + ");")
		};
	} else {
		transform.generated = {
			initial: '',
			final: ''
		};
	}

	/**
	 * Generate transition styles
	 */
	var transition = {};
	if (opacity.generated || transform.generated.initial) {
		transition.property = getPrefixedCssProp('transition');
		transition.computed = computed[transition.property];
		transition.fragments = [];

		var delay = config.delay;
		var duration = config.duration;
		var easing = config.easing;

		if (opacity.generated) {
			transition.fragments.push({
				delayed: ("opacity " + (duration / 1000) + "s " + easing + " " + (delay / 1000) + "s"),
				instant: ("opacity " + (duration / 1000) + "s " + easing + " 0s")
			});
		}

		if (transform.generated.initial) {
			transition.fragments.push({
				delayed: ((transform.property) + " " + (duration / 1000) + "s " + easing + " " + (delay / 1000) + "s"),
				instant: ((transform.property) + " " + (duration / 1000) + "s " + easing + " 0s")
			});
		}

		/**
		 * The default computed transition property should be undefined, or one of:
		 * '' || 'none 0s ease 0s' || 'all 0s ease 0s' || 'all 0s 0s cubic-bezier()'
		 */
		var hasCustomTransition =
			transition.computed && !transition.computed.match(/all 0s|none 0s/);

		if (hasCustomTransition) {
			transition.fragments.unshift({
				delayed: transition.computed,
				instant: transition.computed
			});
		}

		var composed = transition.fragments.reduce(
			function (composition, fragment, i) {
				composition.delayed += i === 0 ? fragment.delayed : (", " + (fragment.delayed));
				composition.instant += i === 0 ? fragment.instant : (", " + (fragment.instant));
				return composition
			},
			{
				delayed: '',
				instant: ''
			}
		);

		transition.generated = {
			delayed: ((transition.property) + ": " + (composed.delayed) + ";"),
			instant: ((transition.property) + ": " + (composed.instant) + ";")
		};
	} else {
		transition.generated = {
			delayed: '',
			instant: ''
		};
	}

	return {
		inline: inline,
		opacity: opacity,
		position: position,
		transform: transform,
		transition: transition
	}
}

/**
 * apply a CSS string to an element using the CSSOM (element.style) rather
 * than setAttribute, which may violate the content security policy.
 *
 * @param {Node}   [el]  Element to receive styles.
 * @param {string} [declaration] Styles to apply.
 */
function applyStyle (el, declaration) {
	declaration.split(';').forEach(function (pair) {
		var ref = pair.split(':');
		var property = ref[0];
		var value = ref.slice(1);
		if (property && value) {
			el.style[property.trim()] = value.join(':');
		}
	});
}

function clean(target) {
	var this$1 = this;

	var dirty;
	try {
		each((0,tealight__WEBPACK_IMPORTED_MODULE_0__["default"])(target), function (node) {
			var id = node.getAttribute('data-sr-id');
			if (id !== null) {
				dirty = true;
				var element = this$1.store.elements[id];
				if (element.callbackTimer) {
					window.clearTimeout(element.callbackTimer.clock);
				}
				applyStyle(element.node, element.styles.inline.generated);
				node.removeAttribute('data-sr-id');
				delete this$1.store.elements[id];
			}
		});
	} catch (e) {
		return logger.call(this, 'Clean failed.', e.message)
	}

	if (dirty) {
		try {
			rinse.call(this);
		} catch (e) {
			return logger.call(this, 'Clean failed.', e.message)
		}
	}
}

function destroy() {
	var this$1 = this;

	/**
	 * Remove all generated styles and element ids
	 */
	each(this.store.elements, function (element) {
		applyStyle(element.node, element.styles.inline.generated);
		element.node.removeAttribute('data-sr-id');
	});

	/**
	 * Remove all event listeners.
	 */
	each(this.store.containers, function (container) {
		var target =
			container.node === document.documentElement ? window : container.node;
		target.removeEventListener('scroll', this$1.delegate);
		target.removeEventListener('resize', this$1.delegate);
	});

	/**
	 * Clear all data from the store
	 */
	this.store = {
		containers: {},
		elements: {},
		history: [],
		sequences: {}
	};
}

function deepAssign(target) {
	var sources = [], len = arguments.length - 1;
	while ( len-- > 0 ) sources[ len ] = arguments[ len + 1 ];

	if (isObject(target)) {
		each(sources, function (source) {
			each(source, function (data, key) {
				if (isObject(data)) {
					if (!target[key] || !isObject(target[key])) {
						target[key] = {};
					}
					deepAssign(target[key], data);
				} else {
					target[key] = data;
				}
			});
		});
		return target
	} else {
		throw new TypeError('Target must be an object literal.')
	}
}

function isMobile(agent) {
	if ( agent === void 0 ) agent = navigator.userAgent;

	return /Android|iPhone|iPad|iPod/i.test(agent)
}

var nextUniqueId = (function () {
	var uid = 0;
	return function () { return uid++; }
})();

function initialize() {
	var this$1 = this;

	rinse.call(this);

	each(this.store.elements, function (element) {
		var styles = [element.styles.inline.generated];

		if (element.visible) {
			styles.push(element.styles.opacity.computed);
			styles.push(element.styles.transform.generated.final);
			element.revealed = true;
		} else {
			styles.push(element.styles.opacity.generated);
			styles.push(element.styles.transform.generated.initial);
			element.revealed = false;
		}

		applyStyle(element.node, styles.filter(function (s) { return s !== ''; }).join(' '));
	});

	each(this.store.containers, function (container) {
		var target =
			container.node === document.documentElement ? window : container.node;
		target.addEventListener('scroll', this$1.delegate);
		target.addEventListener('resize', this$1.delegate);
	});

	/**
	 * Manually invoke delegate once to capture
	 * element and container dimensions, container
	 * scroll position, and trigger any valid reveals
	 */
	this.delegate();

	/**
	 * Wipe any existing `setTimeout` now
	 * that initialization has completed.
	 */
	this.initTimeout = null;
}

function animate(element, force) {
	if ( force === void 0 ) force = {};

	var pristine = force.pristine || this.pristine;
	var delayed =
		element.config.useDelay === 'always' ||
		(element.config.useDelay === 'onload' && pristine) ||
		(element.config.useDelay === 'once' && !element.seen);

	var shouldReveal = element.visible && !element.revealed;
	var shouldReset = !element.visible && element.revealed && element.config.reset;

	if (force.reveal || shouldReveal) {
		return triggerReveal.call(this, element, delayed)
	}

	if (force.reset || shouldReset) {
		return triggerReset.call(this, element)
	}
}

function triggerReveal(element, delayed) {
	var styles = [
		element.styles.inline.generated,
		element.styles.opacity.computed,
		element.styles.transform.generated.final
	];
	if (delayed) {
		styles.push(element.styles.transition.generated.delayed);
	} else {
		styles.push(element.styles.transition.generated.instant);
	}
	element.revealed = element.seen = true;
	applyStyle(element.node, styles.filter(function (s) { return s !== ''; }).join(' '));
	registerCallbacks.call(this, element, delayed);
}

function triggerReset(element) {
	var styles = [
		element.styles.inline.generated,
		element.styles.opacity.generated,
		element.styles.transform.generated.initial,
		element.styles.transition.generated.instant
	];
	element.revealed = false;
	applyStyle(element.node, styles.filter(function (s) { return s !== ''; }).join(' '));
	registerCallbacks.call(this, element);
}

function registerCallbacks(element, isDelayed) {
	var this$1 = this;

	var duration = isDelayed
		? element.config.duration + element.config.delay
		: element.config.duration;

	var beforeCallback = element.revealed
		? element.config.beforeReveal
		: element.config.beforeReset;

	var afterCallback = element.revealed
		? element.config.afterReveal
		: element.config.afterReset;

	var elapsed = 0;
	if (element.callbackTimer) {
		elapsed = Date.now() - element.callbackTimer.start;
		window.clearTimeout(element.callbackTimer.clock);
	}

	beforeCallback(element.node);

	element.callbackTimer = {
		start: Date.now(),
		clock: window.setTimeout(function () {
			afterCallback(element.node);
			element.callbackTimer = null;
			if (element.revealed && !element.config.reset && element.config.cleanup) {
				clean.call(this$1, element.node);
			}
		}, duration - elapsed)
	};
}

function sequence(element, pristine) {
	if ( pristine === void 0 ) pristine = this.pristine;

	/**
	 * We first check if the element should reset.
	 */
	if (!element.visible && element.revealed && element.config.reset) {
		return animate.call(this, element, { reset: true })
	}

	var seq = this.store.sequences[element.sequence.id];
	var i = element.sequence.index;

	if (seq) {
		var visible = new SequenceModel(seq, 'visible', this.store);
		var revealed = new SequenceModel(seq, 'revealed', this.store);

		seq.models = { visible: visible, revealed: revealed };

		/**
		 * If the sequence has no revealed members,
		 * then we reveal the first visible element
		 * within that sequence.
		 *
		 * The sequence then cues a recursive call
		 * in both directions.
		 */
		if (!revealed.body.length) {
			var nextId = seq.members[visible.body[0]];
			var nextElement = this.store.elements[nextId];

			if (nextElement) {
				cue.call(this, seq, visible.body[0], -1, pristine);
				cue.call(this, seq, visible.body[0], +1, pristine);
				return animate.call(this, nextElement, { reveal: true, pristine: pristine })
			}
		}

		/**
		 * If our element isn’t resetting, we check the
		 * element sequence index against the head, and
		 * then the foot of the sequence.
		 */
		if (
			!seq.blocked.head &&
			i === [].concat( revealed.head ).pop() &&
			i >= [].concat( visible.body ).shift()
		) {
			cue.call(this, seq, i, -1, pristine);
			return animate.call(this, element, { reveal: true, pristine: pristine })
		}

		if (
			!seq.blocked.foot &&
			i === [].concat( revealed.foot ).shift() &&
			i <= [].concat( visible.body ).pop()
		) {
			cue.call(this, seq, i, +1, pristine);
			return animate.call(this, element, { reveal: true, pristine: pristine })
		}
	}
}

function Sequence(interval) {
	var i = Math.abs(interval);
	if (!isNaN(i)) {
		this.id = nextUniqueId();
		this.interval = Math.max(i, 16);
		this.members = [];
		this.models = {};
		this.blocked = {
			head: false,
			foot: false
		};
	} else {
		throw new RangeError('Invalid sequence interval.')
	}
}

function SequenceModel(seq, prop, store) {
	var this$1 = this;

	this.head = [];
	this.body = [];
	this.foot = [];

	each(seq.members, function (id, index) {
		var element = store.elements[id];
		if (element && element[prop]) {
			this$1.body.push(index);
		}
	});

	if (this.body.length) {
		each(seq.members, function (id, index) {
			var element = store.elements[id];
			if (element && !element[prop]) {
				if (index < this$1.body[0]) {
					this$1.head.push(index);
				} else {
					this$1.foot.push(index);
				}
			}
		});
	}
}

function cue(seq, i, direction, pristine) {
	var this$1 = this;

	var blocked = ['head', null, 'foot'][1 + direction];
	var nextId = seq.members[i + direction];
	var nextElement = this.store.elements[nextId];

	seq.blocked[blocked] = true;

	setTimeout(function () {
		seq.blocked[blocked] = false;
		if (nextElement) {
			sequence.call(this$1, nextElement, pristine);
		}
	}, seq.interval);
}

function reveal(target, options, syncing) {
	var this$1 = this;
	if ( options === void 0 ) options = {};
	if ( syncing === void 0 ) syncing = false;

	var containerBuffer = [];
	var sequence$$1;
	var interval = options.interval || defaults.interval;

	try {
		if (interval) {
			sequence$$1 = new Sequence(interval);
		}

		var nodes = (0,tealight__WEBPACK_IMPORTED_MODULE_0__["default"])(target);
		if (!nodes.length) {
			throw new Error('Invalid reveal target.')
		}

		var elements = nodes.reduce(function (elementBuffer, elementNode) {
			var element = {};
			var existingId = elementNode.getAttribute('data-sr-id');

			if (existingId) {
				deepAssign(element, this$1.store.elements[existingId]);

				/**
				 * In order to prevent previously generated styles
				 * from throwing off the new styles, the style tag
				 * has to be reverted to its pre-reveal state.
				 */
				applyStyle(element.node, element.styles.inline.computed);
			} else {
				element.id = nextUniqueId();
				element.node = elementNode;
				element.seen = false;
				element.revealed = false;
				element.visible = false;
			}

			var config = deepAssign({}, element.config || this$1.defaults, options);

			if ((!config.mobile && isMobile()) || (!config.desktop && !isMobile())) {
				if (existingId) {
					clean.call(this$1, element);
				}
				return elementBuffer // skip elements that are disabled
			}

			var containerNode = (0,tealight__WEBPACK_IMPORTED_MODULE_0__["default"])(config.container)[0];
			if (!containerNode) {
				throw new Error('Invalid container.')
			}
			if (!containerNode.contains(elementNode)) {
				return elementBuffer // skip elements found outside the container
			}

			var containerId;
			{
				containerId = getContainerId(
					containerNode,
					containerBuffer,
					this$1.store.containers
				);
				if (containerId === null) {
					containerId = nextUniqueId();
					containerBuffer.push({ id: containerId, node: containerNode });
				}
			}

			element.config = config;
			element.containerId = containerId;
			element.styles = style(element);

			if (sequence$$1) {
				element.sequence = {
					id: sequence$$1.id,
					index: sequence$$1.members.length
				};
				sequence$$1.members.push(element.id);
			}

			elementBuffer.push(element);
			return elementBuffer
		}, []);

		/**
		 * Modifying the DOM via setAttribute needs to be handled
		 * separately from reading computed styles in the map above
		 * for the browser to batch DOM changes (limiting reflows)
		 */
		each(elements, function (element) {
			this$1.store.elements[element.id] = element;
			element.node.setAttribute('data-sr-id', element.id);
		});
	} catch (e) {
		return logger.call(this, 'Reveal failed.', e.message)
	}

	/**
	 * Now that element set-up is complete...
	 * Let’s commit any container and sequence data we have to the store.
	 */
	each(containerBuffer, function (container) {
		this$1.store.containers[container.id] = {
			id: container.id,
			node: container.node
		};
	});
	if (sequence$$1) {
		this.store.sequences[sequence$$1.id] = sequence$$1;
	}

	/**
	 * If reveal wasn't invoked by sync, we want to
	 * make sure to add this call to the history.
	 */
	if (syncing !== true) {
		this.store.history.push({ target: target, options: options });

		/**
		 * Push initialization to the event queue, giving
		 * multiple reveal calls time to be interpreted.
		 */
		if (this.initTimeout) {
			window.clearTimeout(this.initTimeout);
		}
		this.initTimeout = window.setTimeout(initialize.bind(this), 0);
	}
}

function getContainerId(node) {
	var collections = [], len = arguments.length - 1;
	while ( len-- > 0 ) collections[ len ] = arguments[ len + 1 ];

	var id = null;
	each(collections, function (collection) {
		each(collection, function (container) {
			if (id === null && container.node === node) {
				id = container.id;
			}
		});
	});
	return id
}

/**
 * Re-runs the reveal method for each record stored in history,
 * for capturing new content asynchronously loaded into the DOM.
 */
function sync() {
	var this$1 = this;

	each(this.store.history, function (record) {
		reveal.call(this$1, record.target, record.options, true);
	});

	initialize.call(this);
}

var polyfill = function (x) { return (x > 0) - (x < 0) || +x; };
var mathSign = Math.sign || polyfill;

function getGeometry(target, isContainer) {
	/**
	 * We want to ignore padding and scrollbars for container elements.
	 * More information here: https://goo.gl/vOZpbz
	 */
	var height = isContainer ? target.node.clientHeight : target.node.offsetHeight;
	var width = isContainer ? target.node.clientWidth : target.node.offsetWidth;

	var offsetTop = 0;
	var offsetLeft = 0;
	var node = target.node;

	do {
		if (!isNaN(node.offsetTop)) {
			offsetTop += node.offsetTop;
		}
		if (!isNaN(node.offsetLeft)) {
			offsetLeft += node.offsetLeft;
		}
		node = node.offsetParent;
	} while (node)

	return {
		bounds: {
			top: offsetTop,
			right: offsetLeft + width,
			bottom: offsetTop + height,
			left: offsetLeft
		},
		height: height,
		width: width
	}
}

function getScrolled(container) {
	var top, left;
	if (container.node === document.documentElement) {
		top = window.pageYOffset;
		left = window.pageXOffset;
	} else {
		top = container.node.scrollTop;
		left = container.node.scrollLeft;
	}
	return { top: top, left: left }
}

function isElementVisible(element) {
	if ( element === void 0 ) element = {};

	var container = this.store.containers[element.containerId];
	if (!container) { return }

	var viewFactor = Math.max(0, Math.min(1, element.config.viewFactor));
	var viewOffset = element.config.viewOffset;

	var elementBounds = {
		top: element.geometry.bounds.top + element.geometry.height * viewFactor,
		right: element.geometry.bounds.right - element.geometry.width * viewFactor,
		bottom: element.geometry.bounds.bottom - element.geometry.height * viewFactor,
		left: element.geometry.bounds.left + element.geometry.width * viewFactor
	};

	var containerBounds = {
		top: container.geometry.bounds.top + container.scroll.top + viewOffset.top,
		right: container.geometry.bounds.right + container.scroll.left - viewOffset.right,
		bottom:
			container.geometry.bounds.bottom + container.scroll.top - viewOffset.bottom,
		left: container.geometry.bounds.left + container.scroll.left + viewOffset.left
	};

	return (
		(elementBounds.top < containerBounds.bottom &&
			elementBounds.right > containerBounds.left &&
			elementBounds.bottom > containerBounds.top &&
			elementBounds.left < containerBounds.right) ||
		element.styles.position === 'fixed'
	)
}

function delegate(
	event,
	elements
) {
	var this$1 = this;
	if ( event === void 0 ) event = { type: 'init' };
	if ( elements === void 0 ) elements = this.store.elements;

	(0,miniraf__WEBPACK_IMPORTED_MODULE_2__["default"])(function () {
		var stale = event.type === 'init' || event.type === 'resize';

		each(this$1.store.containers, function (container) {
			if (stale) {
				container.geometry = getGeometry.call(this$1, container, true);
			}
			var scroll = getScrolled.call(this$1, container);
			if (container.scroll) {
				container.direction = {
					x: mathSign(scroll.left - container.scroll.left),
					y: mathSign(scroll.top - container.scroll.top)
				};
			}
			container.scroll = scroll;
		});

		/**
		 * Due to how the sequencer is implemented, it’s
		 * important that we update the state of all
		 * elements, before any animation logic is
		 * evaluated (in the second loop below).
		 */
		each(elements, function (element) {
			if (stale || element.geometry === undefined) {
				element.geometry = getGeometry.call(this$1, element);
			}
			element.visible = isElementVisible.call(this$1, element);
		});

		each(elements, function (element) {
			if (element.sequence) {
				sequence.call(this$1, element);
			} else {
				animate.call(this$1, element);
			}
		});

		this$1.pristine = false;
	});
}

function isTransformSupported() {
	var style = document.documentElement.style;
	return 'transform' in style || 'WebkitTransform' in style
}

function isTransitionSupported() {
	var style = document.documentElement.style;
	return 'transition' in style || 'WebkitTransition' in style
}

var version = "4.0.9";

var boundDelegate;
var boundDestroy;
var boundReveal;
var boundClean;
var boundSync;
var config;
var debug;
var instance;

function ScrollReveal(options) {
	if ( options === void 0 ) options = {};

	var invokedWithoutNew =
		typeof this === 'undefined' ||
		Object.getPrototypeOf(this) !== ScrollReveal.prototype;

	if (invokedWithoutNew) {
		return new ScrollReveal(options)
	}

	if (!ScrollReveal.isSupported()) {
		logger.call(this, 'Instantiation failed.', 'This browser is not supported.');
		return mount.failure()
	}

	var buffer;
	try {
		buffer = config
			? deepAssign({}, config, options)
			: deepAssign({}, defaults, options);
	} catch (e) {
		logger.call(this, 'Invalid configuration.', e.message);
		return mount.failure()
	}

	try {
		var container = (0,tealight__WEBPACK_IMPORTED_MODULE_0__["default"])(buffer.container)[0];
		if (!container) {
			throw new Error('Invalid container.')
		}
	} catch (e) {
		logger.call(this, e.message);
		return mount.failure()
	}

	config = buffer;

	if ((!config.mobile && isMobile()) || (!config.desktop && !isMobile())) {
		logger.call(
			this,
			'This device is disabled.',
			("desktop: " + (config.desktop)),
			("mobile: " + (config.mobile))
		);
		return mount.failure()
	}

	mount.success();

	this.store = {
		containers: {},
		elements: {},
		history: [],
		sequences: {}
	};

	this.pristine = true;

	boundDelegate = boundDelegate || delegate.bind(this);
	boundDestroy = boundDestroy || destroy.bind(this);
	boundReveal = boundReveal || reveal.bind(this);
	boundClean = boundClean || clean.bind(this);
	boundSync = boundSync || sync.bind(this);

	Object.defineProperty(this, 'delegate', { get: function () { return boundDelegate; } });
	Object.defineProperty(this, 'destroy', { get: function () { return boundDestroy; } });
	Object.defineProperty(this, 'reveal', { get: function () { return boundReveal; } });
	Object.defineProperty(this, 'clean', { get: function () { return boundClean; } });
	Object.defineProperty(this, 'sync', { get: function () { return boundSync; } });

	Object.defineProperty(this, 'defaults', { get: function () { return config; } });
	Object.defineProperty(this, 'version', { get: function () { return version; } });
	Object.defineProperty(this, 'noop', { get: function () { return false; } });

	return instance ? instance : (instance = this)
}

ScrollReveal.isSupported = function () { return isTransformSupported() && isTransitionSupported(); };

Object.defineProperty(ScrollReveal, 'debug', {
	get: function () { return debug || false; },
	set: function (value) { return (debug = typeof value === 'boolean' ? value : debug); }
});

ScrollReveal();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ScrollReveal);


/***/ }),

/***/ "./node_modules/tealight/dist/tealight.es.js":
/*!***************************************************!*\
  !*** ./node_modules/tealight/dist/tealight.es.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var is_dom_node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! is-dom-node */ "./node_modules/is-dom-node/dist/is-dom-node.es.js");
/* harmony import */ var is_dom_node_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! is-dom-node-list */ "./node_modules/is-dom-node-list/dist/is-dom-node-list.es.js");
/*! @license Tealight v0.3.6

	Copyright 2018 Fisssion LLC.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.

*/



function tealight(target, context) {
  if ( context === void 0 ) context = document;

  if (target instanceof Array) { return target.filter(is_dom_node__WEBPACK_IMPORTED_MODULE_0__["default"]); }
  if ((0,is_dom_node__WEBPACK_IMPORTED_MODULE_0__["default"])(target)) { return [target]; }
  if ((0,is_dom_node_list__WEBPACK_IMPORTED_MODULE_1__["default"])(target)) { return Array.prototype.slice.call(target); }
  if (typeof target === "string") {
    try {
      var query = context.querySelectorAll(target);
      return Array.prototype.slice.call(query);
    } catch (err) {
      return [];
    }
  }
  return [];
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tealight);


/***/ }),

/***/ "./src/assets sync recursive ^\\.\\/.*$":
/*!***********************************!*\
  !*** ./src/assets/ sync ^\.\/.*$ ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./babel-svgrepo-com.svg": "./src/assets/babel-svgrepo-com.svg",
	"./css-3-svgrepo-com.svg": "./src/assets/css-3-svgrepo-com.svg",
	"./eslint-svgrepo-com.svg": "./src/assets/eslint-svgrepo-com.svg",
	"./etch-a-sketch.webp": "./src/assets/etch-a-sketch.webp",
	"./git-svgrepo-com.svg": "./src/assets/git-svgrepo-com.svg",
	"./github-142-svgrepo-com.svg": "./src/assets/github-142-svgrepo-com.svg",
	"./github-svgrepo-com--project-link-icon.svg": "./src/assets/github-svgrepo-com--project-link-icon.svg",
	"./glassdoor-svgrepo-com.svg": "./src/assets/glassdoor-svgrepo-com.svg",
	"./homeland-skills_sections.webp": "./src/assets/homeland-skills_sections.webp",
	"./html-5-svgrepo-com.svg": "./src/assets/html-5-svgrepo-com.svg",
	"./indeed-svgrepo-com.svg": "./src/assets/indeed-svgrepo-com.svg",
	"./information-circle-svgrepo-com.svg": "./src/assets/information-circle-svgrepo-com.svg",
	"./javascript-svgrepo-com.svg": "./src/assets/javascript-svgrepo-com.svg",
	"./jest-svgrepo-com.svg": "./src/assets/jest-svgrepo-com.svg",
	"./library.webp": "./src/assets/library.webp",
	"./linkedin-svgrepo-com.svg": "./src/assets/linkedin-svgrepo-com.svg",
	"./main-section.webp": "./src/assets/main-section.webp",
	"./missing-flag-image.webp": "./src/assets/missing-flag-image.webp",
	"./my-photo.webp": "./src/assets/my-photo.webp",
	"./npm-svgrepo-com.svg": "./src/assets/npm-svgrepo-com.svg",
	"./projects-section.webp": "./src/assets/projects-section.webp",
	"./react-svgrepo-com.svg": "./src/assets/react-svgrepo-com.svg",
	"./tailwind-svgrepo-com.svg": "./src/assets/tailwind-svgrepo-com.svg",
	"./weather-app.webp": "./src/assets/weather-app.webp",
	"./webpack-svgrepo-com.svg": "./src/assets/webpack-svgrepo-com.svg",
	"./website-image__clothes-store.webp": "./src/assets/website-image__clothes-store.webp",
	"./website-image__education.webp": "./src/assets/website-image__education.webp",
	"./website-image__my-favorite-music.webp": "./src/assets/website-image__my-favorite-music.webp",
	"./website-svgrepo-com.svg": "./src/assets/website-svgrepo-com.svg"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/assets sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./src/assets/babel-svgrepo-com.svg":
/*!******************************************!*\
  !*** ./src/assets/babel-svgrepo-com.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/babel-svgrepo-com.svg";

/***/ }),

/***/ "./src/assets/css-3-svgrepo-com.svg":
/*!******************************************!*\
  !*** ./src/assets/css-3-svgrepo-com.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/css-3-svgrepo-com.svg";

/***/ }),

/***/ "./src/assets/eslint-svgrepo-com.svg":
/*!*******************************************!*\
  !*** ./src/assets/eslint-svgrepo-com.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/eslint-svgrepo-com.svg";

/***/ }),

/***/ "./src/assets/etch-a-sketch.webp":
/*!***************************************!*\
  !*** ./src/assets/etch-a-sketch.webp ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/etch-a-sketch.webp";

/***/ }),

/***/ "./src/assets/git-svgrepo-com.svg":
/*!****************************************!*\
  !*** ./src/assets/git-svgrepo-com.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/git-svgrepo-com.svg";

/***/ }),

/***/ "./src/assets/github-142-svgrepo-com.svg":
/*!***********************************************!*\
  !*** ./src/assets/github-142-svgrepo-com.svg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/github-142-svgrepo-com.svg";

/***/ }),

/***/ "./src/assets/github-svgrepo-com--project-link-icon.svg":
/*!**************************************************************!*\
  !*** ./src/assets/github-svgrepo-com--project-link-icon.svg ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/github-svgrepo-com--project-link-icon.svg";

/***/ }),

/***/ "./src/assets/glassdoor-svgrepo-com.svg":
/*!**********************************************!*\
  !*** ./src/assets/glassdoor-svgrepo-com.svg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/glassdoor-svgrepo-com.svg";

/***/ }),

/***/ "./src/assets/homeland-skills_sections.webp":
/*!**************************************************!*\
  !*** ./src/assets/homeland-skills_sections.webp ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/homeland-skills_sections.webp";

/***/ }),

/***/ "./src/assets/html-5-svgrepo-com.svg":
/*!*******************************************!*\
  !*** ./src/assets/html-5-svgrepo-com.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/html-5-svgrepo-com.svg";

/***/ }),

/***/ "./src/assets/indeed-svgrepo-com.svg":
/*!*******************************************!*\
  !*** ./src/assets/indeed-svgrepo-com.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/indeed-svgrepo-com.svg";

/***/ }),

/***/ "./src/assets/information-circle-svgrepo-com.svg":
/*!*******************************************************!*\
  !*** ./src/assets/information-circle-svgrepo-com.svg ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/information-circle-svgrepo-com.svg";

/***/ }),

/***/ "./src/assets/javascript-svgrepo-com.svg":
/*!***********************************************!*\
  !*** ./src/assets/javascript-svgrepo-com.svg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/javascript-svgrepo-com.svg";

/***/ }),

/***/ "./src/assets/jest-svgrepo-com.svg":
/*!*****************************************!*\
  !*** ./src/assets/jest-svgrepo-com.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/jest-svgrepo-com.svg";

/***/ }),

/***/ "./src/assets/library.webp":
/*!*********************************!*\
  !*** ./src/assets/library.webp ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/library.webp";

/***/ }),

/***/ "./src/assets/linkedin-svgrepo-com.svg":
/*!*********************************************!*\
  !*** ./src/assets/linkedin-svgrepo-com.svg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/linkedin-svgrepo-com.svg";

/***/ }),

/***/ "./src/assets/main-section.webp":
/*!**************************************!*\
  !*** ./src/assets/main-section.webp ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/main-section.webp";

/***/ }),

/***/ "./src/assets/missing-flag-image.webp":
/*!********************************************!*\
  !*** ./src/assets/missing-flag-image.webp ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/missing-flag-image.webp";

/***/ }),

/***/ "./src/assets/my-photo.webp":
/*!**********************************!*\
  !*** ./src/assets/my-photo.webp ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/my-photo.webp";

/***/ }),

/***/ "./src/assets/npm-svgrepo-com.svg":
/*!****************************************!*\
  !*** ./src/assets/npm-svgrepo-com.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/npm-svgrepo-com.svg";

/***/ }),

/***/ "./src/assets/projects-section.webp":
/*!******************************************!*\
  !*** ./src/assets/projects-section.webp ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/projects-section.webp";

/***/ }),

/***/ "./src/assets/react-svgrepo-com.svg":
/*!******************************************!*\
  !*** ./src/assets/react-svgrepo-com.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/react-svgrepo-com.svg";

/***/ }),

/***/ "./src/assets/tailwind-svgrepo-com.svg":
/*!*********************************************!*\
  !*** ./src/assets/tailwind-svgrepo-com.svg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/tailwind-svgrepo-com.svg";

/***/ }),

/***/ "./src/assets/weather-app.webp":
/*!*************************************!*\
  !*** ./src/assets/weather-app.webp ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/weather-app.webp";

/***/ }),

/***/ "./src/assets/webpack-svgrepo-com.svg":
/*!********************************************!*\
  !*** ./src/assets/webpack-svgrepo-com.svg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/webpack-svgrepo-com.svg";

/***/ }),

/***/ "./src/assets/website-image__clothes-store.webp":
/*!******************************************************!*\
  !*** ./src/assets/website-image__clothes-store.webp ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/website-image__clothes-store.webp";

/***/ }),

/***/ "./src/assets/website-image__education.webp":
/*!**************************************************!*\
  !*** ./src/assets/website-image__education.webp ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/website-image__education.webp";

/***/ }),

/***/ "./src/assets/website-image__my-favorite-music.webp":
/*!**********************************************************!*\
  !*** ./src/assets/website-image__my-favorite-music.webp ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/website-image__my-favorite-music.webp";

/***/ }),

/***/ "./src/assets/website-svgrepo-com.svg":
/*!********************************************!*\
  !*** ./src/assets/website-svgrepo-com.svg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/website-svgrepo-com.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CSS_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CSS/style.css */ "./src/CSS/style.css");
/* harmony import */ var _JS_App_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./JS/App.js */ "./src/JS/App.js");

// Load all assets
// eslint-disable-next-line no-undef
__webpack_require__("./src/assets sync recursive ^\\.\\/.*$");

(0,_JS_App_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
})();

/******/ })()
;
//# sourceMappingURL=bundleb897b5b388a26987903b.js.map