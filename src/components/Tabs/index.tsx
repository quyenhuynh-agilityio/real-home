import React, { useState } from 'react';
import Tab from './Tab';

type TabsProps = {
  title: string;
  content: string;
};

type Props = {
  tabs: TabsProps[];
};

const Tabs: React.FC<Props> = ({ tabs }) => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <div>
      <div>
        <ul className="tab-list">
          {tabs.map((item, index) => (
            <Tab
              key={index}
              title={item.title}
              index={index}
              setSelectedTab={setSelectedTab}
              selectedTab={selectedTab}
            />
          ))}
        </ul>
      </div>
      <div>{tabs[selectedTab].content}</div>
    </div>
  );
};

export default Tabs;
