import React from 'react';
import { AppProps } from 'next/app';

import { Client } from '../../prismic-configuration';

import { HomePageType } from '../types/HomePageType';

import Layout from '../components/Layout';

import 'tailwindcss/tailwind.css';
import '../styles/globals.scss';
import '../styles/button.scss';
import '../styles/layout.scss';
import '../styles/property.scss';
import '../styles/our-partners.scss';
import '../styles/carousel.scss';
import '../styles/input.scss';
import '../styles/tabs.scss';

type Props = {
  prismicData: HomePageType;
  AppProps;
};

const MyApp = ({ Component, pageProps }: AppProps) => {
  const { prismicData } = pageProps || {};
  return (
    <Layout prismicData={prismicData.data}>
      <Component {...pageProps} />
    </Layout>
  );
};

MyApp.getInitialProps = async () => {
  const client = Client();
  const prismicData = (await client.getSingle('homepage', null)) || {};

  return { prismicData };
};

export default MyApp;
