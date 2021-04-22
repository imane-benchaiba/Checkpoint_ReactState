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
        <button onClick={() => {this.setState({ shows: !this.state.shows });}} > Shows </button>
        {this.state.shows ? 
          (<div>
            <p> {this.state.person.fullName} </p> 
            <p> {this.state.person.bio} </p> 
            <p> {this.state.person.imgSrc} </p> 
            <p> {this.state.person.profession} </p> 
          </div>)
        : ({})
        }
      </div>
    );
  }
}

export default App;
