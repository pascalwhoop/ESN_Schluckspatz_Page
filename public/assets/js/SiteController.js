'use strict';

angular
    .module('schluckspecht', [])

    .controller('SiteController', function ($scope, $interval, $http) {
        $scope.timeTillNextParty = new Date();

        $scope.contact = {};

        $scope.submitContactForm = function () {
            $http.post("/api/contact", $scope.contact)
                .then(function (response) {
                    console.log(response);
                    $scope.contact = {};
                }, function (errResponse) {

                });


        };

        $scope.timeOfNextParty = function () {
            var now = new Date();
            var next = getNextPartyDate();
            return new Date(next.getTime() - now.getTime());

        };

        var getNextPartyDate = function () {
            var now = new Date();
            var wed = new Date();
            wed.setDate(now.getDate() - now.getDay() + 3); // Make Sunday
            wed.setHours(21); // Set 11am
            wed.setMinutes(0);
            wed.setSeconds(0);
            if (wed < now) wed.setDate(wed.getDate() + 7); // Make sure it's future
            if (wed.getDate() < 7) wed.setDate(wed.getDate() + 7); // make sure its not the first wed in the month
            return wed;
        };

        $scope.dayDiffToNextParty = function () {
            var time = Math.floor(((getNextPartyDate() - new Date()) / 1000 / 60 / 60 / 24));

            //here to change if party is not when planned
            if(time < 3) time += 7;
            return time;
        };


        $scope.getYear = function () {
            var a = new Date();
            return a.getFullYear();
        };

        $interval(function () {
        }, 1000)
    });


