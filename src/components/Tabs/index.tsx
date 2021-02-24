import React, { useState } from 'react';

import { RichTextBlock } from 'prismic-reactjs';

import { Property } from '../../types/PropertyType';

import Tab from './Tab';
import CardProperty from '../CardProperty';

type Props = {
  tabs: Property[];
  featured_properties_describe: RichTextBlock[];
};

const Tabs: React.FC<Props> = ({ tabs, featured_properties_describe }) => {
  const [selectedTab, setSelectedTab] = useState(0);

  var filteredTabs = tabs.reduce(function (acc, curr) {
    var findIfNameExist = acc.findIndex(function (item) {
      return item.country === curr.country;
    });

    if (findIfNameExist === -1) {
      let obj = {
        country: curr.country,
        items: [curr],
      };
      acc.push(obj);
    } else {
      acc[findIfNameExist].items.push(curr);
    }
    return acc;
  }, []);

  return (
    <div>
      <div>
        <ul className="tab-list text-center">
          {filteredTabs.map((item, index) => (
            <Tab
              key={index}
              title={item.country}
              index={index}
              setSelectedTab={setSelectedTab}
              selectedTab={selectedTab}
            />
          ))}
        </ul>
      </div>
      <div className="grid grid-cols-3 gap-10 py-64 mx-auto w-1147">
        {filteredTabs[selectedTab].items.map((item) => {
          const { name, country, state, price, image, id } = item;
          const { url, alt } = image || {};

          return (
            <CardProperty
              href="/properties"
              id={id}
              imageAlt={alt}
              imageSrc={url}
              name={name}
              state={state}
              country={country}
              price={price}
              key={`${id}-${name}`}
              isPropertyDetail
              describe={featured_properties_describe}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Tabs;
