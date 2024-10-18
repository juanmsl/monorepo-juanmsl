import { Image, Typography } from '@juanmsl/ui';

import { ScreenImageContentStyle, ScreenImageStyle } from './screen-image.style';

type ScreenImageProps = {
  src: string;
  alt?: string;
  url?: string;
  className?: string;
  style?: React.CSSProperties;
};

export const ScreenImage = ({ src, alt, url, className = '', style = {} }: ScreenImageProps) => {
  return (
    <ScreenImageStyle className={className} style={style}>
      <section className='screen-toolbar'>
        <span className='toolbar-button' />
        <span className='toolbar-button' />
        <span className='toolbar-button' />
        {Boolean(url) && (
          <Typography className='site-address' variant='small' family='code' noPadding nowrap>
            {url}
          </Typography>
        )}
      </section>
      <ScreenImageContentStyle>
        <Image className='screen-image' src={src} alt={alt} />
      </ScreenImageContentStyle>
    </ScreenImageStyle>
  );
};
