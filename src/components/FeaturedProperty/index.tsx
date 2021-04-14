import React from 'react';

import { useRouter } from 'next/router';

import { RichText } from 'prismic-reactjs';

import { HomePageType } from '../../types/HomePageType';
import { Property } from '../../types/PropertyType';

import Button from '../Button';
import CardProperty from '../CardProperty';

type Props = {
  prismicData: HomePageType;
  properties: Property[];
};

const FeaturedProperty: React.FC<Props> = (props) => {
  const { properties = [], prismicData } = props || {};

  const router = useRouter();

  const {
    featured_properties_title,
    featured_properties_description,
    featured_properties_describe,
    all_properties_button_label,
  } = prismicData.data || {};

  const formatData = properties.slice(0, 6);

  const handleClick = (e) => {
    e.preventDefault();
    router.push('/properties');
  };

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
          const { name, image, id } = item;

          return (
            <CardProperty
              href="/properties"
              property={item}
              key={`${id}-${name}`}
              describe={featured_properties_describe}
            />
          );
        })}
      </div>
      <Button
        className="btn btn-primary bg-red-100 font-raleWay rounded-sm"
        onClick={handleClick}
      >
        {RichText.asText(all_properties_button_label)}
      </Button>
    </div>
  );
};
export default FeaturedProperty;
