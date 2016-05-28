(function(){
    'use strict';
    var app = angular.module("App");
    app.component('countClick', {
        templateUrl : "./app/components/count/count-click.html",
        controller  : "countController"
    });
})();