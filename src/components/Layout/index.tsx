import React from 'react';

import Header from '../Header';
import Footer from '../Footer';

const Layout = ({ body1, black_logo, logo, children }) => {
  return (
    <div className="container">
      <Header prismicData={body1} logo={black_logo} />
      <div>{children}</div>
      <Footer prismicData={body1} logo={logo} />
    </div>
  );
};

export default Layout;
