import React from "react";
import Main from "../../components/Main";
import Grid from "@material-ui/core/Grid";
import {
  Typography,
  Box,
  Card,
  List,
  ListItem,
  ListItemText,
  Paper,
  Zoom,
} from "@material-ui/core";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import { ListSubheader } from "@material-ui/core";
import { ListItemIcon } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import {
  Drafts,
  ExpandLess,
  ExpandMore,
  Favorite,
  Inbox,
  ShoppingBasket,
  ShoppingBasketRounded,
  VerifiedUserRounded,
} from "@material-ui/icons";
import ReceiptIcon from "@material-ui/icons/Receipt";
import { spacing } from "@material-ui/system";

class Users extends React.Component {
  render() {
    return (
      <>
        <Main>
          <Grid container>
            <Grid item xs={3}>
              <Zoom in={true} style={{ transitionDelay: '500ms' }}>
                <Paper
                  elevation={2}
                  style={{ margin: "20px" }}
                  variant="elevation"
                  square
                  component="div"
                >
                  <Card m={5}>
                    <List>
                      <ListItem alignItems="center">
                        <ListItemAvatar>
                          <Avatar src="./1.png" />
                        </ListItemAvatar>
                        <ListItemText
                          align="right"
                          style={{ direction: "rtl" }}
                        >
                          <Typography
                            component="span"
                            variant="body2"
                            color="textPrimary"
                          >
                            علیرضا جوان
                          </Typography>
                        </ListItemText>
                      </ListItem>
                    </List>
                    <List
                      component="nav"
                      aria-labelledby="nested-list-subheader"
                      subheader={
                        <ListSubheader component="div">
                          امکانات کاربری
                        </ListSubheader>
                      }
                    >
                      <ListItem button>
                        <ListItemIcon>
                          <VerifiedUserRounded />
                        </ListItemIcon>
                        <ListItemText align="right" primary="ویرایش پروفایل" />
                        <ExpandLess />
                      </ListItem>
                      <ListItem button>
                        <ListItemIcon>
                          <ShoppingBasket />
                        </ListItemIcon>
                        <ListItemText align="right" primary="سابقه خرید" />
                      </ListItem>
                      <ListItem button>
                        <ListItemIcon>
                          <Favorite />
                        </ListItemIcon>
                        <ListItemText align="right" primary="علاقه مندی ها" />
                      </ListItem>
                      <ListItem button>
                        <ListItemIcon>
                          <ReceiptIcon />
                        </ListItemIcon>
                        <ListItemText align="right" primary="پیش فاکتور جدید" />
                        <ExpandLess />
                      </ListItem>
                      <ListItem button>
                        <ListItemIcon>
                          <ShoppingBasketRounded />
                        </ListItemIcon>
                        <ListItemText align="right" primary="سبد خرید" />
                      </ListItem>
                    </List>
                  </Card>
                </Paper>
              </Zoom>
            </Grid>
            <Grid item xs={9}>
              <Zoom in={true} style={{ transitionDelay: '500ms' }}>
                <Paper style={{ margin: "20px" }}>
                  <Grid item xs={12}>
                    <Card style={{ padding: "30px" }}>
                      <Typography
                        style={{ paddingBottom: "15px" }}
                        variant="h4"
                      >
                        داشبورد کاربری
                      </Typography>
                      <Typography align="justify" px={4} variant="h6">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                        چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون
                        بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و
                        برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با
                        هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت
                        و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
                        متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را
                        برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ
                        پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید
                        داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط
                        سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی
                        دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود
                        طراحی اساسا مورد استفاده قرار گیرد.لورم ایپسوم متن
                        ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده
                        از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                        در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
                        تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود
                        ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد
                        گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می
                        طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان
                        رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان
                        فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و
                        دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به
                        پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای
                        اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی
                        اساسا مورد استفاده قرار گیرد.
                      </Typography>
                    </Card>
                  </Grid>
                </Paper>
              </Zoom>
            </Grid>
          </Grid>
        </Main>
      </>
    );
  }
}

export default Users;
