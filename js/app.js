// sample angular code

var app = angular.module('myApp', ['ngMessages']);


app.controller('textController', ['$scope', '$http', function($scope, $http) {
  $scope.message = '';
  $scope.number = '';
  $scope.sendMessage = function(body) {
    var number = body.number.$modelValue;
    var message = body.message.$modelValue;
    if ($scope.messageForm.$valid) {
      $http({
        method: 'POST',
        url: 'http://www.textbelt.com/text',
        data: {
          number: number,
          message: message,
        }
      }).then(function(response) {
        if (response.status === 200) {
          $scope.message = '';
          $scope.number = '';
          $scope.success = 'Message sent successfully.';
        } else {
          $scope.danger = 'Uh Oh.  Please try again.';
        }
      });
    }
  };
}]);
