// Importing React 
import React from 'react';
import {Route , Switch} from 'react-router-dom'
// Importing the css file
import './App.css';
// Importing All The Pages And Header 
import Homepage from './pages/homepage/homepage.component';
import Shop from './pages/ShopPage/ShopPage.component'
import Header from './components/header/header.component'
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
// importing Firebase 
import {auth} from './firebase/firebase.util'

// Component 
class App extends React.Component {
  constructor(){
    super()
    this.state={
      currentUser:null
    }
  }

  unsubscribeFromAuth=null;

  componentDidMount(){
    this.unsubscribeFromAuth=auth.onAuthStateChanged(user=>{
      this.setState({currentUser:user})
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();

  }

  render(){
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={Homepage}/>
          <Route  path='/shop' component={Shop}/>
          <Route path='/signin' component={SignInAndSignUp}/>
        </Switch>
        
      </div>
    );
  }
}

export default App;
