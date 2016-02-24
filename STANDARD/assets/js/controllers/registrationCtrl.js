app.controller('RegistrationCtrl', ["$scope", "$http",
               function ($scope, $http) {

    // $http.defaults.headers.post['Content-Type'] = 'application/json; charset=UTF-8';

    $scope.login = function () {
        // console.log('username: ' + username + ' password: ' +password);
        // $http.post("http://127.0.0.1:5000/api/auth/register", 
        // JSON.stringify({
        //     'username': 'itgetlink',
        //     'password': 'f576a20036a211ef58c5f531fba171320721d750',
        //     'app_key': 'kjnsahfdhaf121434',
        // }))
        // .then(function(response) {
        //     console.log(response.data);
        // }, function(err) {
        //     console.log(err.data);
        // });
        $http({
            method: 'POST',
            url: 'http://127.0.0.1:5000/api/auth/register',
            data: $.param({
                username: 'itgetlink',
                password: 'f576a20036a211ef58c5f531fba171320721d750',
                app_key: 'kjnsahfdhaf121434',
            }),
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        })
        .then(function(response) {
            console.log(response.data);
        }, function(err) {
            console.log(err.data);
        });;
        
    }

}]);