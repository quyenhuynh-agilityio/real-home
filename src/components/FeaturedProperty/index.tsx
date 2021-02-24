import React from 'react';
import { RichText } from 'prismic-reactjs';

import { GetServerSideProps, NextPage } from 'next';

import Button from '../Button';
import CardProperty from '../CardProperty';

type Property = {
  src?: string;
  alt?: string;
  title?: string;
  description?: string;
};

type FeaturedType = Property[];

const FeaturedProperty: NextPage<{
  prismicData;
  properties: FeaturedType;
}> = ({ prismicData, properties }) => {
  const {
    featured_properties_title,
    featured_properties_description,
    featured_properties_describe,
    all_properties_button_label,
  } = prismicData || {};

  const formatData = properties.slice(0, 6);

  return (
    <div className="text-center py-100 bg-gray-120">
      <h3 className="text-5xl font-raleWay color-gray-70">
        {RichText.asText(featured_properties_title)}
      </h3>
      <div className="font-playfair text-base pt-64">
        {RichText.asText(featured_properties_description)}{' '}
      </div>
      <div className="grid grid-cols-3 gap-10 py-64 mx-auto w-1147">
        {formatData.map((item) => {
          const { name, country, state, price, image, id } = item;
          const { url, alt } = image || {};

          return (
            <CardProperty
              href="/properties"
              id={id}
              imageAlt={alt}
              imageSrc={url}
              name={name}
              state={state}
              country={country}
              price={price}
              key={`${id}-${name}`}
            />
          );
        })}
      </div>
      <Button className="btn btn-primary bg-red-100 font-raleWay rounded-sm">
        {RichText.asText(all_properties_button_label)}
      </Button>
    </div>
  );
};
export default FeaturedProperty;
