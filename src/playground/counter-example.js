
// // =============
// let count = 0;

// const addOne = () => {
//   count++;
//   renderCounter();
// };

// const minusOne = () => {
//   count--;
//   renderCounter();
// };

// const reset = () => {
//   count = 0;
//   renderCounter();
// };


// // ===============
// const appRoot = document.getElementById('app');

// const renderCounter = () => {
//   const templateTwo = (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={addOne}>++</button>
//       <button onClick={minusOne}>--</button>
//       <button onClick={reset}>Reset</button>
//     </div>
//   );
  
//   // Takes 2 args: JSX and where to render it
//   ReactDOM.render(templateTwo, appRoot);
// }

// renderCounter();

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handlePlusOne = this.handlePlusOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);

    this.state = {
      count: 0
    };
  }

  handlePlusOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1
      }
    });
  }

  handleMinusOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count - 1
      }
    });  
  }

  handleReset() {
    this.setState(() => {
      return {
        count: 0
      }
    });
  }

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handlePlusOne}>++</button>
        <button onClick={this.handleMinusOne}>--</button>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}

ReactDOM.render(<Counter/>, document.getElementById('app'));