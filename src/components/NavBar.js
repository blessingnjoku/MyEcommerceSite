import React from "react";
import "./Nav.css";
import { Search, ShoppingCart } from "@mui/icons-material";
import { ShoppingBasket } from "@mui/icons-material";

const NavBar = () => {
  return (
    <div className="NavBar">
      <img className="logo_img" alt="logo" />
      <div className="navBar-search">
        <input className="Input_search" type="text" />
        <Search className="Nav_searchIcon" />
      </div>
      <div className="nav_header">
        <div className="nav_item">
          <span className="nav_item1">welcome User</span>
          <span className="nav_item2">Sign in</span>
        </div>
        <div className="nav_item">
          <span className="nav_item1">Return</span>
          <span className="nav_item2">& Orders</span>
        </div>
        <div className="nav_item">
          <span className="nav_item1">your </span>
          <span className="nav_item2">Prime</span>
        </div>
      </div>
      <div className="nav_basket">
        <ShoppingCart />
        <span className="nav_item2 nav_basketCount">0</span>
      </div>
    </div>
  );
};

export default NavBar;
