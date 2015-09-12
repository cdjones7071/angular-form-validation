
angular.module("validationApp", [])
  .controller("ListController", function($scope){

    $scope.invalid = {}


    $scope.$watch('name', function() {
       $scope.name = document.getElementById("nameInput").value;
       if ($scope.name !== undefined) {
       document.getElementById("nameInput").setAttribute("class", "error-border")
     } 
     if ($scope.name.length >=1){
       document.getElementById("nameInput").setAttribute("class", "no-border")
     }
   });

    $scope.$watch('email', function() {
     $scope.email = document.getElementById("emailInput").value;
     var emailString = $scope.email;
     var emailArr = emailString.split("");

     if ($scope.email !== undefined) {
       document.getElementById("emailInput").setAttribute("class", "error-border")
     }
     for (var i = 0; i < emailArr.length; i++) {
       if (emailArr[i] === "@") {
         document.getElementById("emailInput").setAttribute("class", "no-border")
       }
     }
    });

    $scope.$watch('website', function() {
       $scope.website = document.getElementById("websiteInput").value;

       if ($scope.website !== undefined) {
       document.getElementById("websiteInput").setAttribute("class", "error-border")
     } 
     if ($scope.website.length >= 7 && $scope.website.slice(0,7) === "#") {
       document.getElementById("websiteInput").setAttribute("class", "no-border")
     }
   });

    $scope.$watch('message', function() {
     $scope.message = document.getElementById("messageInput").value;
   if ($scope.message !== undefined) {
       document.getElementById("messageInput").setAttribute("class", "error-border")
     } 
     if ($scope.message.length >= 1){
       document.getElementById("messageInput").setAttribute("class", "no-border")
     }
   });

    

    $scope.submitForm = function() {

      $scope.invalid = {
        name: !($scope.name),
        email: !($scope.email),
        website: !($scope.website),
        message: !($scope.message)
      }

      $scope.myVar;


      if( _.some($scope.invalid) ) {
       sweetAlert("Oops...", "Something went wrong!", "My sense Mannn");
        return;
      }

      $scope.website = "";
      $scope.name = "";
      $scope.email = "";
      $scope.message = "";
    }



  }) 
