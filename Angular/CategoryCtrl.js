app.controller("CategoryCtrl", function ($scope, angularService) {

    function getParameterByName(name) {
        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
            results = regex.exec(location.search);
        return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    }






    $scope.GetProduct = function () {
        var id = getParameterByName('id');
        angularService.getProductListByCid(id).then(function (response) {
            if (response.data.Message == "success") {
                $scope.ProductListss = response.data.product;

            } else {
                alert("No Data Found");
            }
        });

    }

    $scope.GetProduct();

    

});