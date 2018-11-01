// const appRoot = document.getElementById('app');
// let visible = false;

// const toggle = () => {
//   if(visible === false) {
//     visible = true;
//   } else {
//     visible = false;
//   }
//   // visible = !visible
//   renderApp();
// }

// const renderApp = () => {
//   const template = (
//     <div>
//       <h1>Visibility Toggle</h1>
//       <button onClick={toggle}>{visible ? 'Hide details' : 'Show details'}</button>
//       {visible ? <p>Here are some deets</p> : ''}
//     </div>
//   );

//   ReactDOM.render(template, appRoot);
// }

// renderApp();

class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    this.state = {
      visibility: false
    };
  }

  handleToggleVisibility() {
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility
      };
    });
  }

  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.handleToggleVisibility}>
          {this.state.visibility ? 'Hide Deets' : 'Show Deets!'}
        </button>

        {this.state.visibility && (
          <p>I am Visible!!</p>
        )}
      </div>
    );
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));