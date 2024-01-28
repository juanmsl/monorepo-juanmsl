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
          d="M0 25V10H1920V184C1867.5 219.5 1811 241 1712 241C1557 241 1359.73 80 1143 80C894.5 80 749.5 138.986 522 160C383 172.839 191.5 160 0 25Z"
          fill="none"
        />
        <path
          id="line"
          d="M1712 231C1811 231 1867.5 209.5 1920 174V184C1867.5 219.5 1811 241 1712 241C1557 241 1359.73 80 1143 80C894.5 80 749.5 138.986 522 160C383 172.839 191.5 160 0 25V15C191.5 150 383 162.839 522 150C749.5 128.986 894.5 70 1143 70C1359.73 70 1557 231 1712 231Z"
          fill="none"
        />
      </g>
      <defs>
        <filter id="filter-footer-shadow" x="-20" y="0" width="1960" height="261" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="10"/>
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
