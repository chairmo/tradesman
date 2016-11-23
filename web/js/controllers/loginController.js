angular.module('Artisans').controller('LoginController', [
    '$scope', '$location', 'UserModel',
    function ($scope, $location, UserModel) {

        $scope.userModel = new UserModel();

        $scope.token = function () {
            $scope.userModel.token($scope.username, $scope.password)
                .then(function (success) {
                    $location.path('/feed');
                    alert(success);
                }, function (error) {
                    alert(error);
                });
        }

    }]);