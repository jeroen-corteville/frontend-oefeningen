/// <reference path="Parking.js" />
/// <reference path="../../scripts/angular.js" />

var ParkingController = function ($scope, $http) {
    $scope.parkings = [];
    $scope.sortOrder = "Description";

    var onParkingsDownloaded = function (response) {
        angular.forEach(response.data.Parkings.parkings, function (value, key) {
            var newP = new Parking(value.name, value.description, value.totalCapacity, value.availableCapacity);
            $scope.parkings.push(newP);
        });

    }
    var onError = function (response) {

    }

    $http.get('http://datatank.gent.be/Mobiliteitsbedrijf/Parkings.json').then(onParkingsDownloaded, onError);
}