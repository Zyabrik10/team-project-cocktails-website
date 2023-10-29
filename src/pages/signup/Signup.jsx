import { Form, FormInput } from '../../components/Form/index';
import { Calendar } from '../../components/Calendar/Calendar';
import { useState } from 'react';

import WelcomeLayout from 'components/WelcomeLayout/WelcomeLayout';

export default function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [date, setDate] = useState('');

  const [selectedDate, setSelectedDate] = useState(Date.now());
  //оце той стейт який я собі передаю в календар

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
    if (date === '')
      return { valid: false, error: 'Please, provide your birth date' };
    return {
      valid: true,
      error: null,
    };
  }

  function SignUserUp() {
    console.log('signup');
  }

  function validateFields() {
    const { valid: nameValid, error: nameError } = validName(name);
    const { valid: emailValid, error: emailError } = validEmail(email);
    const { valid: passwordValid, error: passwordError } =
      validPassword(password);
    const { valid: dateValid, error: dateError } = validDate(date);

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
  const dateInputHandler = e => setDate(e.target.value);
  const passwordInputHandler = e => setPassword(e.target.value);

  return (
    <>
      <WelcomeLayout>
        <Form
          title="Sign Up"
          buttonTitle="Sign Up"
          linkTitle="Sign In"
          linkTo="/welcome/signin"
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
          onChange={dateInputHandler}
          type="date"
          placeholder="dd.mm.yyyy"
          value={selectedDate}
          required={true}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          ></Calendar>
          
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
