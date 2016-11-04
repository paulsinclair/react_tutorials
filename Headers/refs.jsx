var App = React.createClass({
  getInitialState: function(){
    return {
      text: ""
    }
  },
  changeText: function(e){
    this.setState({
      text: e.target.value
    })
  },
  clearText: function(e){
    this.setState({
      text: ""
    });
    this.refs.textInput.value = "";
    // could have been:
    // document.getElementById('typing')
    this.refs.textInput.focus();
  },
  render: function() {
    return (
      <div>
        <h1>{this.props.children}</h1>
        <h1>{this.state.text}</h1>
        <input ref="textInput" id="typing" type="text" onKeyUp={this.changeText} autoFocus/>
        <button onClick={this.clearText}>Clear Text</button>

      </div>
    );
  }
});

// ReactDOM.render(<App>Type in Here!</App>,document.getElementById('entry-point-refs'))

export default App;
