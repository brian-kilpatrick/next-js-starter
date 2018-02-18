import Layout from '../components/layout';
import { Modal, Header, Button, } from 'semantic-ui-react'
import '../styles/index.scss';

export default () => (
  <Layout>
    <div className="app-wrapper">
      <Modal trigger={<Button>Show Modal</Button>}>
        <Modal.Header>Select a Photo</Modal.Header>
        <Modal.Content image>
          <Modal.Description>
            <Header>Default Profile Image</Header>
            <p>We've found the following gravatar image associated with your e-mail address.</p>
            <p>Is it okay to use this photo?</p>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    </div>
  </Layout>
)
