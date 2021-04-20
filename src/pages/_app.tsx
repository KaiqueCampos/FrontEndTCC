import {UserProvider } from '../Contexts/UserContext'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  )
}

export default MyApp
