import React from "react";
import Head from "next/head";
import Main from "../../components/Main";
import { Zoom, Grid, Paper, Typography, Button } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { deepOrange, green, orange, yellow } from "@material-ui/core/colors";
import StarBorder from "@material-ui/icons/StarBorder";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import StickyBox from "react-sticky-box";
import { connect } from "react-redux";

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

function createData(number, desc, count, vahed, nerkh, off, price) {
  return { number, desc, count, vahed, nerkh, off, price };
}

const rows = [
  createData(
    1,
    "آهن 14 اصفهان",
    144,
    "شاخه",
    "21,000,000",
    "0%",
    "3,024,000,000"
  ),
  createData(1, "زانو 90", 1, "عدد", "150,000", "0%", "150,000"),
];

class Basket extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let totalPrice=0
    this.props.basket.basket_items.forEach(basket_item=>{
      totalPrice+=basket_item.price*basket_item.count
    })
    console.log(this.props)
    return (
      <>
        <Head>
          <title>سبد خرید||جوان ابزار</title>
        </Head>
        <Main>
          <Grid container>
            <Zoom in={true} style={{ transitionDelay: "500ms" }}>
              <Grid xs={12} style={{ padding: "10px" }}>
                <Grid container>
                  <Grid item lg={6} xs={12} md={12} style={{ paddingLeft: "15px",marginBottom:'30px' }}>
                    <StickyBox offsetTop={20} offsetBottom={20}>
                      <Paper>
                        <TableContainer component={Paper}>
                          <Table aria-label="customized table">
                            <TableHead>
                              <TableRow></TableRow>
                              <StyledTableCell align="center">
                                ردیف
                              </StyledTableCell>
                              <StyledTableCell align="center">
                                شرح
                              </StyledTableCell>
                              <StyledTableCell align="center">
                                مقدار
                              </StyledTableCell>
                              <StyledTableCell align="center">
                                واحد
                              </StyledTableCell>
                              <StyledTableCell align="center">
                                نرخ
                              </StyledTableCell>
                              <StyledTableCell align="center">
                                تخفیف
                              </StyledTableCell>
                              <StyledTableCell align="center">
                                مبلغ(ریال)
                              </StyledTableCell>
                            </TableHead>
                            <TableBody>
                              {this.props.basket.basket_items.map((row,index) => (
                                <StyledTableRow key={row.id}>
                                  <StyledTableCell
                                    component="th"
                                    scope="row"
                                    align="center"
                                  >
                                    {index}
                                  </StyledTableCell>
                                  <StyledTableCell align="center">
                                    {row.name}
                                  </StyledTableCell>
                                  <StyledTableCell align="center">
                                    {row.count}
                                  </StyledTableCell>
                                  <StyledTableCell align="center">
                                    {row.vahed}
                                  </StyledTableCell>
                                  <StyledTableCell align="center">
                                    {row.price}
                                  </StyledTableCell>
                                  <StyledTableCell align="center">
                                    {row.offValue}
                                  </StyledTableCell>
                                  <StyledTableCell align="center">
                                    {row.price*row.count}
                                  </StyledTableCell>
                                </StyledTableRow>
                              ))}
                            </TableBody>
                          </Table>
                        </TableContainer>
                      </Paper>
                    
                    <Grid item xs={12} style={{ marginTop: "15px" }}>
                      <Grid container>
                        <Grid item xs={6}>
                          <Button
                            style={{
                              background: deepOrange[400],
                              color: "#fff",
                            }}
                            variant="contained"
                            align="right"
                          >
                            ثبت پیش فاکتور
                          </Button>
                        </Grid>
                        <Grid item xs={6} style={{ textAlign: "left" }}>
                          <Button
                            style={{
                              background: green[400],
                              textAlign: "left",
                              color: "#fff",
                            }}
                            variant="contained"
                            align="left"
                          >
                            ثبت و پرداخت
                          </Button>
                        </Grid>
                      </Grid>
                    </Grid>
                    </StickyBox>
                  </Grid>
                  <Grid item lg={6} xs={12} md={12}>
                    <Grid container>
                    {this.props.basket.basket_items.map((items) => (

                        <Grid xs={12} style={{ marginBottom: "20px",height:'200px' }}>
                        <Paper style={{ height:'100%' }}>
                          <Grid container style={{ height:'100%' }}>
                            <Grid item xs={4} style={{ height:'100%' }}>
                              <img
                                style={{ width: "100%", height: "100%" }}
                                src="/2.png"
                              />
                            </Grid>
                            <Grid item xs={8} style={{ padding: "15px" }}>
                              <Grid container>
                                <Grid item xs={12}>
                                  <Typography variant="h6">
                                    {items.name}
                                  </Typography>
                                </Grid>
                                <Grid
                                  item
                                  xs={12}
                                  style={{ paddingTop: "20px" }}
                                >
                                  <Grid container>
                                    <Grid item xs={3}>
                                      <Typography variant="span">
                                        قیمت{" "}
                                      </Typography>
                                    </Grid>
                                    <Grid item xs={3}>
                                      <Typography variant="span">
                                        {items.price}
                                      </Typography>
                                    </Grid>
                                    <Grid item xs={3}>
                                      <Typography variant="span">
                                        {" "}
                                        نرخ ویژه{" "}
                                      </Typography>
                                    </Grid>
                                    <Grid item xs={3}>
                                      <Typography variant="span">
                                        {items.offValue}
                                      </Typography>
                                    </Grid>
                                  </Grid>
                                </Grid>
                                <Grid
                                  item
                                  xs={12}
                                  style={{ paddingTop: "20px" }}
                                >
                                  <Grid container>
                                    <Grid item xs={3}>
                                      <Typography variant="span">
                                        {" "}
                                        واحد{" "}
                                      </Typography>
                                    </Grid>
                                    <Grid item xs={3}>
                                      <Typography variant="span">
                                        {" "}
                                        4,000,000{" "}
                                      </Typography>
                                    </Grid>
                                    <Grid item xs={3}>
                                      <Typography variant="span">
                                        {" "}
                                        واحد{" "}
                                      </Typography>
                                    </Grid>
                                    <Grid item xs={3}>
                                      <Typography variant="span">
                                        {" "}
                                        22{" "}
                                      </Typography>
                                    </Grid>
                                  </Grid>
                                </Grid>
                                <Grid
                                  item
                                  xs={12}
                                  align="center"
                                  style={{ paddingTop: "20px" }}
                                >
                                  <Button
                                    fullWidth
                                    variant="container"
                                    color="default"
                                  >
                                    اصلاعات کالا
                                  </Button>
                                </Grid>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Paper>
                      </Grid>

                    ))}
                      
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Zoom>
          </Grid>
        </Main>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.product,
    basket:state.basket,
  };
};

export default connect(mapStateToProps)(Basket);
