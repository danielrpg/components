(function(){
    'use strict';
    var app = angular.module("App");
    app.component('userList', {
        templateUrl : "./app/components/userlist/userList.html",
        controller  : function($http){
            var vm = this;
            $http.get("http://jsonplaceholder.typicode.com/users")
                 .then(function(data){
                    vm.users = data.data;
                 });
        }
    });
})();