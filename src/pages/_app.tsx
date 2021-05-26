import { AppContextProvider } from '../Contexts/AppContexts';
import '../styles/globals.scss';
import '../styles/animation/toast.scss';

function MyApp({ Component, pageProps }) {

  return (
    <AppContextProvider>
      <Component {...pageProps} />
    </AppContextProvider>

  )
}

export default MyApp
