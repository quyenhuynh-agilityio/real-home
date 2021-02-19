import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { RichText } from 'prismic-reactjs';

const Header = ({ prismicData, logo }) => {
  const { url, alt } = logo || [];
  return (
    <div className="container bg-white text-black font-playfair">
      <div className="grid grid-cols-3 gap-4 text-center py-35 px-100 items-center">
        <div>
          <div className="text-left">
            <Image src={url} alt={alt} width={174} height={46} />
          </div>
        </div>
        <ul className="flex justify-between">
          {prismicData[0] &&
            prismicData[0].items.map((item) => {
              return (
                <li className="text-s">
                  <Link href="/about">
                    <a>{RichText.asText(item.navigation_title)}</a>
                  </Link>
                </li>
              );
            })}
        </ul>
        <div className="flex justify-around">
          {prismicData[1] &&
            prismicData[1].items.map((item) => {
              const { url, alt } = item.icon || {};
              return <Image src={url} width={33} height={33} alt={alt} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default Header;
