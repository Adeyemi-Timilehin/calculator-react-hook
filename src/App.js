

import './App.css';
import Button from './components/Button'
import Input from './components/Input'
import ClearButton from './components/ClearButton'
import { useState } from 'react'
import * as math from 'mathjs'
function App() {
const[input,setInput] = useState("")
let allNumbers={
  numbers: [
    [7,8,9,"/"], ["4","5","6","*"], ["1", "2", "3","+"],[0,'.']
    ]
};

function handleclick(val){
setInput(prevItems => {
  return [...prevItems, val];
}
);
}
function handleequal(){
setInput(math.evaluate(input.join("")));
}
function handleSquare(){
  setInput(math.sqrt(input))
}
  return (
    <div className="app">
    <div className="calc-wrapper">
    <Input input={input}/>
    
{allNumbers.numbers.map(number=><div className="row">{number.map(num=><Button handleclick={handleclick}>{num}</Button>)}</div>)}
<div className="row">
<Button handleclick={handleclick}>^</Button>
<Button handleclick={()=>handleequal()}>=</Button>
<Button handleclick={()=>handleSquare()}>Sqrt</Button>
</div>

  <div className="row">
  
<ClearButton handleClear={()=>setInput("")}>clear </ClearButton>
  </div>
   </div>
   </div>
   
  );
}

export default App;
