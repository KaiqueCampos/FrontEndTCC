import {UserProvider } from '../Contexts/UserContext'
import '../styles/globals.scss';
import { CookiesProvider } from "react-cookie"


function MyApp({ Component, pageProps }) {
  return (
    <CookiesProvider>
      <Component {...pageProps} />
    </CookiesProvider>
  )
}

export default MyApp
