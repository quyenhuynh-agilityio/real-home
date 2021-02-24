import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { useRouter } from 'next/router';
import { RichText, RichTextBlock } from 'prismic-reactjs';

type Props = {
  id: string;
  imageSrc?: string;
  imageAlt?: string;
  name?: string;
  price?: string;
  country?: string;
  state?: string;
  href?: string;
  describe?: RichTextBlock[];
  isPropertyDetail?: boolean;
};

const CardProperty: React.FC<Props> = ({
  id,
  imageSrc,
  imageAlt,
  name,
  country,
  state,
  price,
  href,
  describe,
  isPropertyDetail,
}) => {
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    router.push(href);
  };
  return (
    <div className="font-raleWay property-wrapper mx-auto w-1147 mb-10">
      {isPropertyDetail ? (
        <Link
          as={`properties/${id}`}
          href={`/properties/[id]`}
          passHref
          key={`/user/${id}`}
        >
          <a>
            <Image src={imageSrc} alt={imageAlt} width={365} height={220} />
            <div className="flex flex-col items-center py-30">
              <div className="text-lg text-gray-70 mb-5">{name}</div>
              <div className="text-sm text-gray-80">{`${state} / ${country}`}</div>
              <div className="text-sm text-gray-80 mt-10">{price}</div>
            </div>
            <div className="py-10 border-t border-gray-90 justify-center flex">
              <span className="text-sm text-gray-80">{describe}</span>
            </div>
          </a>
        </Link>
      ) : (
        <a href={href} onClick={handleClick}>
          <Image src={imageSrc} alt={imageAlt} width={365} height={220} />
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
      )}
    </div>
  );
};

export default CardProperty;
