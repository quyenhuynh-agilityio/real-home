import React from 'react';
import { RichText } from 'prismic-reactjs';

type OfferType = {
  title?: string;
  description?: string;
};

const Offers = ({ title, description }: OfferType) => {
  return (
    <div className="font-raleWay flex flex-row offer">
      <div className="text-2xl font-bold text-gray-70">
        {RichText.asText(title)}
      </div>
      <div className="text-base text-gray-80">
        {RichText.asText(description)}
      </div>
    </div>
  );
};

export default Offers;
