import { useEffect, useState } from "react";
import type { AppProps } from "next/app";
import { v4 as uuidv4 } from "uuid";
import {
  OverlayContext,
  SidebarContext,
  UuidContext,
} from "../context/sidebarContext";

import "../styles/globals.css";
import Overlay from "../components/overLay.component";
import Layout from "../components/layout.component";
export default function App({ Component, pageProps }: AppProps) {
  const [showDrawer, setShowDrawer] = useState(false);
  const [overlay, setOverlay] = useState(false);
  const [propertyType, setPropertyType] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [uuid, setUuid] = useState("");
  useEffect(() => {
    let Uuid = "";
    if (!uuid) {
      Uuid = uuidv4();
      setUuid(Uuid);
    }
  }, []);
  return (
    <>
      <UuidContext.Provider value={{ uuid }}>
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
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </SidebarContext.Provider>
        </OverlayContext.Provider>
      </UuidContext.Provider>
    </>
  );
}
