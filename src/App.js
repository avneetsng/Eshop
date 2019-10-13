import React from 'react';
import {Route , Switch} from 'react-router-dom'
import './App.css';
import Homepage from './pages/homepage/homepage.component';

const hats=(params)=>{
  console.log(params);
  return(
  
  <div>
    <h1>
      HATS ARE HERE
    </h1>
  </div>
)}

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route  path='/hats' component={hats}/>
      </Switch>
      
    </div>
  );
}

export default App;
