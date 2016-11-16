
# Lola Nested Panel Tree AngularJS accordion with multilevel depth

  - Allows for a nested tree structure
  - Works with (or without) `ng-repeat`
  - Allows multiple sections to be open at once

![ScreenShot](https://github.com/ramuit44/lolaNestedTreeAccordion/blob/master/screenshot1.png)


## Usage

  - Include `angular.js`, `angular-animate.js`, `lola-accordion.js`, and `lola-accordion.css`:
  ```html
  <link href="lola-accordion.css" rel="stylesheet" />

  <script src="angular.js"></script>
  <script src="angular-animate.js"></script>

  <script src="lola-accordion.js"></script>
  ```

  - Add `lolaAccordion` and `ngAnimate` as dependencies to your application module:
  ```js
  angular.module('myApp', ['lolaAccordion', 'ngAnimate']);
  ```

  - Put the following markup in your template:
  ```html
  <!-- add `multiple` attribute to allow multiple sections to open at once -->
  <lola-accordion class="lolaAccordion--default" multiple>

    <!-- add expanded attribute to open the section -->
    <lola-pane expanded>
      <lola-pane-header>
        Pane header #1
      </lola-pane-header>

      <lola-pane-content>
        Pane content #1
      </lola-pane-content>
    </lola-pane>

    <lola-pane disabled>
      <lola-pane-header>
        Pane header #2
      </lola-pane-header>

      <lola-pane-content>
        Pane content #2
      </lola-pane-content>
    </lola-pane>

  </lola-accordion>
  ```

  - You can also use `lola-accordion` with `ng-repeat`:
  ```html
  <lola-accordion class="lolaAccordion--default">

    <lola-pane ng-repeat="pane in panes" expanded="pane.isExpanded">
      <lola-pane-header>
        {{ ::pane.header }}
      </lola-pane-header>

      <lola-pane-content>
        {{ ::pane.content }}

        <!-- accordions can be nested :) -->
        <lola-accordion ng-if="pane.subpanes">
          <lola-pane ng-repeat="subpane in pane.subpanes" ng-disabled="subpane.isDisabled">
            <lola-pane-header>
              {{ ::subpane.header }}
            </lola-pane-header>
            <lola-pane-content>
              {{ ::subpane.content }}
            </lola-pane-content>
          </lola-pane>
        </lola-accordion>
      </lola-pane-content>
    </lola-pane>

  </lola-accordion>
  ```


## API

#### Control

Add `control` attribute and use the following methods to control lolaAccordion from it's parent scope:

  - `toggle(indexOrId)`
  - `expand(indexOrId)`
  - `collapse(indexOrId)`
  - `expandAll()`
  - `collapseAll()`
  - `hasExpandedPane()`

```html
<lola-accordion id="my-accordion" multiple control="accordion">

  <lola-pane id="{{ pane.id }}" ng-repeat="pane in panes">
    <lola-pane-header>
      {{ ::pane.header }}
    </lola-pane-header>

    <lola-pane-content>
      {{ ::pane.content }}
    </lola-pane-content>
  </lola-pane>

</lola-accordion>

<button ng-click="accordion.toggle(0)">Toggle first pane</button>
<button ng-click="accordion.expandAll()">Expand all</button>
<button ng-click="accordion.collapseAll()">Collapse all</button>
```

```js
$scope.$on('my-accordion:onReady', function () {
  var firstPane = $scope.panes[0];
  $scope.accordion.toggle(firstPane.id);
});
```

#### Scope

`$accordion` and `$pane` properties allows you to control the directive from it's transcluded scope.

##### $accordion

  - `toggle(indexOrId)`
  - `expand(indexOrId)`
  - `collapse(indexOrId)`
  - `expandAll()`
  - `collapseAll()`
  - `hasExpandedPane()`
  - `id`

##### $pane

  - `toggle()`
  - `expand()`
  - `collapse()`
  - `isExpanded()`
  - `id`

```html
<lola-accordion multiple>

  <lola-pane ng-repeat="pane in panes">
    <!-- here's how you can create a custom toggle button -->
    <lola-pane-header inactive>
      {{ ::pane.header }}
      <button ng-click="$pane.toggle()">Toggle me</button>
    </lola-pane-header>

    <lola-pane-content>
      {{ ::pane.content }}
    </lola-pane-content>
  </lola-pane>

  <button ng-click="$accordion.expandAll()">Expand all</button>

</lola-accordion>
```


#### Events

The directive emits the following events:

  - `lolaAccordion:onReady` or `yourAccordionId:onReady`
  - `lolaAccordion:onExpand` or `yourAccordionId:onExpand`
  - `lolaAccordion:onExpandAnimationEnd` or `yourAccordionId:onExpandAnimationEnd`
  - `lolaAccordion:onCollapse` or `yourAccordionId:onCollapse`
  - `lolaAccordion:onCollapseAnimationEnd` or `yourAccordionId:onCollapseAnimationEnd`


## Callbacks

Use these callbacks to get the expanded/collapsed pane index and id:

```html
<lola-accordion onexpand="expandCallback(index, id)" oncollapse="collapseCallback(index, id)">

  <lola-pane id="{{ ::pane.id }}" ng-repeat="pane in panes">
    <lola-pane-header>
      {{ ::pane.header }}
    </lola-pane-header>

    <lola-pane-content>
      {{ ::pane.content }}
    </lola-pane-content>
  </lola-pane>

</lola-accordion>
```

```js
$scope.expandCallback = function (index, id) {
  console.log('expanded pane:', index, id);
};

$scope.collapseCallback = function (index, id) {
  console.log('collapsed pane:', index, id);
};
```


## Configuration

#### Module
To change the default animation duration, inject `accordionConfig` provider in your app config:

```javascript
angular
  .module('myApp', ['lolaAccordion'])
  .config(function (accordionConfig) {
    accordionConfig.expandAnimationDuration = 0.5;
  });
```

#### SCSS
If you are using SASS, you can import lolaAccordion.scss file and override the following variables:

```scss
$lola-accordion-default-theme:         true !default;

$lola-accordion-spacing:               20px !default;

$lola-pane-border-color:               #D8D8D8 !default;
$lola-pane-expanded-border-color:      #2196F3 !default;
$lola-pane-icon-color:                 #2196F3 !default;
$lola-pane-hover-color:                #2196F3 !default;

$lola-pane-disabled-opacity:           0.6   !default;

$lola-pane-expand-animation-duration:  0.5s  !default;
$lola-pane-hover-animation-duration:   0.25s !default;
```


## Accessibility
lolaAccordion manages keyboard focus and adds some common aria-* attributes. BUT you should additionally place the `aria-controls` and `aria-labelledby` as follows:

```html
<lola-accordion>

  <lola-pane ng-repeat="pane in panes">
    <lola-pane-header id="{{ ::pane.id }}-header" aria-controls="{{ ::pane.id }}-content">
      {{ ::pane.header }}
    </lola-pane-header>

    <lola-pane-content id="{{ ::pane.id }}-content" aria-labelledby="{{ ::pane.id }}-header">
      {{ ::pane.content }}
    </lola-pane-content>
  </lola-pane>

</lola-accordion>
```
