import Image from 'next/image';
import { GetServerSideProps } from 'next';
import ErrorPage from 'next/error';

import { RichText } from 'prismic-reactjs';

import { Client } from '../../../prismic-configuration';

import Layout from '../../components/Layout';
import Button from '../../components/Button';

type Data = {
  id: string;
  name: string;
  email: string;
};

const PropertyDetail = ({ data, doc }) => {
  if (!data && !doc) {
    return <ErrorPage statusCode={404} />;
  }

  const { body1, logo, black_logo, all_properties_button_label } =
    doc.data || {};
  const { name, description, image, country, state, price } = data || {};
  const { url, alt } = image || {};

  return (
    <div className="container">
      <Layout body1={body1} black_logo={black_logo} logo={logo}>
        <div className="w-1147 mx-auto pb-60">
          <h2 className="font-raleWay text-5xl py-60">{name}</h2>
          <div className="grid grid-cols-3">
            <div className="col-span-2">
              <Image src={url} alt={alt} width={756} height={510} />
            </div>
            <div className="pl-30 font-playfair text-base">
              <div className="text-gray-70 pb-30">
                <div>{`${state} / ${country}`}</div>
                <div>{price}</div>
              </div>
              <div className="text-gray-80">{description}</div>
            </div>
          </div>
        </div>
        <div className="text-center pb-100">
          <Button className="btn btn-primary bg-red-100 font-raleWay rounded-sm">
            {RichText.asText(all_properties_button_label)}
          </Button>
        </div>
      </Layout>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async ({
  params,
  res,
  previewData = {},
}) => {
  const { ref } = previewData || {};
  const client = Client();
  const doc = (await client.getSingle('homepage', ref ? { ref } : null)) || {};

  const { id } = params;
  const result = await fetch(`http://localhost:8000/properties/${id}`);
  const data: Data = await result.json();

  return {
    props: { data, doc },
  };
};

export default PropertyDetail;
