import React from 'react';
import { GetStaticProps } from 'next';
import { Client } from '../../../prismic-configuration';
import { RichText } from 'prismic-reactjs';
import Image from 'next/image';

import Layout from '../../components/Layout';
import Featured from '../../components/Featured';
import Tabs from '../../components/Tabs';

const About = ({ doc, prismicHomeData }) => {
  if (doc && prismicHomeData) {
    const { data } = doc || {};

    const { body, body1, black_logo, logo } = prismicHomeData.data || {};
    const {
      about_our_company,
      about_our_company_description,
      about_our_company_image,
    } = data || {};

    const { url, alt } = about_our_company_image || {};

    const tabs = [
      {
        title: 'Lemon',
        content: 'Lemon is yellow',
      },
      {
        title: 'Strawberry',
        content: 'Lemon is red',
      },
      {
        title: 'Pear',
        content: 'Lemon is blue',
      },
    ];
    return (
      <div className="container">
        <Layout body1={body1} black_logo={black_logo} logo={logo}>
          <div className="w-1147 mx-auto pb-100">
            <Tabs tabs={tabs} />
            <h2 className="font-raleWay text-5xl py-60">
              {RichText.asText(about_our_company)}
            </h2>
            <div className="grid grid-cols-2">
              <div className="">
                <Image src={url} alt={alt} width={561} height={388} />
              </div>
              <div className="pl-10">
                {RichText.asText(about_our_company_description)}
              </div>
            </div>
          </div>
          <div className="flex flex-row text-center justify-center bg-gray-110 py-100">
            {body &&
              body[0] &&
              body[0].items.map((item, index) => {
                const { featured_icon, featured_name, featured_info } =
                  item || {};
                const { url, alt } = featured_icon || {};
                return (
                  <Featured
                    src={url}
                    alt={alt}
                    description={featured_info}
                    title={featured_name}
                    key={`${index}-${featured_name}`}
                  />
                );
              })}
          </div>
        </Layout>
      </div>
    );
  }
};

export const getStaticProps: GetStaticProps = async ({
  preview = null,
  previewData = {},
}) => {
  const { ref } = previewData || {};

  const client = Client();
  const doc =
    (await client.getSingle('about_us_page', ref ? { ref } : null)) || {};
  const prismicHomeData =
    (await client.getSingle('homepage', ref ? { ref } : null)) || {};
  return {
    props: {
      doc,
      prismicHomeData,
      preview,
    },
  };
};

export default About;
