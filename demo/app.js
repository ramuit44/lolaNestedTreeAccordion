(function (angular) {
  'use strict';

  angular
    .module('myApp', [ 'ngAnimate', 'lolaAccordion' ])

    .controller('MainController', function ($scope) {

      $scope.panesA = [
        {
          id: 'pane-1a',
          header: 'Pane 1',
          content: '1xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz',
          isExpanded: true
        },
        {
          id: 'pane-2a',
          header: 'Pane 2',
          content: '2xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz'
        },
        {
          id: 'pane-3a',
          header: 'Pane 3',
          content: '3xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz',

          subpanes: [
            {
              id: 'subpane-1a',
              header: 'Subpane 1',
              content: '31xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz'
            },
            {
              id: 'subpane-2a',
              header: 'Subpane 2 (disabled)',
              content: '32xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz',
              isDisabled: true
            }
          ]
        }
      ];

      $scope.panesB = [
        {
          id: 'pane-1b',
          header: 'Pane 1',
          content: '1yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
          isExpanded: true
        },
        {
          id: 'pane-2b',
          header: 'Pane 2',
          content: '2yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
        },
        {
          id: 'pane-3b',
          header: 'Pane 3',
          content: '3yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',

          subpanes: [
            {
              id: 'subpane-1b',
              header: 'Subpane 1',
              content: '31yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx.'
            },
            {
              id: 'subpane-2b',
              header: 'Subpane 2 (disabled)',
              content: '32yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
              isDisabled: true
            }
          ]
        }
      ];

      $scope.expandCallback = function (index, id) {
        console.log('expand:', index, id);
      };

      $scope.collapseCallback = function (index, id) {
        console.log('collapse:', index, id);
      };

      $scope.$on('accordionA:onReady', function () {
        console.log('accordionA is ready!');
      });

    });

})(angular);
