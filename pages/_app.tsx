import "../styles/globals.css";
import type { AppProps } from "next/app";
import TopNavComponent from "../components/topNav.component";
import MainNavComponent from "../components/mainNav.component";
import Footer from "../components/footer.component";
import localFont from "@next/font/local";
import DrawerComponent from "../components/Drawer.component";
import { useState } from "react";

const myFont = localFont({
  src: [
    {
      path: "../public/fonts/OpenSans/OpenSans-Regular.ttf",
      weight: "400",
    },
    {
      path: "../public/fonts/OpenSans/OpenSans-Medium.ttf",
      weight: "500",
    },
    {
      path: "../public/fonts/OpenSans/OpenSans-SemiBold.ttf",
      weight: "600",
    },
    {
      path: "../public/fonts/OpenSans/OpenSans-Bold.ttf",
      weight: "700",
    },
  ],
  fallback: ["Helvetica", "ui-sans-serif"],
});

export default function App({ Component, pageProps }: AppProps) {
  const [showDrawer, setShowDrawer] = useState(false);
  const [overlay, setOverlay] = useState(false);
  const displayDrawer = () => {
    setTimeout(() => {
      setShowDrawer(true);
    }, 1);

    setOverlay(true);
  };
  return (
    <>
      <main className={myFont.className}>
        {overlay && (
          <DrawerComponent
            showDrawer={showDrawer}
            closeDrawer={setShowDrawer}
            showOverlay={overlay}
            closeOverlay={setOverlay}
          />
        )}
        <TopNavComponent />
        <div className="xl:top-0 xl:sticky z-[1000]" onClick={displayDrawer}>
          <MainNavComponent />
        </div>
        <Component {...pageProps} />
        <Footer />
      </main>
    </>
  );
}
