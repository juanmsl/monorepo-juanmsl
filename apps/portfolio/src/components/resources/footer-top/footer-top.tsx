import {FooterTopStyle} from "./footer-top.style.ts";

type ProfilePictureProps = {
  className?: string;
};

export const FooterTop = ({
  className
}: ProfilePictureProps) => {

  return (
    <FooterTopStyle
      viewBox="0 0 1920 261"
      className={className}
      preserveAspectRatio="none"
    >
      <g filter="url(#filter-footer-shadow)">
        <path
          id="backgroundColor"
          d="M0 15V10H1920V174C1867.5 209.5 1811 231 1712 231C1557 231 1359.73 70 1143 70C894.5 70 749.5 128.986 522 150C383 162.839 191.5 150 0 15Z"
          fill="none"
        />
        <path
          id="line"
          d="M1712 226C1811 226 1867.5 204.5 1920 169V174C1867.5 209.5 1811 231 1712 231C1557 231 1359.73 70 1143 70C894.5 70 749.5 128.986 522 150C383 162.839 191.5 150 0 15V10C191.5 145 383 157.839 522 145C749.5 123.986 894.5 65 1143 65C1359.73 65 1557 226 1712 226Z"
          fill="none"
        />
      </g>
      <defs>
        <filter id="filter-footer-shadow" x="-20" y="0" width="1960" height="261" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="5"/>
          <feGaussianBlur stdDeviation="10"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1565_1674"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1565_1674" result="shape"/>
        </filter>
      </defs>
    </FooterTopStyle>
  );
}
