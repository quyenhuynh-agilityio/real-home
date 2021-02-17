import React, { Fragment } from 'react';
import { RichText } from 'prismic-reactjs';
import { Client } from '../../prismic-configuration';

import Button from '../components/Button';

const HomePage = ({ doc }) => {
  if (doc) {
    return (
      <Fragment>
        <div>{RichText.asText(doc.data.hero_title)}</div>
        <Button className="btn btn-primary bg-red-100 font-raleWay">
          All Properties
        </Button>
      </Fragment>
    );
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
