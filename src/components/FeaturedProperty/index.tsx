import React from 'react';
import Image from 'next/image';
import { RichText } from 'prismic-reactjs';

import Button from '../Button';
import CardProperty from '../CardProperty';

type FeaturedType = {
  src?: string;
  alt?: string;
  title?: string;
  description?: string;
};

const FeaturedProperty = ({ prismicData }: FeaturedType) => {
  const {
    featured_properties_title,
    featured_properties_description,
    featured_properties_describe,
    all_properties_button_label,
  } = prismicData || {};
  return (
    <div className="text-center py-100 bg-gray-120">
      <h3 className="text-5xl font-raleWay color-gray-70">
        {RichText.asText(featured_properties_title)}
      </h3>
      <div className="font-playfair text-base pt-64">
        {RichText.asText(featured_properties_description)}{' '}
      </div>
      <div className="grid grid-cols-3 gap-10 py-64 m-auto w-1147">
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
      <Button className="btn btn-primary bg-red-100 font-raleWay rounded-sm">
        {RichText.asText(all_properties_button_label)}
      </Button>
    </div>
  );
};

export default FeaturedProperty;
