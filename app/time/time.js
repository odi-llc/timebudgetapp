'use strict';

angular.module('myApp.time', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/time', {
    templateUrl: 'time/time.html',
    controller: 'TimeCtrl'
  });
}])

.controller('TimeCtrl', [function() {

var ctx = document.getElementById("myChart").getContext("2d");

var data = {
    labels: ["Studying JS", "P90", "Reading Literature"],
    datasets: [
        {
            label: "Actual Time",
            fillColor: "rgba(220,220,220,0.5)",
            strokeColor: "rgba(220,220,220,0.8)",
            highlightFill: "rgba(220,220,220,0.75)",
            highlightStroke: "rgba(220,220,220,1)",
            data: [65, 59, 80 ]
        },
        {
            label: "Alloted Time",
            fillColor: "rgba(151,187,205,0.5)",
            strokeColor: "rgba(151,187,205,0.8)",
            highlightFill: "rgba(151,187,205,0.75)",
            highlightStroke: "rgba(151,187,205,1)",
            data: [28, 48, 40]
        }
    ]
};


var myBarChart = new Chart(ctx).Bar(data);


}]);
