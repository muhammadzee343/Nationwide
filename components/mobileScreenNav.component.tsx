import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import MegaMenu from "./megaMenu.component";
import { useState } from "react";

export default function MobileScreenNav({toggleMenuOnClick}) {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <ul className="absolute w-11/12 inset-x-0 mx-auto flex-col px-6 py-2 align-center bg-white shadow-sm rounded border z-[100] ">
      <li className="flex items-center border-b border-grey-500   xl:my-0 h-12  text-dark-blue">
        <Link href="/" onClick={() => toggleMenuOnClick(false)} className="text-[15px] font-[600] ">
          HOME
        </Link>
      </li>
      <li
        className="flex items-baseline border-b border-grey-500 text-dark-blue mt-3  xl:my-0 h-8"
        onClick={() => {
          setToggleMenu(!toggleMenu);
        }}
      >
        <Link href="/our-services" className="text-[15px] font-[600] ">
          OUR SERVICES
        </Link>
        <FontAwesomeIcon
          className="w-4 ,w-3 ml-2 mb-1 cursor-pointer"
          icon={faChevronDown}
        />
      </li>
      {toggleMenu && <MegaMenu onLinkClick={toggleMenuOnClick}/>}
      <li className="flex items-center  mt-3 h-12 xl:my-0 ">
        <Link
            onClick={() => toggleMenuOnClick(false)}
          href="/contact-us"
          className="text-[15px] font-[600] text-dark-blue"
        >
          CONTACT US
        </Link>
      </li>
    </ul>
  );
}
