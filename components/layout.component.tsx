import React, { useContext, useState } from "react";
import Meta from "./meta.component";
import { myFont } from "../utility/constants";
import DrawerComponent from "./drawer.component";
import TopNavComponent from "./topNav.component";
import MainNavComponent from "./mainNav.component";
import Footer from "./footer.component";
import { CartCountContext, SidebarContext } from "../context/sidebarContext";

function Layout({ children }) {
  const { overlay } = useContext<any>(SidebarContext);
  const [count, setCount] = useState(0);
  return (
    <div>
      <Meta />

      <main className={myFont.className}>
        {overlay && <DrawerComponent />}
        <CartCountContext.Provider value={{ count, setCount }}>
          <TopNavComponent />
          <div className="xl:top-0 xl:sticky z-[1000]">
            <MainNavComponent />
          </div>
          {children}
          <Footer />
        </CartCountContext.Provider>
      </main>
    </div>
  );
}

export default Layout;
