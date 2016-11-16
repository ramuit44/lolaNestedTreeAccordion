

// lolaPaneHeader directive
angular.module('lolaAccordion.directives')
  .directive('lolaPaneHeader', lolaPaneHeaderDirective);


function lolaPaneHeaderDirective () {
  return {
    restrict: 'E',
    require: ['^lolaPane', '^lolaAccordion'],
    transclude: true,
    template: '<div ng-transclude></div>',
    scope: {},
    link: function (scope, iElement, iAttrs, ctrls) {
      iAttrs.$set('role', 'tab');
      iAttrs.$set('tabindex', '0');

      var paneCtrl = ctrls[0],
          accordionCtrl = ctrls[1];

      var isInactive = angular.isDefined(iAttrs.inactive);

      function onClick () {
        if (isInactive) { return false; }
        scope.$apply(function () { paneCtrl.toggle(); });
      }

      function onKeydown (event) {
        if (event.keyCode === 32  || event.keyCode === 13) {
          scope.$apply(function () { paneCtrl.toggle(); });
          event.preventDefault();
        } else if (event.keyCode === 39 || event.keyCode === 40) {
          scope.$apply(function () { accordionCtrl.focusNext(); });
          event.preventDefault();
        } else if (event.keyCode === 37 || event.keyCode === 38) {
          scope.$apply(function () { accordionCtrl.focusPrevious(); });
          event.preventDefault();
        }
      }

      function onFocus () {
        paneCtrl.focusPane();
      }

      function onBlur () {
        paneCtrl.blurPane();
      }

      iElement[0].onfocus = onFocus;
      iElement[0].onblur = onBlur;
      iElement.bind('click', onClick);
      iElement.bind('keydown', onKeydown);

      scope.$on('$destroy', function () {
        iElement.unbind('click', onClick);
        iElement.unbind('keydown', onKeydown);
        iElement[0].onfocus = null;
        iElement[0].onblur = null;
      });
    }
  };
}
