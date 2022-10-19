import { appImageLoader } from '@/libs/image-loader';
import Image from 'next/image';

interface Props {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
}

export const UIImage = ({ src, alt, width, height }: Props) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      loader={appImageLoader}
    />
  );
};
