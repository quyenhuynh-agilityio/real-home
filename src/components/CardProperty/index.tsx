import React, { memo } from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { RichText, RichTextBlock } from 'prismic-reactjs';

import { Property } from '../../types/PropertyType';

import Card from '../Card';

type Props = {
  property: Property;
  href?: string;
  describe?: RichTextBlock[];
  isPropertyDetail?: boolean;
};

const CardProperty: React.FC<Props> = ({
  property = {},
  href = '',
  isPropertyDetail = false,
  describe,
}) => {
  const router = useRouter();

  const { id } = property;

  const handleClick = (e) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <div className="font-raleWay property-wrapper mx-auto w-1147 mb-10">
      {isPropertyDetail ? (
        <Link
          as={`/properties/${id}`}
          href={`/properties/[id]`}
          passHref
          key={`/user/${id}`}
        >
          <Card
            property={property}
            href={href}
            describe={describe}
            handleClick={handleClick}
          />
        </Link>
      ) : (
        <Card
          property={property}
          href={href}
          describe={describe}
          handleClick={handleClick}
        />
      )}
    </div>
  );
};

export default memo(CardProperty, (prevProps, nextProps) => {
  return (
    prevProps.property === nextProps.property &&
    prevProps.href === nextProps.href
  );
});
