import React from 'react'
import styles from './header.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faSearch, faTimes, faUserTimes } from '@fortawesome/free-solid-svg-icons'

const Header = () => {

  const openMenu=()=>{
    document.querySelector('.header_sidebar__11N7o').classList.add(`${styles.open}`);
  }
  const closeMenu=()=>{
    document.querySelector('.header_sidebar__11N7o').classList.remove(`${styles.open}`);
  }

  return (
    <div className={styles.mainHead}>
      <div className={styles.right}>
        <img src='/logo.png' className={styles.logo} />
        <ul>
          <Link href="">
            <li>صفحه اصلی</li>
          </Link>
          <Link href="">
            <li>تماس با ما</li>
          </Link>
          <li> عضویت</li>
          <li> ورود</li>
        </ul>
      </div>
      <div className={styles.left}>
        <div className={styles.humberger} onClick={openMenu}>
          <FontAwesomeIcon icon={faBars} />
        </div>
        <div className={styles.search}>
          <label>
            <FontAwesomeIcon icon={faSearch} />
          </label>
          <input type="text" className={styles.searchInput} />
        </div>
      </div>

      <div className={styles.sidebar}>
        <div className={styles.sidebarHead} onClick={closeMenu}>
          <FontAwesomeIcon icon={faTimes} />
        </div>
        
      </div>

    </div>
  );
};

export default Header;
