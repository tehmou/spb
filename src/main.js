requirejs.config({
    shim: {
        "underscore": {
            exports: "_"
        },
        "mustache": {
            exports: "Mustache"
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
        "mustache": "lib/mustache",
        "jquery": "lib/jquery-1.8.3.min",
        "backbone": "lib/backbone",
        "backbone.layoutmanager": "lib/backbone.layoutmanager",
        "text": "lib/text"
    }
});

require([], function () {

});