import styles from "./main.module.scss";
import data from "faker";

const MainPage = () => {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.homePage}>
        <div className={styles.categories}>

          <div className={styles.categoriesItem}>
            <div className={styles.categoriesItemContent}>
              <div className={styles.img}>
                <img src={data.image.avatar()} />
              </div>
              <div className={styles.content}>{data.name.title()}</div>
            </div>
          </div>

          <div className={styles.categoriesItem}>
            <div className={styles.categoriesItemContent}>
              <div className={styles.img}>
                <img src={data.image.avatar()} />
              </div>
              <div className={styles.content}>{data.name.title()}</div>
            </div>
          </div>

          <div className={styles.categoriesItem}>
            <div className={styles.categoriesItemContent}>
              <div className={styles.img}>
                <img src={data.image.avatar()} />
              </div>
              <div className={styles.content}>{data.name.title()}</div>
            </div>
          </div>

          <div className={styles.categoriesItem}>
            <div className={styles.categoriesItemContent}>
              <div className={styles.img}>
                <img src={data.image.avatar()} />
              </div>
              <div className={styles.content}>{data.name.title()}</div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default MainPage;
