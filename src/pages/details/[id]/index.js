import React from "react";
import Head from "next/head";
import Main from "../../../components/Main";
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
import {
  FavoriteBorderOutlined,
  FavoriteOutlined,
  Inbox,
  RemoveRedEyeOutlined,
  ShoppingBasket,
} from "@material-ui/icons";
import { blue, green } from "@material-ui/core/colors";
import Zoom from "@material-ui/core/Zoom";
import Tooltip from "@material-ui/core/Tooltip";
import StickyBox from "react-sticky-box";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Collapse from "@material-ui/core/Collapse";
import StarBorder from "@material-ui/icons/StarBorder";
import { useRouter } from 'next/router'

class Details extends React.Component {
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

  static getInitialProps({query}) {
    return {query}
  }

  render() {
    console.log(this.props.query)

    return (
      <>
        <Head>
          <title>جزییات</title>
        </Head>
        <Main>
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

                <Grid item xs={10}>
                    <Typography component="span" variant="h6">Details World</Typography>
                </Grid>

              </Grid>
            </Grid>
          </Grid>
        </Main>
      </>
    );
  }
}

export default Details;
