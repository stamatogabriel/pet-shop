/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import Head from 'next/head'
import Router from 'next/router'
import NProgress from 'nprogress'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'

import GlobalStyle, { theme } from '../styles/global'

import { persistor, store } from '../store'
import Header from '../components/header'
import CookieBar from '../components/cookie_bar'

Router.events.on('routeChangeStart', () => {
  NProgress.start()
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

function MyApp({ Component, pageProps }): JSX.Element {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Head>
          <title>Pet Shop</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <meta name="description" content="Pet Shop" />
          <meta name="keywords" content="Pet Shop" />
          <meta name="og:image" content="/assets/Logo.png" />
          <meta charSet="UTF-8" />
          <link rel="shortcut icon" href="/favicon.ico" />
          <link rel="stylesheet" type="text/css" href="/styles/nprogress.css" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
        </Head>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <Header />
          <Component {...pageProps} />
          <CookieBar />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  )
}

export default MyApp
