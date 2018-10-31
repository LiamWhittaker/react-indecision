const appRoot = document.getElementById('app');
let visible = false;

const toggle = () => {
  if(visible === false) {
    visible = true;
  } else {
    visible = false;
  }
  // visible = !visible
  renderApp();
}

const renderApp = () => {
  const template = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={toggle}>{visible ? 'Hide details' : 'Show details'}</button>
      {visible ? <p>Here are some deets</p> : ''}
    </div>
  );

  ReactDOM.render(template, appRoot);
}

renderApp();