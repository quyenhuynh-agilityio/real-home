import React, { memo } from 'react';

import { GetServerSideProps, NextPage } from 'next';
import ErrorPage from 'next/error';

import { Client } from '../../../prismic-configuration';

import { HomePageType } from '../../types/HomePageType';
import { Property } from '../../types/PropertyType';

import SEO from '../../components/SEO';
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
      <SEO
        title="Properties Page"
        siteTitle="Properties Page"
        description="This is Properties Page"
      />
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
