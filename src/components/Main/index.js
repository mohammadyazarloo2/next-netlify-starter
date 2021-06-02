import Head from "next/head";
import Image from "next/image";
import Header from "../../components/layout/Header";
import styles from "../../styles/Main.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

class Main extends React.Component {
  render(){
    return (
      <>
        <div className={styles.container}>
          <header className={styles.header}>
            <Header />
          </header>
  
          <div className={styles.main}>
            {this.props.children}
          </div>
  
          <footer className={styles.footer}></footer>
        </div>
      </>
    );
  }
};

export default Main;
