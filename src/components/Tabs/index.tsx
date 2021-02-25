import React, { useState } from 'react';

import { RichTextBlock } from 'prismic-reactjs';

import { Property } from '../../types/PropertyType';

import Tab from './Tab';
import CardProperty from '../CardProperty';
import { filterByField } from '../../utils/utilities';

type Props = {
  tabs: Array<Property>;
  featured_properties_describe: RichTextBlock[];
};

const Tabs: React.FC<Props> = ({ tabs, featured_properties_describe }) => {
  const [selectedTab, setSelectedTab] = useState(0);

  var filteredTabs = filterByField(tabs);

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
          const { name, id } = item;

          return (
            <CardProperty
              href="/properties"
              property={item}
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
