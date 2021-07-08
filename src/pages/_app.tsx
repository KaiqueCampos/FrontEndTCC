import { AppContextProvider } from '../Contexts/AppContexts';
import { ThemeContextProvider } from '../Contexts/ThemeContext';
import '../styles/globals.scss';
import '../styles/toast.scss';

function MyApp({ Component, pageProps }) {

  return (
    <ThemeContextProvider>
      <AppContextProvider>
        <Component {...pageProps} />
      </AppContextProvider>
    </ThemeContextProvider>


  )
}

export default MyApp
