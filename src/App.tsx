import React from 'react';
import './App.css';

function App() {
  const [color, setColor] = React.useState('red');
  return (
   <>
   <div style ={{ height: '100vh'}}>
   <h1 style={{color :'white', textAlign:'center', backgroundColor: 'black' , margin: '0'}} > MY FIRST REACT PROJECT- backgroundColor changer</h1> 

   <div className="App" style={{backgroundColor: color, height: '100vh', justifyContent: 'center',  alignItems: 'center', display: 'flex'}}>
   

    <button style={{backgroundColor:'blue', color :'white'}}  onClick={()=> setColor('blue')} >blue</button>
    <br />
    <button style={{backgroundColor:'green', margin: '10px', color: 'white'}} onClick={()=> setColor('green')} >Green</button>
    <br />
    <button style={{backgroundColor:'brown', margin: '10px', color: 'white'}} onClick={()=>{setColor('brown')}} >brown</button>
    <br />
    <button style={{backgroundColor:'pink', margin: '10px', color: 'white'}} onClick={()=>setColor('pink')} >pink</button>
    <br />
    <button style={{backgroundColor:'black', margin: '10px', color: 'white'}} onClick={()=>setColor('black')} >black</button>


   </div>
   </div>
   </>
  );
}

export default App;
