import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
import logo from "../../assets/img/logo.svg";

const Header = () => {
  const totalCount = useSelector((state) => state.basketHandler.totalCount);
  return (
    <div className={styles.header}>
      <Link className={styles.link} to="/">
        <img className={styles.logo} src={logo} alt="" />
      </Link>
      <div className={styles.menu}>
        <Link className={styles.link} to="/">
          Каталог
        </Link>
        <Link className={styles.link} to="/basket">
          Корзина <span>({totalCount})</span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
