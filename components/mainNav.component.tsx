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
import { useMediaQuery } from "react-responsive";
import { useRouter } from "next/router";

const MainNavComponent = () => {
  const [collapseIcon, setCollapseIcon] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const router = useRouter();

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
    <div className="bg-lime px-2  sm:pl-11 sm:pr-14 static top auto ">
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

          <span className="text-2xl ml-[3px] font-[Poppins]">
            <Link href="/">
              <Image
                className="h-10 w-[204px] inline cursor-pointer"
                src={logo}
                alt="logo"
              />
            </Link>
          </span>

          <span className="xl:hidden block">
            <button className={styles.addToCartBtn}>
              <FontAwesomeIcon className="w-3" icon={faCartShopping} />
              <span className={styles.cartCount}>0</span>
            </button>
          </span>
        </div>
        <ul
          className={`${styles.mNavList}${collapseIcon ? styles.showMenu : ""}`}
        >
          <>
            <li className=" hidden xl:flex items-center px-5 my-6 xl:my-0 h-full">
              <Link
                href="/"
                className={`${
                  router.pathname === "/" ? "text-white" : "text-dark-blue"
                } text-[15px]  font-[600] hover:text-white`}
              >
                HOME
              </Link>
            </li>

            <li
              className="hidden xl:flex items-center px-5 my-6 xl:my-0 hover:text-white h-full"
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            >
              <Link
                href="/ourServices"
                className={`${
                  router.pathname === "/ourServices"
                    ? "text-white"
                    : "text-dark-blue"
                } text-[15px] tracking-wide text-dark-blue block hover:text-white relative font-semibold flex`}
                onClick={() => setIsHovering(false)}
              >
                OUR SERVICES
                <FontAwesomeIcon
                  className="w-3 ml-2 mb-1"
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

            <li className="hidden xl:flex items-center px-5 my-6  xl:my-0 h-full">
              <Link
                href="/contact-us"
                className={`${
                  router.pathname === "/contact-us"
                    ? "text-white"
                    : "text-dark-blue"
                } text-[15px]  font-[600] hover:text-white`}
              >
                CONTACT US
              </Link>
            </li>
            <li className="hidden xl:flex items-center px-6 my-5 xl:my-0">
              <button className={styles.addToCartBtn}>
                <FontAwesomeIcon className="w-3" icon={faCartShopping} />
                <span className={styles.cartCount}>0</span>
              </button>
            </li>
            {router.pathname !== "/order-now" && (
              <button className=" xl:flex items-center justify-center  h-[37px] w-[129px] py-2 bg-dark-blue text-white text-[12px] font-bold rounded-full uppercase">
                <Link href="/order-now">Order Online</Link>
              </button>
            )}
          </>
        </ul>
        {collapseIcon && <MobileScreenNav />}
      </nav>
    </div>
  );
};

export default MainNavComponent;
