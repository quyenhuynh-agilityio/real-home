import React from 'react';

import Slider from 'react-slick';

import Image from 'next/image';

import { RichText, RichTextBlock } from 'prismic-reactjs';

import { settings } from '../../utils/utilities';

type Items = {
  hero_image: {
    url: string;
    alt: string;
  };
  hero_title: RichTextBlock[];
  hero_price: RichTextBlock[];
};

type Props = {
  prismicData: {
    items: Array<Items>;
  };
};

const Carousel: React.FC<Props> = ({ prismicData }) => {
  const { items } = prismicData || {};

  return (
    <div>
      <Slider {...settings}>
        {items &&
          items.map((item, index) => {
            const { hero_image, hero_title, hero_price } = item || {};
            const { url, alt } = hero_image || {};
            return (
              <div key={`${index}-${hero_price}`}>
                <div className="bg-cover container">
                  <div className="centered">
                    <div className="text-4xl text-white">
                      {RichText.asText(hero_title)}
                    </div>
                    <div className="text-2xl text-white mt-5">
                      {RichText.asText(hero_price)}
                    </div>
                  </div>
                  <Image
                    alt={alt}
                    src={url}
                    className="z-50"
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                  />
                </div>
                <style jsx>{`
                      .bg-cover {
                        background-image: linear-gradient(to bottom, rgba(245, 246, 252, 0.52), rgba(117, 19, 93, 0.73)), url(${url});
                        background: -moz-linear-gradient(top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 59%, rgba(0, 0, 0, 0.65) 100%), url(${url});
                        background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, rgba(0, 0, 0, 0)), color-stop(59%, rgba(0, 0, 0, 0)), color-stop(100%, rgba(0, 0, 0, 0.65))), url(${url});
                        background: -webkit-linear-gradient(top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 59%, rgba(0, 0, 0, 0.65) 100%), url(${url});
                        background: -o-linear-gradient(top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 59%, rgba(0, 0, 0, 0.65) 100%), url(${url});
                        background: -ms-linear-gradient(top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 59%, rgba(0, 0, 0, 0.65) 100%), url(${url});
                        background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 59%, rgba(0, 0, 0, 0.65) 100%), url(${url});
                        height: 600px;
                        position: relative;
                        background-size: cover;
                        }
                      }
                    `}</style>
              </div>
            );
          })}
      </Slider>
    </div>
  );
};

export default Carousel;
