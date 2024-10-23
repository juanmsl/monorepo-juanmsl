import { HoverCard } from 'juanmsl/ui';

import { ProfilePictureStyle } from './profile-picture.style';

import { Reveal } from '@components/animations';
import { ENV } from '@core/env';
import { useAsset } from '@hooks';

type ProfilePictureProps = {
  className?: string;
};

export const ProfilePicture = ({ className }: ProfilePictureProps) => {
  const { data } = useAsset(ENV.ASSET_ID_PROFILE_PICTURE);

  return (
    <ProfilePictureStyle className={className}>
      <Reveal width='100%'>
        <HoverCard width='100%'>
          <svg viewBox='0 0 496 610' preserveAspectRatio='none'>
            <path
              id='background'
              fillRule='evenodd'
              clipRule='evenodd'
              d='M236.588 609.928C115.833 606.089 24.1113 499.002 2.78099 380.024C-15.8432 276.14 61.9035 191.022 151.497 135.297C247.532 75.5657 372.588 21.7911 456.067 98.0897C536.682 171.77 477.319 293.338 434.265 393.742C391.714 492.973 344.452 613.358 236.588 609.928Z'
              fill='currentColor'
            />
            <mask
              id='mask0'
              style={{ maskType: 'alpha' }}
              maskUnits='userSpaceOnUse'
              x='0'
              y='0'
              width='496'
              height='610'
            >
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M496 0H0.000209768L0 348.552L0.000970288 348.552C-0.0319991 358.836 0.863974 369.33 2.78108 380.024C24.1114 499.002 115.833 606.089 236.588 609.928C340.492 613.232 388.162 501.646 429.557 404.75C431.134 401.057 432.703 397.385 434.265 393.742C436.7 388.063 439.188 382.316 441.699 376.514C467.615 316.638 496.076 250.882 496 192.98L496 192.979L496 0Z'
                fill='#D9D9D9'
              />
            </mask>
            <g mask='url(#mask0)'>
              <rect width='496' height='610' fill='url(#pattern0)' />
            </g>

            <defs>
              <pattern id='pattern0' patternContentUnits='objectBoundingBox' width='1' height='1'>
                <use xlinkHref='#profilePicture' transform='scale(0.00201613 0.00163934)' />
              </pattern>
              <image id='profilePicture' width='496' height='610' xlinkHref={data?.url} />
            </defs>
          </svg>
        </HoverCard>
      </Reveal>
    </ProfilePictureStyle>
  );
};
