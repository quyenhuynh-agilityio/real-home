import React from 'react';

import { RichText, RichTextBlock } from 'prismic-reactjs';

type Props = {
  title?: RichTextBlock[];
  description?: RichTextBlock[];
};

const Offers: React.FC<Props> = ({ title, description }) => {
  return (
    <div className="bg-white py-122">
      <div className="font-raleWay grid grid-rows-3 grid-flow-col gap-4 w-1141 mx-auto">
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
