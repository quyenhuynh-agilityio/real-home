import React from 'react';
import Image from 'next/image';

import { useRouter } from 'next/router';

type FeaturedType = {
  imageSrc?: string;
  imageAlt?: string;
  propertyName?: string;
  propertyPrice?: string;
  propertyNameCountry?: string;
  href?: string;
};

const CardProperty = ({
  imageSrc,
  imageAlt,
  propertyName,
  propertyNameCountry,
  propertyPrice,
  href,
}: FeaturedType) => {
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    router.push(href);
  };
  return (
    <div className="font-raleWay property-wrapper">
      <a href={href} onClick={handleClick}>
        <Image src={imageSrc} alt={imageAlt} width={365} height={220} />
        <div className="flex flex-col items-center">
          <div className="text-lg text-gray-70 my-6">
            {/* {RichText.asText(propertyName)} */}
            {propertyName}
          </div>
          <div className="text-sm text-gray-80">
            {/* {RichText.asText(propertyNameCountry)} */}
            {propertyNameCountry}
          </div>{' '}
          <div className="text-sm text-gray-80 my-6">
            {/* {RichText.asText(propertyPrice)} */}
            {propertyPrice}
          </div>
        </div>
        <div className="py-3  border-t border-gray-90 justify-center flex">
          <span className="text-sm text-gray-80">
            3400 Sq Ft 2 Bedrooms 1 Bathroom
          </span>
        </div>
      </a>
    </div>
  );
};

export default CardProperty;
