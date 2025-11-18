import React from "react";

class Counter extends React.Component{
    constructor(){
        super()
        this.state={
            count:0
        }
    }
    
    decrease=()=>{
        if(this.state.count!=0){
            this.setState({
            count:this.state.count-1
        })
        }
    }

    increse=()=>{
       this.setState({
            count:this.state.count+1
        })
    }

    render(){
        return(
            <>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.decrease}>Decrement</button>
                <button onClick={this.increse}>Increment</button>
            </>
        )
    }
}
export default Counter