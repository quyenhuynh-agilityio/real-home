import React from 'react';

import { GetServerSideProps, NextPage } from 'next';
import ErrorPage from 'next/error';

import { Client } from '../../../prismic-configuration';

import { HomePageType } from '../../types/HomePageType';
import { Property } from '../../types/PropertyType';

import Layout from '../../components/Layout';
import Tabs from '../../components/Tabs';

type Props = {
  prismicData: HomePageType;
  properties: Property;
};

const Properties: NextPage<Props> = (props) => {
  const { prismicData, properties } = props || {};

  if (!prismicData) {
    return <ErrorPage statusCode={404} />;
  }
  const { body1, logo, black_logo, featured_properties_describe } =
    prismicData.data || {};

  return (
    <div className="container">
      <Layout body1={body1} black_logo={black_logo} logo={logo}>
        <Tabs
          tabs={properties}
          featured_properties_describe={featured_properties_describe}
        />
      </Layout>
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

export default Properties;
