import { AppContextProvider } from '../Contexts/AppContexts';
import '../styles/globals.scss';
import '../styles/toast.scss';

function MyApp({ Component, pageProps }) {

  return (
    <AppContextProvider>
      <Component {...pageProps} />
    </AppContextProvider>

  )
}

export default MyApp
