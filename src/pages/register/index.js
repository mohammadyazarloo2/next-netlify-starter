import React from "react";
import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/login.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Main from "../../components/Main";
import { Formik } from "formik";
import Input from "../../components/elements/layout/Input";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Zoom, Grid, Paper, Typography, Button } from "@material-ui/core";
import { blue, green, red } from "@material-ui/core/colors";


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
          <Grid container style={{ marginTop: "30px" }}>
            <Zoom in={true} style={{ transitionDelay: "500ms" }}>
              <Grid xs={10} style={{ margin: "auto" }}>
                <Paper style={{ padding: "20px" }}>
                  <Grid container>
                    <Grid
                      item
                      xs={4}
                      style={{ padding: "15px", textAlign: "center" }}
                    >
                      <div className={styles.loginPageHeadIcon}>
                        <FontAwesomeIcon icon={faUser} />
                      </div>
                      <Typography variant="h6">عضویت در سایت</Typography>
                      <Typography variant="span">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                        چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون
                        بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و
                        برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با
                        هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت
                        و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
                        متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را
                        برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ
                      </Typography>
                    </Grid>

                    <Grid item xs={8}>
                      <Formik
                        initialValues={{
                          username: "",
                          email: "",
                          password: "",
                        }}
                        onSubmit={async (values) => {
                          await new Promise((resolve) =>
                            setTimeout(resolve, 500)
                          );
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

                            <label className="reform--label">
                              پست الکترونیک
                            </label>
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
                            {errors.email && touched.email && (
                              <div>{errors.email}</div>
                            )}

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

                            <Grid item xs={12} style={{ marginTop: "15px" }}>
                              <Button
                                onClick={this.register}
                                style={{
                                  background: green[500],
                                  color: "white",
                                  borderRadius: "50px",
                                }}
                                variant="container"
                              >
                                ورود به سایت
                              </Button>
                            </Grid>
                            <Grid item xs={12} style={{ marginTop: "20px" }}>
                              <b style={{ color: "#f4bd11" }}>
                                آیا شما در سایت عضو نشده اید ؟
                              </b>
                              <Link href="/register">
                                <Button
                                  onClick={this.login}
                                  variant="container"
                                  style={{
                                    background: red[400],
                                    borderRadius: "50px",
                                    color: "#fff",
                                  }}
                                >
                                  عضویت در سایت
                                </Button>
                              </Link>
                            </Grid>
                          </form>
                        )}
                      </Formik>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
            </Zoom>
          </Grid>
        </Main>
      </>
    );
  }
}

export default Login;
