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
import { Modal } from "antd";
import "antd/dist/antd.css";
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
              <p>
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
              </p>
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
                  <Link href="">
                    <li>صفحه اصلی</li>
                  </Link>
                  <Link href="">
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
                  <button onClick={this.showRegisterModal}> عضویت</button>
                  <li> ورود</li>
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
        <Modal
          title="Title"
          headStyle={{ backgroundColor: "red" }}
          visible={this.state.visible}
          footer={null}
          onOk={this.handleRegisterOk}
          confirmLoading={this.state.confirmLoading}
          onCancel={this.handleRegisterCancel}
        >
          <div className={styles.radioSection}>
            <input
              type="radio"
              name="pick"
              value="1"
              id="radio1"
              onChange={this.handleChange}
              defaultChecked
            />
            <label htmlFor="radio1" className={styles.label1}>
              <span>company</span>
            </label>
            <input
              type="radio"
              name="pick"
              value="2"
              id="radio2"
              onChange={this.handleChange}
            />
            <label htmlFor="radio2" className={styles.label2}>
              <span>employee</span>
            </label>
          </div>

          <Formik
            initialValues={{ email: "", password: "" }}
            onSubmit={(values) => this.handleSubmit(values)}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
            }) => (
              <form onSubmit={handleSubmit} className="reform">
                

                <label className="reform--label">username</label>
                <Input type="text" name="username" placeholder="Password" />

                <label className="reform--label">email</label>
                <Input variant="fill" size="lg" type="text" name="email" placeholder="Email Adress" />

                <label className="reform--label">password</label>
                <Input type="password" icon iconPosition="left" name="password" placeholder="Password" />

              </form>
            )}
          </Formik>
        </Modal>
      </>
    );
  }
}

export default Header;
