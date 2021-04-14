import { RichTextBlock } from 'prismic-reactjs';

export type AboutPageType = {
  data: {
    about_our_company: RichTextBlock[];
    about_our_company_description: RichTextBlock[];
    about_our_company_image: {
      url: string;
      alt: string;
    };
  };
};
