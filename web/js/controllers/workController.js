angular.module('Artisans').controller('WorkController', [
    '$scope', '$filter', '$routeParams', 'WorkService',
    function ($scope, $filter, $routeParams, WorkService) {

        $("#to").intlTelInput({
            initialCountry: "auto",
            geoIpLookup: function (callback) {
                $.get('http://ipinfo.io', function () { }, "jsonp").always(function (resp) {
                    var countryCode = (resp && resp.country) ? resp.country : "";
                    callback(countryCode);
                });
            },
            utilsScript: "../../libs/intl-tel-input/build/js/utils.js"
        });

        $("#to").on("countrychange", function (e, countryData) {
            var intlNumber = $("#to").intlTelInput("getNumber");
        });

        $scope.createWork = function () {
            $scope.work.artisan = $routeParams.workId;
            $scope.work.cell = $("#to").intlTelInput("getNumber");
            WorkService.create($scope.work)
                .then(function (response) {
                    alert("successfully created Work :)");
                }, function (data) {
                    alert("Failed to create Work :()");
                });
        };

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

        $scope.getWorkById = function () {
            WorkService.getById($routeParams.workId)
                .then(function (response) {
                    $scope.work = response.data;
                }, function (data) {
                    alert("Failed to find Work");
                });
        };

        $scope.updateWork = function () {
            WorkService.updateById($routeParams.workId, $scope.work)
                .then(function (response) {
                    alert("Successfully updated Work");
                }, function (data) {
                    alert("Failed to Update Work");
                });
        };

        $scope.filterWorks = function () {
            $scope.filteredTeachers = $filter('filter')($scope.works, $scope.search);
        };

    }]);