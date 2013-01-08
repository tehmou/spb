requirejs.config({
    shim: {
        "underscore": {
            exports: "_"
        },
        "handlebars": {
            exports: "Handlebars"
        },
        "jquery": {
            exports: "$"
        },
        "backbone": {
            exports: "Backbone",
            deps: ["underscore", "jquery"]
        },
        "backbone.layoutmanager": {
            exports: "Backbone.LayoutManager",
            deps: ["backbone"]
        }
    },
    paths: {
        "underscore": "lib/underscore",
        "handlebars": "lib/handlebars",
        "jquery": "lib/jquery-1.8.3.min",
        "backbone": "lib/backbone",
        "backbone.layoutmanager": "lib/backbone.layoutmanager",
        "text": "lib/text"
    }
});

require([], function () {

});