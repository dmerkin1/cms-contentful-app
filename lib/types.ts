export interface Card {
  title: string;
  subText: string;
  customIcon: {
    url: string;
  };
}

export interface LinkItem {
  href: string;
  label: string;
  subMenuCollection?: {
    items: {
      href: string;
      label: string;
    }[];
  };
}

export interface HeroImage {
  subText?: {
    json: {
      content: [
        {
          content: [
            {
              value: string;
            }
          ];
        }
      ];
    };
  };
  headline: string;
  darkenImage?: boolean;
  image: {
    altText?: string;
    image: {
      url: string;
    };
  };
}

export interface HowWeWorkType {
  title: string;
  text: string;
  image: {
    url: string;
  };
}

export interface Testimonial {
  name: string;
  location: string;
  product: string;
  image: {
    url: string;
  };
  testimonial: {
    json: {
      content: string[];
    };
  };
}

export interface ContentfulImageProps {
  src: string;
  width?: number;
  quality?: number;
  [key: string]: any;
}

export interface HeroCarouselProps {
  heroImage: HeroImage[][];
}

export interface HeroCarouselClientProps {
  heroImage: HeroImage[][];
}

export interface BlocksSubMenuProps {
  items: LinkItem[];
}

export interface CategoryProps {
  categoryName: string;
}