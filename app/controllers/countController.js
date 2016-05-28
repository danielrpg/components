(function(){
    'use strict';
    var app = angular.module("App");
    
    app.controller('countController', countController);
    countController.$inject = [];
    
    function countController(){
        var vm = this;
        vm.clicks = 0;
        
        vm.increments = function(){
            vm.clicks ++;
        }
    }
})();