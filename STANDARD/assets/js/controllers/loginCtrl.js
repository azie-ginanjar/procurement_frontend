app.controller('LoginCtrl', ["$scope", "$http", "SweetAlert", "$cookies", "$location",
               function ($scope, $http, SweetAlert, $cookies, $location) {

    // $http.defaults.headers.post['Content-Type'] = 'application/json; charset=UTF-8';

    $scope.login = function () {
        // console.log(CryptoJS.SHA1("Message").toString());
        if($scope.username==null||$scope.username==''||$scope.password==null||$scope.password==''){
            SweetAlert.swal({
                title: "Perhatian",
                text: "Harap lengkapi username dan password",
                type: "warning",
                showCancelButton: false,
                confirmButtonColor: "#1FBBA6",
                confirmButtonText: "OK",
                closeOnConfirm: true}, 
            function(){ 
                    
            });
        }else{
            $http({
                method: 'POST',
                url: 'http://127.0.0.1:5000/api/auth/login',
                data: $.param({
                    username: $scope.username,
                    password: CryptoJS.SHA1($scope.password).toString(),
                }),
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'app_key': '415d6190a6e11f06db5a970d04f6a2ea26e1cdb9'
                }
            })
            .then(function(response) {
                $cookies.procurementSession = response.data.objects[0].access_token;

                $location.path('app/dashboard');
            }, function(err) {
                SweetAlert.swal({
                    title: "Perhatian",
                    text: "Username dan Password tidak cocok",
                    type: "warning",
                    showCancelButton: false,
                    confirmButtonColor: "#1FBBA6",
                    confirmButtonText: "OK",
                    closeOnConfirm: true}, 
                function(){ 
                        
                });
            });
        }
    }

}]);