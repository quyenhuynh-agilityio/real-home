import Prismic from '@prismicio/client';

export const apiEndpoint = process.env.REACT_APP_PRISMIC_API_ENDPOINT;
export const accessToken = process.env.REACT_APP_TOKEN;

// Client method to query documents from the Prismic repo
export const Client = (req = null) =>
  Prismic.client(apiEndpoint, createClientOptions(req, accessToken));

const createClientOptions = (req = null, prismicAccessToken = null) => {
  const reqOption = req ? { req } : {};
  const accessTokenOption = prismicAccessToken
    ? { accessToken: prismicAccessToken }
    : {};
  return {
    ...reqOption,
    ...accessTokenOption,
  };
};

export const linkResolver = (doc) => {
  // URL for a category type
  if (doc.type === 'about_us_page') {
    return `/about`;
  }

  // URL for a product type
  if (doc.type === 'property_catalog_page') {
    return `/properties`;
  }

  // URL for a product type
  if (doc.type === 'log_in_page') {
    return `/log_in`;
  }

  // Backup for all other types
  return '/';
};
