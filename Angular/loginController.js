app.controller("LoginCtrl", function ($scope, angularService) {


    $scope.SystemLogin = function () {

        var login = {
            userName:$scope.username,
            password:$scope.password

        }

        angularService.doSysLogin(login).then(function (response) {
            if (response.data.Message == "Success") {
                console.log("Consol "+ response.data);
                window.location.href = "index.html";
                // if (response.data.LoginResponse[0].UserId != undefined) {
                //     alert("Login Success and username is : " + response.data.LoginData[0].UserId);
                //     window.location.href = "dashboard.html";
                // } else {
                //     alert(response.data.Message);
                // }
            } else {
                alert(response.data.Message);
            }

        });


    }

});