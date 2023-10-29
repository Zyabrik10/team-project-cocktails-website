import { Form, FormInput } from '../../components/Form/index';

export default function Signup() {
  function buttonHandler(e) {
    e.preventDefault();

    console.log('Sign Up');
  }

  return (
    <>
      <Form
        title="Sign Up"
        buttonTitle="Sign Up"
        linkTitle="Sign In"
        linkTo="/signin"
        buttonOnClick={buttonHandler}
      >
        <FormInput type="text" placeholder="Name" />
        <FormInput type="text" placeholder="Email" />
        <FormInput type="email" placeholder="dd/mm/yyyy" />
        <FormInput type="password" placeholder="Password" />
      </Form>
    </>
  );
}
