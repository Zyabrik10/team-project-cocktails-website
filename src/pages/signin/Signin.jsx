import { Form, FormInput } from '../../components/Form/index';
import { useState } from 'react';

import WelcomeLayout from 'components/WelcomeLayout/WelcomeLayout';

import { useDispatch } from 'react-redux';
import { signin } from 'redux/auth/operations';
import { useNavigate } from 'react-router-dom';

import toast from 'react-hot-toast';
import { PopUp } from 'components/PopUp/PopUp';

export default function Signin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function SignUserIn() {
    const userData = {
      email,
      password,
    };

    const { error } = await dispatch(signin(userData));
    if (!error) navigate('/home');
  }

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

  function validateFields() {
    const { valid: emailValid, error: emailError } = validEmail(email);
    const { valid: passwordValid, error: passwordError } =
      validPassword(password);

    if (!emailValid) {
      toast.error(emailError);
      return false;
    }

    if (!passwordValid) {
      toast.error(passwordError);
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
      <PopUp />
      <WelcomeLayout>
        <Form
          title="Sign In"
          buttonTitle="Sign In"
          linkTitle="Sign Up"
          linkTo="/signup"
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
