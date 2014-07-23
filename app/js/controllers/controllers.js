'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('CtrlHome', ['$scope',
    function ($scope) {
      console.log('CtrlHome init');
    }
  ])
  .controller('CtrlAbout', ['$scope',
    function ($scope) {
      console.log('CtrlAbout init');
    }
  ]).controller('CtrlContact', ['$scope',
    function ($scope) {
      console.log('CtrlContact init');
    }
  ]).controller('Ctrl404', ['$scope', '$materialDialog',
    function ($scope, $materialDialog) {
      console.log('Ctrl404 init');
      $scope.dialog = function (e) {
        $materialDialog({
          templateUrl: 'views/modals/my-dialog.html',
          targetEvent: e,
          controller: ['$scope', '$hideDialog',
            function ($scope, $hideDialog) {
              $scope.close = function () {
                $hideDialog();
              };
            }
          ]
        });
      };
    }
  ]);


var TimepickerDemoCtrl = function ($scope) {
  $scope.mytime = new Date();

  $scope.hstep = 1;
  $scope.mstep = 15;

  $scope.options = {
    hstep: [1, 2, 3],
    mstep: [1, 5, 10, 15, 25, 30]
  };

  $scope.ismeridian = true;
  $scope.toggleMode = function () {
    $scope.ismeridian = !$scope.ismeridian;
  };

  $scope.update = function () {
    var d = new Date();
    d.setHours(14);
    d.setMinutes(0);
    $scope.mytime = d;
  };

  $scope.changed = function () {
    console.log('Time changed to: ' + $scope.mytime);
  };

  $scope.clear = function () {
    $scope.mytime = null;
  };
};
