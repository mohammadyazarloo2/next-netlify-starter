import React from "react";
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
import Link from "next/link";
import {
  FavoriteBorderOutlined,
  FavoriteOutlined,
  Inbox,
  RemoveRedEyeOutlined,
  ShoppingBasket,
} from "@material-ui/icons";
import { connect } from "react-redux";
import { addToProduct } from "../../store/actions";

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      datas: [],
    };
  }

  handleClick = () => {
    this.setState({
      open: !this.state.open,
    });
  };

  addProductToBasketHandler=()=>{
      let productId=this.props.id
      let product=this.props.products.find(product=>productId==product.id)
      let index=this.props.basket.basket_items.findIndex(element=>product.id===element.id)
      if(index<0){
          this.props.addToProduct(product)
      }else{}
  }

  render() {
    return (
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
              <img style={{ width: "100%", height: "100%" }} src="./ahan.png" />
            </div>
            <div style={{ height: "100px" }}>
              <Typography variant="h6" style={{ padding: "10px" }}>
                {this.props.name}
              </Typography>
            </div>
            <Paper
              style={{
                boxShadow: "rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset",
                padding: "10px",
              }}
            >
              <Grid container>
                <Grid item xs={7}>
                  <Typography variant="span">
                    {this.props.price} تومان
                  </Typography>
                  {this.props.hasOff ? (
                    <Typography variant="span">
                      {" "}
                      {this.props.offValue} درصد{" "}
                    </Typography>
                  ) : (
                    ""
                  )}
                </Grid>
                <Grid item xs={5} align="left">
                  <Tooltip
                    TransitionComponent={Zoom}
                    title="افزودن به سبد خرید"
                    placement="top"
                  >
                    <IconButton size="small" onClick={this.addProductToBasketHandler}>
                      <FavoriteBorderOutlined />
                    </IconButton>
                  </Tooltip>

                  <Tooltip
                    TransitionComponent={Zoom}
                    title="افزودن به علاقه مندی"
                    placement="top"
                  >
                    <IconButton size="small">
                      <ShoppingBasket style={{ color: green[500] }} />
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
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.product,
    basket:state.basket,
  };
};

export default connect(mapStateToProps,{
    addToProduct,
})(Product);
