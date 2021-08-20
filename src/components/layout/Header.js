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
import { Formik } from "formik";
import Input from "../elements/layout/Input";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { Paper, Grid, Zoom, TextField, Box } from "@material-ui/core";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
import { blue, green, yellow } from "@material-ui/core/colors";
import { connect } from "react-redux";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      setVisible: false,
      visible: false,
      confirmLoading: false,
      setConfirmLoading: false,
      register: false,
      login: false,
      modalText: "content of the loading modal",
      setModalText: "content of the loading modal",
      open: false,
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
        register: false,
        login: true,
      });
    } else if (this.state.login === true) {
      this.setState({
        register: true,
        login: false,
      });
    }
    console.log(this.state.register);
  };

  handleOpen = () => {
    this.setState({
      open: true,
    });
  };

  handleClose = () => {
    this.setState({
      open: false,
    });
  };

  render() {
    let totalCount=0
    this.props.basket.basket_items.forEach(basket_item=>{
      totalCount+=basket_item.count
    })

    return (
      <>
        <div className={styles.mainHead}>
          <div className={styles.top}>
            <AppBar position="static">
              <Toolbar>
                <IconButton edge="start" color="default" aria-label="menu">
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6" align="center" style={{ flexGrow: 1 }}>
                  <ClockerTima />
                </Typography>

                <ul>
                  {this.props.isLogged === false ? (
                    <div>
                      <Link href="/register">
                        <Button color="default"> عضویت</Button>
                      </Link>
                      <Link href="/login">
                        <Button color="default"> ورود</Button>
                      </Link>
                    </div>
                  ) : (
                    <Link href="/users">
                      <Button color="default">پروفایل</Button>
                    </Link>
                  )}
                </ul>
              </Toolbar>
            </AppBar>
          </div>

          <div className={styles.middle} style={{ background: "#c8e6c9" }}>
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
                    <li> خدمات </li>
                  </Link>
                  <Link href="/">
                    <li> اخبار </li>
                  </Link>
                  <Link href="/contact">
                    <li> همکاری با ما </li>
                  </Link>
                </ul>
              </div>
              <div className={styles.rightMenuTow}>
                <div className={styles.search}>
                  <label>
                    <FontAwesomeIcon icon={faSearch} />
                  </label>
                  <input type="text" className={styles.searchInput} />
                </div>
              </div>
            </div>

            <Grid item xs={3}>
              <Grid container>
                <Grid item xs={6}>
                  <Link href="basket">
                    <Button
                      variant="contained"
                      style={{ background: green[400], color: "#fff" }}
                    >
                      سبد خرید
                      <FontAwesomeIcon icon={faShoppingBasket} />
                      {totalCount > 0 ? (
                        <span
                          style={{
                            width: "20px",
                            height: "20px",
                            background: "red",
                            borderRadius: "50px",
                            marginRight: "5px",
                          }}
                        >
                          {totalCount}
                        </span>
                      ) : (
                        <span
                          style={{
                            width: "20px",
                            height: "20px",
                            background: "red",
                            borderRadius: "50px",
                            marginRight: "5px",
                          }}
                        >
                          0
                        </span>
                      )}
                    </Button>
                  </Link>
                </Grid>
                <Grid item xs={6}>
                  <Button
                    variant="contained"
                    style={{ background: yellow[400], color: "#fff" }}
                  >
                    علاقه مندی
                    <FontAwesomeIcon icon={faHeart} />
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </div>
        </div>

        <Modal
          style={{ display: "flex", alignItems: "center" }}
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Zoom in={this.state.open}>
            <div
              dir="rtl"
              style={{
                background: "#fff",
                width: "40%",
                margin: "auto",
                borderRadius: "5px",
                padding: "15px",
              }}
            >
              <h2 id="transition-modal-title"> سبد خرید </h2>
              <Grid container>
                <Grid item xs={12}>
                  <Paper>
                    <Grid
                      container
                      style={{ padding: "15px", alignItems: "center" }}
                    >
                      <Grid item xs={4}>
                        تیر اهنن 18
                      </Grid>
                      <Grid item xs={8} align="left">
                        <span style={{ color: green[500] }}>
                          قیمت: 12,200 تومان{" "}
                        </span>
                        <Button>
                          <RemoveIcon color="secondary" />
                        </Button>
                        <TextField
                          dir="rtl"
                          style={{ width: "30px", textAlign: "center" }}
                          value="1"
                        />
                        <Button>
                          <AddIcon style={{ color: green[500] }} />
                        </Button>
                      </Grid>
                    </Grid>
                  </Paper>
                </Grid>
              </Grid>
            </div>
          </Zoom>
        </Modal>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    isLogged: state.logged.isLogged,
    basket: state.basket,
  };
};

export default connect(mapStateToProps)(Header);
