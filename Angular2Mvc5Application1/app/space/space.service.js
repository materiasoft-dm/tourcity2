"use strict";
var SpaceService = (function () {
    function SpaceService() {
    }
    SpaceService.prototype.getSpace = function () {
        return ['Categories', 'My Profile', 'Settings'];
    };
    return SpaceService;
}());
exports.SpaceService = SpaceService;
//# sourceMappingURL=space.service.js.map