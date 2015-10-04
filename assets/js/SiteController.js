'use strict';

angular
    .module('schluckspecht', [])

    .controller('SiteController', function ($scope, $interval, $http) {
        $scope.timeTillNextParty = new Date();

        $scope.contact = {};

        $scope.submitContactForm = function () {
            $http.post("/api/contact", $scope.contact)
                .then(function (response) {

                }, function (errResponse) {

                });

            $scope.contact = {};
        };

        var HOUR_OF_PARTY = 21;
        var DAY_OF_PARTY = 3;

        $scope.timeOfNextParty = function () {
            var now = new Date();
            var next = new Date();
            next.setHours(HOUR_OF_PARTY);
            next.setMinutes(0);
            next.setSeconds(0);
            return new Date(next.getTime() - now.getTime());

        };

        $scope.getDaysTillParty = function () {
            var date = new Date();
            if (date.getDay() < DAY_OF_PARTY) {
                return DAY_OF_PARTY - date.getDay();
            } else {
                return DAY_OF_PARTY - date.getDay() + 7;
            }
        };

        $interval(function () {
        }, 1000)
    });


