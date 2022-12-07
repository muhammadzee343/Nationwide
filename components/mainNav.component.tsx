import Image from "next/image";
import Link from "next/link";
import logo from "../public/NWLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../styles/header.module.css";
import {
  faBars,
  faCartShopping,
  faChevronDown,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";
import MegaMenu from "./megaMenu.component";
import MobileScreenNav from "./mobileScreenNav.component";
import { DeviceContext } from "./deviceContext.component";
import MediaQuery, { useMediaQuery } from "react-responsive";

const MainNavComponent = () => {
  const [collapseIcon, setCollapseIcon] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const { xlargeDevice }: any = useContext(DeviceContext);

  const handleMediaQueryChange = (matches: any) => {
    // matches will be true or false based on the value for the media query
    if (matches) {
      setCollapseIcon(false);
    }
  };
  const isDesktopOrLaptop = useMediaQuery(
    { minWidth: 1200 },
    undefined,
    handleMediaQueryChange
  );
  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <div className="bg-lime px-2 sm:px-20 static top auto ">
      <nav className="px-2  xl:flex xl:items-center xl:justify-between">
        <div className="flex justify-between items-center py-5">
          <span
            className="text-3xl cursor-pointer mx-2 xl:hidden block"
            onClick={() => setCollapseIcon(!collapseIcon)}
          >
            <FontAwesomeIcon
              className=" w-6 sm:w-8 text-dark-blue"
              icon={!collapseIcon ? faBars : faXmark}
            />
          </span>

          <span className="text-2xl font-[Poppins]">
            <Link href="/">
              <Image
                className="h-10 w-52 inline cursor-pointer"
                src={logo}
                alt="logo"
              />
            </Link>
          </span>

          <span className="xl:hidden block">
            <button className={styles.addToCartBtn}>
              <FontAwesomeIcon className="w-4" icon={faCartShopping} />
              <span className={styles.cartCount}>0</span>
            </button>
          </span>
        </div>
        <MediaQuery minWidth={1200} onChange={handleMediaQueryChange}>
          <ul
            className={`${styles.mNavList}${
              collapseIcon ? styles.showMenu : ""
            }`}
          >
            {xlargeDevice && (
              <>
                <li className="flex items-center px-6 my-6 xl:my-0 h-full">
                  <Link
                    href="/"
                    className="text-[15px] text-dark-blue font-[600] hover:text-white"
                  >
                    HOME
                  </Link>
                </li>

                <li
                  className="flex items-center px-6 my-6 xl:my-0 hover:text-white h-full"
                  onMouseOver={handleMouseOver}
                  onMouseOut={handleMouseOut}
                >
                  <Link
                    href="/ourServices"
                    className="text-[15px] text-dark-blue block hover:text-white relative font-semibold flex"
                    onClick={() => setIsHovering(false)}
                  >
                    OUR SERVICES
                    <FontAwesomeIcon
                      className="w-4 ml-2 mb-1"
                      icon={faChevronDown}
                    />
                  </Link>
                  {isHovering && (
                    <MegaMenu
                      //@ts-ignore
                      onMouseOver={handleMouseOver}
                      onMouseOut={handleMouseOut}
                      onLinkClick={setIsHovering}
                    />
                  )}
                </li>

                <li className="flex items-center px-6 my-6  xl:my-0 h-full">
                  <Link
                    href="#"
                    className="text-[15px] text-dark-blue font-semibold hover:text-white"
                  >
                    CONTACT US
                  </Link>
                </li>
                <li className="flex items-center px-6 my-6 xl:my-0">
                  <button className={styles.addToCartBtn}>
                    <FontAwesomeIcon className="w-4" icon={faCartShopping} />
                    <span className={styles.cartCount}>0</span>
                  </button>
                </li>
                <button className="bg-dark-blue text-white px-6 py-2 rounded-full text-sm font-bold">
                  Order Online
                </button>
              </>
            )}
          </ul>
        </MediaQuery>
        {collapseIcon && <MobileScreenNav />}
      </nav>
    </div>
  );
};

export default MainNavComponent;
