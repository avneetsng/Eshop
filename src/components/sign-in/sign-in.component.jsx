import React, { Component } from 'react'

import './sign-in.styles.scss'

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import {auth,signInWithGoogle} from '../../firebase/firebase.util'

class SignIn extends Component{
    constructor(props){
        super(props)
        this.state={
            email:'',
            password:''
        }
    }
    handleSubmit=async event=>{
        event.preventDefault();
        const {email,password}=this.state;
        try{
            await auth.signInWithEmailAndPassword(email,password);
            
            this.setState({
                email:'',
                password:''
            })
        }
        catch(error){
            alert(error);
            console.log(error)
        }
        
    }
    handleChange=event=>{
        // console.log(event.target);
        const {name,value}=event.target;
        this.setState({[name]:value})
    }
    render(){
        return(
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign In with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                    type="email" 
                    name='email' 
                    lable='Email'
                    value={this.state.email} 
                    handleChange={this.handleChange}
                    required />

                    <FormInput 
                    type="password" 
                    name='password' 
                    lable='Password'
                    value={this.state.password} 
                    handleChange={this.handleChange}
                    required />
                
                    <div className="buttons">
                    <CustomButton type="submit">Sign In</CustomButton>
                    <CustomButton onClick={signInWithGoogle} googleButton>Sign in with google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;