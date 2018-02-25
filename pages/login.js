import React from 'react';
import Layout from '../components/layout';
import { Card, Form } from 'semantic-ui-react'
import '../styles/login.scss';

const form = (
    <Form className="sign-in-form" action='/login' method="POST">
      <Form.Input icon="user" iconPosition='left' name="email" placeholder="Email Address"/>
      <Form.Input icon="lock" iconPosition='left' name="password" placeholder="Password" type="password" />
      <Form.Group>
        <Form.Button color="blue">Submit</Form.Button>
        <Form.Button>Forgot Password?</Form.Button>
      </Form.Group>
    </Form>
);

const Login = ({flash}) => (
    <Layout>
      <div className="app-wrapper">
        <h1 className="logo">::SetList</h1>
        <Card className="sign-in-card"
              raised={true} header="Sign-In"
              description={form}
              extra="Sign into Setlist"/>
        {!!flash && !!flash.length && <p>{flash[0]}</p>}
      </div>
    </Layout>
);

Login.getInitialProps = async ({req}) => {
  if (req) {
    return { flash: req.flash('error')}
  }
  return {}
};

export default Login;
