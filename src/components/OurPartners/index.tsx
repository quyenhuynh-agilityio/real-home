import React from 'react';
import Image from 'next/image';
import { RichText } from 'prismic-reactjs';
type Partners = {
  items?: {
    icon?: {
      src?: string;
      alt?: string;
    };
  };
  primary: {
    our_partners?: string;
  };
};

type OurPartnersType = {
  partners: Partners;
};

const OurPartners = ({ partners }: OurPartnersType) => {
  const { items, primary } = partners || {};

  return (
    <div className="font-raleWay flex flex-row justify-center items-center our-partners-wrapper">
      <div className="text-lg text-gray-70 pr-3 text-3xl">
        {RichText.asText(primary.our_partners)}
      </div>
      {items &&
        items.map((item) => {
          const { url, alt, dimensions } = item.icon || {};
          const { width, height } = dimensions || {};
          return (
            <div className="px-9">
              <Image src={url} alt={alt} width={width} height={height} />
            </div>
          );
        })}
    </div>
  );
};

export default OurPartners;
