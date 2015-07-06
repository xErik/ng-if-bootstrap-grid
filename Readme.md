Angular directives, including or excluding HTML-elements, based on currently active Bootstrap grid: xs, sm, md, lg.

# Installation
`npm i ng-if-bootstrap-grid --save`

# Usage

***AngularJS***
```javascript
angular.module('myApp',
[require('ng-if-bootstrap-grid').name]
);
```

***HTML***
```HTML
<h1 ng-if-bootstrap-grid="md,lg">md,lg</h1><!-- md and lg are or'ed -->
<h1 ng-if-bootstrap-grid="lg">lg</h1>
<h1 ng-if-bootstrap-grid="md">md</h1>
<h1 ng-if-bootstrap-grid="sm">sm</h1>
<h1 ng-if-bootstrap-grid="xs">xs</h1>

<h1 ng-if-not-bootstrap-grid="lg">not-lg</h1>
<h1 ng-if-not-bootstrap-grid="md">not-md</h1>
<h1 ng-if-not-bootstrap-grid="sm">not-sm</h1>
<h1 ng-if-not-bootstrap-grid="xs">not-xs</h1>
```

# Details
Add the `ng-if-bootstrap-grid` or `ng-if-not-bootstrap-grid` attribute to any HTML-element that should be excluded or included, based on the currently active bootstrap grid class.

Works like `ng-if`: the excluded elements (and their children) will not get rendered. Thus limiting the watcher count. The bootstrap classes (`col-xs-*`) just hide elemens, but they still get rendered.

The attributes take the grid class as a parameter. More than one grid class can be set as parameter value, by separating them with commas or spaces.

# TODO
Extensive cross-browser testing

# Links
[Git](https://github.com/xErik/ng-if-bootstrap-grid)

[NPM](https://www.npmjs.com/package/ng-if-bootstrap-grid)

# License
MIT
