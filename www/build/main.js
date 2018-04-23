webpackJsonp([6],{

/***/ 186:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MemoryProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_models__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__globals__ = __webpack_require__(359);
/*
import { AlertProvider } from './alert.provider';
import { Alert, Events, Content, Platform } from 'ionic-angular';
*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var MemoryProvider = (function () {
    function MemoryProvider(
        /*
        private alert : AlertProvider,
        public events: Events
         */
        models) {
        this.models = models;
    }
    MemoryProvider.prototype.initCards = function () {
        var rows, cols, row, col, index;
        rows = [];
        cols = [];
        row = 0;
        col = 0;
        index = 0;
        while (row < __WEBPACK_IMPORTED_MODULE_2__globals__["b" /* MEMORY_SIZE */].rows) {
            while (col < __WEBPACK_IMPORTED_MODULE_2__globals__["b" /* MEMORY_SIZE */].cols) {
                cols.push({ index: index });
                col++;
                index++;
            }
            col = 0;
            rows.push(cols);
            cols = [];
            row++;
        }
        return rows;
    };
    MemoryProvider.prototype.initCardsToSend = function () {
        var i = 0, output = [];
        while (i < __WEBPACK_IMPORTED_MODULE_2__globals__["b" /* MEMORY_SIZE */].cards) {
            output.push({ index: i });
            i++;
        }
        return output;
    };
    MemoryProvider.prototype.uploadNewPackage = function (cards, uid) {
        var _this = this;
        return new Promise(function (resolve) {
            var address;
            for (var _i = 0, cards_1 = cards; _i < cards_1.length; _i++) {
                var card = cards_1[_i];
                address = 'images/' + uid + '/' + card.index;
                _this.models.fbStorageUpload(address, card.src, false).then(function (res) {
                    resolve(res);
                });
                //this.events.publish('loadingStatus', i)
            }
        }).catch(function (err) {
            throw "Problème uploadNewPackage ... " + err;
        });
    };
    MemoryProvider.prototype.getUrls = function () {
        return __awaiter(this, void 0, void 0, function () {
            var urls, i, url;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        urls = [], i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < __WEBPACK_IMPORTED_MODULE_2__globals__["b" /* MEMORY_SIZE */].cards)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.models.getFirebaseImageUrl('/images/autre_id_d_utilisateur/' + i + '.png')];
                    case 2:
                        url = _a.sent();
                        urls.push(url);
                        i++;
                        return [3 /*break*/, 1];
                    case 3: return [2 /*return*/, urls];
                }
            });
        });
    };
    MemoryProvider.prototype.setUpCardsSrc = function (urls) {
        var cards = [], i = 0;
        return new Promise(function (resolve) {
            for (var _i = 0, urls_1 = urls; _i < urls_1.length; _i++) {
                var url = urls_1[_i];
                cards.push({ src: url, isVisible: true });
                i++;
            }
            resolve(cards);
        }).catch(function (err) {
            throw "Problème setUpCardsSrc ... " + err;
        });
    };
    MemoryProvider.prototype.loadCards = function () {
        var _this = this;
        this.models.presentLoadingDefault();
        return new Promise(function (resolve) {
            _this.getUrls().then(function (urls) {
                _this.setUpCardsSrc(urls).then(function (cards) {
                    _this.randomizeCards(cards).then(function (result) {
                        resolve(result);
                    });
                });
            });
        }).catch(function (err) {
            throw 'Problème loadCards ... ' + err;
        });
    };
    MemoryProvider.prototype.randomizeCards = function (cards) {
        return new Promise(function (resolve) {
            var expandableCards = cards, toBeRandomized = [], output = [], card, newCard, i = 0;
            var randomIndex = function (length) { return (Math.round(Math.random() * (length) - 0.51)); };
            while (expandableCards.length > __WEBPACK_IMPORTED_MODULE_2__globals__["b" /* MEMORY_SIZE */].cards / 2) {
                expandableCards.splice(randomIndex(expandableCards.length), 1);
            }
            while (expandableCards.length > 0) {
                card = expandableCards.splice(randomIndex(expandableCards.length), 1);
                newCard = { src: card[0].src, isVisible: true, index: i };
                card[0].index = i + 1;
                toBeRandomized.push(newCard);
                toBeRandomized.push(card[0]);
                i += 2;
            }
            while (toBeRandomized.length > 0) {
                card = toBeRandomized.splice(randomIndex(toBeRandomized.length), 1);
                output.push(card[0]);
            }
            resolve(output);
        }).catch(function (err) {
            throw "Problème randomizeCards  ... " + err;
        });
    };
    MemoryProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__models_models__["a" /* Models */]])
    ], MemoryProvider);
    return MemoryProvider;
}());

//# sourceMappingURL=memory.provider.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvitationsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(85);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var InvitationsPage = (function () {
    function InvitationsPage(navCtrl, navParams, viewCtrl, db) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.db = db;
        /*ionViewDidEnter() {
          console.log(this.invitations)
        }*/
        this.invitations = this.navParams.get('invitations');
        this.uid = this.navParams.get('uid');
    }
    InvitationsPage.prototype.goBack = function () {
        this.viewCtrl.dismiss();
    };
    InvitationsPage.prototype.accept = function (invitation) {
        // l'objet invitation correspond à un élément du tableau invitations reçues
        // on se positionne dans firebase, au niveau du 'currentGame' des 2 utilisateurs qu'on update avec la référence de la partie dans 'tictactoe/games/'
        var otherPlayerId = invitation.sender.uid, user1Ref = 'users/' + otherPlayerId, user2Ref = 'users/' + this.uid;
        // la seule chose qui change pour chaque joueur, c'est l'id de l'opposant      
        var update = { ttt_currentGame: { id: invitation.id, against: this.uid, } };
        this.db.object(user1Ref).update(update);
        update.ttt_currentGame.against = otherPlayerId;
        this.db.object(user2Ref).update(update);
        this.viewCtrl.dismiss();
    };
    InvitationsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-invitations',template:/*ion-inline-start:"/Users/valentinelarit/Desktop/IESA/Ionic-Appli/IESA-Ionic3-MySmallGames/IESA--Ionic3/src/pages/invitations/invitations.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title text-center>Invitations</ion-title>\n    <ion-buttons left>\n      <button ion-button icon-only (click)="goBack()">\n        X\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-grid>\n    <ion-row *ngFor="let invitation of invitations">\n      <ion-col>\n        Pseudo : {{ invitation.sender.alias}}\n      </ion-col>\n      <ion-col>\n        <button class="button block" (click)="accept(invitation)">Accepter</button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Users/valentinelarit/Desktop/IESA/Ionic-Appli/IESA-Ionic3-MySmallGames/IESA--Ionic3/src/pages/invitations/invitations.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], InvitationsPage);
    return InvitationsPage;
}());

//# sourceMappingURL=invitations.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MemoryCreatePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_camera_provider__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_alert_provider__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_memory_provider__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_user__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_models__ = __webpack_require__(72);
/* import { ViewCache } from '@firebase/database/dist/esm/src/core/view/ViewCache'; */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MemoryCreatePage = (function () {
    /*@ViewChild(Content) content: Content*/
    function MemoryCreatePage(navCtrl, navParams, memoryProvider, camera, actionSheetCtrl, alert, models, user, events, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.memoryProvider = memoryProvider;
        this.camera = camera;
        this.actionSheetCtrl = actionSheetCtrl;
        this.alert = alert;
        this.models = models;
        this.user = user;
        this.events = events;
        this.viewCtrl = viewCtrl;
        this.cards = this.initCards();
        this.cardsToSend = this.memoryProvider.initCardsToSend();
        this.canUploadPackage = true;
    }
    MemoryCreatePage.prototype.initCards = function () {
        return this.memoryProvider.initCards();
    };
    MemoryCreatePage.prototype.ionViewDidLoad = function () {
        /*this.events.subscribe("loadingStatus" ,i => {
          this.loadingStatus = (i * 5 / 100) + "/100"
        })*/
        this.viewCtrl.setBackButtonText('');
    };
    MemoryCreatePage.prototype.addCard = function (cardIndex, rowIndex) {
        this.presentActionSheet(cardIndex, rowIndex);
    };
    MemoryCreatePage.prototype.presentActionSheet = function (cardIndex, rowIndex) {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Ajouter une "memoryCard"',
            buttons: [
                {
                    text: 'Nouvelle image',
                    handler: function () {
                        _this.models.presentLoadingDefault();
                        _this.camera.getPicture(1, false, false).then(function (img) {
                            _this.handleImg(img, cardIndex, rowIndex);
                        });
                    },
                }, {
                    text: 'Depuis la bibliothèque',
                    handler: function () {
                        _this.models.presentLoadingDefault();
                        _this.camera.getPicture(0, false, false).then(function (img) {
                            _this.handleImg(img, cardIndex, rowIndex);
                        });
                    },
                }, {
                    text: 'Annuler',
                    role: 'Annuler',
                }
            ]
        });
        actionSheet.present();
    };
    MemoryCreatePage.prototype.handleImg = function (img_, cardIndex, rowIndex) {
        var img = {};
        img = img_; // on récupère l'image au format blob
        this.cards[rowIndex][cardIndex - (4 * rowIndex)].src = img;
        // exemple : si la carte a pour index 7, sachant que les lignes font 4 éléments, 
        // la carte sera située à l'index ('la ligne') 1 du tableau this.cards, à l'index 3 de ce deuxième tableau de this.cards
        // pour déduire index = 3, on lui retire autant de lignes ('de paquets') de 4 cartes précédentes 
        this.cardsToSend[cardIndex] = this.cards[rowIndex][cardIndex - (4 * rowIndex)];
        // on update le tableau final d'images, numérotées de 0 à 19
        this.camera.readURL(img, '#img' + cardIndex);
        //on attribut l'image à la souce de l'élément html ayant pour id "img7" (si cette carte a pour index 7 bien sûr :b)
    };
    MemoryCreatePage.prototype.addCards = function () {
        if (this.isReadyToSend()) {
            this.models.presentLoadingDefault();
            this.memoryProvider.uploadNewPackage(this.cardsToSend, this.user.id);
            this.canUploadPackage = false;
        }
        else {
            var title = void 0, message = void 0;
            if (this.canUploadPackage) {
                title = "Jeu de cartes incomplet",
                    message = "Vous devez ajouter 20 images pour constituer un jeu et pouvoir le poster.";
            }
            else {
                title = "Jeu de carte déjà créé",
                    message = "Vous devez quitter cette page avant de pouvoir poster un nouveau jeu.";
            }
            this.alert.presentAlert(title, message, "Ah d'accord !");
        }
    };
    MemoryCreatePage.prototype.isReadyToSend = function () {
        if (this.canUploadPackage) {
            for (var _i = 0, _a = this.cardsToSend; _i < _a.length; _i++) {
                var card = _a[_i];
                if (!card.src) {
                    return false;
                }
            }
            return true;
        }
        else {
            return false;
        }
    };
    MemoryCreatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-memory-create',template:/*ion-inline-start:"/Users/valentinelarit/Desktop/IESA/Ionic-Appli/IESA-Ionic3-MySmallGames/IESA--Ionic3/src/pages/memory-create/memory-create.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Ajouter un paquet de carte</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="card-background-page" padding>\n  \n  <ion-grid>   \n    <ion-row *ngFor="let card_row of cards">\n      <ion-col class="col-img" *ngFor="let card of card_row">\n        <div class="col-img-background">\n            Ajouter image\n            <img *ngIf="card.src"  class="img" id="img{{card.index}}" src="{{ card.src }}" alt="no card"/>\n            <button class="col-img-btn" (click)="addCard(card.index, cards.indexOf(card_row))"></button>\n        </div>  \n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <button id="btn-addCards" ion-button block (click)="addCards()">Ajouter paquet</button>\n</ion-content>\n'/*ion-inline-end:"/Users/valentinelarit/Desktop/IESA/Ionic-Appli/IESA-Ionic3-MySmallGames/IESA--Ionic3/src/pages/memory-create/memory-create.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__providers_memory_provider__["a" /* MemoryProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_camera_provider__["a" /* CameraProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_alert_provider__["a" /* AlertProvider */],
            __WEBPACK_IMPORTED_MODULE_6__models_models__["a" /* Models */],
            __WEBPACK_IMPORTED_MODULE_5__providers_user__["a" /* User */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */]])
    ], MemoryCreatePage);
    return MemoryCreatePage;
}());

//# sourceMappingURL=memory-create.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MemoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_alert_provider__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_memory_provider__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__memory_create_memory_create__ = __webpack_require__(224);
/*import { Models } from '../../models/models'*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MemoryPage = (function () {
    function MemoryPage(
        /* private models : Models, */
        navCtrl, navParams, user, memoryProvider, actionSheetCtrl, alertProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.user = user;
        this.memoryProvider = memoryProvider;
        this.actionSheetCtrl = actionSheetCtrl;
        this.alertProvider = alertProvider;
        this.cards = []; //this.memoryProvider.initCards()
        this.emptyCards = this.memoryProvider.initCards();
        this.image = {};
        this.playedCards = [];
        this.cardsWon = 0;
        this.canPlay = true;
        this.attemptsLeft = 10;
    }
    MemoryPage.prototype.clickCard = function (card) {
        var _this = this;
        if (this.canPlay) {
            var index = this.cards.indexOf(card);
            this.playedCards.push(index);
            this.cards[index].isVisible = true;
            if (this.playedCards.length === 2) {
                this.canPlay = false;
                if (this.cards[this.playedCards[0]].src === this.cards[this.playedCards[1]].src) {
                    this.playedCards.splice(0, 2);
                    this.cardsWon += 2;
                    if (this.cardsWon === this.cards.length) {
                        this.alertProvider.presentAlert("Félicitations :)", "Vous avez trouvé en seulement " + (10 - this.attemptsLeft) + " tentatives", "ok");
                    }
                    this.canPlay = true;
                }
                else {
                    setTimeout(function () {
                        _this.canPlay = true;
                        _this.cards[_this.playedCards[0]].isVisible = false;
                        _this.cards[_this.playedCards[1]].isVisible = false;
                        _this.playedCards.splice(0, 2);
                        if (_this.attemptsLeft === 0) {
                            _this.alertProvider.presentAlert("Perdu :(", "Nombre maximum de tentatives utilisé", "ok");
                        }
                    }, 2000);
                }
                this.attemptsLeft--;
            }
        }
    };
    MemoryPage.prototype.presentActionSheet = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Choisir',
            buttons: [
                {
                    text: 'Jeu en ligne',
                    handler: function () {
                        _this.loadNewGame();
                    },
                }, {
                    text: 'Créer un nouveau jeu',
                    handler: function () {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__memory_create_memory_create__["a" /* MemoryCreatePage */]);
                    },
                }, {
                    text: 'Annuler',
                    role: 'Annuler',
                }
            ]
        });
        actionSheet.present();
    };
    MemoryPage.prototype.initCards = function (cards) {
        this.cards.splice(0, this.cards.length);
        for (var _i = 0, cards_1 = cards; _i < cards_1.length; _i++) {
            var card = cards_1[_i];
            this.cards.push(card);
        }
        this.runGame();
    };
    MemoryPage.prototype.loadNewGame = function () {
        var _this = this;
        this.memoryProvider.loadCards().then(function (cards) {
            _this.initCards(cards);
            _this.attemptsLeft = 10;
            _this.cardsWon = 0;
            /*let index
            for (let i in res) {
              index = parseInt(i)
              if (index < 4) {
                this.cards[0][i] = res[i]
              } else if (index < 8) {
                this.cards[1][index - 4] = res[i]
              } else if (index < 12){
                this.cards[2][index - 8] = res[i]
              } else if (index < 16) {
                this.cards[3][index - 12] = res[i]
              } else {
                this.cards[4][index - 16] = res[i]
              }
            }*/
        });
    };
    MemoryPage.prototype.runGame = function () {
        var _this = this;
        setTimeout(function () {
            _this.cards.map(function (card) { card.isVisible = false; });
        }, 5000);
    };
    MemoryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MemoryPage');
    };
    MemoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-memory',template:/*ion-inline-start:"/Users/valentinelarit/Desktop/IESA/Ionic-Appli/IESA-Ionic3-MySmallGames/IESA--Ionic3/src/pages/memory/memory.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Memory</ion-title>\n    \n    <ion-buttons end>\n      <button ion-button icon-only (click)="presentActionSheet()">\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n    \n    <ion-grid *ngIf="cards.length < 10">   \n      <ion-row *ngFor="let card_row of emptyCards">\n        <ion-col class="col-img" *ngFor="let card of card_row">\n          <div class="col-img-background">\n              ?\n          </div>   \n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <div id="test-memoryCards-ctnr">\n      <div *ngFor="let card of cards" class="test-card">\n        <img *ngIf="card.isVisible" class="test-img" src="{{ card.src }}" alt="none"/>\n        <div *ngIf="!card.isVisible" class="img-not-visible">\n            {{ card.index }}\n        </div>\n        <button *ngIf="card.src" id="{{ card.index }}" class="col-img-btn" (click)="clickCard(card)"></button>\n      </div>\n    </div>\n\n    <p *ngIf="cards.length > 10">\n      Cartes gagnées: {{ cardsWon }}/20    |     Essais restants: {{ attemptsLeft }}\n    </p>\n</ion-content>\n'/*ion-inline-end:"/Users/valentinelarit/Desktop/IESA/Ionic-Appli/IESA-Ionic3-MySmallGames/IESA--Ionic3/src/pages/memory/memory.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_user__["a" /* User */],
            __WEBPACK_IMPORTED_MODULE_4__providers_memory_provider__["a" /* MemoryProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_alert_provider__["a" /* AlertProvider */]])
    ], MemoryPage);
    return MemoryPage;
}());

//# sourceMappingURL=memory.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchTictactoePlayersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_models__ = __webpack_require__(72);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var SearchTictactoePlayersPage = (function () {
    function SearchTictactoePlayersPage(navCtrl, navParams, viewCtrl, models) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.models = models;
        this.players = [];
    }
    SearchTictactoePlayersPage.prototype.invite = function (player) {
        this.viewCtrl.dismiss(player.uid);
    };
    SearchTictactoePlayersPage.prototype.goBack = function () {
        this.viewCtrl.dismiss();
    };
    SearchTictactoePlayersPage.prototype.displayPlayers = function () {
        return __awaiter(this, void 0, void 0, function () {
            var myId, result, players, _i, players_1, player;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        myId = this.navParams.get('uid');
                        return [4 /*yield*/, this.models.fbSearchFor("users")];
                    case 1:
                        result = _a.sent();
                        players = {};
                        players = result;
                        for (_i = 0, players_1 = players; _i < players_1.length; _i++) {
                            player = players_1[_i];
                            if (player.uid !== myId) {
                                this.players.push(player);
                            }
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    SearchTictactoePlayersPage.prototype.ionViewDidEnter = function () {
        this.displayPlayers();
    };
    SearchTictactoePlayersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-search-tictactoe-players',template:/*ion-inline-start:"/Users/valentinelarit/Desktop/IESA/Ionic-Appli/IESA-Ionic3-MySmallGames/IESA--Ionic3/src/pages/search-tictactoe-players/search-tictactoe-players.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title text-center>SearchTictactoePlayers</ion-title>\n    <ion-buttons left>\n      <button ion-button icon-only (click)="goBack()">\n        X\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-grid>\n    <ion-row *ngFor="let player of players">\n      <ion-col>\n        Nom : {{ player.alias }}\n      </ion-col>\n      <ion-col>\n        <button block (click)="invite(player)">>Inviter</button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"/Users/valentinelarit/Desktop/IESA/Ionic-Appli/IESA-Ionic3-MySmallGames/IESA--Ionic3/src/pages/search-tictactoe-players/search-tictactoe-players.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__models_models__["a" /* Models */]])
    ], SearchTictactoePlayersPage);
    return SearchTictactoePlayersPage;
}());

//# sourceMappingURL=search-tictactoe-players.js.map

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TictactoePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_alert_provider__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_user__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_models__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__invitations_invitations__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__search_tictactoe_players_search_tictactoe_players__ = __webpack_require__(226);
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
    function TictactoePage(navCtrl, navParams, alertProvider, user, models, db, modal, actionSheetCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertProvider = alertProvider;
        this.user = user;
        this.models = models;
        this.db = db;
        this.modal = modal;
        this.actionSheetCtrl = actionSheetCtrl;
        this.invitationsRecieved = [];
        this.currentGame = {};
        this.gameRef = "";
        this.items = [{}, {}, {}, {}, {}, {}, {}, {}, {}];
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
    TictactoePage.prototype.ionViewDidEnter = function () {
        var _this = this;
        // dès que l'on ouvre la vue tictactoe, on 'écoute' les changements en base de données : ... 
        var userRef = "users/" + this.user.id;
        // ... de la possibilité d'inviter un autre joueur
        this.db.object(userRef + '/ttt_invitationSent').valueChanges().subscribe(function (invitationSent) {
            _this.user.ttt_invitationSent = {};
            // si aucune invitation envoyée en attente : 'ttt_invitationSent' : false dans firebase
            _this.user.ttt_invitationSent = invitationSent;
        });
        // ... de l'état de notre partie en cours (si aucune partie en cours, le noeud 'ttt_currentGame' = false)
        this.db.object(userRef + '/ttt_currentGame').valueChanges().subscribe(function (currentGame) {
            _this.currentGame = currentGame;
            // si une partie est en cours, on suit son statut dans firebase
            if (_this.currentGame) {
                _this.startVersusGame(_this.currentGame.against, _this.currentGame.id);
            }
        });
        //  ... des invitations reçues
        this.db.object(userRef + '/ttt_invitationsRecieved').valueChanges().subscribe(function (snapshot) {
            var ttt_invitationsRecieved = {};
            ttt_invitationsRecieved = snapshot;
            _this.user.ttt_invitationsRecieved = [];
            for (var i in ttt_invitationsRecieved) {
                // on recharge notre tableau d'invitations reçues
                _this.user.ttt_invitationsRecieved.push(ttt_invitationsRecieved[i]);
            }
        });
        // notre classe User est donc mise à jour à chaque changement de ces 2 valeurs
    };
    TictactoePage.prototype.ionViewWillLeave = function () {
        // avant de quitter la vue, on désactive les listeners
        var userRef = "users/" + this.user.id;
        this.db.database.ref(userRef + '/ttt_invitationSent').off();
        this.db.database.ref(userRef + '/ttt_invitationsRecieved').off();
        if (this.currentGame) {
            this.db.database.ref('tictactoe/games/' + this.currentGame.id + '/state').off();
        }
    };
    TictactoePage.prototype.presentActionSheet = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Choisir',
            buttons: [
                {
                    // partie contre l' I.A.
                    text: 'Entrainement solo',
                    handler: function () {
                        _this.alertProvider.selectSymbol(_this);
                    },
                }, {
                    text: 'Trouver un adversaire',
                    handler: function () {
                        _this.searchTictactoePlayers();
                    },
                }, {
                    // entre parenthèses : le nombre d'invitations reçues
                    text: 'Invitations reçues (' + this.user.ttt_invitationsRecieved.length + ')',
                    handler: function () {
                        _this.checkForInvitationsRecieved();
                    },
                }
            ]
        });
        actionSheet.present();
    };
    TictactoePage.prototype.checkForInvitationsRecieved = function () {
        var data = { invitations: this.user.ttt_invitationsRecieved, uid: this.user.id };
        var modal = this.modal.create(__WEBPACK_IMPORTED_MODULE_6__invitations_invitations__["a" /* InvitationsPage */], data);
        modal.present();
        /*modal.onDidDismiss(invitationAccepted => {
            if (invitationAccepted) {
                const game = 'tictactoe/games/'+invitationAccepted.id
                this.listenGameState(game)
            }
        })*/
    };
    TictactoePage.prototype.searchTictactoePlayers = function () {
        var _this = this;
        var data = { uid: this.user.id };
        var modal = this.modal.create(__WEBPACK_IMPORTED_MODULE_7__search_tictactoe_players_search_tictactoe_players__["a" /* SearchTictactoePlayersPage */], data);
        modal.present();
        modal.onDidDismiss(function (player) {
            if (player) {
                _this.sendInvitationForNewGame(player);
            }
        });
    };
    TictactoePage.prototype.sendInvitationForNewGame = function (otherPlayer) {
        // on ne peut envoyer qu'une seule invitation à la fois : on vérifie donc que 'ttt_invitationSent' est à false
        if (!this.user.ttt_invitationSent) {
            // on crée une nouvelle id unique de partie composée de 12 caratères aléatoires
            var gameRef = this.models.createRandomKey(12);
            // une fois l'invitation envoyée, on ne peut plus créer de nouvelle partie puisque notre 'gameRef'
            // ne peut prendre qu'une seule valeur à la fois
            var ref = "users/" + otherPlayer + '/ttt_invitationsRecieved';
            // on met à jour le noeud firebase de l'utilisateur qui reçoit l'invitation
            // on lui ajoute dans ses invitations reçus, une nouvelle invitation
            this.db.object(ref).update((_a = {},
                _a[gameRef] = {
                    sender: {
                        uid: this.user.id,
                        alias: this.user.alias,
                    },
                    id: gameRef,
                },
                _a));
            // on modifie le noeud 'invitationSent' de l'utilisateur qui envoie l'invitation
            var invitationSentRef = 'users/' + this.user.id + '/ttt_invitationSent', invitationsSentObj = this.db.object(invitationSentRef);
            invitationsSentObj.set((_b = {},
                _b[gameRef] = {
                    id: gameRef,
                    accepted: false,
                },
                _b));
            this.gameRef = gameRef;
        }
        var _a, _b;
    };
    TictactoePage.prototype.startVersusGame = function (otherPlayer, gameRef) {
        var game = 'tictactoe/games/', 
        // on choisit de façon aléatoire  qui pourra commencer à jouer
        player = Math.random() < 0.5 ? this.user.id : otherPlayer, 
        // on choisit de façon aléatoire le symbole de chacun
        otherPlayerSymbol = Math.random() < 0.5 ? 'X' : 'O', uid = this.user.id;
        this.player.is = otherPlayerSymbol === 'X' ? 'O' : 'X';
        // on crée un nouvel objet de partie dans le noeud games du noeud tictactoe 
        this.db.object(game).update((_a = {},
            _a[gameRef] = {
                players: (_b = {},
                    _b[uid] = {
                        id: uid,
                        is: this.player.is,
                    },
                    _b[otherPlayer] = {
                        id: otherPlayer,
                        is: otherPlayerSymbol,
                    },
                    _b),
                state: {
                    // par exemple si la première case en haut à gauche est jouée avec une croix, et que la case du milieu est un rond
                    // le nouveau currentState sera : "X---O----"
                    currentState: "---------",
                    // "playing" correspond au joueur qui peut jouer le prochain coup
                    playing: player,
                    moves: 0,
                    scores: (_c = {},
                        _c[uid] = 0,
                        _c[otherPlayer] = 0,
                        _c)
                }
            },
            _a));
        var currentGame = { id: gameRef, against: otherPlayer };
        this.listenGameState(currentGame);
        var _a, _b, _c;
    };
    TictactoePage.prototype.listenGameState = function (currentGame) {
        var _this = this;
        var gameStateRef = 'tictactoe/games/' + currentGame.id;
        this.db.database.ref(gameStateRef).once('value', function (res) {
            var playerSymbol = {};
            console.log(res.val());
            playerSymbol = res.val().players[_this.user.id].is;
            _this.player.is = playerSymbol;
        });
        // on met un listenner sur l'état d'avancement de la partie
        this.db.object(gameStateRef + '/state').valueChanges().subscribe(function (res) {
            // dès qu'un nouveau coup est joué, que l'état est donc modifié...
            var gameState = {};
            gameState = res;
            gameState.currentState
                .split('')
                .map(function (value, index) {
                return _this.items[index] = value !== '-' ? { value: value } : { value: "" };
            }); // ... on retranscrit le state en tableau et on assigne ces nouvelles valeurs à notre tableau de cases qui est rendu à l'écran
            // selon le joueur qui peut jouer le prochain coup, on autorise ou non le joueur à jouer
            _this.canPlay = gameState.playing === _this.user.id ? true : false;
            // le nombres de cases remplies est updaté également : au bout de 9 tours ou si un des 2 joueurs gagne, la partie est remise à zéro
            if (_this.hasWon() || _this.moves === 10) {
                if (gameState.playing === _this.user.id && _this.moves < 10) {
                    gameState.scores[currentGame.against]++;
                    _this.alertProvider.presentAlert("Défaite ;(", "Vous avez perdu...", "Ok");
                }
                else if (_this.moves < 10) {
                    gameState.scores[_this.user.id]++;
                    _this.alertProvider.presentAlert("Victoire :D", "Vous avez gagné !!", "Ok");
                }
                _this.moves = 0;
                gameState.moves = _this.moves;
                gameState.currentState = '---------';
                _this.db.object(gameStateRef).update(gameState);
            }
        });
    };
    TictactoePage.prototype.initItems = function () {
        this.moves = 0;
        var output = [], i = 0;
        while (i < 9) {
            output.push({});
            i++;
        }
        this.items = output;
        if (!this.canPlay && !this.currentGame) {
            this.ai();
        }
    };
    TictactoePage.prototype.selectSymbol = function (symbol) {
        this.player.is = symbol;
        this.cpu.is = symbol === "X" ? "O" : "X";
    };
    TictactoePage.prototype.playSquare = function (event) {
        if (this.canPlay) {
            var items = {};
            items = this.items;
            // si la case jouée n'a encore aucun symbole
            if (!items[event.target.id].value) {
                items[event.target.id].value = this.player.is;
                // si on est en train de jouer avec un adversaire à distance 
                if (this.currentGame) {
                    var currentState_1 = "";
                    items.map(function (item, index) {
                        return currentState_1 += item.value !== "" ? item.value : "-";
                    }); // on réinitialise l'état de la partie  '---------' avec les bonnes valeurs
                    // toutes les cases encore non jouées sont sybolisées par '-', les autres par O ou X
                    this.db.object('tictactoe/games/' + this.currentGame.id + '/state').update({
                        // on actualise la base de donnée à chaque nouveau coup joué
                        currentState: currentState_1,
                        // "playing" correspond au joueur qui peut jouer le prochain coup
                        playing: this.currentGame.against,
                        moves: this.moves + 1,
                    });
                }
                else {
                    // si on est en traind e jouer contre l' I.A.	
                    this.canPlay = false;
                    this.items = items;
                    this.runGame(this.player.is);
                }
            }
        }
    };
    TictactoePage.prototype.hasWon = function () {
        var items = {};
        items = this.items;
        for (var i = 0, len = this.lines.length; i < len; i++) {
            var _a = this.lines[i], a = _a[0], b = _a[1], c = _a[2];
            if (items[a].value && items[a].value === items[b].value && items[a].value === items[c].value) {
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
                this.player.score++;
            }
            else {
                this.cpu.score++;
            }
        }
        else if (this.moves < 9) {
            if (playing === this.player.is) {
                this.ai();
            }
        }
        else {
            this.initItems();
        }
    };
    TictactoePage.prototype.cancelGame = function () {
        console.log("hey");
        this.canPlay = true;
        this.initItems();
        this.db.object('users/' + this.user.id + '/ttt_currentGame').set(false);
    };
    TictactoePage.prototype.restart = function () {
        this.initItems();
    };
    TictactoePage.prototype.ai = function () {
        var _this = this;
        setTimeout(function () {
            var i;
            var items = {};
            items = _this.items;
            do {
                i = Math.round(Math.random() * items.length - 0.51);
            } while (items[i].value);
            items[i].value = _this.cpu.is;
            _this.items = items;
            _this.runGame(_this.cpu.is);
            _this.canPlay = true;
        }, 800);
    };
    TictactoePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tictactoe',template:/*ion-inline-start:"/Users/valentinelarit/Desktop/IESA/Ionic-Appli/IESA-Ionic3-MySmallGames/IESA--Ionic3/src/pages/tictactoe/tictactoe.html"*/'<ion-header>\n    <ion-navbar>\n      <ion-title text-center>Tic Tac Toe {{ user.alias }}</ion-title>\n\n      <ion-buttons end>\n        <button ion-button icon-only (click)="presentActionSheet()">\n          <ion-icon name="menu"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-navbar>\n  </ion-header>\n  \n  <ion-content padding id="home-content">\n    <ion-grid class="score_buttons-grid">\n      <ion-row>\n        <ion-col class="score-col">\n          Score :\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col class="score_button-col">\n          <div class="score_button">Vous: {{ player.score }}</div>\n        </ion-col>\n        <ion-col class="score_button-col">\n          <div class="score_button">Adversaire: {{ cpu.score }}</div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    \n    <div class="tictactoe-grid">\n      \n      <ion-row id="tictactoe-line-1">\n        <ion-col>\n          <span *ngIf= "items[0].value && items[0].value === \'X\'" class="x">{{ items[0].value }}</span>\n          <span *ngIf= "items[0].value && items[0].value === \'O\'" class="o">{{ items[0].value }}</span>\n          <button id="0" class="play-btn" (click)="playSquare($event)"></button>\n        </ion-col>\n        \n        <ion-col class="middle-col">\n            <span *ngIf= "items[1].value && items[1].value === \'X\'" class="x">{{ items[1].value }}</span>\n            <span *ngIf= "items[1].value && items[1].value === \'O\'" class="o">{{ items[1].value }}</span>\n          <button id="1" class="play-btn" (click)="playSquare($event)"></button>\n        </ion-col>\n        \n        <ion-col>\n            <span *ngIf= "items[2].value && items[2].value === \'X\'" class="x">{{ items[2].value }}</span>\n            <span *ngIf= "items[2].value && items[2].value === \'O\'" class="o">{{ items[2].value }}</span>\n          <button id="2" class="play-btn" (click)="playSquare($event)"></button>\n        </ion-col>\n      </ion-row>\n      \n      \n      <ion-row id="tictactoe-line-2">\n        <ion-col>\n            <span *ngIf= "items[3].value && items[3].value === \'X\'" class="x">{{ items[3].value }}</span>\n            <span *ngIf= "items[3].value && items[3].value === \'O\'" class="o">{{ items[3].value }}</span>\n          <button id="3" class="play-btn" (click)="playSquare($event)"></button>\n        </ion-col>\n        \n        <ion-col class="middle-col">\n            <span *ngIf= "items[4].value && items[4].value === \'X\'" class="x">{{ items[4].value }}</span>\n            <span *ngIf= "items[4].value && items[4].value === \'O\'" class="o">{{ items[4].value }}</span>\n          <button id="4" class="play-btn" (click)="playSquare($event)"></button>\n        </ion-col>\n        \n        <ion-col>\n            <span *ngIf= "items[5].value && items[5].value === \'X\'" class="x">{{ items[5].value }}</span>\n            <span *ngIf= "items[5].value && items[5].value === \'O\'" class="o">{{ items[5].value }}</span>\n          <button id="5" class="play-btn" (click)="playSquare($event)"></button>\n        </ion-col>\n      </ion-row>\n      \n      \n      <ion-row id="tictactoe-line-3">\n        <ion-col>\n            <span *ngIf= "items[6].value && items[6].value === \'X\'" class="x">{{ items[6].value }}</span>\n            <span *ngIf= "items[6].value && items[6].value === \'O\'" class="o">{{ items[6].value }}</span>\n          <button id="6" class="play-btn" (click)="playSquare($event)"></button>\n        </ion-col>\n        \n        <ion-col class="middle-col">\n            <span *ngIf= "items[7].value && items[7].value === \'X\'" class="x">{{ items[7].value }}</span>\n            <span *ngIf= "items[7].value && items[7].value === \'O\'" class="o">{{ items[7].value }}</span>\n          <button id="7" class="play-btn" (click)="playSquare($event)"></button>\n        </ion-col>\n        \n        <ion-col>\n            <span *ngIf= "items[8].value && items[8].value === \'X\'" class="x">{{ items[8].value }}</span>\n            <span *ngIf= "items[8].value && items[8].value === \'O\'" class="o">{{ items[8].value }}</span>\n          <button id="8" class="play-btn" (click)="playSquare($event)"></button>\n        </ion-col>\n      </ion-row>\n    </div>\n    <button *ngIf="currentGame" (click)="cancelGame()">Annuler</button>\n  </ion-content>'/*ion-inline-end:"/Users/valentinelarit/Desktop/IESA/Ionic-Appli/IESA-Ionic3-MySmallGames/IESA--Ionic3/src/pages/tictactoe/tictactoe.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__providers_alert_provider__["a" /* AlertProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_alert_provider__["a" /* AlertProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__providers_user__["a" /* User */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_user__["a" /* User */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__models_models__["a" /* Models */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__models_models__["a" /* Models */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]) === "function" && _h || Object])
    ], TictactoePage);
    return TictactoePage;
    var _a, _b, _c, _d, _e, _f, _g, _h;
}());

//# sourceMappingURL=tictactoe.js.map

/***/ }),

/***/ 238:
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
webpackEmptyAsyncContext.id = 238;

/***/ }),

/***/ 283:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/hangman/hangman.module": [
		695,
		0
	],
	"../pages/invitations/invitations.module": [
		696,
		5
	],
	"../pages/memory-create/memory-create.module": [
		697,
		4
	],
	"../pages/memory/memory.module": [
		698,
		3
	],
	"../pages/search-tictactoe-players/search-tictactoe-players.module": [
		699,
		2
	],
	"../pages/tictactoe/tictactoe.module": [
		700,
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
webpackAsyncContext.id = 283;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 334:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CameraProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_camera__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery__ = __webpack_require__(520);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_models__ = __webpack_require__(72);
/*
import { Platform } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { FIREBASE_CONFIG } from '../../pages/firebase';
import { AlertProvider } from './alert.provider';
*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CameraProvider = (function () {
    function CameraProvider(
        /*private db: AngularFireDatabase,
        private platform : Platform,
        private alert : AlertProvider
        */
        camera, models) {
        this.camera = camera;
        this.models = models;
    }
    CameraProvider.prototype.getPicture = function (sourceType, uid, packNumber) {
        var _this = this;
        return new Promise(function (resolve) {
            var options = {
                quality: 10,
                sourceType: sourceType,
                allowEdit: true,
                targetHeight: 100,
                targetWidth: 100,
                destinationType: 0,
                encodingType: 1,
                mediaType: _this.camera.MediaType.PICTURE,
            };
            _this.camera.getPicture(options).then(function (imageDataURL) {
                _this.models.b64toBlob(imageDataURL, false, false).then(function (blob) {
                    if (uid) {
                        var address = '/images/' + uid;
                        _this.models.fbStorageUpload(address, blob, true).then(function (url) {
                            resolve(url);
                        });
                    }
                    else {
                        resolve(blob);
                    }
                });
            }).catch(function (err) {
                throw err;
            });
        });
    };
    CameraProvider.prototype.readURL = function (_file, str) {
        var hw = 270;
        var reader = new FileReader();
        reader.onload = function (e) {
            __WEBPACK_IMPORTED_MODULE_2_jquery__(str)
                .attr('src', reader.result)
                .width(hw)
                .height(hw);
        };
        reader.readAsDataURL(_file);
    };
    CameraProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_3__models_models__["a" /* Models */]])
    ], CameraProvider);
    return CameraProvider;
}());

//# sourceMappingURL=camera.provider.js.map

/***/ }),

/***/ 359:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FIREBASE_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MEMORY_SIZE; });
/*export const API_KEY_ALTERNMUSIQUE:string = "http://api.altermusique.org/json/all/";
export const API_KEY_IWEATHER:string = "http://api.wunderground.com/api/8c05acc6eb88a173/conditions/q/";*/
var FIREBASE_CONFIG = {
    apiKey: "AIzaSyAX6W2OE9xJTU8jzmuM04u9iozNBNjMIu0",
    authDomain: "mes-petis-jeux.firebaseapp.com",
    databaseURL: "https://mes-petis-jeux.firebaseio.com",
    projectId: "mes-petis-jeux",
    storageBucket: "mes-petis-jeux.appspot.com",
    messagingSenderId: "821855228089"
};
var MEMORY_SIZE = {
    cols: 4,
    rows: 5,
    cards: 20
};
//# sourceMappingURL=globals.js.map

/***/ }),

/***/ 401:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tictactoe_tictactoe__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__memory_memory__ = __webpack_require__(225);
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
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__memory_memory__["a" /* MemoryPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/valentinelarit/Desktop/IESA/Ionic-Appli/IESA-Ionic3-MySmallGames/IESA--Ionic3/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="TicTacToe" ios="ios-grid-outline" tabIcon="grid"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Memory" ios="ios-images" tabIcon="md-images"></ion-tab>\n</ion-tabs>'/*ion-inline-end:"/Users/valentinelarit/Desktop/IESA/Ionic-Appli/IESA-Ionic3-MySmallGames/IESA--Ionic3/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 402:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_login_provider__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(208);
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
    function HomePage(navCtrl, loginService, user, storage) {
        this.navCtrl = navCtrl;
        this.loginService = loginService;
        this.user = user;
        this.storage = storage;
        this.password = "";
    }
    HomePage.prototype.signIn = function () {
        this.loginService.signIn(this.user.email, this.password);
    };
    HomePage.prototype.signUp = function () {
        this.loginService.signUp(this.user.email, this.password, this.user.alias);
    };
    HomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.storage.get('user').then(function (user) {
            if (user) {
                _this.user.init(user.id, user.alias, user.email, user.ttt_canInvite, user.ttt_invitationsRecieved);
            }
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/valentinelarit/Desktop/IESA/Ionic-Appli/IESA-Ionic3-MySmallGames/IESA--Ionic3/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title text-center>Accueil</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding id="home-content">\n  <ion-grid class="home-grid">\n    <form>\n      <ion-item>    \n        <ion-input text-center type="text" [(ngModel)]="user.alias" name="name" placeholder="Pseudo"></ion-input>\n      </ion-item>\n      \n      <ion-item>    \n        <ion-input text-center type="text" [(ngModel)]="user.email" name="email" placeholder="Email (juste pour inscription)"></ion-input>\n      </ion-item>\n      \n      <ion-item>\n        <ion-input text-center type="password" [(ngModel)]="password" name="password" placeholder="Mot de passe"></ion-input>\n      </ion-item>\n\n      <button id="btn-signup" ion-button block (click)="signUp()">S\'inscrire</button>\n      <button id="btn-signin" ion-button block (click)="signIn()">Se connecter</button>\n    </form>\n    <p *ngIf="user.id">Connecté en tant que {{ user.alias }} !!</p>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Users/valentinelarit/Desktop/IESA/Ionic-Appli/IESA-Ionic3-MySmallGames/IESA--Ionic3/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_login_provider__["a" /* LoginProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_user__["a" /* User */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 403:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__alert_provider__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user__ = __webpack_require__(74);
/*import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { AngularFirestore } from 'angularfire2/firestore';
*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var LoginProvider = (function () {
    function LoginProvider(
        /*public http: HttpClient,
        private afs : AngularFirestore,*/
        afAuth, db, alertCtrl, user, storage) {
        this.afAuth = afAuth;
        this.db = db;
        this.alertCtrl = alertCtrl;
        this.user = user;
        this.storage = storage;
        this.authState = null;
        /*this.afAuth.authState.subscribe((auth) => {
          this.authState = auth
        });*/
    }
    LoginProvider.prototype.signIn = function (email, pw) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var connectedUser, usersRef$, e_1, errorMessage;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.afAuth.auth.signInWithEmailAndPassword(email, pw)];
                    case 1:
                        connectedUser = _a.sent();
                        if (connectedUser) {
                            usersRef$ = this.db.object('/users/' + connectedUser.uid);
                            usersRef$.valueChanges().subscribe(function (user_res) {
                                var user = {};
                                user = user_res;
                                _this.user.init(user.uid, user.alias, user.email, user.ttt_canInvite, user.ttt_invitationsRecieved);
                                _this.storage.set('user', _this.user);
                            });
                            this.alertCtrl.presentAlert("Félicitations " + this.user.alias, "Vous êtes connecté !", "Ok");
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _a.sent();
                        errorMessage = "";
                        if (e_1.code === "auth/user-not-found") {
                            errorMessage = "Adresse mail inconnue";
                        }
                        else if (e_1.code === "auth/wrong-password") {
                            errorMessage = "Mot de passe incorrecte";
                        }
                        else {
                            errorMessage = "Un problème est survenu, merci de réessayer.";
                        }
                        this.alertCtrl.presentAlert("Erreur", errorMessage, "ok");
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    LoginProvider.prototype.signUp = function (email, pw, alias) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.aliasTaken(alias)];
                    case 1:
                        if (_a.sent()) {
                            this.alertCtrl.presentAlert("Désolé", "Ce pseudo est déjà pris :(", "Ok");
                        }
                        else {
                            this.createUser(email, pw, alias);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginProvider.prototype.aliasTaken = function (alias) {
        var _this = this;
        return new Promise(function (resolve) {
            /*
            this.db.database.ref('/users').on('value', function(snapshot) {
              for (let i in snapshot.val()) {
                if (snapshot.val()[i].alias === alias) {
                  resolve(true)
                }
              }
              resolve(false)
            })
            */
            var usersRef$ = _this.db.list('/users', function (ref) { return ref.orderByChild('alias').equalTo(alias); });
            usersRef$.valueChanges().subscribe(function (users) {
                users.length > 0 ? resolve(true) : resolve(false);
            });
            /*
            users.forEach(user => {
              if (user.payload.val().alias === alias) {
                resolve(true)
              }
            })
            resolve(false)
            */
        }).catch(function (err) {
            console.log(err);
        });
    };
    LoginProvider.prototype.createUser = function (email, pw, alias) {
        return __awaiter(this, void 0, void 0, function () {
            var user, ref, e_2, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.afAuth.auth.createUserWithEmailAndPassword(email, pw)];
                    case 1:
                        user = _b.sent();
                        if (user.uid) {
                            ref = this.db.object("users");
                            ref.update((_a = {},
                                _a[user.uid] = {
                                    email: email,
                                    alias: alias,
                                    uid: user.uid,
                                    ttt_canInvite: true,
                                    ttt_invitationsRecieved: false,
                                },
                                _a));
                            this.user.init(user.uid, alias, email, true, false);
                            this.storage.set('user', this.user);
                            this.alertCtrl.presentAlert("Félicitations", "Vous êtes connecté en tant que " + alias, "Ok");
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        e_2 = _b.sent();
                        if (e_2.code === "auth/email-already-in-use") {
                            this.alertCtrl.presentAlert("Erreur", "Cette adresse mail est déjà associée à un autre compte", "ok");
                        }
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    LoginProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_4__alert_provider__["a" /* AlertProvider */],
            __WEBPACK_IMPORTED_MODULE_5__user__["a" /* User */],
            __WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */]])
    ], LoginProvider);
    return LoginProvider;
}());

//# sourceMappingURL=login.provider.js.map

/***/ }),

/***/ 415:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(416);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(422);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 422:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(645);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(653);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_database__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_firestore__ = __webpack_require__(654);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2_auth__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angularfire2_storage__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_camera__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_tabs_tabs__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_home_home__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_tictactoe_tictactoe__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_invitations_invitations__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_search_tictactoe_players_search_tictactoe_players__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_memory_memory__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_memory_create_memory_create__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_user__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_globals__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__providers_alert_provider__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__providers_login_provider__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__providers_camera_provider__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__models_models__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__providers_memory_provider__ = __webpack_require__(186);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














// PAGES







// GLOBAL VARIABLES


// PROVIDERS





var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_15__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_tictactoe_tictactoe__["a" /* TictactoePage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_invitations_invitations__["a" /* InvitationsPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_search_tictactoe_players_search_tictactoe_players__["a" /* SearchTictactoePlayersPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_memory_memory__["a" /* MemoryPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_memory_create_memory_create__["a" /* MemoryCreatePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_tabs_tabs__["a" /* TabsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/hangman/hangman.module#HangmanPageModule', name: 'HangmanPage', segment: 'hangman', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/invitations/invitations.module#InvitationsPageModule', name: 'InvitationsPage', segment: 'invitations', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/memory-create/memory-create.module#MemoryCreatePageModule', name: 'MemoryCreatePage', segment: 'memory-create', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/memory/memory.module#MemoryPageModule', name: 'MemoryPage', segment: 'memory', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/search-tictactoe-players/search-tictactoe-players.module#SearchTictactoePlayersPageModule', name: 'SearchTictactoePlayersPage', segment: 'search-tictactoe-players', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tictactoe/tictactoe.module#TictactoePageModule', name: 'TictactoePage', segment: 'tictactoe', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_6_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_22__providers_globals__["a" /* FIREBASE_CONFIG */]),
                __WEBPACK_IMPORTED_MODULE_7_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_9_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_10_angularfire2_storage__["b" /* AngularFireStorageModule */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_15__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_tictactoe_tictactoe__["a" /* TictactoePage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_invitations_invitations__["a" /* InvitationsPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_search_tictactoe_players_search_tictactoe_players__["a" /* SearchTictactoePlayersPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_memory_memory__["a" /* MemoryPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_memory_create_memory_create__["a" /* MemoryCreatePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_23__providers_alert_provider__["a" /* AlertProvider */],
                __WEBPACK_IMPORTED_MODULE_24__providers_login_provider__["a" /* LoginProvider */],
                __WEBPACK_IMPORTED_MODULE_27__providers_memory_provider__["a" /* MemoryProvider */],
                __WEBPACK_IMPORTED_MODULE_21__providers_user__["a" /* User */],
                __WEBPACK_IMPORTED_MODULE_8_angularfire2_firestore__["a" /* AngularFirestore */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_25__providers_camera_provider__["a" /* CameraProvider */],
                __WEBPACK_IMPORTED_MODULE_26__models_models__["a" /* Models */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 645:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(401);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/valentinelarit/Desktop/IESA/Ionic-Appli/IESA-Ionic3-MySmallGames/IESA--Ionic3/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/valentinelarit/Desktop/IESA/Ionic-Appli/IESA-Ionic3-MySmallGames/IESA--Ionic3/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Models; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_storage__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(85);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/*import { AlertProvider } from '../alert/alert'*/



var Models = (function () {
    function Models(
        /*private alert: AlertProvider,*/
        afs, db, loadingCtrl) {
        this.afs = afs;
        this.db = db;
        this.loadingCtrl = loadingCtrl;
    }
    Models.prototype.b64toBlob = function (b64Data, contentType, sliceSize) {
        return new Promise(function (resolve, reject) {
            contentType = contentType || 'image/png';
            sliceSize = sliceSize || 512;
            var byteCharacters = atob(b64Data);
            var byteArrays = [];
            for (var offset = 0, l = byteCharacters.length; offset < l; offset += sliceSize) {
                var slice = byteCharacters.slice(offset, offset + sliceSize);
                var byteNumbers = new Array(slice.length);
                for (var i = 0, len = slice.length; i < len; i++) {
                    byteNumbers[i] = slice.charCodeAt(i);
                }
                var byteArray = new Uint8Array(byteNumbers);
                byteArrays.push(byteArray);
            }
            var blob = new Blob(byteArrays, { type: contentType });
            resolve(blob);
        }).catch(function (e) {
            throw e;
            /*const error = JSON.stringify(e)
            //this.alert.presentAlert("Erreur", e, "OK" );*/
        });
    };
    Models.prototype.presentLoadingDefault = function () {
        var loading = this.loadingCtrl.create({
            content: 'Chargement, veuillez patienter...'
        });
        loading.present();
        setTimeout(function () {
            loading.dismiss();
        }, 2000);
    };
    Models.prototype.fbSearchFor = function (items) {
        var _this = this;
        return new Promise(function (resolve) {
            var itemsRef$ = _this.db.list('/' + items);
            itemsRef$.valueChanges().subscribe(function (listOfItems) {
                listOfItems ? resolve(listOfItems) : resolve([]);
            });
        }).catch(function (err) {
            throw err;
        });
    };
    Models.prototype.getFirebaseImageUrl = function (imageId) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.afs.ref(imageId).getDownloadURL().subscribe(function (url) {
                resolve(url);
            });
        }).catch(function (err) {
            throw err;
        });
    };
    Models.prototype.fbStorageUpload = function (address, blob, needUrl) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.afs.upload(address, blob).snapshotChanges().subscribe(function (res) {
                if (needUrl) {
                    _this.getFirebaseImageUrl(address).then(function (url_) {
                        var url = {};
                        url = url_;
                        resolve(url);
                    });
                }
                else {
                    resolve(false);
                }
            });
        });
    };
    Models.prototype.createRandomKey = function (length) {
        var text = "", i = 0;
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        while (i < length) {
            text += possible.charAt(Math.round(Math.random() * possible.length - 0.51));
            i++;
        }
        return text;
    };
    Models = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_storage__["a" /* AngularFireStorage */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]])
    ], Models);
    return Models;
}());

//# sourceMappingURL=models.js.map

/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var User = (function () {
    function User() {
    }
    User.prototype.init = function (id, alias, email, ttt_invitationSent, ttt_invitationsRecieved) {
        this.id = id;
        this.alias = alias;
        this.email = email;
        this.ttt_invitationSent = ttt_invitationSent;
        this.ttt_invitationsRecieved = ttt_invitationsRecieved;
    };
    User = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], User);
    return User;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*
import { HttpClient } from '@angular/common/http';
*/


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
        var self = this;
        var message = playing === that.player.is ? "Le joueur " + playing + " gagne" : "L'ordinateur gagne";
        var alert = this.alertCtrl.create({
            title: title,
            message: message,
            buttons: [
                {
                    text: "Continuer",
                    handler: function () {
                        self.selectSymbol(that);
                    }
                }
            ]
        });
        alert.present();
    };
    AlertProvider.prototype.selectSymbol = function (that) {
        var alert = this.alertCtrl.create({
            title: "Début de partie",
            message: "Choisissez un symbole",
            buttons: [
                {
                    text: "X",
                    handler: function () {
                        that.selectSymbol("X");
                        that.restart();
                    }
                },
                {
                    text: "O",
                    handler: function () {
                        that.selectSymbol("O");
                        that.restart();
                    }
                }
            ]
        });
        alert.present();
    };
    AlertProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], AlertProvider);
    return AlertProvider;
}());

//# sourceMappingURL=alert.provider.js.map

/***/ })

},[415]);
//# sourceMappingURL=main.js.map