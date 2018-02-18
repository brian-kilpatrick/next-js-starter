import Head from 'next/head'
import React from 'react';
const {Fragment} = React;

const Layout = ({children}) => {
  return (
    <Fragment>
      <Head>
        <link rel='stylesheet' href='//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.2/semantic.min.css' />
      </Head>
      {children}
    </Fragment>
  )
};

export default Layout;