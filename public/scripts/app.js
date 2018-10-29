'use strict';

console.log('app.js is running');

var app = {
  title: 'Indecision App',
  subtitle: 'A React app to help you decide stuff',
  options: ['One', 'Two']
};

var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    app.title
  ),
  app.subtitle && React.createElement(
    'p',
    null,
    app.subtitle
  ),
  React.createElement(
    'p',
    null,
    app.options.length > 0 ? 'Here are your options' : 'No options'
  ),
  React.createElement(
    'ol',
    null,
    React.createElement(
      'li',
      null,
      'One'
    ),
    React.createElement(
      'li',
      null,
      'Two'
    )
  )
);

// =============
var count = 0;
var addOne = function addOne() {
  count++;
  renderCounter();
  console.log('inc');
};
var minusOne = function minusOne() {
  count--;
  renderCounter();
  console.log('minus 1');
};
var reset = function reset() {
  count = 0;
  renderCounter();
  console.log('reset');
};

// ===============
var appRoot = document.getElementById('app');

var renderCounter = function renderCounter() {
  var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      'Count: ',
      count
    ),
    React.createElement(
      'button',
      { onClick: addOne },
      '++'
    ),
    React.createElement(
      'button',
      { onClick: minusOne },
      '--'
    ),
    React.createElement(
      'button',
      { onClick: reset },
      'Reset'
    )
  );

  // Takes 2 args: JSX and where to render it
  ReactDOM.render(templateTwo, appRoot);
};

renderCounter();
