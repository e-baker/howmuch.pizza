webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".page-footer {\n    width: 100%;\n    bottom: 0;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-sm text-light bg-primary d-flex justify-content-between\">\n  <div class=\"container\">\n    <h1><a href=\"/\" class=\"navbar-brand text-light\">How Much Pizza?</a></h1>\n    <p class=\"mt-3\">Where we tell you how much pizza you need for any reason!</p>\n  </div>\n</nav>\n<div class=\"container mt-5\">\n  <app-home></app-home>\n</div>\n<div class=\"container mt-4\">\n    <app-pizza-form></app-pizza-form>\n</div>\n<div class=\"container mt-4\">\n    <script async src=\"//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js\"></script>\n    <!-- How Much Pizza -->\n    <ins class=\"adsbygoogle\"\n         style=\"display:inline-block;width:728px;height:90px\"\n         data-ad-client=\"ca-pub-5282098335792392\"\n         data-ad-slot=\"1661087104\"></ins>\n    <script>\n        (adsbygoogle = window.adsbygoogle || []).push({});\n    </script>\n</div>\n<footer class=\"page-footer bg-secondary text-light\">\n  <div class=\"footer-copyright text-center mt-2\">\n    <p class=\"container-fluid\">Copyright 2018 &copy; <a href=\"https://ericbaker.me\" class=\"text-light\">Eric Baker</a>, <em>an Angular Developer &amp; Founder of <a href=\"https://wpranked.com\" class=\"text-light\">WP Ranked</a> - a WordPress SEO Company</em></p>\n  </div>\n</footer>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_pizza_form_pizza_form_component__ = __webpack_require__("../../../../../src/app/components/pizza-form/pizza-form.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_5__components_pizza_form_pizza_form_component__["a" /* PizzaFormComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<p>No need for fancy thingamabobs and dingle-whatsits. Just fill in the number of adults, teenagers (because we all know they eat their own pizza, right?), and children in the form below.</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/pizza-form/pizza-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".total { font-size: 3em; }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/pizza-form/pizza-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-lg-6\">\n        <div class=\"card card-body mb-3\">\n            <form>\n                <div class=\"row\">\n                    <h2 class=\"col-lg-12\">Pizza Eaters</h2>\n                    <div class=\"form-group col-lg-6\">\n                        <label>Pizza Size</label><br/>\n                        <select class=\"custom-select\" #size>\n                            <option value=\"8\">8 inches</option>\n                            <option value=\"12\">12 inches</option>\n                            <option value=\"14\">14 inches</option>\n                            <option value=\"16\">16 inches</option>\n                            <option value=\"18\">18 inches</option>\n                        </select>\n                    </div>\n                <div class=\"form-group col-lg-6\">\n                    <label>Adults</label>\n                    <input type=\"number\" class=\"form-control\" name=\"adults\" #adults>\n                </div>\n                <div class=\"form-group col-lg-6\">\n                    <label>Teenagers</label>\n                    <input type=\"number\" class=\"form-control\" name=\"teenagers\" #teenagers>\n                </div>\n                <div class=\"form-group col-lg-6\">\n                    <label>Children</label>\n                    <input type=\"number\" class=\"form-control\" name=\"children\" #children>\n                </div>\n                </div>\n                <input type=\"hidden\" name=\"id\">\n                <button (click)=\"calcTotalPizza(size.value, adults.value, teenagers.value, children.value)\" class=\"btn btn-warning btn-block\">Calculate</button>\n            </form>\n        </div>\n    </div>\n    <div class=\"col-lg-6\">\n        <div class=\"card card-body\">\n            <h2 class=\"total\">You Need {{ total }} pizza<span *ngIf=\"total != 1\">s</span>.</h2>\n        </div>        \n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/pizza-form/pizza-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PizzaFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PizzaFormComponent = (function () {
    function PizzaFormComponent() {
        this.total = 0;
    }
    PizzaFormComponent.prototype.ngOnInit = function () {
        this.adults = 0;
        this.teenagers = 0;
        this.children = 0;
    };
    PizzaFormComponent.prototype.calcTotalPizza = function (size, adults, teenagers, children) {
        var areaOfPizza = this.getAreaOfPizza(size);
        var areaNeeded = (this.makeANum(adults) * 50) + (this.makeANum(teenagers) * 75) + (this.makeANum(children) * 25);
        return this.total = Math.ceil(areaNeeded / areaOfPizza);
    };
    PizzaFormComponent.prototype.makeANum = function (input) {
        if (input == "") {
            input = 0;
        }
        return parseInt(input);
    };
    PizzaFormComponent.prototype.getAreaOfPizza = function (size) {
        var areaOfPizza = null;
        switch (size) {
            case '8': {
                areaOfPizza = 50;
                break;
            }
            case '12': {
                areaOfPizza = 113;
                break;
            }
            case '14': {
                areaOfPizza = 154;
                break;
            }
            case '16': {
                areaOfPizza = 201;
                break;
            }
            case '18': {
                areaOfPizza = 255;
                break;
            }
        }
        return areaOfPizza;
    };
    PizzaFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-pizza-form',
            template: __webpack_require__("../../../../../src/app/components/pizza-form/pizza-form.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/pizza-form/pizza-form.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PizzaFormComponent);
    return PizzaFormComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map