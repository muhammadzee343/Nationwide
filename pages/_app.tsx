import '../styles/globals.css'
import type { AppProps } from 'next/app'
import TopNav from "../components/topNav";
import MainNav from "../components/mainNav";

export default function App({ Component, pageProps }: AppProps) {
  return(
      <>
    <TopNav/>
    <MainNav/>
    <Component {...pageProps} />
      </>
  )
}
