import React, { useEffect, useState } from "react";
import type { AppProps } from "next/app";
import { v4 as uuidv4 } from "uuid";
import {
  OverlayContext,
  SidebarContext,
  UuidContext,
} from "../context/sidebarContext";

import "../styles/globals.css";
import NextNProgress from 'nextjs-progressbar';
import Overlay from "../components/overLay.component";
import Layout from "../components/layout.component";
export default function App({ Component, pageProps }: AppProps) {
  const [showDrawer, setShowDrawer] = useState(false);
  const [overlay, setOverlay] = useState(false);
  const [propertyType, setPropertyType] = useState("");
  const [isLoading, setIsLoading] = useState(false);
    const [serviceId, setServiceId] = useState(false);
  const [uuid, setUuid] = useState("");

  useEffect(() => {

        const sessionId = localStorage.getItem("session_id");

        let Uuid = "";
        if (!uuid) {
            if (!sessionId){
                Uuid = uuidv4();
            }else{
                Uuid = sessionId;
            }
            localStorage.setItem("session_id",Uuid);
            setUuid(Uuid);
        }
  }, []);

  return (
    <>
      <UuidContext.Provider value={{uuid,setUuid}}>
        <OverlayContext.Provider value={{ isLoading, setIsLoading }}>
            <NextNProgress color="#C2CF10" startPosition={0.3} stopDelayMs={2000} height={5} showOnShallow={true} />
            {isLoading && <Overlay />}
          <SidebarContext.Provider
            value={{
              showDrawer,
              setShowDrawer,
              overlay,
              setOverlay,
              propertyType,
              setPropertyType,
              serviceId,
              setServiceId
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
