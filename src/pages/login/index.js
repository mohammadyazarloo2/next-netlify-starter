import React from "react";
import Head from 'next/head'
import Image from 'next/image'
import Header from '../../components/layout/Header'
import styles from './login.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Main from "../../components/Main";

class Login extends React.Component {
  render() {
    return (
      <>
        <Head>
          <title>Login Page</title>
        </Head>
        <Main>
            <h2>Login Page</h2>
            oksaoksoas
        </Main>
      </>
    );
  }
}

export default Login;