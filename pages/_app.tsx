import '../styles/globals.css'
import type { AppProps } from 'next/app'
import TopNavComponent from "../components/topNav.component";
import MainNavComponent from "../components/mainNav.component";

export default function App({ Component, pageProps }: AppProps) {
  return(
      <>
    <TopNavComponent/>
        <div className="relative">
    <MainNavComponent/>
        </div>
    <Component {...pageProps} />
      </>
  )
}
