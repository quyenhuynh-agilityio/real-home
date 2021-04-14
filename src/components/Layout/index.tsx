import React from 'react';

import Header from '../Header';
import Footer from '../Footer';

const Layout = ({ prismicData, children }) => {
  const { body1, black_logo, logo } = prismicData || {};

  if (prismicData) {
    return (
      <div className="container">
        <Header prismicData={body1} logo={black_logo} />
        <div>{children}</div>
        <Footer prismicData={body1} logo={logo} />
      </div>
    );
  }
  return <div>{children}</div>;
};

export default Layout;
