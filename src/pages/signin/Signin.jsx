import { Form, FormInput } from '../../components/Form/index';

export default function Signin() {
  function buttonHandler(e) {
    e.preventDefault();

    console.log('Sign In');
  }

  return (
    <>
      <Form
        title="Sign In"
        buttonTitle="Sign In"
        linkTitle="Sign Up"
        linkTo="/signup"
        buttonOnClick={buttonHandler}
      >
        <FormInput type="email" placeholder="Email" />
        <FormInput type="password" placeholder="Password" />
      </Form>
    </>
  );
}
