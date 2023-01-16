import { useState } from "react";
import type { AppProps } from "next/app";

import TopNavComponent from "../components/topNav.component";
import MainNavComponent from "../components/mainNav.component";
import Footer from "../components/footer.component";
import DrawerComponent from "../components/drawer.component";

import { SidebarContext } from "../context/sidebarContext";
import { OverlayContext } from "../context/sidebarContext";
import { myFont } from "../utility/constants";

import "../styles/globals.css";
import Overlay from "../components/overLay.component";

export default function App({ Component, pageProps }: AppProps) {
  const [showDrawer, setShowDrawer] = useState(false);
  const [overlay, setOverlay] = useState(false);
  const [propertyType, setPropertyType] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <OverlayContext.Provider value={{ isLoading, setIsLoading }}>
        {isLoading && <Overlay />}
        <SidebarContext.Provider
          value={{
            showDrawer,
            setShowDrawer,
            overlay,
            setOverlay,
            propertyType,
            setPropertyType,
          }}
        >
          <main className={myFont.className}>
            {overlay && <DrawerComponent />}
            <TopNavComponent />
            <div className="xl:top-0 xl:sticky z-[1000]">
              <MainNavComponent />
            </div>
            <Component {...pageProps} />
            <Footer />
          </main>
        </SidebarContext.Provider>
      </OverlayContext.Provider>
    </>
  );
}
