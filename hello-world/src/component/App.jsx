import React from "react";
import Button from "./Button";
import Wellcome from "./Welcome";
const App = ()=>{
  const myStyle ={
    color:'green',
    backgroundColor: 'yellow'
    
  }
   return (
    <div>
      {/* the line no 12 only for precites class components */}
      <Wellcome/>
      <h1 style={myStyle}>Wellcome to my React App</h1>
      <h2>Hello vivek developer</h2>
      <Button  text="Click Me" />
    </div>
   )
}
export default App;