angular.module('Artisans').controller('RegisterController', [
    '$scope', '$location', 'UserModel',
    function ($scope, $location, UserModel) {

        $scope.userModel = new UserModel();

        $scope.register = function () {
            $scope.userModel.register($scope.username, $scope.password, $scope.confirmPassword)
                .then(function (success) {
                    $location.path('/login');
                    alert(success);
                }, function (error) {
                    alert(error);
                });
        };

    }]);