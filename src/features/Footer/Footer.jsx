import { Link } from "react-router-dom";

const Footer = () => {

    return (
        <div className={'footer'}>
            <img src="" alt="" />
            <div className="menu">
                <Link to="/">Каталог</Link>
                <Link to="/basket">Корзина</Link>
            </div>
        </div>
    );
};

export default Footer;