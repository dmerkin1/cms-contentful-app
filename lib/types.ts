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
export interface Asset {
  sys: {
    id: string;
  };
  url: string;
  description: string;
}

export interface AssetLink {
  block: Asset[];
}

export interface Content {
  json: any;
  links: {
    assets: AssetLink;
  };
}

export interface ImageType {
  url: string;
  altText?: string;
}

export interface AuthorType {
  name: string;
  image: ImageType;
}
export interface BlogPost {
  slug: string;
  author?: AuthorType;
  title: string;
  date: string;
  excerpt: string;
  coverImage: ImageType;
  overlayEnabled: boolean;
  category: CategoryProps;
  content: Content;
}

export interface RelatedPostsProps {
  posts: BlogPost[];
}

export interface DateComponentProps {
  dateString: string;
  formatString?: string;
  showLabel?: boolean;  
}

export interface CategoryPageProps {
  category?: string;
}