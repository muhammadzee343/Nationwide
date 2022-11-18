import Image from "next/image";
import Link from "next/link";
import logo from "../public/NWLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../styles/header.module.css";
import {
  faBars,
  faCartShopping,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import MegaMenu from "./megaMenu.component";

const MainNavComponent = () => {
  const [collapseIcon, setCollapseIcon] = useState(true);
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  const changeIcon = () => {
    setCollapseIcon(!collapseIcon);
  };

  return (
    <div className="bg-lime px-2 sm:px-20">
      <nav className="px-2  xl:flex xl:items-center xl:justify-between">
        <div className="flex justify-between items-center py-5">
          <span
            className="text-3xl cursor-pointer mx-2 xl:hidden block"
            onClick={changeIcon}
          >
            <FontAwesomeIcon
              className="w-8 ,w-7 text-dark-blue"
              icon={!collapseIcon ? faBars : faXmark}
            />
          </span>

          <span className="text-2xl font-[Poppins]">
            <Image
              className="h-10 w-52 inline cursor-pointer"
              src={logo}
              alt="logo"
            />
          </span>

          <span className="xl:hidden block">
            <button className={styles.addToCartBtn}>
              <FontAwesomeIcon className="w-4 ,w-3" icon={faCartShopping} />
              <span className={styles.cartCount}>0</span>
            </button>
          </span>
        </div>

        <ul
          className={`${styles.mNavList} ${
            collapseIcon ? styles.showMenu : ""
          }`}
        >
          <li className="flex items-center px-6 my-6 xl:my-0 h-full">
            <Link href="#" className="text-[15px] font-[600] hover:text-white">
              HOME
            </Link>
          </li>
          <li
            className="flex items-center px-6 my-6 xl:my-0  h-full"
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            <Link
              href="#"
              className="text-[15px] block font-semibold hover:text-white "
            >
              OUR SERVICES
            </Link>

            {isHovering && (
              <MegaMenu
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
              />
            )}
          </li>
          <li className="flex items-center px-6 my-6  xl:my-0 h-full">
            <Link
              href="#"
              className="text-[15px] font-semibold hover:text-white"
            >
              CONTACT US
            </Link>
          </li>
          {!collapseIcon ? (
            <>
              <li className="flex items-center px-6 my-6 xl:my-0">
                <button className={styles.addToCartBtn}>
                  <FontAwesomeIcon className="w-4 ,w-3" icon={faCartShopping} />
                  <span className={styles.cartCount}>0</span>
                </button>
              </li>
              <button className="bg-dark-blue text-white px-6 py-2 rounded-full text-sm font-bold">
                Order Online
              </button>
            </>
          ) : (
            ""
          )}
        </ul>
      </nav>
    </div>
  );
};

export default MainNavComponent;
