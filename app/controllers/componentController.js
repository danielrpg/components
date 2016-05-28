(function(){
    'use strict';
    var app = angular.module("App");
    app.controller('ComponentController', ComponentController);
    ComponentController.$inject = [];
    function ComponentController(){
        var vm = this;
        vm.data = 'Hola mundo  ';
    }
})();