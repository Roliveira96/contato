webpackJsonp([0],{

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactEditPageModule", function() { return ContactEditPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_edit__ = __webpack_require__(287);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ContactEditPageModule = /** @class */ (function () {
    function ContactEditPageModule() {
    }
    ContactEditPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__contact_edit__["a" /* ContactEditPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__contact_edit__["a" /* ContactEditPage */]),
            ],
        })
    ], ContactEditPageModule);
    return ContactEditPageModule;
}());

//# sourceMappingURL=contact-edit.module.js.map

/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactEditPage; });
/* unused harmony export Contact */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_contacts_contacts__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ContactEditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ContactEditPage = /** @class */ (function () {
    function ContactEditPage(navCtrl, navParams, toast, contactProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toast = toast;
        this.contactProvider = contactProvider;
        if (this.navParams.data.contact) {
            this.model = this.navParams.data.contact;
        }
        else {
            this.model = new Contact();
        }
    }
    ContactEditPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ContactEditPage');
    };
    ContactEditPage.prototype.saveContact = function () {
        var _this = this;
        this.contactProvider.updateContact(this.model.id, this.model)
            .then(function (result) {
            _this.toast.create({ message: 'Usuário salvo', duration: 3000 }).present();
            _this.navCtrl.pop();
        })
            .catch(function (error) {
            _this.toast.create({ message: error.error, duration: 3000 }).present();
        });
    };
    ContactEditPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact-edit',template:/*ion-inline-start:"/var/www/contacts/src/pages/contact-edit/contact-edit.html"*/'<!--\n  Generated template for the ContactEditPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>contact-edit</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n\n    <ion-item>\n      <ion-label stacked>Nome</ion-label>\n      <ion-input type="text" name="name" [(ngModel)]="model.name"></ion-input>\n    </ion-item>\n\n\n    <ion-item>\n      <ion-label stacked>Data de nascimento</ion-label>\n      <ion-input type="text" name="birthday" [(ngModel)]="model.birthday"></ion-input>\n    </ion-item>\n\n\n    <!--    formControlName=""-->\n    <ion-item>\n      <ion-label>Trabalha?</ion-label>\n      <ion-checkbox [(ngModel)]="model.employed" (ionChange)="trabalha()"></ion-checkbox>\n    </ion-item>\n\n    <ion-item *ngIf="model.employed == true">\n      <ion-label stacked>Valor Salarial</ion-label>\n      <ion-input type="text" name="salary" [(ngModel)]="model.salary"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Sexo?</ion-label>\n      <ion-select [(ngModel)]="model.gender">\n        <ion-option value="female">Femenino</ion-option>\n        <ion-option value="male">Masculino</ion-option>\n      </ion-select>\n    </ion-item>\n\n\n  </ion-list>\n  <button ion-button block color="primary" (click)="saveContact()">Salvar</button>\n</ion-content>\n'/*ion-inline-end:"/var/www/contacts/src/pages/contact-edit/contact-edit.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_contacts_contacts__["a" /* ContactsProvider */]])
    ], ContactEditPage);
    return ContactEditPage;
}());

var Contact = /** @class */ (function () {
    function Contact() {
    }
    return Contact;
}());

//# sourceMappingURL=contact-edit.js.map

/***/ })

});
//# sourceMappingURL=0.js.map