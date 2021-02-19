import React from 'react';
import { RichText } from 'prismic-reactjs';

type OfferType = {
  title?: string;
  description?: string;
};

const Offers = ({ title, description }: OfferType) => {
  return (
    <div className="bg-white py-122">
      <div className="font-raleWay grid grid-rows-3 grid-flow-col gap-4 w-1141 m-auto">
        <div className="text-2xl row-span-2 font-bold text-gray-70">
          {RichText.asText(title)}
        </div>
        <div className="text-base row-span-2 col-span-2 text-gray-80">
          {RichText.asText(description)}
        </div>
      </div>
    </div>
  );
};

export default Offers;
