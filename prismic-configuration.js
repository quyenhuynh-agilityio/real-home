import Prismic from '@prismicio/client';

export const apiEndpoint = 'https://realhome.cdn.prismic.io/api/v2';
export const accessToken =
  'MC5ZQ3g3aVJVQUFDWUExeHZD.R1bvv71I77-9ViYtLBLvv73vv70A77-9Cu-_vXHvv73vv73vv71W77-9aHQZ77-9Xe-_ve-_ve-_ve-_vS4';

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
