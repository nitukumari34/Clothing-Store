app.controller("cartCtrl", function ($scope, angularService) {
    $scope.GetCart = function () {

        angularService.getCartList().then(function (response) {
            if (response.data.Message == "success") {
                $scope.cartList = response.data.CartList;
                $scope.total = 0;
                angular.forEach($scope.cartList, function (value, key) {
                    $scope.total += value.Total_Amount;
                })



            } else {
                alert("No Data Found");

            }
        });
    }

    $scope.GetCart();




    $scope.btnName = "PlaceOrder";
    $scope.SubmitCart = function () {

        var obj = {
            // cartId:$scope.cartId,
            QTY: $scope.qty,
            price: $scope.price,
            Total_Amount: $scope.tamount

        };

        angularService.SubmitCart(obj).then(function (response) {
            if (response.data.Message == "success") {
                alert("checkout Success");

                $scope.GetCart();
            } else {
                alert(response.data.Message);
            }

            // angular.forEach(cartList, function (value, index) {
            //     Total_Amount += parseFloat(value.price);
            // });
            // return total.toFixed(2);

        });
        $scope.qty = "";
        $scope.price = "";
        $scope.tamount = "";
    }

    $scope.RemoveCartById = function (id) {
        angularService.removeCartById(id).then(function (response) {
            if (response.data.Message == "success") {
                alert("Cart Item Remove Success");
                $scope.GetCart();
            } else {
                alert("Cart Can not Be Remove");
            }
        });
    }

    $scope.IncreaseQty = function (id, qty, p) {
        var q = (qty + 1);
        var obj = {
            id: id,
            qty: q,
            price: (q * p)
        }
        angularService.cartCountIncrease(obj).then(function (response) {
            if (response.data.Message == "success") {
                alert("Cart Count Update Success");
                $scope.GetCart();
            } else {
                alert("Cart Canot be update");

            }
        });
    }
    $scope.DecreaseQty = function (id, qty, p) {
        var q = (qty - 1);
        var obj = {
            id: id,
            qty: q,
            price: (q * p)
        }
        angularService.cartCountIncrease(obj).then(function (response) {
            if (response.data.Message == "success") {
                alert("Cart Count Update Success");
                $scope.GetCart();
            } else {
                alert("Cart Canot be update");

            }
        });
    }




});