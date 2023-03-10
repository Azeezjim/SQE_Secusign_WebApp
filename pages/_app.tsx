import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { CurrencyProvider } from '../context/CurrencyContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <CurrencyProvider>
  <Component {...pageProps} />
  </CurrencyProvider>
  )
}

export default MyApp
