(function(){
    'use strict';
    var app = angular.module("App");
    app.component('userDetail', {
        templateUrl : "./app/components/userdetail/userDetail.html",
        controller  : function(){
            var vm = this;
            
            vm.changeEmail = function(){
                vm.user.email = "daniel.fernandezgp@gmail.com";
            }
        },
        bindings :{
            user : "=",
            number : "@"
        }
    });
})();