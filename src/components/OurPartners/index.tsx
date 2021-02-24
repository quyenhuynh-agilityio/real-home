import React from 'react';
import Image from 'next/image';
import { RichText, RichTextBlock } from 'prismic-reactjs';
import { Property } from '../../types/PropertyType';

type Partners = {
  items?: Property[];
  primary: {
    our_partners?: RichTextBlock[];
  };
};

type OurPartnersType = {
  prismicData: Partners;
};

const OurPartners: React.FC<OurPartnersType> = ({ prismicData }) => {
  const { items, primary } = prismicData || {};

  return (
    <div className="font-raleWay flex flex-row w-1147 justify-around our-partners-wrapper mx-auto">
      <div className="text-lg text-gray-70 pr-3 text-3xl">
        {RichText.asText(primary.our_partners)}
      </div>
      {items &&
        items.map((item, index) => {
          const { url, alt, dimensions } = item.icon || {};
          const { width, height } = dimensions || {};
          return (
            <div className="px-9" key={`${index}-${alt}`}>
              <Image src={url} alt={alt} width={width} height={height} />
            </div>
          );
        })}
    </div>
  );
};

export default OurPartners;
