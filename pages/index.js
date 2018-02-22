import React from 'react';
import Layout from '../components/layout';
import { Card, Form, Transition } from 'semantic-ui-react'
import '../styles/index.scss';

const form = (
    <Form className="sign-in-form" action='/sign-in' method="POST">
      <Form.Input icon="user" iconPosition='left' name="email" placeholder="Email Address"/>
      <Form.Input icon="lock" iconPosition='left' name="password" placeholder="Password" type="password" />
      <Form.Group>
        <Form.Button color="blue">Submit</Form.Button>
        <Form.Button>Forgot Password?</Form.Button>
      </Form.Group>
    </Form>
);

const Login = () => (
  <Layout>
    <div className="app-wrapper">
      <Transition transitionOnMount={true} animation="fade" duration={1500}>
        <h1 className="logo">::SetList</h1>
      </Transition>
      <Transition transitionOnMount={true} animation="fade" duration={1500}>
          <Card className="sign-in-card"
                raised={true} header="Sign-In"
                description={form}
                extra="Sign into Setlist"/>
      </Transition>
    </div>
  </Layout>
);

export default Login;
