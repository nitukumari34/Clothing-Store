
app.controller("catCtrl",function($scope,angularService){
    $scope.GetCategory = function(response){

        angularService.getCategoryList().then(function(response){
            if(response.data.Message == "success"){
                $scope.CategoryList = response.data.CategoryList;
            }else{
                alert("No Data Found");
            }
        });
       
    }

    $scope.GetCategory();
 
    $scope.btnName = "Submit";
    $scope.SubmitCategory = function () {
        var img = document.getElementById("imgValue").src;

        var obj = {
            cat_id:$scope.cat_id,
            cat_Name: $scope.cname,
            cat_description: $scope.shortdesc,
            cat_image: img
            
        };

        angularService.SubmitCategory(obj).then(function (response) {
            if (response.data.Message == "success") {
                if ($scope.btnName == "Update") {
                    alert("Update success");
                }
                else {
                    alert("Submit Success");
                }
                $scope.GetCategory();
            } else {
                alert(response.data.Message);
            }
        });

        $scope.cname="";
        $scope.shortdesc="";
        $scope.image="";
        // $scope.btnName="Submit";
   
    }
       

        $scope.EditCategory = function (c) {
            $scope.cat_id = c.cat_id;
            $scope.cname = c.cat_Name;
            $scope.shortdesc = c.cat_description;
            $scope.image = c.cat_image;
            $scope.btnName = "Update";
          
          
        }

    $scope.Deletedata=function(id){
        angularService.DeleteCategoryById(id).then(function(response){
            if(response.data.Message =="success"){
                alert("Delete Success");
                $scope.GetCategory();
            }
            else{
                alert(response.data.Message);
            }
        });
    }     
});