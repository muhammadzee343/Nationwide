import React, { useContext, useState } from "react";
import Meta from "./meta.component";
import { myFont } from "../utility/constants";
import DrawerComponent from "./drawer.component";
import TopNavComponent from "./topNav.component";
import MainNavComponent from "./mainNav.component";
import Footer from "./footer.component";
import { CartCountContext, SidebarContext } from "../context/sidebarContext";
import Link from "next/link";
import {useRouter} from "next/router";

function Layout({ children }) {
  const { overlay } = useContext<any>(SidebarContext);
  const [count, setCount] = useState(0);

  const router = useRouter();

  return (
    <div>
      <Meta />
      <main className={`${myFont.className} `}>
        {overlay && <DrawerComponent />}
        <CartCountContext.Provider value={{ count, setCount }}>
          <TopNavComponent />
          <div className="xl:top-0 xl:sticky z-[1000]">
            <MainNavComponent />
          </div>

          {children}
          <Footer />
          {!router.asPath.includes("checkout") && !router.asPath.includes("order-now") &&
            <div className="absolute bottom-5 ml-5 sticky z-[1000] flex items-center lg:hidden">
              <div className="static  bg-lime text-white h-16 w-16 rounded-full flex items-center border-gray-900 border-2">
                <Link href="/order-now">
                  <p className="text-center text-[14px] font-semibold">
                    Order Online
                  </p>
                </Link>
              </div>
            </div>
          }
        </CartCountContext.Provider>
      </main>
    </div>
  );
}

export default Layout;
