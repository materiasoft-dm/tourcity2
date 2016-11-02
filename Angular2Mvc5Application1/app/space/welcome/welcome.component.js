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
var space_service_1 = require('./../space.service');
var forms_1 = require('@angular/forms');
var WelcomeComponent = (function () {
    function WelcomeComponent(spaceService) {
        this.spaceService = spaceService;
        this.editing = false;
        this.content = { Id: 0, Name: '', IsActive: true, Title: '', Description: '' };
        this.getSpace();
    }
    WelcomeComponent.prototype.showEdit = function () {
        this.editing = true;
    };
    WelcomeComponent.prototype.hideEdit = function () {
        this.editing = false;
    };
    WelcomeComponent.prototype.saveWelcome = function () {
        var _this = this;
        this.spaceService.updateSpace(this.content)
            .subscribe(function (space) { return _this.content = space; }, function (error) { return error; });
        this.hideEdit();
    };
    WelcomeComponent.prototype.getSpace = function () {
        var _this = this;
        this.spaceService.getSpace(1)
            .subscribe(function (space) { return _this.content = space; }, function (error) { return error; });
    };
    WelcomeComponent = __decorate([
        core_1.Component({
            templateUrl: './app/space/welcome/welcome.html',
            selector: 'welcomeComponent',
            providers: [space_service_1.SpaceService, forms_1.FormsModule]
        }), 
        __metadata('design:paramtypes', [space_service_1.SpaceService])
    ], WelcomeComponent);
    return WelcomeComponent;
}());
exports.WelcomeComponent = WelcomeComponent;
//# sourceMappingURL=welcome.component.js.map