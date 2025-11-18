import React from "react";

class App extends React.Component{
  constructor(){
    super();
    this.state={
      name:"Default"
    }
  }

  changeState=()=>{
    this.setState({
      name:"Mahesh"
    });
  }


  render(){
    return(
      <>
        <h1>Welcome to the Home Mr {this.state.name}</h1>
        <button onClick={this.changeState}>Change State</button>
      </>
    )
  }

}
export default App;