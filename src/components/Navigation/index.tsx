import React from 'react';

import Link from 'next/link';

import { RichText } from 'prismic-reactjs';

import { HomePageType } from '../../types/HomePageType';

type Props = {
  prismicData: HomePageType;
  classNames?: {
    list?: string;
    item?: string;
  };
};

const Navigation: React.FC<Props> = ({ prismicData, classNames }) => {
  return (
    <ul className={classNames.list}>
      {prismicData[2] &&
        prismicData[2].items.map((item, index) => {
          const { navigation_label, navigation_path } = item || {};

          return (
            <li
              className={classNames.item}
              key={`${index}-${navigation_label}`}
            >
              <Link href={RichText.asText(navigation_path)} passHref>
                <a>{RichText.asText(navigation_label)}</a>
              </Link>
            </li>
          );
        })}
    </ul>
  );
};

export default Navigation;
