import Image from 'next/image';
import { ContentfulImageProps, contentfulLoader } from './contentful-image';

export default function FeaturedImage({ title, url, src, overlayEnabled, ...props }: ContentfulImageProps) {
  return (
    <div className={`relative w-screen h-[500px] featured-image ${overlayEnabled ? 'overlay' : ''}`}>
      <Image
        src={url}
        loader={contentfulLoader}
        priority
        alt={title}
        layout='fill'
        objectFit='cover'
        objectPosition='center'
        {...props}
      />
    </div>
  )
};