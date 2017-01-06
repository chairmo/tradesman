angular.module('Artisans').controller('ReportsController', [
    '$scope', '$filter', '$routeParams', 'WorkService', 'ArtisanService',
    function ($scope, $filter, $routeParams, WorkService, ArtisanService) {

        $scope.works = [];
        $scope.artisans = [];

        $scope.getAll = function () {
            WorkService.getAll()
                .then(function (response) {
                    $scope.works = response.data;
                }, function (data) {
                    alert("Failed to find Works");
                });

            ArtisanService.getAll()
                .then(function (response) {
                    $scope.artisans = response.data;
                }, function (data) {
                    alert("Failed to find Artisans");
                });
        };

    }]);