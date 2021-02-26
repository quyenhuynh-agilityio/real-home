import { RichTextBlock } from 'prismic-reactjs';

export type FeaturedItem = {
  featured_icon: {
    url: string;
    alt: string;
  };
  featured_info: RichTextBlock[];
  featured_name: RichTextBlock[];
};

export type Featured = {
  items: FeaturedItem[];
  primary: {};
};

export type HeroImage = {
  hero_image: {
    url: string;
    alt: string;
  };
  hero_price: RichTextBlock[];
  hero_title: RichTextBlock[];
};

export type HeroImages = {
  items: HeroImage[];
  primary: {};
};

export type OurPartner = {
  icon: {
    url: string;
    alt: string;
  };
};

export type OurPartners = {
  items: OurPartner[];
};

export type SocialIcon = {
  icon: {
    url: string;
    alt: string;
  };
};

export type SocialIcons = {
  items: SocialIcon[];
  primary: {};
};

export type ContactItem = {
  contact_information: RichTextBlock[];
};

export type ContactInfo = {
  items: ContactItem[];
  primary: { contact_us: RichTextBlock[] };
};

export type NavigationItem = {
  navigation_label: RichTextBlock[];
  navigation_path: RichTextBlock[];
};

export type Navigation = {
  items: NavigationItem[];
  primary: {
    navigation: RichTextBlock[];
  };
};

export type HomePageType = {
  data: {
    all_properties_button_label: RichTextBlock[];
    featured_properties_describe: RichTextBlock[];
    featured_properties_description: RichTextBlock[];
    featured_properties_title: RichTextBlock[];
    offer_description: RichTextBlock[];
    offer_title: RichTextBlock[];
    black_logo: RichTextBlock[];
    logo: RichTextBlock[];
    body: { Featured; HeroImages; OurPartners };
    body1: { SocialIcons; ContactInfo; Navigation };
  };
};
