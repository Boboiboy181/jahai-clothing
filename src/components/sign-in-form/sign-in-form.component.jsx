import { useState, useContext } from 'react';

import {
    auth,
    signInWithGooglePopUp,
    createUserDocumentFromAuth,
    signInAuthUserWithEmailAndPassword
} from '../../Utils/firebase/firebase.utils.js';
import { UserContext } from '../../contexts/user.context.jsx';

import Button from '../button/button.component.jsx';
import FormInput from '../form-input/form-input.component.jsx';

import './sign-in-form.styles.scss';

const defaultFormFields = {
    email: '',
    password: ''
};

const SignInForm = () => {
    const signInWithGoogle = async () => {
        const { user } = await signInWithGooglePopUp();
        setCurrentUser(user);
        await createUserDocumentFromAuth(user);
    };

    const { setCurrentUser } = useContext(UserContext);

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
            const user = await signInAuthUserWithEmailAndPassword(email, password);
            setCurrentUser(user);
            resetFormFields();
        } catch (error) {
            switch (error.code) {
                case 'auth/wrong-password':
                    alert('Incorrect password for email');
                    break;
                case 'auth/user-not-found':
                    alert('no user associated with this email');
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
                    <Button type='submit'>Sign In</Button>
                    <Button type='button' buttonType='google' onClick={signInWithGoogle}>
                        {/* <i class="fa-brands fa-google"></i>      */}
                        Google Sign In
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default SignInForm;