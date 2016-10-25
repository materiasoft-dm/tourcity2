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
var WelcomeSection = (function () {
    function WelcomeSection() {
    }
    return WelcomeSection;
}());
exports.WelcomeSection = WelcomeSection;
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'welcome';
        this.welcome = {
            Title: 'sample title',
            Description: 'Sample description'
        };
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n  <div>Hello</div>\n<div>{{welcome.Title}}</div>\n<div>{{welcome.Description}}</div>\n<div><input [(ngModel)]=\"welcome.Title\" type='text' /></div>\n<div><input [(ngModel)]=\"welcome.Description\" type='text' /></div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map