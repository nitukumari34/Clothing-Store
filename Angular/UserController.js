app.controller("userCtrl", function ($scope, angularService) {


    $scope.UserLogin = function () {

        var login = {
            emailId:$scope.email,
            password:$scope.password


        }

        angularService.doUserLogin(login).then(function (response) {
            if (response.data.Message == "success") {
                console.log("Consol "+ response.data);
                window.location.href = "index.html";
               
            } else {
                alert(response.data.Message);
            }

        });


    }

    $scope.SignUp = function () {

        var login = {
            userId:$scope.userId,
            emailId:$scope.email,
            mobileNo:$scope.mobile,
            password:$scope.password
            

        }

        angularService.doSignUp(login).then(function (response) {
            if (response.data.Message == "success") {
                console.log("Consol "+ response.data);
                window.location.href = "index.html";
               
            } else {
                alert(response.data.Message);
            }

        });


    }


});