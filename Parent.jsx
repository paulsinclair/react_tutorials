
var Parent = React.createClass({
    getInitialState: function(){
      return {
        names: ["mum","dad"]
      };
    },
    render: function(){
    console.log("Parent's State: ", this.state)
      return(
        <div>
        <Child firstName={this.state.names}/>
        </div>
      );
    }
});

var Child = React.createClass({
  render: function(){
  console.log("Child's props: ", this.props)
    return(
      <div>
        CHECK YOUR CHROME CONSOLE!
      </div>
    )
  }
})

ReactDOM.render(<Parent/>,document.getElementById("entry-point-chk"))
