import { AppContextProvider } from '../Contexts/AppContext';
import { ThemeContextProvider } from '../Contexts/ThemeContext';
import { ToastContainer } from 'react-toastify';
import '../styles/globals.scss';
import '../styles/toast.scss';

function MyApp({ Component, pageProps }) {

  return (
    <ThemeContextProvider>
      <AppContextProvider>
        <Component {...pageProps} />
        <ToastContainer />
      </AppContextProvider>
    </ThemeContextProvider>
  )
}

export default MyApp
