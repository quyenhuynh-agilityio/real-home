import React from 'react';

import Image from 'next/image';

import { RichText, RichTextBlock } from 'prismic-reactjs';

type Props = {
  src?: string;
  alt?: string;
  title?: RichTextBlock[];
  description?: RichTextBlock[];
};

const Featured: React.FC<Props> = ({ src, alt, title, description }) => {
  return (
    <div className="font-raleWay w-230 ml-16 mr-16">
      <Image src={src} alt={alt} width={27} height={27} />
      <div className="text-lg text-gray-70">{RichText.asText(title)}</div>
      <div className="text-sm text-gray-80">{RichText.asText(description)}</div>
    </div>
  );
};

export default Featured;
