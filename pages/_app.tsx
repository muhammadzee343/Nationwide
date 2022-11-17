import '../styles/globals.css'
import type { AppProps } from 'next/app'
import TopNav from "../components/topNav";
import MainNavComponent from "../components/mainNav.component";

export default function App({ Component, pageProps }: AppProps) {
  return(
      <>
    <TopNav/>
        <div className="relative">
    <MainNavComponent/>
        </div>
    <Component {...pageProps} />
      </>
  )
}
