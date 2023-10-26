"use strict";
(self["webpackChunkplacid_ng"] = self["webpackChunkplacid_ng"] || []).push([["main"],{

/***/ 3966:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _components_pages_home_one_home_one_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/pages/home-one/home-one.component */ 5535);
/* harmony import */ var _components_pages_works_details_works_details_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/pages/works-details/works-details.component */ 4560);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);





const routes = [{
  path: '',
  component: _components_pages_home_one_home_one_component__WEBPACK_IMPORTED_MODULE_0__.HomeOneComponent
}, {
  path: 'works-details/:projectId',
  component: _components_pages_works_details_works_details_component__WEBPACK_IMPORTED_MODULE_1__.WorksDetailsComponent
}];
class AppRoutingModule {
  static #_ = this.ɵfac = function AppRoutingModule_Factory(t) {
    return new (t || AppRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: AppRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes, {}), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
})();

/***/ }),

/***/ 6401:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 4520);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _components_layouts_preloader_preloader_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/layouts/preloader/preloader.component */ 3663);






class AppComponent {
  constructor(router) {
    this.router = router;
  }
  ngOnInit() {
    this.recallJsFuntions();
  }
  recallJsFuntions() {
    this.router.events.subscribe(event => {
      if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__.NavigationStart) {
        $('.preloader').fadeIn('slow');
      }
    });
    this.routerSubscription = this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__.NavigationEnd || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__.NavigationCancel)).subscribe(event => {
      $.getScript('../assets/js/main.js');
      $('.preloader').fadeOut('slow');
      this.location = this.router.url;
      if (!(event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__.NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }
  static #_ = this.ɵfac = function AppComponent_Factory(t) {
    return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([_angular_common__WEBPACK_IMPORTED_MODULE_4__.Location, {
      provide: _angular_common__WEBPACK_IMPORTED_MODULE_4__.LocationStrategy,
      useClass: _angular_common__WEBPACK_IMPORTED_MODULE_4__.PathLocationStrategy
    }])],
    decls: 2,
    vars: 0,
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-preloader")(1, "router-outlet");
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet, _components_layouts_preloader_preloader_component__WEBPACK_IMPORTED_MODULE_0__.PreloaderComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 8629:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 3966);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 6401);
/* harmony import */ var _components_layouts_preloader_preloader_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/layouts/preloader/preloader.component */ 3663);
/* harmony import */ var _components_pages_home_one_home_one_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/pages/home-one/home-one.component */ 5535);
/* harmony import */ var _components_pages_works_details_works_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/pages/works-details/works-details.component */ 4560);
/* harmony import */ var _components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/navigation/navigation.component */ 9735);
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/footer/footer.component */ 7913);
/* harmony import */ var _components_navigation_navigation_portfolio_navigation_portfolio_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/navigation/navigation-portfolio/navigation-portfolio.component */ 6515);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 1699);












class AppModule {
  static #_ = this.ɵfac = function AppModule_Factory(t) {
    return new (t || AppModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
    type: AppModule,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _components_layouts_preloader_preloader_component__WEBPACK_IMPORTED_MODULE_2__.PreloaderComponent, _components_pages_home_one_home_one_component__WEBPACK_IMPORTED_MODULE_3__.HomeOneComponent, _components_pages_works_details_works_details_component__WEBPACK_IMPORTED_MODULE_4__.WorksDetailsComponent, _components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_5__.NavigationComponent, _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__.FooterComponent, _components_navigation_navigation_portfolio_navigation_portfolio_component__WEBPACK_IMPORTED_MODULE_7__.NavigationPortfolioComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule]
  });
})();

/***/ }),

/***/ 7913:
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FooterComponent: () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 7947);


class FooterComponent {
  static #_ = this.ɵfac = function FooterComponent_Factory(t) {
    return new (t || FooterComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: FooterComponent,
    selectors: [["app-footer"]],
    decls: 24,
    vars: 0,
    consts: [[1, "footer-area"], [1, "container"], [1, "footer-content", "mb-5"], [1, "logo"], ["routerLink", "/"], ["src", "assets/img/logo.png", "alt", "image"], [1, "footer-contact-info", "d-flex", "align-items-center", "justify-content-center"], [1, "contact-info", "me-4"], [1, "ri-map-pin-line", "me-2"], ["target", "_blank"], [1, "ri-phone-line", "me-2"], ["href", "tel:+15136789899"], [1, "contact-info"], [1, "ri-mail-line", "me-2"], ["href", "mailto:rdubphoto@gmail.com", "target", "_blank"], [1, "social"], [1, "ri-linkedin-box-fill", "me-2"], ["href", "https://www.linkedin.com/in/robertwojtow/", "target", "_blank"]],
    template: function FooterComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6)(7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Schertz, TX");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "(513)678-9899");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "rdubphoto@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "ul", 15)(20, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "LinkedIn");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 3663:
/*!*********************************************************************!*\
  !*** ./src/app/components/layouts/preloader/preloader.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PreloaderComponent: () => (/* binding */ PreloaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class PreloaderComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ɵfac = function PreloaderComponent_Factory(t) {
    return new (t || PreloaderComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: PreloaderComponent,
    selectors: [["app-preloader"]],
    decls: 9,
    vars: 0,
    consts: [[1, "preloader"], [1, "loader"], [1, "wrapper"], [1, "circle", "circle-1"], [1, "circle", "circle-1a"], [1, "circle", "circle-2"], [1, "circle", "circle-3"]],
    template: function PreloaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Loading\u2026");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 6515:
/*!**********************************************************************************************!*\
  !*** ./src/app/components/navigation/navigation-portfolio/navigation-portfolio.component.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NavigationPortfolioComponent: () => (/* binding */ NavigationPortfolioComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);



const _c0 = function (a1) {
  return ["/works-details", a1];
};
function NavigationPortfolioComponent_li_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 3)(1, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const project_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, project_r1.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](project_r1.title);
  }
}
class NavigationPortfolioComponent {
  static #_ = this.ɵfac = function NavigationPortfolioComponent_Factory(t) {
    return new (t || NavigationPortfolioComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: NavigationPortfolioComponent,
    selectors: [["app-navigation-portfolio"]],
    decls: 13,
    vars: 1,
    consts: [[1, "d-table"], [1, "d-table-cell"], [1, "navbar-nav"], [1, "nav-item"], ["href", "/", 1, "nav-link"], ["class", "nav-item", 4, "ngFor", "ngForOf"], [1, "aside-footer"], [1, "social"], ["href", "https://www.linkedin.com/in/robertwojtow/", "target", "_blank"], [1, "ri-linkedin-box-line", "h2"], [1, "line"], [1, "nav-link", 3, "routerLink"]],
    template: function NavigationPortfolioComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "ul", 2)(3, "li", 3)(4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, NavigationPortfolioComponent_li_6_Template, 3, 4, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6)(8, "ul", 7)(9, "li")(10, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 10);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.projects);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 9735:
/*!***************************************************************!*\
  !*** ./src/app/components/navigation/navigation.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NavigationComponent: () => (/* binding */ NavigationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var src_app_service_shared_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/service/shared-data.service */ 7614);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6575);




function NavigationComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7)(1, "div", 8)(2, "ul", 9)(3, "li", 10)(4, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Home");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "li", 10)(7, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "About");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "li", 10)(10, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Portfolio");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "li", 10)(13, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Contact");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLinkActive", "active");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLinkActive", "active");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLinkActive", "active");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLinkActive", "active");
  }
}
const _c0 = function (a1) {
  return ["/works-details", a1];
};
function NavigationComponent_ng_template_1_li_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 10)(1, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const project_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLinkActive", "active")("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](3, _c0, project_r4.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](project_r4.title);
  }
}
const _c1 = function () {
  return ["/"];
};
function NavigationComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 15)(1, "div", 8)(2, "ul", 9)(3, "li", 10)(4, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Home");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "li", 10)(7, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Portfolio Projects");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, NavigationComponent_ng_template_1_li_9_Template, 3, 5, "li", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](2, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.projects);
  }
}
class NavigationComponent {
  constructor(router, sharedDataService) {
    this.router = router;
    this.sharedDataService = sharedDataService;
    this.projects = [];
    this.projects = sharedDataService.getProjects();
    console.log(this.projects);
  }
  get isOnWorksDetailsPage() {
    const isOnPage = this.router.url.includes('works-details');
    return isOnPage;
  }
  static #_ = this.ɵfac = function NavigationComponent_Factory(t) {
    return new (t || NavigationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_service_shared_data_service__WEBPACK_IMPORTED_MODULE_0__.SharedDataService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: NavigationComponent,
    selectors: [["app-navigation"]],
    decls: 9,
    vars: 2,
    consts: [["class", "d-table", 4, "ngIf", "ngIfElse"], ["secondaryNav", ""], [1, "aside-footer"], [1, "social"], ["href", "https://www.linkedin.com/in/robertwojtow/", "target", "_blank"], [1, "ri-linkedin-box-line", "h2"], [1, "line"], [1, "d-table"], [1, "d-table-cell"], [1, "navbar-nav"], [1, "nav-item"], ["href", "#home", 1, "nav-link", 3, "routerLinkActive"], ["href", "#about", 1, "nav-link", 3, "routerLinkActive"], ["href", "#portfolio", 1, "nav-link", 3, "routerLinkActive"], ["href", "#contact", 1, "nav-link", 3, "routerLinkActive"], [1, "d-table", "nav2"], [1, "nav-link", 3, "routerLink"], ["class", "nav-item", 4, "ngFor", "ngForOf"], [1, "nav-link", 3, "routerLinkActive", "routerLink"]],
    template: function NavigationComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, NavigationComponent_div_0_Template, 15, 4, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NavigationComponent_ng_template_1_Template, 10, 3, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2)(4, "ul", 3)(5, "li")(6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "div", 6);
      }
      if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isOnWorksDetailsPage)("ngIfElse", _r1);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkActive],
    styles: [".d-table.nav2[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  text-align: left;\n}\n.d-table.nav2[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 9px;\n  color: white;\n}\n.d-table.nav2[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child {\n  margin-bottom: 18px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9uYXZpZ2F0aW9uL25hdmlnYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRVE7RUFDSSxnQkFBQTtBQURaO0FBRVk7RUFDSSxrQkFBQTtFQUNBLFlBQUE7QUFBaEI7QUFDZ0I7RUFDSSxtQkFBQTtBQUNwQiIsInNvdXJjZXNDb250ZW50IjpbIi5kLXRhYmxlIHtcbiAgICAmLm5hdjJ7XG4gICAgICAgIHVsIHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICBsaSB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogOXB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMThweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 5535:
/*!*****************************************************************!*\
  !*** ./src/app/components/pages/home-one/home-one.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeOneComponent: () => (/* binding */ HomeOneComponent)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_service_shared_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/service/shared-data.service */ 7614);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../navigation/navigation.component */ 9735);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../footer/footer.component */ 7913);









function HomeOneComponent_div_183_li_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const tag_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](tag_r5);
  }
}
const _c0 = function (a1) {
  return ["/works-details", a1];
};
function HomeOneComponent_div_183_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "div", 64)(2, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "img", 66)(4, "div", 67)(5, "a", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 69)(7, "h3")(8, "a", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, HomeOneComponent_div_183_li_11_Template, 2, 1, "li", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const project_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"](project_r3.class);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", project_r3.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](7, _c0, project_r3.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](9, _c0, project_r3.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](project_r3.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", project_r3.tags);
  }
}
function HomeOneComponent_div_246_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Message sent successfully! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
class HomeOneComponent {
  constructor(http, sharedDataService) {
    this.http = http;
    this.sharedDataService = sharedDataService;
    this.projects = [];
    this.model = {
      name: '',
      email: '',
      message: ''
    };
    this.isMessageSent = false;
    this.submitted = false;
    this.projects = sharedDataService.getProjects();
  }
  downloadResume() {
    const link = document.createElement('a');
    link.setAttribute('type', 'hidden');
    link.href = 'https://rdubphoto.github.io/Portfolio/assets/resume.pdf';
    link.download = 'Robert-Wojtow_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    link.remove();
  }
  onSubmit(contactForm) {
    const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders({
      'Content-Type': 'application/json'
    });
    console.log(this.model);
    this.http.post('https://formspree.io/f/meqbnrdd', this.model, {
      headers: headers
    }).subscribe(response => {
      console.log(response);
      this.submitted = true;
      this.showMessageForFewSeconds();
      contactForm.reset(); // This will reset the form
    }, error => {
      console.error("There was an error sending the message.", error);
    });
  }
  showMessageForFewSeconds() {
    this.isMessageSent = true;
    setTimeout(() => {
      this.isMessageSent = false;
    }, 5000); // This will hide the message after 5 seconds.
  }
  static #_ = this.ɵfac = function HomeOneComponent_Factory(t) {
    return new (t || HomeOneComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_service_shared_data_service__WEBPACK_IMPORTED_MODULE_0__.SharedDataService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: HomeOneComponent,
    selectors: [["app-home-one"]],
    decls: 248,
    vars: 5,
    consts: [[1, "main-container"], ["id", "placid-aside", 1, "placid-aside", "bg-0f1d22"], [1, "logo"], ["routerLink", "/"], ["src", "assets/img/logo.png", "alt", "image"], ["id", "main-content", 1, "main-content"], [1, "responsive-burger-menu"], [1, "top-bar"], [1, "middle-bar"], [1, "bottom-bar"], ["data-jarallax", "{\"speed\": 0.3}", 1, "main-banner", "banner-bg1", "jarallax"], [1, "d-table"], [1, "d-table-cell"], [1, "container"], [1, "main-banner-content"], [1, "mb-4"], [1, "scroll-btn"], ["href", "#about"], [1, "mouse"], ["id", "about", 1, "about-area", "ptb-120"], [1, "section-title"], [1, "sub-title"], [1, "row", "align-items-center"], [1, "col-lg-8", "col-md-12"], [1, "about-content"], [1, "tab", "about-list-tab"], [1, "tabs"], [1, "tab-content"], [1, "tabs-item"], [1, "skills-area"], [1, "row"], [1, "col-lg-3", "col-md-3", "col-sm-6"], [1, "d-flex", "align-items-center", "justify-content-center"], [1, "default-btn", 3, "click"], [1, "experience-area"], [1, "col-lg-6", "col-md-6", "col-sm-6"], [1, "single-experience-box"], [1, "col-lg-4", "col-md-12"], [1, "about-image"], ["src", "assets/img/about-img1.jpg", "alt", "image"], ["id", "portfolio", 1, "works-area", "pt-120", "pb-90"], [3, "class", 4, "ngFor", "ngForOf"], [1, "feedback-area"], [1, "container-fluid"], [1, "col-lg-5", "col-md-12"], ["data-jarallax", "{\"speed\": 0.3}", 1, "feedback-content", "jarallax"], [1, "col-lg-7", "col-md-12"], [1, "feedback-slides-content", "bg-0f1d22"], [1, "feedback-slides", "owl-carousel", "owl-theme"], [1, "single-feedback-item"], [1, "ri-double-quotes-r"], [1, "client-info"], ["id", "contact", 1, "contact-area"], ["data-jarallax", "{\"speed\": 0.3}", 1, "contact-content", "jarallax"], [1, "contact-form", "bg-0f1d22"], [3, "ngSubmit"], ["contactForm", "ngForm"], [1, "col-lg-12", "col-md-12"], [1, "form-group", "mb-3"], ["type", "text", "name", "name", "id", "name", "placeholder", "Enter your name", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "email", "name", "email", "id", "email", "placeholder", "Enter your email", 1, "form-control", 3, "ngModel", "ngModelChange"], ["name", "message", "id", "message", "cols", "30", "rows", "5", "placeholder", "Enter your message", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "default-btn"], ["class", "alert alert-success mt-3", "role", "alert", 4, "ngIf"], [1, "single-works-box"], [1, "works-image"], ["alt", "image", 3, "src"], [1, "overlay"], [1, "link-btn", 3, "routerLink"], [1, "works-content"], [3, "routerLink"], [4, "ngFor", "ngForOf"], ["role", "alert", 1, "alert", "alert-success", "mt-3"]],
    template: function HomeOneComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "aside", 1)(2, "div", 2)(3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "app-navigation");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 5)(7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "span", 7)(9, "span", 8)(10, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 10)(12, "div", 11)(13, "div", 12)(14, "div", 13)(15, "div", 14)(16, "h1", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "Robert Wojtow");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "UI/UX ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, " Designer/Developer/Architect");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 16)(23, "a", 17)(24, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](25, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "section", 19)(27, "div", 13)(28, "div", 20)(29, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "About Me");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, "Blending Design & Code: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](33, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34, "Crafting Seamless User Experiences Across Platforms");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "div", 22)(36, "div", 23)(37, "div", 24)(38, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39, "Launching a software product or platform? I approach projects from a product owner's perspective, delving deep into every component of your software architecture to optimize and enhance its performance. My primary objective is to refine your software, overcoming challenges step-by-step through in-depth research and technical analysis. Your software's success is my foremost priority. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "div", 25)(41, "ul", 26)(42, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](43, "Skills");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](45, "Experience");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "div", 27)(47, "div", 28)(48, "div", 29)(49, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](50, "SOFTWARE & TECHNICAL SKILLS");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "div", 30)(52, "div", 31)(53, "ul")(54, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](55, "Adobe Product Suite");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](57, "Angular");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](59, "Axure");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](60, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](61, "Azure DevOps");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](62, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](63, "Bootstrap");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](64, "div", 31)(65, "ul")(66, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](67, "Figma / XD");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](68, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](69, "GIT / BitBucket");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](70, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](71, "Gulp / Grunt");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](72, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](73, "HTML5 & CSS3");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](74, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](75, "JavaScript");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](76, "div", 31)(77, "ul")(78, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](79, "Jira");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](80, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](81, "Material UI");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](82, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](83, "Mobile Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](84, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](85, "Node.js");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](86, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](87, "React.js");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](88, "div", 31)(89, "ul")(90, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](91, "Responsive Web Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](92, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](93, "SASS");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](94, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](95, "Sketch");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](96, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](97, "Visual Studio");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](98, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](99, "VUE.js");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](100, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](101, "WCAG / ADA");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](102, "div", 32)(103, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HomeOneComponent_Template_button_click_103_listener() {
          return ctx.downloadResume();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](104, "Download My Resume");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](105, "div", 28)(106, "div", 34)(107, "div", 30)(108, "div", 35)(109, "div", 36)(110, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](111, "September 2017 - Current (Lead UI/UX Designer/Developer and Architect)");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](112, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](113, "Becton Dickinson (Remote Position)");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](114, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](115, "Developed HIPAA & WCAG compliant systems. Enhanced collaboration between engineering and UX. Mentored developers on React and Angular.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](116, "div", 35)(117, "div", 36)(118, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](119, "March 2017 - September 2017 (Lead UI/UX Designer and Architect)");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](120, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](121, "Teradata - Contract Role (Remote Position)");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](122, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](123, "Lead designer for Nebula product. Managed UI design, UX, and product enhancements with stakeholders.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](124, "div", 35)(125, "div", 36)(126, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](127, "Oct. 2015 - Dec. 2016 (Sr. Lead UI/UX Design Manager & Front End Developer)");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](128, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](129, "SNH Inc. (NCC Credit), San Diego, CA");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](130, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](131, "Lead for automotive CRM design. Managed UI/UX efforts, and saw design feature on Times Square.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](132, "div", 35)(133, "div", 36)(134, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](135, "Sept. 2014 - Sept. 2015 (Sr. UI Designer & Front End Developer)");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](136, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](137, "ServiceNow, San Diego, CA");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](138, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](139, "Developed style-guides and led design efforts on VTB. Managed iconography font set.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](140, "div", 35)(141, "div", 36)(142, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](143, "July 2013 - Sept 2014 (Sr. UI / UX Designer & Front End Developer)");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](144, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](145, "DealerSocket, San Clemente, CA");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](146, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](147, "Redesigned CRM for better UX and worked on mobile-first responsive designs. Completed Scrum Master training.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](148, "div", 35)(149, "div", 36)(150, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](151, "April 2012 - April 2013 (UI / UX Designer & Front End Developer)");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](152, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](153, "MaintenanceNet, Carlsbad, CA");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](154, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](155, "Applied latest tech for ServiceExchange application and ensured up-to-date code for compatibility.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](156, "div", 35)(157, "div", 36)(158, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](159, "June 2010 - January 2012 (Sr. Global Web Designer)");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](160, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](161, "Technologies, Hoffman Estates, IL");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](162, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](163, "Managed global websites, UI/UX interfaces, branding strategies, and product announcements.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](164, "div", 35)(165, "div", 36)(166, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](167, "Prior Work Experience");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](168, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](169, "Clover");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](170, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](171, "Roles ranging from Designer/Web Developer to Architectural Designer across various firms from 2001-2010.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](172, "div", 37)(173, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](174, "img", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](175, "section", 40)(176, "div", 13)(177, "div", 20)(178, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](179, "Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](180, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](181, "Professional Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](182, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](183, HomeOneComponent_div_183_Template, 12, 11, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](184, "section", 42)(185, "div", 43)(186, "div", 30)(187, "div", 44)(188, "div", 45)(189, "div", 11)(190, "div", 12)(191, "div", 20)(192, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](193, "Testimonials");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](194, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](195, "What my co-workers have said about me");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](196, "div", 46)(197, "div", 47)(198, "div", 48)(199, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](200, "i", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](201, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](202, "\u201CI have never worked with a more talented UI/UX developer in my 15 years of software product development. In my experience with Robert, there was never a problem that he could not help formulate a solution for - either individually or through collaboration with other team members.\u201D");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](203, "div", 51)(204, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](205, "Creative Team Player");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](206, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](207, "Vice President - Software NCC");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](208, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](209, "i", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](210, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](211, "\"In over a decade of tech, I've yet to meet a UI/UX professional as dedicated and creative as Robert. His solutions are not just functional, but truly visionary.\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](212, "div", 51)(213, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](214, "Dedicated Creative Professional");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](215, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](216, "Director - DealerSocket");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](217, "section", 52)(218, "div", 43)(219, "div", 30)(220, "div", 44)(221, "div", 53)(222, "div", 11)(223, "div", 12)(224, "div", 20)(225, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](226, "Let's talk");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](227, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](228, "Get in Touch With Me");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](229, "div", 46)(230, "div", 54)(231, "form", 55, 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function HomeOneComponent_Template_form_ngSubmit_231_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6);
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](232);
          return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.onSubmit(_r1));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](233, "div", 30)(234, "div", 57)(235, "div", 58)(236, "input", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function HomeOneComponent_Template_input_ngModelChange_236_listener($event) {
          return ctx.model.name = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](237, "div", 57)(238, "div", 58)(239, "input", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function HomeOneComponent_Template_input_ngModelChange_239_listener($event) {
          return ctx.model.email = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](240, "div", 57)(241, "div", 58)(242, "textarea", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function HomeOneComponent_Template_textarea_ngModelChange_242_listener($event) {
          return ctx.model.message = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](243, "div", 57)(244, "button", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](245, "Send Message");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](246, HomeOneComponent_div_246_Template, 2, 0, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](247, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](183);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.projects);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](53);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.model.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.model.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.model.message);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isMessageSent);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgForm, _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_1__.NavigationComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__.FooterComponent],
    styles: [".skills-area[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  display: block;\n  color: #c9ab81;\n  margin-bottom: 12px;\n  text-transform: uppercase;\n  font-size: 15px;\n  font-weight: 600;\n}\n.skills-area[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9ob21lLW9uZS9ob21lLW9uZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLGNBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUFSO0FBR1E7RUFDSSxZQUFBO0FBRFoiLCJzb3VyY2VzQ29udGVudCI6WyIuc2tpbGxzLWFyZWEge1xuICAgIGgzIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGNvbG9yOiAjYzlhYjgxO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgfVxuICAgIHVsIHtcbiAgICAgICAgbGkge1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICB9XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 4560:
/*!***************************************************************************!*\
  !*** ./src/app/components/pages/works-details/works-details.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WorksDetailsComponent: () => (/* binding */ WorksDetailsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var src_app_service_shared_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/service/shared-data.service */ 7614);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../navigation/navigation.component */ 9735);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../footer/footer.component */ 7913);






function WorksDetailsComponent_ng_container_14_div_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "img", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const img_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("alt", ctx_r4.project.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", img_r3, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
  }
}
function WorksDetailsComponent_ng_container_14_div_1_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "img", 26);
  }
  if (rf & 2) {
    const img_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("alt", ctx_r6.project.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", img_r3, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
  }
}
function WorksDetailsComponent_ng_container_14_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 21)(1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, WorksDetailsComponent_ng_container_14_div_1_ng_container_2_Template, 3, 2, "ng-container", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, WorksDetailsComponent_ng_container_14_div_1_ng_template_3_Template, 1, 2, "ng-template", null, 24, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const img_r3 = ctx.$implicit;
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](4);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.isLinkableImage(img_r3))("ngIfElse", _r5);
  }
}
function WorksDetailsComponent_ng_container_14_li_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const tag_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](tag_r9);
  }
}
function WorksDetailsComponent_ng_container_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, WorksDetailsComponent_ng_container_14_div_1_Template, 5, 2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 15)(3, "div", 16)(4, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 18)(8, "div", 19)(9, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Technologies used:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, WorksDetailsComponent_ng_container_14_li_12_Template, 2, 1, "li", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.project.images);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.project.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", ctx_r0.project.description, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.project.tags);
  }
}
class WorksDetailsComponent {
  constructor(route, sharedDataService) {
    this.route = route;
    this.sharedDataService = sharedDataService;
    this.projects = [];
    this.projects = sharedDataService.getProjects();
  }
  ngOnInit() {
    this.route.params.subscribe(params => {
      const projectId = +params['projectId'];
      this.project = this.projects.find(p => p.id === projectId);
    });
  }
  isLinkableImage(imgSrc) {
    return imgSrc === 'assets/img/works/user-experience-prototype-testing/video.jpg';
  }
  static #_ = this.ɵfac = function WorksDetailsComponent_Factory(t) {
    return new (t || WorksDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_service_shared_data_service__WEBPACK_IMPORTED_MODULE_0__.SharedDataService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: WorksDetailsComponent,
    selectors: [["app-works-details"]],
    decls: 16,
    vars: 1,
    consts: [[1, "main-container"], ["id", "placid-aside", 1, "placid-aside", "bg-0f1d22"], [1, "logo"], ["routerLink", "/"], ["src", "assets/img/logo.png", "alt", "image"], ["id", "main-content", 1, "main-content"], [1, "responsive-burger-menu"], [1, "top-bar"], [1, "middle-bar"], [1, "bottom-bar"], [1, "works-details-area", "bg-0f1d22", "ptb-120"], [1, "container"], [1, "row"], [4, "ngIf"], ["class", "col-lg-6 col-md-6 col-sm-6", 4, "ngFor", "ngForOf"], [1, "col-lg-12", "col-md-12"], [1, "works-details-desc"], [3, "innerHTML"], [1, "works-details-info"], [1, "single-info-box"], [4, "ngFor", "ngForOf"], [1, "col-lg-6", "col-md-6", "col-sm-6"], [1, "works-details-image"], [4, "ngIf", "ngIfElse"], ["noLink", ""], ["href", "https://www.youtube.com/watch?v=iSHhVB0nkBM", "target", "_blank"], [3, "src", "alt"]],
    template: function WorksDetailsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "aside", 1)(2, "div", 2)(3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "app-navigation");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 5)(7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "span", 7)(9, "span", 8)(10, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "section", 10)(12, "div", 11)(13, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, WorksDetailsComponent_ng_container_14_Template, 13, 4, "ng-container", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.project);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_1__.NavigationComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__.FooterComponent],
    styles: [".works-details-image[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  position: initial;\n  left: 50%;\n  top: 50%;\n  transform: translateY(-50%) translateX(-50%);\n  width: 65px;\n  height: 65px;\n  line-height: 65px;\n  font-size: 35px;\n  background-color: #c9ab81;\n  border-radius: 50%;\n  text-align: center;\n  color: #ffffff;\n  transition: 0.5s;\n  opacity: inherit;\n  visibility: visible;\n  margin-top: 20px;\n}\n\n.works-details-desc[_ngcontent-%COMP%]   .works-details-info[_ngcontent-%COMP%]   .single-info-box[_ngcontent-%COMP%] {\n  flex: 0 0 50%;\n  max-width: 50%;\n}\n.works-details-desc[_ngcontent-%COMP%]   .works-details-info[_ngcontent-%COMP%]   .single-info-box[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #c9ab81;\n}\n.works-details-desc[_ngcontent-%COMP%]   .works-details-info[_ngcontent-%COMP%]   .single-info-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9wYWdlcy93b3Jrcy1kZXRhaWxzL3dvcmtzLWRldGFpbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsNENBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLGNBQUE7QUFDSjtBQUFJO0VBQ0ksY0FBQTtBQUVSO0FBQ1E7RUFDSSxZQUFBO0FBQ1oiLCJzb3VyY2VzQ29udGVudCI6WyIud29ya3MtZGV0YWlscy1pbWFnZSBhIHtcbiAgICBwb3NpdGlvbjogaW5pdGlhbDtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdG9wOiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpIHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgd2lkdGg6IDY1cHg7XG4gICAgaGVpZ2h0OiA2NXB4O1xuICAgIGxpbmUtaGVpZ2h0OiA2NXB4O1xuICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzlhYjgxO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgdHJhbnNpdGlvbjogMC41cztcbiAgICBvcGFjaXR5OiBpbmhlcml0O1xuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLndvcmtzLWRldGFpbHMtZGVzYyAud29ya3MtZGV0YWlscy1pbmZvIC5zaW5nbGUtaW5mby1ib3gge1xuICAgIGZsZXg6IDAgMCA1MCU7XG4gICAgbWF4LXdpZHRoOiA1MCU7XG4gICAgaDQge1xuICAgICAgICBjb2xvcjogI2M5YWI4MTtcbiAgICB9XG4gICAgdWwge1xuICAgICAgICBsaSB7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 7614:
/*!************************************************!*\
  !*** ./src/app/service/shared-data.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SharedDataService: () => (/* binding */ SharedDataService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class SharedDataService {
  constructor() {
    this.projects = [{
      id: 1,
      title: 'Component Design System',
      description: `
        <p>In my tenure at BD/Carefusion, I was instrumental in the creation and management of an advanced component design system that would serve as the foundational building block for all our applications. Here's an insight into the project:</p>
        <ul>
            <li><span class="keyword">Technological Stack:</span> Our design system was developed using a blend of cutting-edge technologies. We utilized Angular's robust framework for component structure and logic, and paired it with Bootstrap for responsive grid layouts. The styling was meticulously handcrafted using SASS, allowing for deep customization and thematic consistency.</li>
            <li><span class="keyword">Storybook Integration:</span> By incorporating StorybookJS, we were able to visualize our components in isolation. This not only sped up our development and debugging processes but also provided an interactive documentation for developers and designers alike.</li>
            <li><span class="keyword">Device Agnostic:</span> In today's diverse device landscape, ensuring seamless user experience across all screen sizes was paramount. Our components were designed to be responsive, guaranteeing consistency from the smallest mobile screens to large desktop displays.</li>
            <li><span class="keyword">User-Centric Approach:</span> Every component in our library underwent rigorous user testing. This empirical approach ensured that our components weren't just aesthetically pleasing, but also intuitive and user-friendly.</li>
            <li><span class="keyword">Regulatory Compliance:</span> We understand the significance of accessibility and regulatory compliances, especially in the medical field. Our components are ADA/WCAG compliant, ensuring accessibility for all users, irrespective of their physical abilities. Additionally, FDA compliance was maintained to meet the stringent standards of the medical industry.</li>
            <li><span class="keyword">Unified Aesthetics:</span> The primary objective of this project was to ensure visual and functional consistency across all BD/Carefusion applications. With our agnostic component library, we successfully created a uniform look and feel, making every application feel like a seamless part of a larger ecosystem.</li>
        </ul>
        <p> Through this project, I've learned the importance of meticulous planning, the value of user feedback, and the impact of seamless design in enhancing user experience. I'm incredibly proud of what we achieved, setting a benchmark for design systems in the medical industry.</p>
        `,
      imageUrl: 'assets/img/works/design-system-370.png',
      images: ['assets/img/works/component-design-system/design-system.png', 'assets/img/works/component-design-system/design-system-1.png', 'assets/img/works/component-design-system/design-system-2.png', 'assets/img/works/component-design-system/design-system-3.png', 'assets/img/works/component-design-system/design-system-4.png', 'assets/img/works/component-design-system/design-system-5.png'],
      tags: ['Figma/XD', 'Angular', 'React', 'HTML', 'SCSS', 'StorybookJS', 'Bootstrap', 'Azure DevOps', 'Git', 'Confluence', 'Chromatic', 'Miro'],
      class: 'col-lg-4 col-md-6 col-sm-6'
    }, {
      id: 2,
      title: 'Nebula',
      description: `
        <p>While working on the Nebula project, I had the unique opportunity to delve deep into the world of server management and deployment. Nebula is not just a server deployment portal; it's an embodiment of precision, usability, and efficiency. Here's an overview of the project:</p>
        <ul>
            <li><span class="keyword">Technological Stack:</span> At the heart of Nebula lies Angular, a powerful web application platform. We employed Google's Material UI, ensuring a sleek, intuitive, and consistent user interface that prioritizes usability and visual appeal.</li>
            <li><span class="keyword">User-Centric Design:</span> Our approach was deeply rooted in user experience (UX) principles. We embarked on a comprehensive UX journey, which encompassed everything from persona creation, user interviews, to A/B testing. This exhaustive process ensured that our final product was not just functional but also incredibly user-friendly.</li>
            <li><span class="keyword">Prototyping & Iteration:</span> The design process began with low-fidelity mocks that helped us visualize the user flow and layout. As we refined our ideas and gathered feedback, these evolved into high-fidelity wireframes. Each iteration was a step closer to a seamless user experience, ensuring that every feature and interface element was purposeful and efficient.</li>
            <li><span class="keyword">Extensive User Testing:</span> The efficacy of any design can only be ascertained through rigorous testing. We engaged in various testing methods, from A/B tests to in-depth interviews, ensuring that each design decision was validated by real user feedback.</li>
            <li><span class="keyword">Final Validation:</span> After the development phase, we revisited our designs, validating the final product against our initial goals and user feedback. This iterative feedback loop ensured that Nebula wasn't just a product but a solution tailored to meet specific user needs.</li>
        </ul>
        <p>Through Nebula, I deepened my understanding of the intricacies of server management systems and the paramount importance of a user-centric design approach. The project stands as a testament to the synergy of robust technology and empathetic design.</p>
        `,
      imageUrl: 'assets/img/works/teradata-770.png',
      images: ['assets/img/works/nebula/nebula.jpg', 'assets/img/works/nebula/nebula-1.jpg', 'assets/img/works/nebula/nebula-2.jpg', 'assets/img/works/nebula/nebula-3.jpg', 'assets/img/works/nebula/nebula-4.png'],
      tags: ['Figma/XD', 'Angular', 'HTML', 'SCSS', 'Git', 'Confluence', 'Material UI', 'Miro'],
      class: 'col-lg-8 col-md-8 col-sm-12'
    }, {
      id: 3,
      title: 'BisVine Electronic Health Records',
      description: `
        <p>During my time working on the BisVine project, I was introduced to the critical realm of electronic health records (EHR). BisVine isn't just an EHR platform; it's a holistic solution catering specifically to Chiropractors, Acupuncturists, and Massage Therapists. Here's a comprehensive overview of our endeavors with BisVine:</p>
        <ul>
            <li><span class="keyword">Technological Framework:</span> We anchored BisVine on Vue.js, a progressive JavaScript framework, offering a seamless user experience. Coupled with Bootstrap for a responsive UI and hosted on Azure, we ensured reliability and scalability for our users.</li>
            <li><span class="keyword">Agile Development:</span> Embracing the Agile methodology, our development process was iterative and feedback-driven, allowing us to adapt to changing requirements and ensuring the platform's continual enhancement.</li>
            <li><span class="keyword">Comprehensive Patient Management:</span> Practitioners could effortlessly onboard patients into the system, creating HIPAA-compliant medical notes, ensuring patient data security and integrity at all times.</li>
            <li><span class="keyword">Insurance and Claims:</span> With an integrated feature set, practitioners could easily access insurance procedure codes, verify medical coverage, submit insurance claims, and seamlessly manage payments for approved claims.</li>
            <li><span class="keyword">Advanced Features:</span> Beyond the core EHR functionalities, BisVine also offered a suite of advanced tools. From a dynamic scheduling system, text message reminders for appointments, an integrated point-of-sale system to comprehensive employee management, we ensured that practitioners had everything they needed at their fingertips.</li>
        </ul>
        <p>Working on BisVine was an enlightening journey into the complexities of healthcare IT. It emphasized the importance of combining robust technology with user-centric design to create a product that not only meets regulatory standards but also offers a seamless experience to its end-users. This project remains a testament to our dedication to bridging technology and healthcare in the most user-friendly way possible.</p>
        `,
      imageUrl: 'assets/img/works/bisvine-370.png',
      images: ['assets/img/works/bisvine/bisvine-1.png', 'assets/img/works/bisvine/bisvine-2.png', 'assets/img/works/bisvine/bisvine-3.png', 'assets/img/works/bisvine/bisvine-4.png', 'assets/img/works/bisvine/bisvine-5.png', 'assets/img/works/bisvine/bisvine-6.png'],
      tags: ['Figma/XD', 'Vue.JS', 'HTML', 'SCSS', 'Bootstrap', 'Azure DevOps', 'Git', 'Confluence', 'Miro'],
      class: 'col-lg-4 col-md-6 col-sm-6'
    }, {
      id: 4,
      title: 'Icon Library',
      description: `
        <p>While working on the Icon Library project, I delved deep into the intricacies of modern design and automation tools to create a seamless and efficient solution for application icons. Here's a detailed overview of the Icon Library project:</p>
        <ul>
            <li><span class="keyword">Tooling Mastery:</span> The Icon Library was meticulously crafted using a slew of modern tools. Grunt/Gulp for task automation, Node for backend operations, and Illustrator for refining SVG designs formed the foundation of our project.</li>
            <li><span class="keyword">SVG to PNG Conversion:</span> At the heart of our library was an automated process, keenly observing an SVG directory. Upon detecting a new icon design, it would swiftly convert the SVG into a PNG, ensuring our library was ever-evolving without manual intervention.</li>
            <li><span class="keyword">Efficient Minification:</span> Efficiency was key. After the SVG-to-PNG conversion, we automated the creation of the requisite CSS and Font files. These files were then compactly minified to ensure optimal loading times and performance across applications.</li>
            <li><span class="keyword">FontAwesome Inspired Usage:</span> Borrowing from the intuitive nature of FontAwesome's implementation, our icons could be effortlessly integrated into applications. The usage was as straightforward as: <code><i class="our-icon icon-alarm"></i></code>, bringing a touch of elegance and simplicity to the developer's experience.</li>
        </ul>
        <p>The Icon Library project was a harmonious blend of design, automation, and optimization. It underscored the potential of leveraging modern tooling to streamline design processes and enhance application aesthetics. This venture stands as a testament to our commitment to innovative solutions and user-friendly implementations in the design space.</p>
        `,
      imageUrl: 'assets/img/works/icon-library.png',
      images: ['assets/img/works/icon-library/icon-library-1.png', 'assets/img/works/icon-library/icon-library-2.png'],
      tags: ['Adobe Illustrator', 'Grunt/Gulp', 'Node', 'Git', 'HTML', 'FontFace', 'CSS'],
      class: 'col-lg-4 col-md-6 col-sm-6'
    }, {
      id: 5,
      title: 'User Experience Prototpye Testing',
      description: `
        <p>In my leadership role for the "User Experience Prototype Testing" of DealerSocket's new CRM system, I embarked on a comprehensive journey to revolutionize the user experience. Our objective was to identify pain points in the existing system and deliver a solution that was both intuitive and efficient. Here’s a dive into our meticulous process:</p>
        <ul>
            <li><span class="keyword">User-Centric Research:</span> The project began with in-depth consultations with our current customers. This provided invaluable insights and set the groundwork for the direction we would take.</li>
            <li><span class="keyword">Persona Development:</span> Based on our interactions, we constructed internal personas. This allowed us to tailor our designs to cater to diverse user needs, from tech-savvy individuals to those more accustomed to traditional ways.</li>
            <li><span class="keyword">Iterative Design:</span> Our approach was iterative. Starting with wireframes, moving on to high-fidelity mocks, and eventually creating working demos. At each stage, user testing was paramount, ensuring our designs were aligned with real-world requirements.</li>
            <li><span class="keyword">In-Person Feedback:</span> By engaging in in-person testing sessions, we delved deep into understanding the challenges users faced with the current system. It was evident that there were issues in terms of design aesthetics, system speed, and customization.</li>
            <li><span class="keyword">Custom Dashboard Need:</span> One major revelation was the requirement for a role-based custom dashboard. Users sought a more personalized experience, and this became a central theme in our redesign strategy.</li>
            <li><span class="keyword">Modern Aesthetics:</span> The feedback unanimously pointed towards the need for a contemporary design overhaul. We set out to deliver a look and feel that was both fresh and user-friendly.</li>
            <li><span class="keyword">Technological Mastery:</span> Our technological arsenal for this project was extensive. Tools like Figma, XD, Axure, Balsamiq, and the Adobe Creative Suite were instrumental in the design phase. For implementation, Angular, HTML, SCSS, and Bootstrap played crucial roles. FontAwesome enriched our iconography, while Jira, Confluence, and Miro streamlined our workflow and collaboration.</li>
        </ul>
        <p>Steering the DealerSocket New CRM project, I conducted over 60 user interviews, each offering a unique perspective and shaping our final product. The experience underscored the importance of empathetic design, the value of iterative testing, and the profound impact a well-executed user experience has on product adoption and satisfaction. I take immense pride in the transformative changes we introduced and the benchmarks we set in CRM design.</p>
        `,
      imageUrl: 'assets/img/works/video.png',
      images: ['assets/img/works/user-experience-prototype-testing/ui-ux-1.jpg', 'assets/img/works/user-experience-prototype-testing/ui-ux-2.jpg', 'assets/img/works/user-experience-prototype-testing/ui-ux-3.jpg', 'assets/img/works/user-experience-prototype-testing/ui-ux-4.jpg', 'assets/img/works/user-experience-prototype-testing/video.jpg'],
      tags: ['Figma/XD', 'Angular', 'HTML', 'SCSS', 'Git', 'Confluence', 'Material UI', 'Miro'],
      class: 'col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3'
    }, {
      id: 6,
      title: 'Gamification',
      description: `
        <p>At DealerSocket, the objective was clear: drive motivation and improve productivity among our customers. The CTO envisioned a system where the top-performing dealerships could be recognized and rewarded, with the pinnacle being an all-expenses-paid trip to Hawaii. This not only incentivized the users but also introduced a touch of competition and fun. My role was to bring this vision to life in the most engaging way possible. Here's a closer look at our unique approach:</p>
        <ul>
            <li><span class="keyword">Fantasy Football Inspiration:</span> Drawing parallels from the sports world, we devised a "Fantasy Football" style gamification system. This innovative system allowed dealerships to view and compare performances in a variety of categories, such as calls made, weekly sales, monthly deals, and so forth. This fostered a competitive spirit, inspiring every individual to put their best foot forward.</li>
            <li><span class="keyword">Real-time Performance Metrics:</span> Our system offered real-time insights, enabling dealerships to monitor their rank and performance. This immediate feedback was pivotal in driving engagement and fueling the competitive spirit among users.</li>
            <li><span class="keyword">User-Centric Design:</span> Before diving into full-scale development, we laid the groundwork with extensive mockups and testing. Utilizing tools like Axure and Balsamiq, we designed interactive prototypes. The feedback we garnered from these mockups informed our final design choices, ensuring the system was not only intuitive but also catered to the users' preferences.</li>
            <li><span class="keyword">Styling and Responsiveness:</span> Leveraging the power of HTML and SCSS, our designs were brought to life with meticulous detail, ensuring a seamless experience across devices.</li>
            <li><span class="keyword">Feedback-Driven Iteration:</span> User testing was integral to our design process. By constantly gathering feedback and iterating on our designs, we crafted a system that resonated with our target audience, making sure it not only served its purpose but was also enjoyable to use.</li>
        </ul>
        <p>The outcome was a gamification system that effectively incentivized performance, fostered healthy competition, and made day-to-day operations more engaging for the dealerships. Through this project, I've recognized the profound impact gamification can have on user behavior and motivation, and the importance of marrying creativity with functionality in design.</p>
        `,
      imageUrl: 'assets/img/works/gamification-770.png',
      images: ['assets/img/works/gamification/game-1.jpg', 'assets/img/works/gamification/game-2.jpg', 'assets/img/works/gamification/game-3.jpg', 'assets/img/works/gamification/game-4.jpg'],
      tags: ['Axure', 'Balsamiq', 'HTML', 'SCSS', 'Jira'],
      class: 'col-lg-8 col-md-8 col-sm-12'
    }, {
      id: 7,
      title: 'Automotive Dealership CRM',
      description: `
        <p>While at NCC Credit, an exciting challenge lay ahead of me. Brought on by a director familiar with my prior work, I was entrusted with designing an innovative automotive CRM from scratch. With the pressure of unveiling a working prototype at the largest automotive software convention in Las Vegas in just three months, the stakes were high. Here's a closer look at our solution:</p>
        <ul>
            <li><span class="keyword">Streamlined Design:</span> Recognizing the demanding nature of a salesman's day-to-day tasks – from making calls and managing leads to sending emails and texts – our primary objective was efficiency. Our solution was the "Papers" layout, a unique design that folded down the previous section as users navigated through their tasks. This innovative approach ensured they had all necessary tools at their fingertips, streamlining their daily workflow and enhancing productivity.</li>
            <li><span class="keyword">All-in-One Layout:</span> The system was meticulously crafted to offer a holistic experience. Everything a user needed was accessible from a single interface, eliminating the need to juggle between different screens or tools.</li>
            <li><span class="keyword">Rapid Prototyping:</span> With tools like Balsamiq and Axure, the design process was agile. We swiftly moved from wireframes to interactive prototypes, ensuring we stayed on track to meet our tight deadline.</li>
            <li><span class="keyword">Cutting-Edge Technologies:</span> Backed by Angular's powerful framework, the application was robust and responsive. Coupled with Bootstrap, the interface was seamless across devices. And with Azure DevOps at its core, collaboration and deployment were a breeze.</li>
            <li><span class="keyword">Creative Design:</span> Adobe Creative Suite allowed us to fine-tune the visuals, ensuring our CRM wasn't just functional, but also aesthetically pleasing.</li>
            <li><span class="keyword">Collaborative Workflow:</span> Using Confluence, the entire team stayed in sync, ensuring a smooth and collaborative development process.</li>
        </ul>
        <p>The result was a CRM that redefined efficiency in the automotive domain. Through this project, I've reinforced the importance of intuitive design, the power of collaboration, and the impact of leveraging the right tools for the right job. The success of Avendas at the convention was a testament to our dedication and innovative approach.</p>
        `,
      imageUrl: 'assets/img/works/avendas-370.png',
      images: ['assets/img/works/automotive-dealership-crm/avendas.png', 'assets/img/works/automotive-dealership-crm/avendas-1.png', 'assets/img/works/automotive-dealership-crm/avendas-2.png', 'assets/img/works/automotive-dealership-crm/avendas-3.png', 'assets/img/works/automotive-dealership-crm/avendas-4.jpeg'],
      tags: ['Figma/XD', 'Angular', 'HTML', 'SCSS', 'Bootstrap', 'Azure DevOps', 'Git', 'Confluence', 'Adobe Creative Suite', 'Jira', 'Miro'],
      class: 'col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3'
    }, {
      id: 8,
      title: 'MyHealthEVet Online Health Portal',
      description: `
        <p>Collaborating with the Veterans Affairs (VA) Design team was an enriching experience. Our mission was clear: to build a secure portal that would empower veterans to access their sensitive, HIPPA-compliant health records. The project went beyond mere data access – it was about facilitating seamless healthcare for our nation's heroes. Here's a deep dive into the project's intricacies:</p>
        <ul>
            <li><span class="keyword">Veteran-Centric Design:</span> At the heart of our design process were the veterans. Through extensive UX interviews and case studies, we strived to understand their unique needs and pain points. This user-centric approach paved the way for intuitive screens, enabling veterans to easily access prescriptions, lab results, and more.</li>
            <li><span class="keyword">Rigorous Testing:</span> Ensuring the effectiveness of our design was crucial. We employed a myriad of testing techniques, including A/B testing, to refine our user interfaces, ensuring they were both user-friendly and efficient.</li>
            <li><span class="keyword">Code/Design Challenges:</span> The project was peppered with challenges that pushed our team to its limits. Our company participated in multiple code and design challenges, with each victory awarding us a contract. These 2-4 day exercises required us to not just design, but also showcase our workflow. Collaborating with developers, product owners, and fellow UI/UX designers, it was a race against time, but the learnings and camaraderie made it all worthwhile.</li>
            <li><span class="keyword">Holistic Healthcare Portal:</span> Beyond mere record access, the portal served as a comprehensive healthcare hub. Veterans could order and refill prescriptions, share their records with healthcare providers, view lab results, and more – all in one place.</li>
            <li><span class="keyword">Impactful Role:</span> The significance of our work wasn't lost on us. By creating a user-friendly portal, we played a part in ensuring our veterans received the timely care they deserved.</li>
        </ul>
        <p>Through the MyHealtheVet project, I gained invaluable insights into the world of healthcare UX design. But more than that, I learned the importance of empathy and the role technology can play in making a tangible difference in people's lives. Working for our veterans was not just a project; it was a responsibility we wore with pride.</p>
        `,
      imageUrl: 'assets/img/works/myhealthevet-770.png',
      images: ['assets/img/works/myhealthevet/myhealhevet-2.jpg', 'assets/img/works/myhealthevet/myhealhevet-3.jpg'],
      tags: ['Figma/XD', 'Balsamiq', 'Confluence', 'HTML', 'SCSS', 'Jira', 'Miro'],
      class: 'col-lg-8 col-md-8 col-sm-12'
    }, {
      id: 9,
      title: 'Big Data Dashboards',
      description: `
        <p>In the fast-paced world of automotive sales, having real-time insights is paramount. At DealerSocket, we identified a challenge: there was a wealth of data accumulated over the years, stored away in a data cube. Our mission was to transform this raw data into actionable insights for sales managers and dealership executives. And so began the journey of the Big Data Dashboards project. Here's an in-depth look:</p>
        <ul>
            <li><span class="keyword">Data Visualization:</span> The primary challenge was not just to access the data, but to present it in a manner that was easy to comprehend. Through the integration of ChartJS and KendoUI, we were able to bring data to life through vivid graphs and charts tailored to the specific needs of the dealership executives.</li>
            <li><span class="keyword">Accessibility on the Go:</span> Given the dynamic nature of the sales environment, it was imperative that these insights be accessible from any device. Whether on a tablet in a sales meeting or a desktop in an executive suite, our dashboards adapted seamlessly, thanks to Bootstrap's responsive capabilities.</li>
            <li><span class="keyword">Customization:</span> Recognizing that every executive has unique preferences, we built in features that allowed for dashboard customization. This ensured that each user could focus on the metrics most relevant to them.</li>
            <li><span class="keyword">Alerts and Notifications:</span> To keep the team proactive, we incorporated a feature to send daily email alerts, ensuring that key insights were never missed. Coupled with secure authentication processes, we made sure that the right data reached the right person at the right time.</li>
            <li><span class="keyword">Agile Approach:</span> The project's success was largely attributed to our agile methodology. Using tools like Jira and Confluence, we maintained a fluid communication channel, ensuring that feedback was incorporated promptly and the project remained on track.</li>
            <li><span class="keyword">UX/UI Design:</span> The interface was designed keeping in mind the end user. Through tools like Axure and Balsamiq, we crafted an intuitive design, ensuring that navigating through vast amounts of data was a breeze.</li>
        </ul>
        <p>Reflecting on the Big Data Dashboards project, it was a testament to the power of data when harnessed correctly. It wasn't just about presenting numbers; it was about converting those numbers into stories that drove decisions. Through this initiative, we successfully bridged the gap between data accumulation and data utilization, providing DealerSocket with a tool that truly made a difference.</p>
        `,
      imageUrl: 'assets/img/works/big-data-370.png',
      images: ['assets/img/works/big-data/big-data-1.png', 'assets/img/works/big-data/big-data-2.jpeg', 'assets/img/works/big-data/big-data-3.jpeg', 'assets/img/works/big-data/big-data-4.jpeg'],
      tags: ['Axure', 'Balsamiq', 'Angular', 'ChartJS', 'HTML', 'SCSS', 'Jira', 'Confluence'],
      class: 'col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3'
    }, {
      id: 10,
      title: 'Visual Task Boards',
      description: `
        <p>Modern enterprises demand agility and efficiency, and to meet these needs, we embarked on the journey to build the Visual Task Boards at ServiceNow. Modeled after the simplicity and efficiency of "Trello", our objective was to provide internal users with a holistic platform to manage, track, and streamline their tasks, bugs, and tickets. Let's delve into the intricacies of this transformative project:</p>
        <ul>
            <li><span class="keyword">Unified Platform:</span> One of the project's key achievements was eliminating the need for external third-party tools. By integrating ticketing and task management within the ServiceNow ecosystem, we enhanced user efficiency and reduced dependency on multiple platforms.</li>
            <li><span class="keyword">Flexible Board Styles:</span> Catering to diverse working styles, we provided users with the flexibility to choose between kanban and agile board styles, ensuring they could work in an environment they were most comfortable with.</li>
            <li><span class="keyword">Customization:</span> Acknowledging that no two teams work alike, our boards offered extensive customization options. From adjusting colors to defining categories, users had the freedom to tailor the boards to their specific requirements.</li>
            <li><span class="keyword">Real-time Notifications:</span> Staying updated was made effortless with built-in email and push notifications, ensuring that every team member was in sync and informed about task progress and updates.</li>
            <li><span class="keyword">In-depth UX Research:</span> The backbone of the project's success was our rigorous user experience methodology. Through internal testing, persona creation, and iterative design, we ensured that our solution was not just functional but user-centric. The use of mock designs further facilitated this iterative process, enabling us to refine our vision based on real feedback.</li>
            <li><span class="keyword">Collaboration with Visionaries:</span> A project of this magnitude and innovation required visionary insights. I had the unique opportunity to work directly with ServiceNow's original founder, Fred Luddy. Being part of a hand-picked team that he curated for creating groundbreaking products was an invaluable experience that significantly shaped the direction and outcome of the Visual Task Boards.</li>
        </ul>
        <p>Visual Task Boards were more than just a tool; they represented a shift in how ServiceNow approached task management. By bridging the gap between task creation and execution, we provided our users with a cohesive, intuitive, and efficient system, redefining how they interacted with their daily workflows.</p>
        `,
      imageUrl: 'assets/img/works/vtb-370.png',
      images: ['assets/img/works/visual-task-boards/vtb.jpg', 'assets/img/works/visual-task-boards/vtb-1.png', 'assets/img/works/visual-task-boards/vtb-2.png', 'assets/img/works/visual-task-boards/vtb-4.png', 'assets/img/works/visual-task-boards/vtb-5.jpeg'],
      tags: ['Balsamiq', 'Axure', 'Adobe Creative Suite', 'HTML', 'SCSS', 'Jira', 'Confluence'],
      class: 'col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3'
    }];
  }
  getProjects() {
    return this.projects;
  }
  static #_ = this.ɵfac = function SharedDataService_Factory(t) {
    return new (t || SharedDataService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: SharedDataService,
    factory: SharedDataService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 553:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
  production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 4913:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 8629);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 553);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4913)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map