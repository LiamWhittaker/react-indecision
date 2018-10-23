console.log('app.js is running');

const app = {
  title: 'Indecision App',
  subtitle: 'A React app to help you decide stuff',
  options: ['One', 'Two']
}

const template = (
  <div>
    <h1>{app.title}</h1> 
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{(app.options.length > 0) ? 'Here are your options' : 'No options'}</p>
    <ol>
      <li>One</li>
      <li>Two</li>
    </ol>
  </div>
);
const userName = 'Liam';
const userAge = 29;
const userLocation = 'The Moon';

const user = {
  name: 'Liam',
  age: 18,
  location: 'Valhalla'
}

function getLocation(location) {
  if(location) {
    return <p>Location: {location}</p>;
  } 
}

const templateTwo = (
  <div>
    <h1>{ (user.name) ? user.name : 'Anon' }</h1>
    { (user.age && user.age >= 18) && <p>Age: { user.age }</p> }
    { getLocation(user.location) }
  </div>
);

const appRoot = document.getElementById('app');

// Takes 2 args: JSX and where to render it
ReactDOM.render(template, appRoot);