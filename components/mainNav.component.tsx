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
import { useContext, useEffect, useLayoutEffect, useState } from "react";
import MegaMenu from "./megaMenu.component";
import MobileScreenNav from "./mobileScreenNav.component";
import { useMediaQuery } from "react-responsive";
import { useRouter } from "next/router";
import { CartCountContext } from "../context/sidebarContext";

const MainNavComponent = () => {
  const [collapseIcon, setCollapseIcon] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isSticky, setSticky] = useState(false);
  useLayoutEffect(() => {
    function updatePosition() {
      if (window.pageYOffset >= 60) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    }
    window.addEventListener("scroll", updatePosition);
    updatePosition();
    return () => window.removeEventListener("scroll", updatePosition);
  }, []);
  const router = useRouter();
  const { count } = useContext(CartCountContext);
  useEffect(() => {

  }, [count]);

  useEffect(()=>{
    setCollapseIcon(false);
  },[router.asPath])

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

  const goToCheckout = () => {
    if (count && count > 0) {
      router.push({ pathname: "/checkout" });
    }
  };

  return (
    <div className="bg-lime pl-[20px] pr-[20px] md:pl-[20px] md:pr-[20px] static top auto xl:pr-14 xl:pl-14">
      <nav className="pl-0 xl:flex xl:items-center xl:justify-between md:flex md:items-center md:justify-between">
        <div className="flex justify-between items-center py-5">
          <span
            className="text-3xl cursor-pointer mx-0 xl:hidden md:hidden block"
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
                className="h-10 w-[204px] xl:w-[204px]  md:w-[150px] md:h-[auto] inline cursor-pointer"
                src={logo}
                alt="logo"
              />
            </Link>
          </span>

          <span className="xl:hidden md:hidden  block mr-3">
            <button
              className={styles.addToCartBtn}
              onClick={() => goToCheckout()}
            >
              <FontAwesomeIcon className="w-3" icon={faCartShopping} />
              <span className={styles.cartCount}>{count || 0}</span>
            </button>
          </span>
        </div>
        <ul
          className={`${styles.mNavList}${collapseIcon ? styles.showMenu : ""}`}
        >
          <>
            <li className=" hidden xl:flex md:flex items-center px-7 my-6 xl:my-0 h-full">
              <Link
                href="/"
                className={`${
                  router.pathname === "/"
                    ? "text-white"
                    : "text-dark-blue"
                } text-[15px]  md:text-[14px]  xl:text-[15px] font-[600] hover:text-white`}
              >
                HOME
              </Link>
            </li>

            <li
              className="hidden xl:flex  md:flex items-center px-5 my-6 xl:my-0 hover:text-white h-full"
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            >
              <Link
                href="/our-services"
                className={`${
                  router.pathname === "/our-services" 
                    ? "text-white"
                    : "text-dark-blue"
                } text-[15px] md:text-[14px]  xl:text-[15px] tracking-wide  block hover:text-white relative font-semibold flex`}
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

            <li className="hidden xl:flex md:flex items-center px-5 my-6 xl:my-0 h-full">
              <Link
                href="/contact-us"
                className={`${
                  router.pathname === "/contact-us" 
                    ? "text-white"
                    : "text-dark-blue"
                } text-[15px]  md:text-[14px] md:text-[13px] xl:text-[15px] font-[600] hover:text-white`}
              >
                CONTACT US
              </Link>
            </li>
            <li className="hidden md:flex  items-center px-6 my-5 md:my-0 cursor-pointer">
              <a
                className={styles.addToCartBtn}
                onClick={() => goToCheckout()}
                href="/checkout"

              >
                <FontAwesomeIcon className="w-3" icon={faCartShopping} />
                <span className={styles.cartCount}>{count || 0}</span>
              </a>
            </li>
            {router.pathname !== "/order-now" && (
              <button className="  hidden xl:flex lg:flex items-center justify-center  h-[37px] w-[129px] py-2 bg-dark-blue text-white text-[12px] font-bold rounded-full uppercase">
                <Link href="/order-now">Order Online</Link>
              </button>
            )}
          </>
        </ul>
        {collapseIcon && <MobileScreenNav toggleMenuOnClick={setCollapseIcon} />}
      </nav>
    </div>
  );
};

export default MainNavComponent;
