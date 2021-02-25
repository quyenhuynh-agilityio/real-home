import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { RichText } from 'prismic-reactjs';

import { HomePageType } from '../../types/HomePageType';

type Props = {
  prismicData: HomePageType;
  logo: {
    url: string;
    alt: string;
  };
};

const Header: React.FC<Props> = ({ prismicData, logo }) => {
  const { url, alt } = logo || {};
  return (
    <div className="bg-white text-black font-playfair">
      <div className="grid grid-cols-3 gap-4 text-center py-35 px-100 items-center">
        <div>
          <div className="text-left">
            <Image src={url} alt={alt} width={174} height={46} />
          </div>
        </div>
        <ul className="flex justify-between">
          {prismicData[2] &&
            prismicData[2].items.map((item, index) => {
              const { navigation_label, navigation_path } = item || {};
              return (
                <li className="text-s" key={`${index}-${navigation_label}`}>
                  <Link href={RichText.asText(navigation_path)} passHref>
                    <a>{RichText.asText(navigation_label)}</a>
                  </Link>
                </li>
              );
            })}
        </ul>
        <div className="flex justify-around">
          {prismicData[0] &&
            prismicData[0].items.map((item, index) => {
              const { url, alt } = item.icon || {};
              return (
                <Image
                  src={url}
                  width={33}
                  height={33}
                  alt={alt}
                  key={`${index}- ${alt}`}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Header;
