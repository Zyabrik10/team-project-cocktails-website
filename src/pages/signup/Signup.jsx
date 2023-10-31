import { Form, FormInput } from '../../components/Form/index';
import { Calendar } from '../../components/Calendar/Calendar';
import { useState } from 'react';

import WelcomeLayout from 'components/WelcomeLayout/WelcomeLayout';

import { signup } from '../../redux/auth/operations';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [selectedDate, setSelectedDate] = useState(0);

  const dispatch = useDispatch();
  const navigate = useNavigate ();
  
  async function SignUserUp() {
    const userData = {
      username: name,
      email,  
      birthDate: selectedDate,
      password,
    };

    const { error } = await dispatch(signup(userData));
    if (!error) navigate("/home");
  }
  
  function validName(name) {
    if (name === '')
      return { valid: false, error: 'Please, provide your name' };
    return {
      valid: true,
      error: null,
    };
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

  function validDate(date) {
    if (date === 0)
      return { valid: false, error: 'Please, provide your birth date' };
    return {
      valid: true,
      error: null,
    };
  }


  function validateFields() {
    const { valid: nameValid, error: nameError } = validName(name);
    const { valid: emailValid, error: emailError } = validEmail(email);
    const { valid: passwordValid, error: passwordError } =
      validPassword(password);
    const { valid: dateValid, error: dateError } = validDate(selectedDate);

    if (!nameValid) {
      console.log(nameError);
      return false;
    }

    if (!emailValid) {
      console.log(emailError);
      return false;
    }

    if (!dateValid) {
      console.log(dateError);
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

    SignUserUp();
  }

  const nameInputHandler = e => setName(e.target.value);
  const emailInputHandler = e => setEmail(e.target.value);
  const passwordInputHandler = e => setPassword(e.target.value);

  return (
    <>
      <WelcomeLayout>
        <Form
          title="Sign Up"
          buttonTitle="Sign Up"
          linkTitle="Sign In"
          linkTo="/signin"
          buttonOnClick={buttonHandler}
        >
          <FormInput
            onChange={nameInputHandler}
            type="text"
            placeholder="Name"
            value={name}
            required={true}
          />
          <FormInput
            onChange={emailInputHandler}
            type="email"
            placeholder="Email"
            value={email}
            required={true}
          />
          <Calendar
            type="date"
            placeholder="dd.mm.yyyy"
            required={true}
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
          />
          <FormInput
            onChange={passwordInputHandler}
            type="password"
            placeholder="Password"
            value={password}
            required={true}
          />
        </Form>
      </WelcomeLayout>
    </>
  );
}
