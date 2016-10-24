var app = app || {};

app.welcomeModel = Backbone.Model.extend({
    defaults: {
        title: '',
        description: ''
    },
    initialize: function () {
        //alert('initialized');
        //do stuff after the model initialize
        this.on('change', function () {
            //this will trigger when a property on an instance of this object changes
        });

        //will listen to title changes
        this.on('change:title', function () {
            //this will trigger when a property on an instance of this object changes
        });
    }
});