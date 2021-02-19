import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { RichText } from 'prismic-reactjs';

const Footer = ({ prismicData, logo }) => {
  const { url, alt } = logo || [];
  return (
    <div className="container bg-gray-100 text-white font-playfair">
      <div className="grid grid-cols-3 gap-4 text-left py-80 px-125 items-baseline">
        <div>
          <div className="mb-5">
            <Image src={url} alt={alt} width={174} height={46} />
          </div>
          <div className="flex justify-between w-176">
            {prismicData[1] &&
              prismicData[1].items.map((item) => {
                const { url, alt } = item.icon || {};
                return <Image src={url} width={33} height={33} alt={alt} />;
              })}
          </div>
        </div>
        <div>
          <div className="text-xl mb-5">
            {RichText.asText(prismicData[0].primary.navigation)}{' '}
          </div>
          <ul>
            {prismicData[0] &&
              prismicData[0].items.map((item) => {
                return (
                  <li className="text-s mb-3">
                    <Link href="/about">
                      <a>{RichText.asText(item.navigation_title)}</a>
                    </Link>
                  </li>
                );
              })}
          </ul>
        </div>
        <div>
          <div className="text-xl mb-5">
            {RichText.asText(prismicData[2].primary.contact_us)}{' '}
          </div>
          {prismicData[2] &&
            prismicData[2].items.map((item) => {
              return (
                <div className="text-s mb-3">
                  {RichText.asText(item.contact_information)}
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Footer;
