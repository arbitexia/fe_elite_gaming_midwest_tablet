import { appImageLoader } from '@/libs/image-loader';
import Image from 'next/image';

interface Props {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
  sx?: object;
}

export const UIImage = ({ src, alt, width, height, sx }: Props) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      loader={appImageLoader}
      style={{ ...sx }}
    />
  );
};
