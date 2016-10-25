"use strict";
var SidebarService = (function () {
    function SidebarService() {
    }
    SidebarService.prototype.getSidebarItems = function () {
        return ['Categories', 'My Profile', 'Settings'];
    };
    return SidebarService;
}());
exports.SidebarService = SidebarService;
//# sourceMappingURL=sidebar.service.js.map