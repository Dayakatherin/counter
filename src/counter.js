import React, {Component} from "react";
import './counter.css'
import randomcolor from "randomcolor";

class  Counter extends Component
{
  constructor()
  {
    super();
    this.state={
      count:0,
      color:"red"
    };
  }
  componentDidMount()
  {
    this.setState({color:"red"})
    console.log("mounted")
  }

  componentDidUpdate(prevProps, prevState)
  {
    console.log("1-current count state:",this.state.count)
    console.log("2-previous count state:",prevState.count)
    if(prevState.count !== this.state.count)
    {
        this.setState({color:randomcolor()});
    }
  }

  incrementHandler =()=>
  {
   this.setState((prevState)=>{
     return(
       {
       count:prevState.count + 1
       }
     )
   })
  }
  decrementHandler =()=>
  {
    this.setState((prevState)=>{
      return(
        {
        count:prevState.count - 1
        }
      )
})
}
  render()
  {
    return(
      <div className="counter">
        <h1 style={{color:this.state.color}}>{this.state.count}</h1>
        <div className="btnactions">
        <button onClick={this.incrementHandler}>increment</button>
        <button onClick={this.decrementHandler}>decrement</button>
        </div>
        </div>
    );
  }
}
  export default Counter;  
