import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { RichText } from 'prismic-reactjs';

import { linkResolver } from '../../../prismic-configuration';

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
        <div>
          <div className="text-xl pb-5">
            {RichText.asText(prismicData[0].primary.navigation)}{' '}
          </div>
          <ul>
            {prismicData[2] &&
              prismicData[2].items.map((item, index) => {
                const { navigation_label, navigation_path } = item || {};

                return (
                  <li
                    className="text-s pb-5"
                    key={`${index}-${navigation_label}`}
                  >
                    <Link href={RichText.asText(navigation_path)}>
                      <a>{RichText.asText(navigation_label)}</a>
                    </Link>
                  </li>
                );
              })}
          </ul>
        </div>
        <div>
          <div className="text-xl pb-5">
            {RichText.asText(prismicData[2].primary.contact_us)}{' '}
          </div>
          {prismicData[1] &&
            prismicData[1].items.map((item, index) => {
              const { contact_information } = item || {};
              return (
                <div
                  className="text-s pb-5"
                  key={`${index}- ${contact_information}`}
                >
                  {RichText.asText(contact_information)}
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Footer;
