"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var header_component_1 = require('./../common/header/header.component');
var welcome_component_1 = require('./welcome/welcome.component');
var SpaceComponent = (function () {
    function SpaceComponent() {
        this.modalVisible = false;
    }
    SpaceComponent.prototype.showModal = function () {
        this.modalVisible = true;
    };
    SpaceComponent.prototype.hideModal = function () {
        this.modalVisible = false;
    };
    SpaceComponent = __decorate([
        core_1.Component({
            selector: 'space-section',
            directives: [header_component_1.HeaderComponent, welcome_component_1.WelcomeComponent],
            templateUrl: './app/space/space.html'
        }), 
        __metadata('design:paramtypes', [])
    ], SpaceComponent);
    return SpaceComponent;
}());
exports.SpaceComponent = SpaceComponent;
//# sourceMappingURL=space.component.js.map