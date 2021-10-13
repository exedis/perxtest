import { Link } from "react-router-dom";

const Header = () => {

    return (
        <div className={'header'}>
            <img src="" alt="" />
            <div className="menu">
                <Link to="/">Каталог</Link>
                <Link to="/basket">Корзина</Link>
            </div>
        </div>
    );
};

export default Header;