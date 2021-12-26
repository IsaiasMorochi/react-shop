import React from 'react';
import '../styles/header.scss';

const Header = () => {
  return (
    <nav>
      <img className="menu" src="../assets/icons/icon_menu.svg" alt="menu" />

      <div className="navbar-left">
        <img className="logo" src="../assets/img/logo_yard_sale.svg" alt="logo" />
        <ul>
          <li>
            <a href="/">All</a>
          </li>
          <li>
            <a href="/">Clother</a>
          </li>
          <li>
            <a href="/">Electronics</a>
          </li>
          <li>
            <a href="/">Furinitures</a>
          </li>
          <li>
            <a href="/">Toys</a>
          </li>
          <li>
            <a href="/">Others</a>
          </li>
        </ul>
      </div>

      <div className="navbar-right">
        <ul>
          <li className="navbar-email">
            imorochi.dev @gmail.com
          </li>
          <li className="navbar-shopping-cart">
            <img src="../assets/icons/icon_shopping_cart.svg" alt="shopping cart" />
            <div>2</div>
          </li>
        </ul>
      </div>

    </nav>
  );
}
export default Header;