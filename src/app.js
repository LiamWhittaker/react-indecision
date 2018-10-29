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

// =============
let count = 0;
const addOne = () => {
  count++;
  renderCounter();
  console.log('inc');
};
const minusOne = () => {
  count--;
  renderCounter();
  console.log('minus 1');
};
const reset = () => {
  count = 0;
  renderCounter();
  console.log('reset');
};


// ===============
const appRoot = document.getElementById('app');

const renderCounter = () => {
  const templateTwo = (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={addOne}>++</button>
      <button onClick={minusOne}>--</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
  
  // Takes 2 args: JSX and where to render it
  ReactDOM.render(templateTwo, appRoot);
}

renderCounter();