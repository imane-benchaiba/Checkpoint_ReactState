import React from "react";
import './App.css';
import Image from './moi.jpg';

class App extends React.Component {
  Constructor(props){
    //super(props);
    this.state = {
      person : {
        fullName:"Imane BENCHAIBA",
        bio:"", 
        imgSrc:Image, 
        profession:"Rédactrice web"
      },
      shows : false
    }
  }
    
  handleClick=()=>this.setState({shows:true});
  render() {
    return (
      <div>
        <button onClick={this.handleClick}> Shows </button>
        {shows ? 
          <div>
            <p> {person.fullName} </p> 
            <p> {person.bio} </p> 
            <p> {person.imgSrc} </p> 
            <p> {person.profession} </p> 
          </div>
        : {}
        }
      </div>
    );
  }
}

export default App;
