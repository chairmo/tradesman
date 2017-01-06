angular.module('Artisans').controller('ReportsController', [
    '$scope', '$filter', '$routeParams', 'WorkService',
    function ($scope, $filter, $routeParams, WorkService) {

        $scope.works = [];

        $scope.getAll = function () {
            WorkService.getAll()
                .then(function (response) {
                    $scope.works = response.data;
                    $scope.filterWorks();
                }, function (data) {
                    alert("Failed to find Works");
                });
        };

        $scope.filterWorks = function () {
            $scope.filteredTeachers = $filter('filter')($scope.works, $scope.search);
        };

    }]);