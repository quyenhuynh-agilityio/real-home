import React, { memo } from 'react';

import Image from 'next/image';
import { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import ErrorPage from 'next/error';

import { RichText } from 'prismic-reactjs';

import { Client } from '../../../prismic-configuration';

import { HomePageType } from '../../types/HomePageType';
import { Property } from '../../types/PropertyType';

import Button from '../../components/Button';

type Props = {
  prismicData: HomePageType;
  properties: Property;
};

const PropertyDetail: NextPage<Props> = (props) => {
  const router = useRouter();

  const { properties, prismicData } = props || {};

  if (!properties && !prismicData) {
    return <ErrorPage statusCode={404} />;
  }

  const { body1, logo, black_logo, all_properties_button_label } =
    prismicData.data || {};
  const { name, description, image, country, state, price } = properties || {};
  const { url, alt } = image || {};

  const handleClick = (e) => {
    e.preventDefault();
    router.push('/properties');
  };

  return (
    <div className="container">
      <Head>
        <title>Property Page</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
        <Button
          onClick={handleClick}
          className="btn btn-primary bg-red-100 font-raleWay rounded-sm"
        >
          {RichText.asText(all_properties_button_label)}
        </Button>
      </div>
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
  const prismicData =
    (await client.getSingle('homepage', ref ? { ref } : null)) || {};

  const { id } = params;
  const result = await fetch(`http://localhost:8000/properties/${id}`);
  const properties: Property = await result.json();

  return {
    props: { properties, prismicData },
  };
};

export default memo(PropertyDetail);
