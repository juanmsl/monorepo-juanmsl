import {HeaderBottomStyle} from "./header-bottom.style.ts";

type ProfilePictureProps = {
  className?: string;
};

export const HeaderBottom = ({
  className
}: ProfilePictureProps) => {

  return (
    <HeaderBottomStyle
      viewBox="0 0 1920 336"
      className={className}
      preserveAspectRatio="none"
    >
      <g filter="url(#filter-header-shadow)">
        <path
          id="backgroundColor"
          d="M1356 177.247C977.624 177.247 660 408.849 0 30V326H1920V321C1830.5 263.099 1692 177.247 1356 177.247Z"
          fill='none'
        />
        <path
          id="line"
          d="M1356 177.247C977.624 177.247 660 408.849 0 30V35C660 413.849 977.624 182.247 1356 182.247C1692 182.247 1830.5 268.099 1920 326V321C1830.5 263.099 1692 177.247 1356 177.247Z"
          fill='none'
        />
      </g>

      <defs>
        <filter id="filter-header-shadow" x="-20" y="0" width="1960" height="336" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="-10"/>
          <feGaussianBlur stdDeviation="10"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1499_734"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1499_734" result="shape"/>
        </filter>
      </defs>
    </HeaderBottomStyle>
  );
};
