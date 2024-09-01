import React from "react";
import { fontStyles, styles } from "../Styles/styles";
import { NavLink } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
import { BiCar, BiChair, BiSolidCube } from "react-icons/bi";

const Navbar = () => {
  return (
    <nav
      className={`${styles.padding} ${styles.flexBetween} border-b border-gray-500 text-white bg-black`}
    >
      <h1 className={`${fontStyles.h5}`}>
        Hello <span className="text-green uppercase">ar</span>
      </h1>
      <ul
        className={`${styles.flexResponsive} ${fontStyles.p5} text-white gap-10 font-medium`}
      >
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="relative cursor-pointer group">
          <span className={`${styles.flexRow} gap-1`}>
            Product <FaChevronDown className={`${styles.transitionLinear} group-hover:text-green group-hover:rotate-180`} />{" "}
          </span>
          <div className={ `absolute left-1/2 -translate-x-1/2 top-0 pt-16 w-auto scale-0 group-hover:scale-100 ${styles.transitionLinear}` }>
            <div
              className={`${styles.flexCol} bg-black border border-gray-700 rounded-xl `}
            >
              <NavLink to="/ramp" className={`${styles.flexRow} gap-3 p-4`}>
                <BiCar className="text-2xl" />{" "}
                <p>
                  Hello<span className="text-green">Ramp</span>
                </p>
              </NavLink>
              <NavLink to="/shape" className={`${styles.flexRow} gap-3 p-4`}>
                <BiChair className="text-2xl" />{" "}
                <p className={`${styles.flexRow}`}>
                  Hello <span className="text-green">Shape</span>
                </p>
              </NavLink>
              <NavLink to="/shift" className={`${styles.flexRow} gap-3 p-4`}>
                <BiSolidCube className="text-2xl" />{" "}
                <p>
                  Hello<span className="text-green">Shift</span>
                </p>
              </NavLink>
            </div>
          </div>
        </li>
        <li>
          <NavLink to="/blog">Blog</NavLink>
        </li>
        <li>
          <NavLink to="/about">About Us</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
