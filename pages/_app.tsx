import "../styles/globals.css";
import type { AppProps } from "next/app";
import TopNavComponent from "../components/topNav.component";
import MainNavComponent from "../components/mainNav.component";
import Footer from "../components/footer.component";
import DeviceProvider, {
  DeviceContext,
} from "../components/deviceContext.component";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DeviceProvider>
        <TopNavComponent />
        <div className="xl:top-0 xl:sticky z-[1000]">
          <MainNavComponent />
        </div>
        <Component {...pageProps} />
        <Footer />
      </DeviceProvider>
    </>
  );
}
