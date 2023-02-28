/* eslint-disable react/no-children-prop */
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Head from 'next/head';
import PremisionCookie from './permisonCookie';
import * as React from 'react';
import Slide from '@mui/material/Slide';
import Topo from './Header';
import dynamic from 'next/dynamic';

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  children: React.ReactElement;
}
const Footer = dynamic(
  () => import('./Footer'),
  { loading: () => <p>Loading ...</p>, ssr: true }
)



export default function BaseSite({ children }, props: Props) {

  return (
    <>

      <Head>
        <title>Calculo Tabela SAC</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <React.Fragment>
        <Topo children={undefined} />
        {children}
        <PremisionCookie />
        <Footer />
      </React.Fragment>
    </>
  );
}