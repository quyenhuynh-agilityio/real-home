import React, { Fragment } from 'react';
import { RichText } from 'prismic-reactjs';
import { Client } from '../../prismic-configuration';

import Button from '../components/Button';
import Featured from '../components/Featured';
import Offers from '../components/Offers';

const HomePage = ({ doc }) => {
  if (doc) {
    const { data } = doc || {};
    const { body } = data || [];
    const { offer_title, offer_description } = data || {};

    return (
      <Fragment>
        <div>{RichText.asText(doc.data.hero_title)}</div>
        <Button className="btn btn-primary bg-red-100 font-raleWay">
          All Properties
        </Button>
        <Offers title={offer_title} description={offer_description} />
        <div className="flex flex-row text-center justify-center">
          {body &&
            body[0] &&
            body[0].items.map((item, index) => {
              const { featured_icon, featured_name, featured_info } =
                item || {};
              const { url, alt } = featured_icon || {};
              return (
                <Featured
                  src={url}
                  alt={alt}
                  description={featured_info}
                  title={featured_name}
                  key={`${index}-${featured_name}`}
                />
              );
            })}
        </div>
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
