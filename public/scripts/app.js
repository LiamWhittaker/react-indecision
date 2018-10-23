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
var userName = 'Liam';
var userAge = 29;
var userLocation = 'The Moon';

var user = {
  name: 'Liam',
  age: 18,
  location: 'Valhalla'
};

function getLocation(location) {
  if (location) {
    return React.createElement(
      'p',
      null,
      'Location: ',
      location
    );
  }
}

var templateTwo = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    user.name ? user.name : 'Anon'
  ),
  user.age && user.age >= 18 && React.createElement(
    'p',
    null,
    'Age: ',
    user.age
  ),
  getLocation(user.location)
);

var appRoot = document.getElementById('app');

// Takes 2 args: JSX and where to render it
ReactDOM.render(template, appRoot);
