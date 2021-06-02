import Head from "next/head";
import Image from "next/image";
import Header from "../components/layout/Header";
import styles from "../styles/Home.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import data from "faker";
import Main from "../components/Main";
import React from "react";

export default class Home extends React.Component {
  render() {
    return (
      <>
        <Head>
          <title>our bissines page</title>
        </Head>

        <Main>
          <div className={styles.homeContainer}>
            <div className={styles.homePage}>
              <div className={styles.categories}>
                <div className={styles.categoriesItem}>
                  <div className={styles.categoriesItemContent}>
                    <div className={styles.img}>
                      <img src={data.image.avatar()} />
                    </div>
                    <p className={styles.content}>{data.name.title()}</p>
                  </div>
                </div>

                <div className={styles.categoriesItem}>
                  <div className={styles.categoriesItemContent}>
                    <div className={styles.img}>
                      <img src={data.image.avatar()} />
                    </div>
                    <div className={styles.content}>{data.name.title()}</div>
                  </div>
                </div>

                <div className={styles.categoriesItem}>
                  <div className={styles.categoriesItemContent}>
                    <div className={styles.img}>
                      <img src={data.image.avatar()} />
                    </div>
                    <div className={styles.content}>{data.name.title()}</div>
                  </div>
                </div>

                <div className={styles.categoriesItem}>
                  <div className={styles.categoriesItemContent}>
                    <div className={styles.img}>
                      <img src={data.image.avatar()} />
                    </div>
                    <div className={styles.content}>{data.name.title()}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Main>
      </>
    );
  }
}
