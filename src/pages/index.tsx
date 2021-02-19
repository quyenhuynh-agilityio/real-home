import React, { Fragment } from 'react';
import { RichText } from 'prismic-reactjs';
import { Client } from '../../prismic-configuration';

import Button from '../components/Button';
import Featured from '../components/Featured';
import Offers from '../components/Offers';
import CardProperty from '../components/CardProperty';
import OurPartners from '../components/OurPartners';
import SimpleSlider from '../components/Carousel';
import Footer from '../components/Footer';

const HomePage = ({ doc }) => {
  if (doc) {
    const { data } = doc || {};
    const { body, body1, logo } = data || [];
    const { offer_title, offer_description } = data || {};
    console.log('data', data);

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
        <div className="grid grid-cols-3 gap-4">
          <CardProperty
            href="/about"
            imageAlt="1450 Cloudcroft Drop"
            imageSrc="/boutiquePenhouse.png"
            propertyName="1450 Cloudcroft Drop"
            propertyNameCountry="Illinois / Chicago"
            propertyPrice="$250,000"
          />{' '}
          <CardProperty
            href="/about"
            imageAlt="1450 Cloudcroft Drop"
            imageSrc="/boutiquePenhouse.png"
            propertyName="1450 Cloudcroft Drop"
            propertyNameCountry="Illinois / Chicago"
            propertyPrice="$250,000"
          />{' '}
          <CardProperty
            href="/about"
            imageAlt="1450 Cloudcroft Drop"
            imageSrc="/boutiquePenhouse.png"
            propertyName="1450 Cloudcroft Drop"
            propertyNameCountry="Illinois / Chicago"
            propertyPrice="$250,000"
          />{' '}
          <CardProperty
            href="/about"
            imageAlt="1450 Cloudcroft Drop"
            imageSrc="/boutiquePenhouse.png"
            propertyName="1450 Cloudcroft Drop"
            propertyNameCountry="Illinois / Chicago"
            propertyPrice="$250,000"
          />{' '}
          <CardProperty
            href="/about"
            imageAlt="1450 Cloudcroft Drop"
            imageSrc="/boutiquePenhouse.png"
            propertyName="1450 Cloudcroft Drop"
            propertyNameCountry="Illinois / Chicago"
            propertyPrice="$250,000"
          />{' '}
          <CardProperty
            href="/about"
            imageAlt="1450 Cloudcroft Drop"
            imageSrc="/boutiquePenhouse.png"
            propertyName="1450 Cloudcroft Drop"
            propertyNameCountry="Illinois / Chicago"
            propertyPrice="$250,000"
          />
        </div>
        {body && body[2] && <OurPartners partners={body[2]} />}
        {body && body[1] && <SimpleSlider hero={body[1]} />}
        <Footer prismicData={body1} logo={logo} />
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
