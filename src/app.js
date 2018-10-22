console.log('app.js is running');

//JSX
var template = <h1>Indecision App</h1>;
var appRoot = document.getElementById('app');

// Takes 2 args: JSX and where to render it
ReactDOM.render(template, appRoot);