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

    }]);