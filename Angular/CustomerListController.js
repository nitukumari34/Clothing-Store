app.controller("customCtrl",function($scope,angularService){
    $scope.GetCustomer = function(response){

        angularService.getCustomerList().then(function(response){
            if(response.data.Message == "success"){
                $scope.CustomerList = response.data.CustomerList;
            }else{
                alert("No Data Found");
            }
        });
       
    }

    $scope.GetCustomer();
      
});


