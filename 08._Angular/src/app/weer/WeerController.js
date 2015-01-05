/// <reference path="Weer.js" />
var WeerController = function ($scope, $http) {
    $scope.weatherforecasts = [];

    var onWeatherDownloaded = function (response) {
        console.log(response)
        angular.forEach(response.data.query.results.channel.item.forecast, function (value, key) {
            var newW = new Weer(value.text, value.high, value.low, value.date, value.day)
            $scope.weatherforecasts.push(newW);
        });
    }
    var onError = function (response) {

    }

    $http.get("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%3D23424757%20and%20u%3D'c'&format=json&diagnostics=true&callback=").then(onWeatherDownloaded,onError)
}