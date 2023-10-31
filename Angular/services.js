app.service("angularService", function ($http) {

  this.getSystemLogin = function (id) {
    return $http.get("http://localhost:2300/api/v2/ecom/login" + id);
  }



  this.doSysLogin = function (obj) {
    return $http.post('http://localhost:2300/api/v2/ecom/syslogin', JSON.stringify(obj));
  }

  // web


  this.UserLogin = function (id) {
    return $http.get("http://localhost:2300/api/v2/ecom/user" + id);
  }

  this.doUserLogin = function (obj) {
    return $http.post('http://localhost:2300/api/v2/ecom/weblogin', JSON.stringify(obj));
  }


  this.doSignUp = function (obj) {
    return $http.post('http://localhost:2300/api/v2/ecom/weblogin', JSON.stringify(obj));

  }



  this.getProductList = function () {
    return $http.get('http://localhost:2300/api/v2/ecom/getproduct/');
  }

  this.SubmitCategory = function (obj) {
    return $http.post("http://localhost:2300/api/v2/ecom/submitcategory/", JSON.stringify(obj));
  }


  this.SubmitProduct = function (obj) {
    return $http.post("http://localhost:2300/api/v2/ecom/submitproduct/", JSON.stringify(obj));
  }

  this.deleteProductById = function (id) {
    return $http.get("http://localhost:2300/api/v2/ecom/deleteproduct/" + id);
  }



  this.getCategoryList = function () {
    return $http.get("http://localhost:2300/api/v2/ecom/getcategory/");
  }

  this.DeleteCategoryById = function (id) {
    return $http.get("http://localhost:2300/api/v2/ecom/deletecategory/" + id);
  }


  // this.getOrderList = function () {
  //   return $http.get("http://localhost:2300/api/v2/ecom/getOrder/")
  // }

  this.getCustomerList = function () {
    return $http.get("http://localhost:2300/api/v2/ecom/getcustomerlist/")
  }
  this.getCartList = function () {
    return $http.get("http://localhost:2300/api/v2/ecom/getcart/")
  }

  this.addCart = function (obj) {
    return $http.post("http://localhost:2300/api/v2/ecom/addcart/", JSON.stringify(obj))
  }

  this.removeCartById = function (id) {
    return $http.get("http://localhost:2300/api/v2/ecom/removecart/" + id);
  }



  this.cartCountIncrease = function (obj) {
    return $http.post("http://localhost:2300/api/v2/ecom/incdeccart/", JSON.stringify(obj));
  }

 

  this.getProductListByCid = function (id) {
    return $http.get('http://localhost:2300/api/v2/ecom/getcategorybycat/' + id);

  }

  this.getOrderList =function(){
    return $http.get("http://localhost:2300/api/v2/ecom/getCorder/");
  }

  this.placeOrder =function(obj){
    return $http.post("http://localhost:2300/api/v2/ecom/submitorder",JSON.stringify(obj))

  }

});