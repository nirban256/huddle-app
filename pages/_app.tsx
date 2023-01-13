import '../styles/globals.scss'
import "tailwindcss/tailwind.css";
import { AppContextProvider } from "../context/contextProvider"
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <AppContextProvider>
    <Component {...pageProps} />
  </AppContextProvider>
}

export default MyApp
