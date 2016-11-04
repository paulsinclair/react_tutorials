
var XCheckbox = React.createClass({
    getInitialState: function(){
      return {
        isChecked: false
      };
    },
    toggleChecked: function(e){
        this.setState({
        isChecked: e.target.checked
        });
    },
    render: function(){
      return(
        <div>
        <h1>Is It Checked? {this.state.isChecked ? "YUP" : "NOPE"}</h1>
        <input type="checkbox" onChange={this.toggleChecked}/>
        </div>
      );
    }

})

ReactDOM.render(<XCheckbox/>,document.getElementById("entry-point"))
