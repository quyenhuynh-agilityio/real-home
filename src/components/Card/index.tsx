import React, { memo } from 'react';

import Image from 'next/image';

import { RichText, RichTextBlock } from 'prismic-reactjs';

import { Property } from '../../types/PropertyType';

type Props = {
  property: Property;
  href?: string;
  describe?: RichTextBlock[];
  handleClick?: (e: React.MouseEvent) => void;
};

const Card: React.FC<Props> = ({
  property = {},
  href = '',
  handleClick = () => {},
  describe,
}) => {
  const { image, name, country, state, price } = property;
  const { url, alt } = image || {};
  return (
    <a href={href} onClick={handleClick}>
      <Image src={url} alt={alt} width={365} height={220} />
      <div className="flex flex-col items-center py-30">
        <div className="text-lg text-gray-70 mb-5">{name}</div>
        <div className="text-sm text-gray-80">{`${state} / ${country}`}</div>
        <div className="text-sm text-gray-80 mt-10">{price}</div>
      </div>
      <div className="py-10 border-t border-gray-90 justify-center flex">
        <span className="text-sm text-gray-80">
          {RichText.asText(describe)}
        </span>
      </div>
    </a>
  );
};

export default memo(Card, (prevProps, nextProps) => {
  return (
    prevProps.property === nextProps.property &&
    prevProps.href === nextProps.href
  );
});
