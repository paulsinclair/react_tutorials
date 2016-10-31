var Button = React.createClass({

  changeText: function(){
  this.state.text = "BOOM!";
  console.log(this.state.text);
  },
  render:function(){

    this.state = {text: this.props.text}

    return(
        <button onClick={this.changeText}>{this.state.text}</button>
          );
    }
});

  ReactDOM.render(<Button text="Click ME!"/>, document.getElementById('entry-point'));
