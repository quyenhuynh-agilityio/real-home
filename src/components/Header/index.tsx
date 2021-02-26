import React from 'react';

import Image from 'next/image';

import { HomePageType } from '../../types/HomePageType';

import Navigation from '../Navigation';

type Props = {
  prismicData: HomePageType;
  logo: {
    url: string;
    alt: string;
  };
};

const Header: React.FC<Props> = ({ prismicData, logo = {} }) => {
  const { url, alt } = logo || {};
  return (
    <div className="bg-white text-black font-playfair">
      <div className="grid grid-cols-3 gap-4 text-center py-35 px-100 items-center">
        <div>
          <div className="text-left">
            <Image src={url} alt={alt} width={174} height={46} />
          </div>
        </div>
        <Navigation
          prismicData={prismicData}
          classNames={{ list: 'flex justify-between', item: 'text-s' }}
        />
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
