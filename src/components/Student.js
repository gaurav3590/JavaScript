import React  from "react";
import { useState } from "react";
export function StudentF({name,email}) { 

  const [count,setCount] = useState(0);
  var counter = 0;
  let onButtonClick = () =>{
    setCount (count+1);
    console.log(">> onButtonClick" + count); 
    
  }
  console.log("StudentF run");
  return (
    <div>
      <h4>Functional Count: {count} </h4>
      <h5>Student {name} | {email}</h5>
      <button onClick={onButtonClick} >Hello</button>
    </div>
  );
}

export class StudentC extends React.Component { 
    state = {count:1};
    onButtonClick = () =>{
      this.setState.count++;
      this.setState({});
      console.log(">> onButtonClick" + this.state.count); 
    }
    render(){
      console.log(">> render ==> DOM");
      return (
        <div>
            <h4>Class Count: {this.state.count} </h4>
            <h4>Student: {this.props.name} and email:{this.props.email} </h4>
            <button onClick={this.onButtonClick}>Submit</button>
        </div>
      );
    }
  }
  