(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<app-track-list></app-track-list>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'soundCloudTask';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _track_list_track_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./track-list/track-list.component */ "./src/app/track-list/track-list.component.ts");
/* harmony import */ var _track_list_search_search_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./track-list/search/search.component */ "./src/app/track-list/search/search.component.ts");
/* harmony import */ var _track_list_track_cover_track_cover_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./track-list/track-cover/track-cover.component */ "./src/app/track-list/track-cover/track-cover.component.ts");
/* harmony import */ var src_app_track_list_track_track_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/track-list/track/track.component */ "./src/app/track-list/track/track.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_service_trackSearchService__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/service/trackSearchService */ "./src/app/shared/service/trackSearchService.ts");
/* harmony import */ var _shared_pipes_safe_url_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/pipes/safe-url.pipe */ "./src/app/shared/pipes/safe-url.pipe.ts");
/* harmony import */ var ngx_webstorage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-webstorage */ "./node_modules/ngx-webstorage/dist/app.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _track_list_track_list_component__WEBPACK_IMPORTED_MODULE_3__["TrackListComponent"],
                _track_list_search_search_component__WEBPACK_IMPORTED_MODULE_4__["SearchComponent"],
                src_app_track_list_track_track_component__WEBPACK_IMPORTED_MODULE_6__["TrackComponent"],
                _track_list_track_cover_track_cover_component__WEBPACK_IMPORTED_MODULE_5__["TrackCoverComponent"],
                _shared_pipes_safe_url_pipe__WEBPACK_IMPORTED_MODULE_9__["SafeUrlPipe"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                ngx_webstorage__WEBPACK_IMPORTED_MODULE_10__["Ng2Webstorage"]
            ],
            providers: [_shared_service_trackSearchService__WEBPACK_IMPORTED_MODULE_8__["TrackSearchService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/shared/pipes/safe-url.pipe.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/pipes/safe-url.pipe.ts ***!
  \***********************************************/
/*! exports provided: SafeUrlPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafeUrlPipe", function() { return SafeUrlPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SafeUrlPipe = /** @class */ (function () {
    function SafeUrlPipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafeUrlPipe.prototype.transform = function (url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    };
    SafeUrlPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'safeUrl'
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]])
    ], SafeUrlPipe);
    return SafeUrlPipe;
}());



/***/ }),

/***/ "./src/app/shared/service/trackSearchService.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/service/trackSearchService.ts ***!
  \******************************************************/
/*! exports provided: TrackSearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrackSearchService", function() { return TrackSearchService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TrackSearchService = /** @class */ (function () {
    function TrackSearchService(httpClient) {
        this.httpClient = httpClient;
        this.clientId = '1fb0d04a94f035059b0424154fd1b18c';
    }
    TrackSearchService.prototype.search = function (keyword) {
        var uri = this.tracksSearchUri(keyword);
        return this.httpClient.get(uri);
    };
    TrackSearchService.prototype.tracksSearchUri = function (keyword) {
        return 'http://api.soundcloud.com/tracks?client_id=' + this.clientId + '&q=' + keyword;
    };
    TrackSearchService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], TrackSearchService);
    return TrackSearchService;
}());



/***/ }),

/***/ "./src/app/track-list/search/search.component.html":
/*!*********************************************************!*\
  !*** ./src/app/track-list/search/search.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<input #trackNameInput type=\"text\" name=\"trackNAme\" alt=\"track cover\" tabindex=\"-1\" (focus)=\"onFocusMethod($event.target)\">\n<label class=\"goButton\" [for]=\"'myInput'\" (click)=\"searchTrack(trackNameInput.value);inputValueChanges(trackNameInput.value)\">GO</label>\n\n<div class=\"tracksHistory\">\n  <div class=\"title\">Search History :</div>\n  <ul>\n    <li *ngFor=\"let item of tracksHistory ; index as i; trackBy: trackByFn\"  [ngClass]=\"{'itemClicked' : linkIndex === i && clicked }\" (click)=\"searchTrack(item); clickedLink(i)\">{{item}}</li>\n  </ul>\n</div>"

/***/ }),

/***/ "./src/app/track-list/search/search.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/track-list/search/search.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input {\n  height: 25px;\n  border: 1px solid #000;\n  background-color: transparent;\n  color: #000000;\n  text-indent: 5px;\n  font-size: 16px; }\n\n.goButton {\n  margin-left: 10px; }\n\n.goButton:hover {\n    color: #008000; }\n\n.tracksHistory {\n  border-top: 1px solid;\n  border-bottom: 1px solid;\n  margin: 15px 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start; }\n\n.tracksHistory .title {\n    margin-top: 5px; }\n\n.tracksHistory ul {\n    margin: 5px 0; }\n\n.tracksHistory ul li {\n      word-wrap: break-word;\n      cursor: pointer; }\n\n.tracksHistory ul li:hover {\n        opacity: 0.7; }\n\n.tracksHistory ul li.itemClicked {\n      color: #008000; }\n"

/***/ }),

/***/ "./src/app/track-list/search/search.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/track-list/search/search.component.ts ***!
  \*******************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_webstorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-webstorage */ "./node_modules/ngx-webstorage/dist/app.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SearchComponent = /** @class */ (function () {
    function SearchComponent(storage) {
        this.storage = storage;
        this.notifyTrackInput = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    SearchComponent.prototype.ngOnInit = function () {
        this.tracksHistory = [];
        this.inputValue = "";
        this.clicked = false;
        if (this.storage.retrieve('tracksHistory')) {
            this.retrieveValue();
        }
    };
    SearchComponent.prototype.searchTrack = function (trackNameInputValue) {
        this.notifyTrackInput.emit(trackNameInputValue);
        trackNameInputValue = " ";
    };
    SearchComponent.prototype.onFocusMethod = function (trackNameInput) {
        trackNameInput.value = "";
    };
    SearchComponent.prototype.inputValueChanges = function (inputValue) {
        if (/\S/.test(inputValue)) {
            this.tracksHistory.unshift(inputValue);
            if (this.tracksHistory.length > 4) {
                this.tracksHistory = this.tracksHistory.slice(0, 5);
            }
            this.storage.store('tracksHistory', this.tracksHistory);
            this.retrieveValue();
            this.clicked = false;
            this.clickedLink(0);
        }
    };
    SearchComponent.prototype.retrieveValue = function () {
        this.tracksHistory = this.storage.retrieve('tracksHistory');
    };
    SearchComponent.prototype.clickedLink = function (index) {
        this.clicked = true;
        this.linkIndex = index;
    };
    SearchComponent.prototype.trackByFn = function (index, item) {
        return item; // or item.id
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], SearchComponent.prototype, "notifyTrackInput", void 0);
    SearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(/*! ./search.component.html */ "./src/app/track-list/search/search.component.html"),
            styles: [__webpack_require__(/*! ./search.component.scss */ "./src/app/track-list/search/search.component.scss")]
        }),
        __metadata("design:paramtypes", [ngx_webstorage__WEBPACK_IMPORTED_MODULE_1__["LocalStorageService"]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/track-list/track-cover/track-cover.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/track-list/track-cover/track-cover.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"coverImg\">\n  <img [hidden]=\"!imageloaded\" Class=\"fadeInImg\" (click)=\"changeValue(true)\" src={{this.currentClickedTrack.artwork_url}}>\n  <div *ngIf=\"playSongflag\">\n    <iframe *ngIf=\"uri\" width=\"100%\" height=\"300\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay\" [src]=\"uri | safeUrl\"></iframe>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/track-list/track-cover/track-cover.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/track-list/track-cover/track-cover.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".coverImg {\n  text-align: center; }\n  .coverImg img {\n    width: 250px;\n    height: 250px;\n    cursor: pointer; }\n  .coverImg .fadeInImg {\n    -webkit-animation: fadein 2s;\n            animation: fadein 2s; }\n  @-webkit-keyframes fadein {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n  @keyframes fadein {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n"

/***/ }),

/***/ "./src/app/track-list/track-cover/track-cover.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/track-list/track-cover/track-cover.component.ts ***!
  \*****************************************************************/
/*! exports provided: TrackCoverComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrackCoverComponent", function() { return TrackCoverComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TrackCoverComponent = /** @class */ (function () {
    function TrackCoverComponent() {
        this.imgTimer();
    }
    Object.defineProperty(TrackCoverComponent.prototype, "currentClicked", {
        set: function (trackObject) {
            var _this = this;
            this.currentClickedTrack = trackObject;
            this.rawUri = trackObject.uri;
            this.playSongflag = false;
            setTimeout(function () {
                _this.uri = 'https://w.soundcloud.com/player/?url=' + _this.rawUri + '&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true';
            }, 0);
        },
        enumerable: true,
        configurable: true
    });
    TrackCoverComponent.prototype.ngOnInit = function () {
        this.uri = '';
        this.playSongflag = false;
        this.imageloaded = false;
    };
    TrackCoverComponent.prototype.imgTimer = function () {
        var _this = this;
        setTimeout(function () {
            console.log('timer');
            _this.imageloaded = true;
        }, 2000);
    };
    TrackCoverComponent.prototype.changeValue = function (value) {
        this.playSongflag = value;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('currentClickedTrack'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], TrackCoverComponent.prototype, "currentClicked", null);
    TrackCoverComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-track-cover',
            template: __webpack_require__(/*! ./track-cover.component.html */ "./src/app/track-list/track-cover/track-cover.component.html"),
            styles: [__webpack_require__(/*! ./track-cover.component.scss */ "./src/app/track-list/track-cover/track-cover.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TrackCoverComponent);
    return TrackCoverComponent;
}());



/***/ }),

/***/ "./src/app/track-list/track-list.component.html":
/*!******************************************************!*\
  !*** ./src/app/track-list/track-list.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"trackListContainer\">\n  <div class=\"searchContainer\">\n    <div class=\"searchInputComp\">\n      <app-search (notifyTrackInput)='searchTrack($event)'></app-search>\n    </div>\n    <div *ngFor=\"let currentTrack of tracks ; index as i ; trackBy: trackByFn\">\n      <app-track *ngIf=\"i >= startshownTracks && i < endshownTracks \" [currentTrack]='currentTrack' (notifyClickedTrack)='imageContainer($event)'></app-track>\n      <span *ngIf=\"(currentTrack | json) === '{}'\">NO TRACKS</span>\n    </div>\n    <div class=\"controls\" *ngIf=\"this.tracks.length > 6\">\n      <div class=\"nextButton\" (click)=\"nextTracks()\" *ngIf=\"endshownTracks <= this.tracks.length\">\n        <img src='.\\assets\\next.png'>\n      </div>\n      <div class=\"prevButton\" (click)=\"prevTracks()\" *ngIf=\"startshownTracks > 0\">\n        <img src='.\\assets\\next.png'>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"imageContainer fadeout\" *ngIf=\"trackClickedFlag\">\n    <app-track-cover class=\"imgCoverComp\" [currentClickedTrack]='currentClickedTrack'></app-track-cover>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/track-list/track-list.component.scss":
/*!******************************************************!*\
  !*** ./src/app/track-list/track-list.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".trackListContainer .searchContainer, .trackListContainer .imageContainer {\n  margin: 0px 10px;\n  padding: 20px 10px 20px 10px;\n  background-color: #87CEEB;\n  border: 1px solid #000000;\n  min-height: 500px;\n  border-radius: 2px; }\n\n.trackListContainer {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 16px; }\n\n.trackListContainer .searchContainer {\n    width: 300px;\n    position: relative;\n    padding-bottom: 80px; }\n\n.trackListContainer .searchContainer .searchInputComp {\n      margin-bottom: 25px;\n      margin-right: 5px; }\n\n.trackListContainer .searchContainer .controls {\n      position: absolute;\n      bottom: 20px;\n      left: 10px; }\n\n.trackListContainer .searchContainer .controls .nextButton img, .trackListContainer .searchContainer .controls .prevButton img {\n        width: 50px;\n        height: 25px; }\n\n.trackListContainer .searchContainer .controls .prevButton img {\n        -webkit-transform: rotate(180deg);\n                transform: rotate(180deg); }\n\n.trackListContainer .imageContainer {\n    flex: 1 60%;\n    display: flex;\n    max-width: 400px;\n    flex-direction: row;\n    justify-content: center; }\n\n.trackListContainer .imageContainer .imgCoverComp {\n      flex-grow: 1; }\n\n.trackListContainer .fadeout {\n    -webkit-animation: fadeout 2s;\n            animation: fadeout 2s;\n    flex-grow: 1; }\n\n@-webkit-keyframes fadeout {\n  from {\n    opacity: 1; }\n  to {\n    opacity: 0; } }\n\n@keyframes fadeout {\n  from {\n    opacity: 1; }\n  to {\n    opacity: 0; } }\n"

/***/ }),

/***/ "./src/app/track-list/track-list.component.ts":
/*!****************************************************!*\
  !*** ./src/app/track-list/track-list.component.ts ***!
  \****************************************************/
/*! exports provided: TrackListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrackListComponent", function() { return TrackListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_service_trackSearchService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/service/trackSearchService */ "./src/app/shared/service/trackSearchService.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TrackListComponent = /** @class */ (function () {
    function TrackListComponent(trackSearchService) {
        this.trackSearchService = trackSearchService;
    }
    TrackListComponent.prototype.ngOnInit = function () {
        this.tracks = "";
        this.trackClickedFlag = false;
        this.numberOfshownTracks = 6;
        this.imageloaded = false;
    };
    TrackListComponent.prototype.searchTrack = function (searchInputValue) {
        this.getAllTracks(searchInputValue);
    };
    TrackListComponent.prototype.getAllTracks = function (searchTrack) {
        var _this = this;
        this.trackSearchService.search(searchTrack).subscribe(function (data) {
            _this.tracks = data;
            _this.resetVarsTostart();
        });
    };
    TrackListComponent.prototype.resetVarsTostart = function () {
        this.startshownTracks = 0;
        this.endshownTracks = this.numberOfshownTracks;
    };
    TrackListComponent.prototype.imageContainer = function (clickedResult_track) {
        this.currentClickedTrack = clickedResult_track;
        this.trackClickedFlag = true;
    };
    TrackListComponent.prototype.nextTracks = function () {
        this.startshownTracks = this.endshownTracks;
        this.endshownTracks = this.endshownTracks + this.numberOfshownTracks;
    };
    TrackListComponent.prototype.prevTracks = function () {
        this.endshownTracks = this.startshownTracks;
        this.startshownTracks = this.startshownTracks - this.numberOfshownTracks;
    };
    TrackListComponent.prototype.trackByFn = function (index, item) {
        return item;
    };
    TrackListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-track-list',
            template: __webpack_require__(/*! ./track-list.component.html */ "./src/app/track-list/track-list.component.html"),
            styles: [__webpack_require__(/*! ./track-list.component.scss */ "./src/app/track-list/track-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_service_trackSearchService__WEBPACK_IMPORTED_MODULE_1__["TrackSearchService"]])
    ], TrackListComponent);
    return TrackListComponent;
}());



/***/ }),

/***/ "./src/app/track-list/track/track.component.html":
/*!*******************************************************!*\
  !*** ./src/app/track-list/track/track.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"track_ResultLine\" (click)=\"clickedTrack(currentTrack)\"><span>&#9835; </span> {{currentTrack.title}} </div>"

/***/ }),

/***/ "./src/app/track-list/track/track.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/track-list/track/track.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".track_ResultLine {\n  word-wrap: break-word;\n  padding: 10px;\n  cursor: pointer; }\n  .track_ResultLine:hover {\n    background: #dddfe2; }\n  .track_ResultLine:hover span {\n      color: #3d8e38; }\n"

/***/ }),

/***/ "./src/app/track-list/track/track.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/track-list/track/track.component.ts ***!
  \*****************************************************/
/*! exports provided: TrackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrackComponent", function() { return TrackComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TrackComponent = /** @class */ (function () {
    function TrackComponent() {
        this.notifyClickedTrack = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    TrackComponent.prototype.clickedTrack = function (clicked_resultTrack) {
        this.notifyClickedTrack.emit(clicked_resultTrack);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TrackComponent.prototype, "currentTrack", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], TrackComponent.prototype, "notifyClickedTrack", void 0);
    TrackComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-track',
            template: __webpack_require__(/*! ./track.component.html */ "./src/app/track-list/track/track.component.html"),
            styles: [__webpack_require__(/*! ./track.component.scss */ "./src/app/track-list/track/track.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TrackComponent);
    return TrackComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\rozan\Desktop\ladbrocks_task\soundCloud\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map