import React, { Component } from 'react'

import './sign-up.styles.scss'

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component'
import { auth, createUserProfileDocument } from '../../firebase/firebase.util';

class SignUp extends Component{
    constructor(props){
        super(props)
        this.state={
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''

        }
    }
    handleChange=(event)=>{
        const {name,value}=event.target;
        this.setState({
            [name]:value
        })
        console.log(this.state)
    }

    handleSubmit= async event=>{
        event.preventDefault();

        const {displayName,email,password,confirmPassword}=this.state;

        if(password!==confirmPassword){
            alert('incorrect password');
            this.setState({confirmPassword:''})
            return;
        }

        try{
            const {user}=await auth.createUserWithEmailAndPassword(
                email,
                password
              );

              await createUserProfileDocument(user,{displayName});

            //clearing out the values of input box

              this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
              });
        
        }
        catch(error){
            alert(error)
               console.error(error)
        }

    }

    render(){
        return(
          <div className="sign-up">
                <h2 className="title">I don't have a account</h2>
                <span>Signup with you email-id and password</span>
                 <form onSubmit={this.handleSubmit} className="sign-up-form">
                     <FormInput
                     name='displayName'
                     type='text'
                     lable='Display Name'
                     value={this.state.displayName}
                     onChange={this.handleChange}
                     required
                     />
                     <FormInput
                     name='email'
                     type='email'
                     lable='email-id'
                     value={this.state.email}
                     onChange={this.handleChange}
                     required
                     />
                     <FormInput
                     name='password'
                     type='password'
                     lable='password'
                     value={this.state.password}
                     onChange={this.handleChange}
                     required
                     />
                     <FormInput
                     name='confirmPassword'
                     type='password'
                     lable='confirm-password'
                     value={this.state.confirmPassword}
                     onChange={this.handleChange}
                     required
                     />
                     <CustomButton type='submit'>Sign up</CustomButton>
                 </form>  
          </div>
        )
    }
}

export default SignUp;