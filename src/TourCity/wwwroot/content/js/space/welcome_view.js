var app = app || {};

app.welcomeView = Backbone.View.extend({
    el:  "#display-content",
    render: function(templateId)
    {
        var model = new app.welcomeModel({title:'sample title',description:'sample description'});
        var template = _.template($(templateId).html());
        this.$el.html(template(model.toJSON()));
        return this;
    },
    events: {
        "click .edit-space-title-description": "enableEdit",
        "click .edit-space-title-description-close": "closeEdit",
        "click .edit-space-title-description-save": "save"
    },

    enableEdit: function () { this.render("#welcome-editor"); },
    closeEdit: function() { this.render("#welcome-display"); },
    save: function()
    {
        this.render("#welcome-display");
    }
});

var welcomeView = new app.welcomeView();
welcomeView.render("#welcome-display");
