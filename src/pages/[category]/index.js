import React from "react";
import { withRouter } from "next/router";
import Main from "../../components/Main";
import styles from "../../styles/category.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

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

const cat = [
  {
    id: 1,
    category_id: 1,
    name: "تیرآهن ",
    url: "ahan",
  },
  {
    id: 2,
    category_id: 1,
    name: "میلگرد",
    url: "ahan",
  },
  {
    id: 3,
    category_id: 1,
    name: "ورق",
    url: "ahan",
  },
  {
    id: 4,
    category_id: 1,
    name: "نبشی",
    url: "ahan",
  },
  {
    id: 5,
    category_id: 1,
    name: "قوطی و پروفیل",
    url: "ahan",
  },
  {
    id: 6,
    category_id: 1,
    name: "سفارش برمبنای اندازه(نرمال)",
    url: "ahan",
  },
];

const subcat = [
  {
    id: 1,
    cat_id: 1,
    name: "فلش کشویی",
  },
  {
    id: 2,
    cat_id: 1,
    name: "تیر آھن 14",
  },
  {
    id: 3,
    cat_id: 1,
    name: "تیر آھن 16",
  },
  {
    id: 4,
    cat_id: 2,
    name: "میلگرد ٨",
  },
  {
    id: 5,
    cat_id: 3,
    name: "میلگرد ٨",
  },
  {
    id: 6,
    cat_id: 4,
    name: "میلگرد ٨",
  },
  {
    id: 7,
    cat_id: 5,
    name: "میلگرد ٨",
  },
  {
    id: 8,
    cat_id: 6,
    name: "میلگرد ٨",
  },
];

class Category extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Main>
        <div className={styles.category}>
          {cat
            .filter((cat) => this.props.router.query.category === cat.url)
            .map((cat, i) => (
              <ul className={styles.categoryCat}>
                <li>
                  {cat.name}
                  <FontAwesomeIcon icon={faAngleDown} />
                  <ul className={styles.categoryCatSub}>
                    {subcat
                      .filter((item) => cat.id === item.cat_id)
                      .map((item, i) => item.cat_id && <li> {item.name} </li>)}
                  </ul>
                </li>
              </ul>
            ))}
        </div>

        <div className={styles.categoryItems}>

            <h2>تیرآهن</h2>

            <div className={styles.categoryItemsAhan}>
                <div className={styles.categoryItemsAhanTitle}>
                    <ul>
                        <li> نوع کال </li>
                        <li> کارخانه </li>
                        <li> وزن </li>
                        <li> اندازه </li>
                        <li> قیمت </li>
                        <li> واحد فروش </li>
                        <li>خرید</li>
                        <li>علاقه مندی</li>
                    </ul>
                </div>

                <div className={styles.categoryItemsAhanDetails}>
                    <ul>
                        <li> نوع کال </li>
                        <li> کارخانه </li>
                        <li> وزن </li>
                        <li> اندازه </li>
                        <li> قیمت </li>
                        <li> واحد فروش </li>
                        <li>خرید</li>
                        <li>علاقه مندی</li>
                    </ul>
                </div>

            </div>

        </div>

      </Main>
    );
  }
}

export default withRouter(Category);
