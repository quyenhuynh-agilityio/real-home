import React, { memo } from 'react';

import { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import ErrorPage from 'next/error';

import { Client } from '../../../prismic-configuration';

import { HomePageType } from '../../types/HomePageType';
import { Property } from '../../types/PropertyType';

import Tabs from '../../components/Tabs';

type Props = {
  prismicData: HomePageType;
  properties: Array<Property>;
};

const Properties: NextPage<Props> = (props) => {
  const { prismicData, properties } = props || {};

  if (!prismicData) {
    return <ErrorPage statusCode={404} />;
  }
  const { featured_properties_describe } = prismicData.data || {};

  return (
    <div className="container">
      <Head>
        <title>Properties Page</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Tabs
        tabs={properties}
        featured_properties_describe={featured_properties_describe}
      />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async ({
  previewData = {},
}) => {
  const { ref } = previewData || {};
  const client = Client();
  const prismicData =
    (await client.getSingle('homepage', ref ? { ref } : null)) || {};

  const result = await fetch(`http://localhost:8000/properties`);
  const properties = await result.json();

  return {
    props: {
      prismicData,
      properties,
    },
  };
};

export default memo(Properties);
