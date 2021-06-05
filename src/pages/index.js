import Head from "next/head";
import Image from "next/image";
import Header from "../components/layout/Header";
import styles from "../styles/home.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import data from "faker";
import Main from "../components/Main";
import React from "react";

export default class Home extends React.Component {
  render() {
    return (
      <>
        <Head>
          <title>جوان ابزار</title>
        </Head>

        <Main>
          <div className={styles.homeContainer}>
            <div className={styles.homePage}>
              <div className={styles.categories}>
                <div className={styles.categoriesItem}>
                  <div className={styles.categoriesItemContent}>
                    <div className={styles.img}>
                      <img src="./1.png" />
                    </div>
                    <p className={styles.content}>Direct Mobility Assistant</p>
                  </div>
                </div>

                <div className={styles.categoriesItem}>
                  <div className={styles.categoriesItemContent}>
                    <div className={styles.img}>
                      <img src="./2.png" />
                    </div>
                    <div className={styles.content}>
                      Dynamic Assurance Associate
                    </div>
                  </div>
                </div>

                <div className={styles.categoriesItem}>
                  <div className={styles.categoriesItemContent}>
                    <div className={styles.img}>
                      <img src="./3.jpg" />
                    </div>
                    <div className={styles.content}>
                      Product Brand Orchestrator
                    </div>
                  </div>
                </div>

                <div className={styles.categoriesItem}>
                  <div className={styles.categoriesItemContent}>
                    <div className={styles.img}>
                      <img src="4.jpg" />
                    </div>
                    <div className={styles.content}>
                      Dynamic Infrastructure Agent
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.mainerStream}>
                <div className={styles.mainerStreamSide}>
                  <h2> راهنمای سایت </h2>
                  <ul>
                    <li> کاربران ویژه </li>
                    <li> پنل کاربران </li>
                    <li> پیگیری سفارش </li>
                  </ul>
                </div>

                <div className={styles.mainerStreamMain}>
                  <div className={styles.mainerStreamMainShop}>
                    <div className={styles.mainerStreamMainShopInfo}>
                      <div className={styles.mainerStreamMainShopInfoRight}>
                        <h3>فروش ویژه</h3>
                      </div>
                      <div className={styles.mainerStreamMainShopInfoLeft}>
                        <h3> ثبت خرید و سفارش بصورت فاکتوری </h3>
                      </div>
                    </div>

                    <div className={styles.shop}>
                      <div className={styles.shopItem}></div>
                      <div className={styles.shopItem}></div>
                      <div className={styles.shopItem}></div>
                    </div>
                  </div>

                  <div className={styles.notif}>
                    <h2> اخرین تغییرات قیمت </h2>

                    <div className={styles.notifBody}>
                      <div className={styles.notifBodyHead}>
                        <h3> نام محصول </h3>
                        <h3> اخرین قیت </h3>
                        <h3> تغییرات </h3>
                      </div>
                      <div className={styles.notifBodyItems}>
                        <h3>تیرآهن</h3>
                        <h3>200000</h3>
                        <h3 style={{color:'green'}} >افزایشی</h3>
                      </div>
                    </div>

                  </div>

                  <div className={styles.support}>

                    <div className={styles.supportItem}>
                      <h2> ضمانت کالا </h2>
                    </div>
                    <div className={styles.supportItem}>
                      <h2> ارسال به سراسر کشور </h2>
                    </div>
                    <div className={styles.supportItem}>
                      <h2> پرداخت در محل </h2>
                    </div>

                  </div>

                  <div className={styles.advertise}>
                    <img src="../ads.jpg" />
                  </div>

                  <div className={styles.guideSite}>
                    <div className={styles.guideSiteItem}>
                      <h2>راهنمای سایت</h2>
                    </div>
                    <div className={styles.guideSiteItem}>
                      <h2>راهنمای سایت</h2>
                    </div>
                    <div className={styles.guideSiteItem}>
                      <h2>راهنمای سایت</h2>
                    </div>
                    <div className={styles.guideSiteItem}>
                      <h2>راهنمای سایت</h2>
                    </div>
                    <div className={styles.guideSiteItem}>
                      <h2>راهنمای سایت</h2>
                    </div>
                    <div className={styles.guideSiteItem}>
                      <h2>راهنمای سایت</h2>
                    </div>
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
