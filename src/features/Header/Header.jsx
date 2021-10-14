import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const totalCount = useSelector((state) => state.basketHandler.totalCount);
  return (
    <div className={"header"}>
      <img src="" alt="" />
      <div className="menu">
        <Link to="/">Каталог</Link>
        <Link to="/basket">
          Корзина <span>({totalCount})</span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
