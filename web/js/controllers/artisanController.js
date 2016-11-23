angular.module('Artisans').controller('ArtisanController', [
    '$scope', 'ArtisanService',
    function ($scope, ArtisanService) {

        $scope.createArtisan = function () {
            ArtisanService.create($scope.artisan)
                .then(function (response) {
                    alert("successfully created Artisan :)");
                }, function (data) {
                    alert("Failed to create Artisan :()");
                });
        };

        $scope.artisans = [];

        $scope.getAll = function () {
            ArtisanService.getAll()
                .then(function (response) {
                    $scope.artisans = response.data;
                }, function (data) {
                    alert("Failed to find Artisans");
                });
        };

    }]);