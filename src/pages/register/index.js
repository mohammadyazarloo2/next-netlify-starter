import React from "react";
import Head from "next/head";
import Link from 'next/link'
import styles from "../../styles/login.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Main from "../../components/Main";
import { Formik } from "formik";
import Input from "../../components/elements/layout/Input";
import Button from "../../components/elements/layout/Button";
import { faUser } from "@fortawesome/free-solid-svg-icons";

class Login extends React.Component {
  validateEmail(value) {
    let error;
    if (!value) {
      error = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = "Invalid email address";
    }
    return error;
  }

  validateUsername(value) {
    let error;
    if (value === "admin") {
      error = "Nice try!";
    }
    return error;
  }

  render() {
    return (
      <>
        <Head>
          <title>صفحه عضویت در سایت</title>
        </Head>
        <Main>
          <div className={styles.loginPage}>
            <div className={styles.loginPageBody}>
              <div className={styles.loginPageHead}>
                <div className={styles.loginPageHeadIcon}>
                  <FontAwesomeIcon icon={faUser} />
                </div>
                <h2> به صفحه عضویت جوان ابزار خوش امدید </h2>
              </div>

              <Formik
                initialValues={{ username: "", email: "", password: "" }}
                onSubmit={async (values) => {
                  await new Promise((resolve) => setTimeout(resolve, 500));
                  alert(JSON.stringify(values, null, 2));
                }}
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
                    <label className="reform--label">نام کاربری</label>
                    <Input
                      type="text"
                      name="username"
                      placeholder="نام کاربری"
                      value={values.username}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.username && touched.username && (
                      <div>{errors.username}</div>
                    )}

                    <label className="reform--label">پست الکترونیک</label>
                    <Input
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      name="email"
                      variant="fill"
                      size="lg"
                      type="text"
                      name="email"
                      placeholder="پشت الکترونیک"
                    />
                    {errors.email && touched.email && <div>{errors.email}</div>}

                    <label className="reform--label">کلمه عبور</label>
                    <Input
                      name="password"
                      type="password"
                      icon
                      iconPosition="left"
                      placeholder="کلمه عبور"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.password && touched.password && (
                      <div>{errors.password}</div>
                    )}

                    <Button
                      background="#0e87b5"
                      color="#fff"
                      text="عضویت در سایت"
                      rounded
                    />

                    <b style={{ color: "#f4bd11" }}>
                      آیا شما در سایت عضو شده اید ؟
                    </b>

                    <Link href="/login">
                      <Button
                        background="rgb(223, 5, 108)"
                        color="#fff"
                        text="ورود به سایت"
                        rounded
                      />
                    </Link>
                  </form>
                )}
              </Formik>
            </div>
          </div>
        </Main>
      </>
    );
  }
}

export default Login;
