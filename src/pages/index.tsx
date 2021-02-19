import React from 'react';
import { GetStaticProps } from 'next';
import { Client } from '../../prismic-configuration';

import Featured from '../components/Featured';
import Offers from '../components/Offers';
import FeaturedProperty from '../components/FeaturedProperty';
import OurPartners from '../components/OurPartners';
import Carousel from '../components/Carousel';
import Footer from '../components/Footer';
import Header from '../components/Header';

const HomePage = ({ doc }) => {
  if (doc) {
    const { data } = doc || {};
    const { body, body1, logo, black_logo } = data || {};
    const { offer_title, offer_description } = data || {};

    return (
      <div className="container">
        <Header prismicData={body1} logo={black_logo} />
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
        <FeaturedProperty prismicData={data} />
        <OurPartners prismicData={body[2]} />
        <Footer prismicData={body1} logo={logo} />
      </div>
    );
  }
  return null;
};

export const getStaticProps: GetStaticProps = async ({
  preview = null,
  previewData = {},
}) => {
  const { ref } = previewData || {};

  const client = Client();
  const doc = (await client.getSingle('homepage', ref ? { ref } : null)) || {};

  return {
    props: {
      doc,
      preview,
    },
  };
};

export default HomePage;
