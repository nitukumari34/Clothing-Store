app.controller("orderCtrl", function ($scope, angularService) {
    $scope.GetOrder = function (response) {

        angularService.getOrderList().then(function (response) {
            if (response.data.Message == "success") {
                $scope.OrderList = response.data.OrderList;
                console.log($scope.OrderList);
            } else {
                alert("No Data Found");
            }
        });


    }


    $scope.GetOrder();
    $scope.btnName = "placeOrder";
    $scope.placeOrder = function () {
        // alert("success");

        var obj = {
            Name: $scope.name,
            Mobile: $scope.mobile,
            address: $scope.address,
            street: $scope.street,
            city: $scope.city,
            state: $scope.state,
            pincode: $scope.pincode,
            landmark: $scope.landmark,
            TotalAmount: $scope.total
        };

        angularService.placeOrder(obj).then(function (response) {
            if (response.data.Message == "success") {
                console.log($scope.obj);
                alert("order place Success");

                $scope.GetOrder();
            } else {
                alert(response.data.Message);

            }

        });

        console.log($scope.obj);

        $scope.name = "";
        $scope.mobile = "";
        $scope.address = "";
        $scope.street = "";
        $scope.city = "";
        $scope.state = "";
        $scope.pincode = "";
        $scope.landmark = "";
        $scope.total = ""
    }
});