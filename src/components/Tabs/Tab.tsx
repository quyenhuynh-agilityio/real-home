import React, { memo, useCallback } from 'react';

type Props = {
  title: string;
  index: number;
  setSelectedTab: (index: number) => void;
  selectedTab: number;
};

const Tab: React.FC<Props> = ({
  title,
  setSelectedTab,
  index,
  selectedTab,
}) => {
  let className = 'tab-list-item';

  if (selectedTab === index) {
    className += ' tab-list-active';
  }

  const onClick = useCallback(() => {
    setSelectedTab(index);
  }, [setSelectedTab, index]);

  return (
    <li className={className}>
      <a onClick={onClick}>{title}</a>
    </li>
  );
};

export default memo(Tab, (prevProps, nextProps) => {
  prevProps.selectedTab === nextProps.selectedTab &&
    prevProps.index === nextProps.index;
});
