import { ChangeEvent, FormEvent, useState } from 'react';
import FormInput from '../form-input/form-input.component';
import { BUTTON_TYPE_CLASSES } from '../button/button.component';
import { ButtonStyles, SignUpContainer } from './sign-up-form.styles';
import { useDispatch } from 'react-redux';
import { signUpStart } from '../../store/user/user.action';
import { AuthError, AuthErrorCodes } from 'firebase/auth';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignUpForm = () => {
  const dispatch = useDispatch();

  const [formFields, setFormFields] = useState(defaultFormFields);

  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (password === confirmPassword) {
      try {
        dispatch(signUpStart(email, password, displayName));
        resetFormFields();
      } catch (error) {
        if ((error as AuthError).code === AuthErrorCodes.EMAIL_EXISTS) {
          alert('Cannot create user, email is already in use');
        } else console.log(error);
      }
    } else {
      alert('Your password does not match');
      return;
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <SignUpContainer>
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display name"
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />

        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />

        <FormInput
          label="Confirm Password"
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />

        <ButtonStyles type="submit" buttonType={BUTTON_TYPE_CLASSES.base}>
          Sign up
        </ButtonStyles>
      </form>
    </SignUpContainer>
  );
};

export default SignUpForm;
