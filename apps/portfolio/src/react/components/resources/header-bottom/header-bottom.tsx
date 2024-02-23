import { HeaderBottomStyle } from './header-bottom.style';

type ProfilePictureProps = {
  className?: string;
};

export const HeaderBottom = ({ className }: ProfilePictureProps) => {
  return (
    <HeaderBottomStyle viewBox='0 0 1920 230' className={className} preserveAspectRatio='none'>
      <g filter='url(#filter-header-shadow)'>
        <path
          id='backgroundColor'
          d='M1356 77.247C977.624 77.247 660 358.849 0 30V236H1920V221C1830.5 163.099 1692 77.247 1356 77.247Z'
          fill='none'
        />
        <path
          id='line'
          d='M1356 77.247C977.624 77.247 660 358.849 0 30V40C660 368.849 977.624 87.247 1356 87.247C1692 87.247 1830.5 173.099 1920 231V221C1830.5 163.099 1692 77.247 1356 77.247Z'
          fill='none'
        />
      </g>

      <defs>
        <filter
          id='filter-header-shadow'
          x='-20'
          y='0'
          width='1960'
          height='236'
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
