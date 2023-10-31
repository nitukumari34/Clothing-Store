app.controller("ProductCtrl", function ($scope, angularService) {
    $scope.GetProduct = function () {
        angularService.getProductList().then(function (response) {
            if (response.data.Message == "success") {
                $scope.ProductList = response.data.ProductList;

                // alert("Data: "+$scope.ProductList[0].productName);

            } else {
                alert("No Data Found");
            }
        });

    }

    $scope.GetProduct();

    // $scope.SelectFile = function(e)
    // {
    //     $scope.image = e.target.files[0];

    // }

    $scope.btnName = "Submit";
    $scope.SubmitProduct = function () {
        var img = document.getElementById("imgValue").src;
        var obj = {
            productId: $scope.productId,
            productName: $scope.name,
            category: $scope.category,
            image: img,
            short_desc: $scope.shortdesc,
            cost_price: $scope.costprice,
            MRP: $scope.mrp,
            selling_price: $scope.sellprice,
            size: $scope.size,
            color: $scope.color
        }

        angularService.SubmitProduct(obj).then(function (response) {
            if (response.data.Message == "success") {
                if ($scope.btnName == "Update") {
                    alert("Update success");
                }
                else {
                    alert("Submit Success");
                }
                $scope.GetProduct();
            } else {
                alert(response.data.Message);
            }
        });

            $scope.name = "",
            $scope.category = "",
            $scope.image = "",
            $scope.shortdesc = "",
            $scope.costprice = "",
            $scope.mrp = "",
            $scope.sellprice = "",
            $scope.size = "",
            $scope.color = "" 
    }

    $scope.EditProduct = function (m) {
        $scope.name = m.productName;
        $scope.category = m.category;
        $scope.image = m.image;
        $scope.shortdesc = m.short_desc;
        $scope.costprice = m.cost_price;
        $scope.mrp = m.MRP;
        $scope.sellprice = m.selling_price;
        $scope.size = m.size;
        $scope.color = m.color;
        $scope.btnName = "Update";
        $scope.productId = m.productId;
    }

    $scope.Deletedata = function (id) {
        angularService.deleteProductById(id).then(function (response) {
            if (response.data.Message == "success") {
                alert("Delete Success");
                $scope.GetProduct();
            }
            else {
                alert(response.data.Message);
            }
        });
    }

    $scope.Addcart=function(m){
        $scope.name = m.productName;
        $scope.category = m.category;
        $scope.image = m.image;
        $scope.shortdesc = m.short_desc;
        $scope.costprice = m.cost_price;
        $scope.mrp = m.MRP;
        $scope.sellprice = m.selling_price;
        $scope.size = m.size;
        $scope.color = m.color;
        $scope.productId = m.productId;
       

        // calling api
        var obj ={
            productId:m.productId,
            QTY:1,
            price:m.selling_price,
            Total_Amount:m.selling_price
        }

        angularService.addCart(obj).then(function(response){
            if(response.data.Message=="success")
            {
                alert("Add to Cart Success");
            }else{
                alert("Faild to add");
            }
        });
    }
});

































