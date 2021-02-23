import { GetServerSideProps } from 'next';
import fetch from 'node-fetch';
import ErrorPage from 'next/error';

import { Client } from '../../../prismic-configuration';

import Layout from '../../components/Layout';
import Tabs from '../../components/Tabs';

const Properties = ({ doc, properties }) => {
  if (!doc) {
    return <ErrorPage statusCode={404} />;
  }
  const { body1, logo, black_logo } = doc.data || {};

  return (
    <div className="container">
      <Layout body1={body1} black_logo={black_logo} logo={logo}>
        <Tabs tabs={properties} />
      </Layout>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async ({
  previewData = {},
}) => {
  const { ref } = previewData || {};
  const client = Client();
  const doc = (await client.getSingle('homepage', ref ? { ref } : null)) || {};

  const result = await fetch(`http://localhost:8000/properties`);
  const properties = await result.json();

  return {
    props: {
      doc,
      properties,
    },
  };
};

export default Properties;
