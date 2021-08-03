import Head from "next/head";
import Image from "next/image";
import styles from "../styles/home.module.scss";
import data from "faker";
import Main from "../components/Main";
import React from "react";
import Link from "next/link";
import {
  Button,
  IconButton,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Typography,
  ListSubheader,
  Grid,
  Paper,
} from "@material-ui/core";
import { blue, green } from "@material-ui/core/colors";
import Zoom from "@material-ui/core/Zoom";
import Tooltip from "@material-ui/core/Tooltip";
import {
  FavoriteBorderOutlined,
  FavoriteOutlined,
  Inbox,
  RemoveRedEyeOutlined,
  ShoppingBasket,
} from "@material-ui/icons";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import StarBorder from "@material-ui/icons/StarBorder";
import Collapse from "@material-ui/core/Collapse";
import StickyBox from "react-sticky-box";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#8ca18c",
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

const mainCat = [
  {
    id: 1,
    name: "آهن آلات",
    url: "ahan",
    image: "./1.png",
  },
  {
    id: 2,
    name: "لوله و اتصالا",
    url: "loleh",
    image: "./2.png",
  },
  {
    id: 3,
    name: "شیرآلات و لوازم بهداشتی",
    url: "shir",
    image: "./3.jpg",
  },
  {
    id: 4,
    name: "کاشی و سرامیک",
    url: "kashi",
    image: "./4.jpg",
  },
];

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  handleClick = () => {
    this.setState({
      open: !this.state.open,
    });
  };

  render() {
    const { contact } = this.props;

    return (
      <>
        <Head>
          <title>جوان ابزار</title>
        </Head>

        <Main>
          <Grid container>
            <Grid item xs={12} style={{ margin: "15px" }}>
              <Paper style={{ padding: "20px" }}>
                <Grid container>
                  {mainCat.map((item, i) => (
                    <Grid
                      item
                      xs={3}
                      style={{ paddingLeft: "10px", paddingRight: "10px" }}
                    >
                      <Link href="[category]" as={`${item.url}`}>
                        <Paper style={{ background: blue[400] }}>
                          <div key={i}>
                            <div>
                              <div>
                                <img
                                  src={item.image}
                                  style={{ width: "100%", height: "200px" }}
                                />
                              </div>
                              <Typography variant="h6" align="center">
                                {item.name}
                              </Typography>
                            </div>
                          </div>
                        </Paper>
                      </Link>
                    </Grid>
                  ))}
                </Grid>
              </Paper>
            </Grid>
          </Grid>

          <Grid container>
            <Grid item xs={12} style={{ margin: "15px" }}>
              <Grid container>
                <Grid item xs={2}>
                  <StickyBox offsetTop={20} offsetBottom={20}>
                    <Paper>
                      <List
                        component="nav"
                        aria-labelledby="nested-list-subheader"
                        subheader={
                          <ListSubheader
                            component="div"
                            id="nested-list-subheader"
                          >
                            دسترسی سریع
                          </ListSubheader>
                        }
                      >
                        <ListItem button>
                          <ListItemIcon>
                            <Inbox />
                          </ListItemIcon>
                          <ListItemText align="right" primary="کاربران عادی" />
                        </ListItem>
                        <ListItem button onClick={this.handleClick}>
                          <ListItemIcon>
                            <Inbox />
                          </ListItemIcon>
                          <ListItemText align="right" primary="کاربران ویژه" />
                          {this.state.open ? <ExpandLess /> : <ExpandMore />}
                        </ListItem>
                        <Collapse
                          in={this.state.open}
                          timeout="auto"
                          unmountOnExit
                        >
                          <List component="div" disablePadding>
                            <ListItem button>
                              <ListItemIcon>
                                <StarBorder />
                              </ListItemIcon>
                              <ListItemText primary="Starred" />
                            </ListItem>
                          </List>
                        </Collapse>
                      </List>
                    </Paper>
                  </StickyBox>
                </Grid>

                <Grid xs={10} style={{ paddingRight: "10px" }}>
                  <Grid container>
                    <Grid item xs={12}>
                      <Paper style={{ padding: "5px", paddingBottom: "20px" }}>
                        <Grid container>
                          <Grid item xs={6} style={{ padding: "15px" }}>
                            <Typography variant="h5">فروش ویژه</Typography>
                          </Grid>
                          <Grid item xs={6} style={{ padding: "15px" }}>
                            <Typography variant="h5" align="left">
                              ثبت خرید و سفارش بصورت فاکتوری
                            </Typography>
                          </Grid>
                        </Grid>

                        <Grid container>
                          {contact.map((item) => (
                            <Link
                              href={`details/` + item.message}
                            >
                              <Grid
                                style={{
                                  paddingLeft: "5px",
                                  paddingRight: "5px",
                                }}
                                item
                                xs={3}
                              >
                                <Paper>
                                  <div>
                                    <img
                                      style={{ width: "100%", height: "100%" }}
                                      src="./1.png"
                                    />
                                  </div>
                                  <div>
                                    <Typography
                                      variant="h6"
                                      style={{ padding: "10px" }}
                                    >
                                      {item.message}
                                    </Typography>
                                  </div>
                                  <Paper
                                    style={{
                                      boxShadow:
                                        "rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset",
                                      padding: "10px",
                                    }}
                                  >
                                    <Grid container>
                                      <Grid item xs={7}>
                                        <Typography variant="span">
                                          1,200 تومان
                                        </Typography>
                                        <Typography variant="span">
                                          {" "}
                                          400 تومان{" "}
                                        </Typography>
                                      </Grid>
                                      <Grid item xs={5} align="left">
                                        <Tooltip
                                          TransitionComponent={Zoom}
                                          title="افزودن به سبد خرید"
                                          placement="top"
                                        >
                                          <IconButton size="small">
                                            <FavoriteBorderOutlined />
                                          </IconButton>
                                        </Tooltip>

                                        <Tooltip
                                          TransitionComponent={Zoom}
                                          title="افزودن به علاقه مندی"
                                          placement="top"
                                        >
                                          <IconButton size="small">
                                            <ShoppingBasket
                                              style={{ color: green[500] }}
                                            />
                                          </IconButton>
                                        </Tooltip>
                                        <Tooltip
                                          TransitionComponent={Zoom}
                                          title="بازدید ها"
                                          placement="top"
                                        >
                                          <IconButton size="small">
                                            <RemoveRedEyeOutlined color="disabled" />
                                          </IconButton>
                                        </Tooltip>
                                      </Grid>
                                    </Grid>
                                  </Paper>
                                </Paper>
                              </Grid>
                            </Link>
                          ))}
                        </Grid>
                      </Paper>
                    </Grid>
                  </Grid>

                  <Grid container>
                    <Grid item xs={12} style={{ marginTop: "15px" }}>
                      <Paper style={{ padding: "20px" }}>
                        <Typography variant="h5">
                          {" "}
                          اخرین تغییرات قیمت{" "}
                        </Typography>

                        <TableContainer component={Paper}>
                          <Table aria-label="customized table">
                            <TableHead>
                              <TableRow></TableRow>
                              <StyledTableCell align="center">
                                نام محصول
                              </StyledTableCell>
                              <StyledTableCell align="center">
                                عنوان محصول
                              </StyledTableCell>
                              <StyledTableCell align="center">
                                کد محصول
                              </StyledTableCell>
                              <StyledTableCell align="center">
                                بازار
                              </StyledTableCell>
                              <StyledTableCell align="center">
                                قیمت
                              </StyledTableCell>
                            </TableHead>
                            <TableBody>
                              {rows.map((row) => (
                                <StyledTableRow key={row.name}>
                                  <StyledTableCell
                                    component="th"
                                    scope="row"
                                    align="center"
                                  >
                                    {row.name}
                                  </StyledTableCell>
                                  <StyledTableCell align="center">
                                    {row.calories}
                                  </StyledTableCell>
                                  <StyledTableCell align="center">
                                    {row.fat}
                                  </StyledTableCell>
                                  <StyledTableCell align="center">
                                    {row.carbs}
                                  </StyledTableCell>
                                  <StyledTableCell align="center">
                                    {row.protein}
                                  </StyledTableCell>
                                </StyledTableRow>
                              ))}
                            </TableBody>
                          </Table>
                        </TableContainer>
                      </Paper>
                    </Grid>
                  </Grid>

                  <Grid container style={{ marginTop: "20px" }}>
                    <Grid
                      item
                      xs={3}
                      style={{
                        borderRadius: "50%",
                        paddingLeft: "10px",
                        paddingRight: "10px",
                      }}
                    >
                      <img
                        src="./2.png"
                        style={{
                          width: "100%",
                          height: "200px",
                          borderRadius: "50%",
                        }}
                      />
                      <Typography align="center" variant="h6">
                        {" "}
                        ضمانت کالا{" "}
                      </Typography>
                    </Grid>
                    <Grid
                      item
                      xs={3}
                      style={{
                        borderRadius: "50%",
                        paddingLeft: "10px",
                        paddingRight: "10px",
                      }}
                    >
                      <img
                        src="./1.png"
                        style={{
                          width: "100%",
                          height: "200px",
                          borderRadius: "50%",
                        }}
                      />
                      <Typography align="center" variant="h6">
                        {" "}
                        ارسال به سراسر کشور{" "}
                      </Typography>
                    </Grid>
                    <Grid
                      item
                      xs={3}
                      style={{
                        borderRadius: "50%",
                        paddingLeft: "10px",
                        paddingRight: "10px",
                      }}
                    >
                      <img
                        src="./3.jpg"
                        style={{
                          width: "100%",
                          height: "200px",
                          borderRadius: "50%",
                        }}
                      />
                      <Typography align="center" variant="h6">
                        {" "}
                        پرداخت در محل{" "}
                      </Typography>
                    </Grid>
                    <Grid
                      item
                      xs={3}
                      style={{
                        borderRadius: "50%",
                        paddingLeft: "10px",
                        paddingRight: "10px",
                      }}
                    >
                      <img
                        src="./3.jpg"
                        style={{
                          width: "100%",
                          height: "200px",
                          borderRadius: "50%",
                        }}
                      />
                      <Typography align="center" variant="h6">
                        {" "}
                        پرداخت در محل{" "}
                      </Typography>
                    </Grid>
                  </Grid>

                  <Grid container style={{ marginTop: "20px" }}>
                    <Grid item xs={12}>
                      <Paper>
                        <img
                          style={{ width: "100%", height: "200px" }}
                          src="../ads.jpg"
                        />
                      </Paper>
                    </Grid>
                  </Grid>

                  <Grid container>
                    <Grid
                      item
                      xs={3}
                      style={{ paddingLeft: "10px", paddingRight: "10px" }}
                    >
                      <Paper>
                        <h2>راهنمای سایت</h2>
                      </Paper>
                    </Grid>
                    <Grid
                      item
                      xs={3}
                      style={{ paddingLeft: "10px", paddingRight: "10px" }}
                    >
                      <Paper>
                        <h2>راهنمای سایت</h2>
                      </Paper>
                    </Grid>
                    <Grid
                      item
                      xs={3}
                      style={{ paddingLeft: "10px", paddingRight: "10px" }}
                    >
                      <Paper>
                        <h2>راهنمای سایت</h2>
                      </Paper>
                    </Grid>
                    <Grid
                      item
                      xs={3}
                      style={{ paddingLeft: "10px", paddingRight: "10px" }}
                    >
                      <Paper>
                        <h2>راهنمای سایت</h2>
                      </Paper>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Main>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    contact: state.firestore.ordered.contact,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "contact" }])
)(Home);
