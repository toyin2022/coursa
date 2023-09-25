import React, { useState } from "react";
import {
  AiOutlineMenuFold,
  AiOutlineMenuUnfold,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { BsArrowRightShort } from "react-icons/bs";
import { motion } from "framer-motion";
import logo from "../logo.png";

import "./header.css";

const Header = () => {
  const [menu, setmenu] = useState(true);
  return (
    <div className="header">
      <div className="container">
        {menu ? (
          <motion.div
            whileTap={{ scale: 0.7 }}
            initial={{ scale: 1 }}
            animate={{ rotate: 360 }}
            transition={{ ease: "easeInOut", duration: 0.1 }}
            className="menu_icon"
            onClick={() => {
              setmenu(!menu);
            }}
          >
            <AiOutlineMenuUnfold size={24} />
          </motion.div>
        ) : (
          <motion.div
            whileTap={{ scale: 0.7 }}
            initial={{ scale: 1 }}
            className="menu_icon"
            onClick={() => {
              setmenu(!menu);
            }}
          >
            <AiOutlineMenuFold size={24} />
          </motion.div>
        )}
        {/* mobile menu */}
        <div className="menu">
          <ul className={` menu_category ${menu ? "" : "show"} `}>
            <li>
              Development <BsArrowRightShort />
            </li>
            <li>
              Design (UI/UX) <BsArrowRightShort />
            </li>
            <li>
              Backend <BsArrowRightShort />
            </li>
            <li>
              Software Development <BsArrowRightShort />
            </li>
            <div className="menu_btns">
              <div className="menu_btn login">Login</div>
              <div className="menu_btn signup">Sign up</div>
            </div>
          </ul>
        </div>
        <div className="logo_container">
          <img src={logo} height={70} width={170} alt="" />
        </div>
        <div className="category">
          <h4>Categories</h4>
          <ul className="categ">
            <li>
              Development <BsArrowRightShort />
            </li>
            <li>
              Design (UI/UX) <BsArrowRightShort />
            </li>
            <li>
              Backend <BsArrowRightShort />
            </li>
            <li>
              Software <br /> Development <BsArrowRightShort />
            </li>
          </ul>
        </div>
        <div className="search">
          <input type="text" className="searchBar" />
        </div>
        <div className="right">
          <div className="cart">
            <AiOutlineShoppingCart size={32} />
          </div>
          <div className="btns">
            <div className="btn login">Login</div>
            <div className="btn signup">Sign up</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
