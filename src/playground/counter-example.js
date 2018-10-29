
// =============
let count = 0;

const addOne = () => {
  count++;
  renderCounter();
};

const minusOne = () => {
  count--;
  renderCounter();
};

const reset = () => {
  count = 0;
  renderCounter();
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