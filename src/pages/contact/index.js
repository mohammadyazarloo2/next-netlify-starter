import React from "react";
import {
  Button,
  Box,
  TextField,
  InputLabel,
  Link,
  Slide,
} from "@material-ui/core";
import Main from "../../components/Main";
import { green } from "@material-ui/core/colors";
import { Formik } from "formik";
import Input from "../../components/elements/layout/Input";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Zoom, Grid, Paper, Typography } from "@material-ui/core";
import Buttons from "../../components/elements/layout/Button";
import styles from "../../styles/login.module.scss";
import Head from "next/head";
import { connect } from "react-redux";
import { createContact } from "../../store/actions/contactAction";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      check: true,
      check2: false,
      contact: false,
      username: "",
      email: "",
      message:'',
    };
  }

  changeSection = () => {
    this.setState({
      contact: true,
      check: false,
      check2: true,
    });
    console.log(this.state.check2);
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state);
    this.props.createContact(this.state)
  };

  render() {
    console.log(this.props);
    return (
      <>
        <Head>
          <title> همکاری با ما </title>
        </Head>
        <Main>
          <Grid container>
            {this.state.contact === false ? (
              <Grid item xs={12} style={{ margin: "15px" }}>
                <Zoom
                  in={this.state.check}
                  style={{
                    transitionDelay: this.state.check ? "500ms" : "0ms",
                  }}
                >
                  <Paper
                    style={{
                      padding: "20px",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      variant="h6"
                      align="justify"
                      style={{ padding: "10px" }}
                    >
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ،
                      و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه
                      روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای
                      شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف
                      بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه
                      درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می
                      طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه
                      ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی
                      ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری
                      موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و
                      زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی
                      سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده
                      قرار گیرد.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
                      صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و
                      متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است،
                      و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با
                      هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و
                      سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را
                      می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان
                      رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان
                      فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و
                      دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان
                      رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و
                      جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد
                      استفاده قرار گیرد.
                    </Typography>
                  </Paper>
                </Zoom>
                <Zoom
                  in={this.state.check}
                  style={{
                    transitionDelay: this.state.check ? "500ms" : "0ms",
                  }}
                >
                  <Box component="div" align="left">
                    <h2>
                      <Button
                        variant="contained"
                        color="secondary"
                        onClick={this.changeSection}
                      >
                        ثبت درخواست همکاری
                      </Button>
                    </h2>
                  </Box>
                </Zoom>
              </Grid>
            ) : (
              <Grid xs={10} style={{ margin: "auto", marginTop: "30px" }}>
                <Paper style={{ padding: "20px" }}>
                  <Grid container>
                    <Grid
                      item
                      xs={4}
                      style={{ padding: "15px", textAlign: "center" }}
                    >
                      <div></div>
                      <Typography variant="h6"> همکاری با ما </Typography>
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
                      <form onSubmit={this.handleSubmit}>
                        <TextField
                          fullWidth
                          label="نام کاربری"
                          placeholder="نام کاربری"
                          variant="outlined"
                          style={{ paddingBottom: "15px" }}
                          onChange={this.handleChange}
                          name="username"
                        />

                        <TextField
                          fullWidth
                          label="پست الکترونیک"
                          placeholder="پست الکترونیک"
                          variant="outlined"
                          style={{ paddingBottom: "15px" }}
                          onChange={this.handleChange}
                          name="email"
                        />

                        <TextField
                          fullWidth
                          label="Multiline"
                          multiline
                          rows={4}
                          variant="outlined"
                          style={{ paddingBottom: "15px" }}
                          onChange={this.handleChange}
                          name="message"
                        />

                        <Button
                          style={{
                            borderRadius: "20em",
                            padding: "10px",
                            marginTop: "15px",
                            background: green[400],
                          }}
                          color="secondary"
                          variant="contained"
                          fullWidth
                          onClick={this.handleSubmit}
                        >
                          ارسال پیام
                        </Button>
                      </form>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
            )}
          </Grid>
        </Main>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createContact: (contact) => dispatch(createContact(contact))
  };
};

export default connect(null,mapDispatchToProps)(Contact);
