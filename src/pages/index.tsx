import React from 'react';
import { GetStaticProps } from 'next';
import { Client } from '../../prismic-configuration';

import Featured from '../components/Featured';
import Offers from '../components/Offers';
import FeaturedProperty from '../components/FeaturedProperty';
import OurPartners from '../components/OurPartners';
import Carousel from '../components/Carousel';
import Layout from '../components/Layout';

const HomePage = ({ doc, properties }) => {
  console.log('properties', properties);
  if (doc) {
    const { data } = doc || {};
    const { body, body1, logo, black_logo } = data || {};
    const { offer_title, offer_description } = data || {};

    return (
      <div className="container">
        <Layout body1={body1} black_logo={black_logo} logo={logo}>
          <Carousel hero={body[1]} />
          <Offers title={offer_title} description={offer_description} />
          <div className="flex flex-row text-center justify-center bg-gray-110 py-100">
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
          <FeaturedProperty prismicData={data} properties={properties} />
          <OurPartners prismicData={body[2]} />
        </Layout>
      </div>
    );
  }
  return null;
};

export let getStaticProps: GetStaticProps = async ({
  preview = null,
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
      preview,
    },
  };
};

export default HomePage;
