import { HeaderBottomStyle } from './header-bottom.style';

type ProfilePictureProps = {
  className?: string;
};

export const HeaderBottom = ({ className }: ProfilePictureProps) => {
  return (
    <HeaderBottomStyle viewBox='0 0 1920 206' className={className} preserveAspectRatio='none'>
      <g filter='url(#filter-header-shadow)'>
        <path
          id='backgroundColor'
          d='M1356 47.247C977.624 47.247 660 328.849 0 0V206H1920V191C1830.5 133.099 1692 47.247 1356 47.247Z'
          fill='none'
        />
        <path
          id='line'
          d='M1356 47.247C977.624 47.247 660 328.849 0 0V10C660 338.849 977.624 57.247 1356 57.247C1692 57.247 1830.5 143.099 1920 201V191C1830.5 133.099 1692 47.247 1356 47.247Z'
          fill='none'
        />
      </g>

      <defs>
        <filter
          id='filter-header-shadow'
          x='-20'
          y='0'
          width='1960'
          height='206'
          filterUnits='userSpaceOnUse'
          colorInterpolationFilters='sRGB'
        >
          <feFlood floodOpacity='0' result='BackgroundImageFix' />
          <feColorMatrix
            in='SourceAlpha'
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
            result='hardAlpha'
          />
          <feOffset dy='-10' />
          <feGaussianBlur stdDeviation='10' />
          <feComposite in2='hardAlpha' operator='out' />
          <feColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0' />
          <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_1499_734' />
          <feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow_1499_734' result='shape' />
        </filter>
      </defs>
    </HeaderBottomStyle>
  );
};
