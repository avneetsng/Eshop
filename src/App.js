import React from 'react';
import {Route , Switch} from 'react-router-dom'

import './App.css';

import Homepage from './pages/homepage/homepage.component';
import Shop from './pages/ShopPage/ShopPage.component'
import Header from './components/header/header.component'

function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route  path='/shop' component={Shop}/>
      </Switch>
      
    </div>
  );
}

export default App;
