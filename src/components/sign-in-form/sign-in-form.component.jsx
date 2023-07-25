import { useState } from 'react';

import {
    auth,
    signInWithGooglePopUp,
    createUserDocumentFromAuth,
    signInAuthUserWithEmailAndPassword
} from '../../Utils/firebase/firebase.utils.js';

import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component.jsx';
import FormInput from '../form-input/form-input.component.jsx';

import './sign-in-form.styles.scss';

const defaultFormFields = {
    email: '',
    password: ''
};

const SignInForm = () => {
    const signInWithGoogle = async () => {
        await signInWithGooglePopUp();
    };

    const [formFields, setFormFields] = useState(defaultFormFields);

    const { email, password } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await signInAuthUserWithEmailAndPassword(email, password);
            resetFormFields();
        } catch (error) {
            switch (error.code) {
                case 'auth/wrong-password':
                    alert('Incorrect password for email');
                    break;
                case 'auth/user-not-found':
                    alert('No user associated with this email');
                    break;
                default:
                    console.log(error);
            }
        }
    };

    return (
        <div className='sign-in-container'>
            <h2>I already have an account</h2>
            <span>Sign in with you email and password</span>
            <form onSubmit={handleSubmit} >
                <FormInput
                    label='Email'
                    required
                    name='email'
                    type='email'
                    value={email}
                    onChange={handleChange}
                />
                <FormInput
                    label='Password'
                    required
                    name='password'
                    type='password'
                    value={password}
                    onChange={handleChange}
                />
                <div className='buttons-container'>
                    <Button type='submit' buttonType={BUTTON_TYPE_CLASSES.base}>Sign In</Button>
                    <Button type='button' buttonType={BUTTON_TYPE_CLASSES.google} onClick={signInWithGoogle}>
                        Google Sign In
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default SignInForm;