

// lolaPaneContent directive
angular.module('lolaAccordion.directives')
  .directive('lolaPaneContent', lolaPaneContentDirective);


function lolaPaneContentDirective () {
  return {
    restrict: 'E',
    require: '^lolaPane',
    transclude: true,
    template: '<div ng-transclude></div>',
    scope: {},
    link: function (scope, iElement, iAttrs) {
      iAttrs.$set('role', 'tabpanel');
      iAttrs.$set('aria-hidden', 'true');
    }
  };
}
