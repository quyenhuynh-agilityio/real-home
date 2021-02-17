import React from 'react';
import { RichText } from 'prismic-reactjs';
import { Client } from '../../prismic-configuration';

const HomePage = ({ doc }) => {
  if (doc) {
    return <div>{RichText.asText(doc.data.hero_title)}</div>;
  }
  return null;
};

export async function getStaticProps({ preview = null, previewData = {} }) {
  const { ref } = previewData || {};

  const client = Client();
  const doc = (await client.getSingle('homepage', ref ? { ref } : null)) || {};

  return {
    props: {
      doc,
      preview,
    },
  };
}

export default HomePage;
