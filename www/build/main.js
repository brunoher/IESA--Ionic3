webpackJsonp([2],{

/***/ 110:
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
webpackEmptyAsyncContext.id = 110;

/***/ }),

/***/ 151:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/hangman/hangman.module": [
		275,
		0
	],
	"../pages/tictactoe/tictactoe.module": [
		276,
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 151;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//import { HttpClient } from '@angular/common/http';


var AlertProvider = (function () {
    function AlertProvider(alertCtrl) {
        this.alertCtrl = alertCtrl;
    }
    AlertProvider.prototype.presentAlert = function (title, subTitle, btn_txt) {
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: subTitle,
            buttons: [btn_txt]
        });
        alert.present();
    };
    AlertProvider.prototype.confirmRestart = function (title, playing, that) {
        var message = playing === that.player.is ? "Le joueur " + playing + " gagne" : "L'ordinateur gagne";
        var alert = this.alertCtrl.create({
            title: title,
            message: message,
            buttons: [
                {
                    text: "Continuer",
                    handler: function () {
                        that.restart(true);
                    }
                }
            ]
        });
        alert.present();
    };
    AlertProvider.prototype.selectSymbol = function (title, message, that) {
        var alert = this.alertCtrl.create({
            title: title,
            message: message,
            buttons: [
                {
                    text: "X",
                    handler: function () {
                        that.selectSymbol("X");
                    }
                },
                {
                    text: "O",
                    handler: function () {
                        that.selectSymbol("O");
                    }
                }
            ]
        });
        alert.present();
    };
    AlertProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], AlertProvider);
    return AlertProvider;
}());

//# sourceMappingURL=alert.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tictactoe_tictactoe__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__tictactoe_tictactoe__["a" /* TictactoePage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/valentinelarit/Desktop/dossier sans titre 4/IESA--Ionic3/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="TicTacToe" tabIcon="grid"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/valentinelarit/Desktop/dossier sans titre 4/IESA--Ionic3/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/valentinelarit/Desktop/dossier sans titre 4/IESA--Ionic3/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title text-center>Accueil</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding id="home-content">\n  <ion-grid class="home-grid">\n    \n  </ion-grid>\n</ion-content>\n\n\n'/*ion-inline-end:"/Users/valentinelarit/Desktop/dossier sans titre 4/IESA--Ionic3/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(222);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_alert_alert__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_tictactoe_tictactoe__ = __webpack_require__(99);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_tictactoe_tictactoe__["a" /* TictactoePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/hangman/hangman.module#HangmanPageModule', name: 'HangmanPage', segment: 'hangman', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tictactoe/tictactoe.module#TictactoePageModule', name: 'TictactoePage', segment: 'tictactoe', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_tictactoe_tictactoe__["a" /* TictactoePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_9__providers_alert_alert__["a" /* AlertProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/valentinelarit/Desktop/dossier sans titre 4/IESA--Ionic3/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/valentinelarit/Desktop/dossier sans titre 4/IESA--Ionic3/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TictactoePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_alert_alert__ = __webpack_require__(152);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TictactoePage = (function () {
    function TictactoePage(navCtrl, navParams, alertProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertProvider = alertProvider;
        this.items = this.initItems(false);
        this.player = { is: "", score: 0 };
        this.cpu = { is: "", score: 0 };
        this.moves = 0;
        this.canPlay = true;
        this.lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
    }
    TictactoePage.prototype.initItems = function (triggeredByAlertCtrl) {
        this.moves = 0;
        var output = [], i = 0;
        this.alertProvider.selectSymbol("Choix du symbole à jouer", "Quel symbole préférez vous jouer ?", this);
        while (i < 9) {
            output.push({});
            i++;
        }
        if (triggeredByAlertCtrl) {
            this.items = output;
        }
        else {
            return output;
        }
    };
    TictactoePage.prototype.selectSymbol = function (symbol) {
        this.player.is = symbol;
        this.cpu.is = symbol === "X" ? "O" : "X";
    };
    TictactoePage.prototype.playSquare = function (event) {
        if (this.canPlay) {
            if (!this.items[event.target.id].value) {
                this.canPlay = false;
                this.items[event.target.id].value = this.player.is;
                this.runGame(this.player.is);
            }
        }
    };
    TictactoePage.prototype.hasWon = function () {
        for (var i = 0, len = this.lines.length; i < len; i++) {
            var _a = this.lines[i], a = _a[0], b = _a[1], c = _a[2];
            if (this.items[a].value && this.items[a].value === this.items[b].value && this.items[a].value === this.items[c].value) {
                return true;
            }
        }
        return false;
    };
    TictactoePage.prototype.runGame = function (playing) {
        this.moves++;
        if (this.hasWon()) {
            this.alertProvider.confirmRestart("Fin de partie !", playing, this);
            if (playing === this.player.is) {
                this.canPlay = true;
                this.player.score++;
            }
            else {
                this.cpu.score++;
            }
        }
        else if (this.moves < 9) {
            if (playing === this.player.is)
                this.ai();
        }
        else {
            this.items = this.initItems(false);
            if (playing === this.player.is)
                this.canPlay = true;
        }
    };
    TictactoePage.prototype.restart = function () {
        this.items = this.initItems(false);
    };
    TictactoePage.prototype.ai = function () {
        var that = this;
        setTimeout(function () {
            var i;
            do {
                i = Math.round(Math.random() * that.items.length - 0.51);
            } while (that.items[i].value);
            that.items[i].value = that.cpu.is;
            that.runGame(that.cpu.is);
            that.canPlay = true;
        }, 800);
    };
    TictactoePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TictactoePage');
    };
    TictactoePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tictactoe',template:/*ion-inline-start:"/Users/valentinelarit/Desktop/dossier sans titre 4/IESA--Ionic3/src/pages/tictactoe/tictactoe.html"*/'<ion-header>\n    <ion-navbar>\n      <ion-title text-center>Tic Tac Toe</ion-title>\n    </ion-navbar>\n  </ion-header>\n  \n  <ion-content padding id="home-content">\n    <ion-grid class="score_buttons-grid">\n      <ion-row>\n        <ion-col class="score-col">\n          Score :\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col class="score_button-col">\n          <div class="score_button">Vous: {{ player.score }}</div>\n        </ion-col>\n        <ion-col class="score_button-col">\n          <div class="score_button">Adversaire: {{ cpu.score }}</div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    \n    <div class="tictactoe-grid">\n      \n      <ion-row id="tictactoe-line-1">\n        <ion-col>\n          <span *ngIf= "items[0].value && items[0].value === \'X\'" class="x">{{ items[0].value }}</span>\n          <span *ngIf= "items[0].value && items[0].value === \'O\'" class="o">{{ items[0].value }}</span>\n          <button id="0" class="play-btn" (click)="playSquare($event)"></button>\n        </ion-col>\n        \n        <ion-col class="middle-col">\n            <span *ngIf= "items[1].value && items[1].value === \'X\'" class="x">{{ items[1].value }}</span>\n            <span *ngIf= "items[1].value && items[1].value === \'O\'" class="o">{{ items[1].value }}</span>\n          <button id="1" class="play-btn" (click)="playSquare($event)"></button>\n        </ion-col>\n        \n        <ion-col>\n            <span *ngIf= "items[2].value && items[2].value === \'X\'" class="x">{{ items[2].value }}</span>\n            <span *ngIf= "items[2].value && items[2].value === \'O\'" class="o">{{ items[2].value }}</span>\n          <button id="2" class="play-btn" (click)="playSquare($event)"></button>\n        </ion-col>\n      </ion-row>\n      \n      \n      <ion-row id="tictactoe-line-2">\n        <ion-col>\n            <span *ngIf= "items[3].value && items[3].value === \'X\'" class="x">{{ items[3].value }}</span>\n            <span *ngIf= "items[3].value && items[3].value === \'O\'" class="o">{{ items[3].value }}</span>\n          <button id="3" class="play-btn" (click)="playSquare($event)"></button>\n        </ion-col>\n        \n        <ion-col class="middle-col">\n            <span *ngIf= "items[4].value && items[4].value === \'X\'" class="x">{{ items[4].value }}</span>\n            <span *ngIf= "items[4].value && items[4].value === \'O\'" class="o">{{ items[4].value }}</span>\n          <button id="4" class="play-btn" (click)="playSquare($event)"></button>\n        </ion-col>\n        \n        <ion-col>\n            <span *ngIf= "items[5].value && items[5].value === \'X\'" class="x">{{ items[5].value }}</span>\n            <span *ngIf= "items[5].value && items[5].value === \'O\'" class="o">{{ items[5].value }}</span>\n          <button id="5" class="play-btn" (click)="playSquare($event)"></button>\n        </ion-col>\n      </ion-row>\n      \n      \n      <ion-row id="tictactoe-line-3">\n        <ion-col>\n            <span *ngIf= "items[6].value && items[6].value === \'X\'" class="x">{{ items[6].value }}</span>\n            <span *ngIf= "items[6].value && items[6].value === \'O\'" class="o">{{ items[6].value }}</span>\n          <button id="6" class="play-btn" (click)="playSquare($event)"></button>\n        </ion-col>\n        \n        <ion-col class="middle-col">\n            <span *ngIf= "items[7].value && items[7].value === \'X\'" class="x">{{ items[7].value }}</span>\n            <span *ngIf= "items[7].value && items[7].value === \'O\'" class="o">{{ items[7].value }}</span>\n          <button id="7" class="play-btn" (click)="playSquare($event)"></button>\n        </ion-col>\n        \n        <ion-col>\n            <span *ngIf= "items[8].value && items[8].value === \'X\'" class="x">{{ items[8].value }}</span>\n            <span *ngIf= "items[8].value && items[8].value === \'O\'" class="o">{{ items[8].value }}</span>\n          <button id="8" class="play-btn" (click)="playSquare($event)"></button>\n        </ion-col>\n      </ion-row>\n    </div>\n  </ion-content>\n'/*ion-inline-end:"/Users/valentinelarit/Desktop/dossier sans titre 4/IESA--Ionic3/src/pages/tictactoe/tictactoe.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_alert_alert__["a" /* AlertProvider */]])
    ], TictactoePage);
    return TictactoePage;
}());

//# sourceMappingURL=tictactoe.js.map

/***/ })

},[198]);
//# sourceMappingURL=main.js.map