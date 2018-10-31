console.log('app.js is running');

const app = {
  title: 'Indecision App',
  subtitle: 'A React app to help you decide stuff',
  options: []
}

const appRoot = document.getElementById('app');
// ======== Functions ===========
const onFormSubmit = (e) => {
  e.preventDefault();
  const option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    renderApp();
  }
};

const removeAll = (e) => {
  app.options = [];
  renderApp();
};

const onMakeDecision = () => {
  const rand = Math.floor(Math.random() * app.options.length);
  const selected = app.options[rand];
  alert(selected);
};

// ========= Template =============
const renderApp = () => {
  const template = (
    <div>
      <h1>{app.title}</h1> 
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{(app.options.length > 0) ? 'Here are your options' : 'No options'}</p>
      <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
      <button onClick={removeAll}>Remove All</button>
      <ol>
        { app.options.map((option) => <li key={option}>{option}</li>) }
      </ol>
  
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
    </div>
  );

  ReactDOM.render(template, appRoot);
}

renderApp();