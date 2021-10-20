import { Link } from "react-router-dom";
import styles from "./Footer.module.scss";
import logo from "../../assets/img/logo.svg";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerTop}>
        <Link className={styles.link} to="/">
          <img className={styles.logo} src={logo} alt="" />
        </Link>
        <div className={styles.menu}>
          <Link className={styles.link} to="/">
            Каталог
          </Link>
          <Link className={styles.link} to="/basket">
            Корзина
          </Link>
        </div>
      </div>
      <div className={styles.copy}>@Copy</div>
    </div>
  );
};

export default Footer;
