// Importing React 
import React from 'react';
import {Route , Switch} from 'react-router-dom'
import {connect} from 'react-redux'
// Importing the css file
import './App.css';
// Importing All The Pages And Header 
import Homepage from './pages/homepage/homepage.component';
import Shop from './pages/ShopPage/ShopPage.component'
import Header from './components/header/header.component'
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
// importing Firebase 
import {auth , createUserProfileDocument } from './firebase/firebase.util'
import {setCurrentUser}from './Redux/user/user.action'

// Component 
class App extends React.Component {
   unsubscribeFromAuth=null;
  componentDidMount(){
    const {setCurrentUser}=this.props
    this.unsubscribeFromAuth=auth.onAuthStateChanged( async userAuth=>{      
      if(userAuth){
        const userRef= await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapshot=>{
          setCurrentUser({
            id:userAuth.uid,
            ...snapshot.data()
          })
          alert(`Welcome ${snapshot.data().displayName}`)
        })
      }
      else{
       setCurrentUser(userAuth)
      }         
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();

  }

  render(){
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' component={Homepage}/>
          <Route  path='/shop' component={Shop}/>
          <Route path='/signin' component={SignInAndSignUp}/>
        </Switch>
        
      </div>
    );
  }
}

const mapDispatchToProps=dispatch=>({
  setCurrentUser:user=>dispatch(setCurrentUser(user))
})

export default connect(null,mapDispatchToProps)(App);
