import { Form, FormInput } from '../../components/Form/index';
import { useState } from 'react';

import WelcomeLayout from 'components/WelcomeLayout/WelcomeLayout';

export default function Signin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function validEmail(email) {
    if (email === '')
      return { valid: false, error: 'Please, provide your email' };
    else if (!email.match(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/))
      return { valid: false, error: 'Please, provide valid email' };

    return {
      valid: true,
      error: null,
    };
  }

  function validPassword(password) {
    if (password === '')
      return { valid: false, error: 'Please, provide your password' };
    return {
      valid: true,
      error: null,
    };
  }

  function SignUserIn() {
    console.log('signin');
  }

  function validateFields() {
    const { valid: emailValid, error: emailError } = validEmail(email);
    const { valid: passwordValid, error: passwordError } =
      validPassword(password);

    if (!emailValid) {
      console.log(emailError);
      return false;
    }

    if (!passwordValid) {
      console.log(passwordError);
      return false;
    }

    return true;
  }

  function buttonHandler(e) {
    e.preventDefault();

    if (!validateFields()) return;

    SignUserIn();
  }

  const emailInputHandler = e => setEmail(e.target.value);
  const passwordInputHandler = e => setPassword(e.target.value);

  return (
    <>
      <WelcomeLayout>
        <Form
          title="Sign In"
          buttonTitle="Sign In"
          linkTitle="Sign Up"
          linkTo="/welcome/signup"
          buttonOnClick={buttonHandler}
        >
          <FormInput
            onChange={emailInputHandler}
            type="email"
            placeholder="Email"
            value={email}
          />
          <FormInput
            onChange={passwordInputHandler}
            type="password"
            placeholder="Password"
            value={password}
          />
        </Form>
      </WelcomeLayout>
    </>
  );
}
