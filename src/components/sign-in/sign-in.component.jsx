import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustonButton from '../custom-button/custom-button.component';

import './sign-in.styles.scss';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    hanldleSubmit = event => {
        event.preventDefault();

        this.setState({email: '', password: ''});
    }

    handleChange = event => {
        const {value, name} = event.target;

        this.setState({ [name]: value})
    }

    render() {
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit='this.hanldleSubmit'>
                    <FormInput name="email" type="email" handleChange={this.handleChange} label="email" value={this.state.email} required />
                    <FormInput name="password" type="password" handleChange={this.handleChange} label="password" value={this.state.password} required />

                    <CustonButton type="submit" >SIGN IN</CustonButton>
                </form>
            </div>
        )    
    }
}

export default SignIn;