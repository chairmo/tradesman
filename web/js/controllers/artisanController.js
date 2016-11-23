angular.module('Artisans').controller('ArtisanController', [
    '$scope', '$filter', 'ArtisanService',
    function ($scope, $filter, ArtisanService) {

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
                    $scope.filterArtisans();
                }, function (data) {
                    alert("Failed to find Artisans");
                });
        };

        $scope.filterArtisans = function () {
            $scope.filteredTeachers = $filter('filter')($scope.artisans, $scope.search);
        };

    }]);