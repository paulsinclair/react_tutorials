import React from "react";
import math from "mathjs";

class Top extends React.Component
{

  render ()
          {
          return (
            <div>
            <nav class="navbar ">
                  <ul class="nav nav-tabs">
                    <li> <RainbowBtn value="Home"/></li>
                    <li> <RainbowBtn value="Main"/></li>
                    <li> <RainbowBtn value="Contact Us"/></li>
                    <li> <RainbowBtn value="Rainbow"/></li>
                </ul>
        </nav>

</div>
          )
        }
}

class RainbowBtn extends React.Component
{
  render() {
  this.state = {pick: math.pickRandom(["danger","warning","primary","success"])}
   if (this.state.pick === "danger")  return ( <p class="btn btn-danger">{this.props.value} </p> )
   if (this.state.pick === "warning")  return ( <p class="btn btn-warning">{this.props.value}</p> )
   if (this.state.pick === "primary")  return ( <p class="btn btn-primary">{this.props.value} </p> )
   if (this.state.pick === "success")  return ( <p class="btn btn-success">{this.props.value} </p> )
}
}

export default Top;
