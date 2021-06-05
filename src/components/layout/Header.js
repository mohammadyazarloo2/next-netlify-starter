import React from "react";
import styles from "./header.module.scss";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faHeart,
  faPhone,
  faSearch,
  faShoppingBasket,
  faTimes,
  faUserTimes,
} from "@fortawesome/free-solid-svg-icons";
import ClockerTima from "../elements/datetime/ClockerTima";
import Marquee from "react-fast-marquee";
import { Formik } from "formik";
import Input from "../elements/layout/Input";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      setVisible: false,
      visible: false,
      confirmLoading: false,
      setConfirmLoading: false,
      register:false,
      login:false,
      modalText: "content of the loading modal",
      setModalText: "content of the loading modal",
    };
  }

  showRegisterModal = () => {
    this.setState({
      setVisible: true,
      visible: true,
    });
    console.log(this.state.visible);
  };

  handleRegisterOk = () => {
    this.state.setModalText = "The modal will be closed after two seconds";
    this.state.setConfirmLoading = true;
    setTimeout(() => {
      this.setState({
        setVisible: false,
        visible: false,
        setConfirmLoading: false,
      });
    }, 2000);
  };

  handleRegisterCancel = () => {
    console.log("Clicked cancel button");
    this.setState({
      setVisible: false,
      visible: false,
    });
  };

  componentDidMount() {}

  handleSubmit(values) {
    console.log("submit", values);
  }

  googleResponse(res) {
    console.log(res);
  }

  handleChange = () => {
    if (this.state.register === true) {
      this.setState({
        register:false,
        login:true,
      })
    } else if (this.state.login === true) {
      this.setState({
        register:true,
        login:false,
      })
    }
    console.log(this.state.register)
  }
  

  render() {
    return (
      <>
        <div className={styles.mainHead}>
          <div className={styles.top}>
            <div className={styles.right}>
              <div>
                <ClockerTima />
              </div>
            </div>
            <div className={styles.middle} dir="rtl">
                <Marquee
                  pauseOnHover={true}
                  direction="right"
                  gradient={false}
                  delay="0"
                  speed="40"
                >
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                  تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد
                </Marquee>
            </div>
            <div className={styles.left}>
              <div className={styles.humberger}>
                <Link href="/">+989019043100</Link>
                <FontAwesomeIcon icon={faPhone} />
              </div>
            </div>
          </div>

          <div className={styles.middle}>
            <div className={styles.logo}>
              <img src="./logo.png" />
            </div>
            <div className={styles.right}>
              <div className={styles.rightMenuOne}>
                <ul>
                  <Link href="/">
                    <li>صفحه اصلی</li>
                  </Link>
                  <Link href="/">
                    <li>تماس با ما</li>
                  </Link>
                  <li> عضویت</li>
                  <li> ورود</li>
                </ul>
              </div>
              <div className={styles.rightMenuTow}>
                <div className={styles.search}>
                  <label>
                    <FontAwesomeIcon icon={faSearch} />
                  </label>
                  <input type="text" className={styles.searchInput} />
                </div>
                <ul>
                  <Link href="/register"><button> عضویت</button></Link>
                  <Link href="/login"><li> ورود</li></Link>
                </ul>
              </div>
            </div>

            <div className={styles.access}>
              <div className={styles.basketSection}>
                <button className={styles.basket}>
                  سبد خرید
                  <FontAwesomeIcon icon={faShoppingBasket} />
                </button>
              </div>
              <div className={styles.favoriteSesion}>
                <button className={styles.favorite}>
                  علاقه مندی ها
                  <FontAwesomeIcon icon={faHeart} />
                </button>
              </div>
            </div>
          </div>
        </div>
        
      </>
    );
  }
}

export default Header;
