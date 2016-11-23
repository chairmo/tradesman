angular.module('Artisans').controller('ArtisanController', [
    '$scope', '$filter', '$routeParams', 'ArtisanService',
    function ($scope, $filter, $routeParams, ArtisanService) {

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

        $scope.getArtisanById = function () {
            ArtisanService.getById($routeParams.artisanId)
                .then(function (response) {
                    $scope.artisan = response.data;
                }, function (data) {
                    alert("Failed to find Artisan");
                });
        };

        $scope.filterArtisans = function () {
            $scope.filteredTeachers = $filter('filter')($scope.artisans, $scope.search);
        };

    }]);