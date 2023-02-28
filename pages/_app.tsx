/* eslint-disable @next/next/next-script-for-ga */
import type { AppProps } from 'next/app'
import Head from 'next/head';
import Script from 'next/script';
import styled, { ThemeProvider } from 'styled-components'
import GlobalStyle from "../styles";
import {theme} from "../styles/theme";



export default function App({ Component, pageProps }: AppProps) {
  return (

    <>
      <Head>
        <link rel="canonical" href="https://www.2esestechnology.com.br" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
        
       
      </Head>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-SLXWF6S89G" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
             window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', 'G-SLXWF6S89G');
            `

          }}
        />
  
    <ThemeProvider theme={theme}>
      <GlobalStyle />
    
        <Component {...pageProps} />
      </ThemeProvider>
      </>
  )
}
