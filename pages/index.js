import { loginRequired } from "../utils";
import Link from 'next/link';

const Index = ({user}) => {
  return (
      <h1>Hello {user.firstName}</h1>
  )
};

Index.getInitialProps = async ({req, res}) => {
  return loginRequired(req,res);
};

export default Index;