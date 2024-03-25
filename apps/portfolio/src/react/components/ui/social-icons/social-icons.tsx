import { GA } from '@core/ga';
import { Reveal } from '@components/animations';
import { SocialIconsStyle } from './social-icons.style';
import { useCallback } from 'react';
import { useGetSocialContact } from '@hooks';
import { Icon, IconNameT, Tooltip, TooltipProps } from '@juanmsl/ui';

type SocialIconsProps = {
  position: TooltipProps['position'];
  gap?: string;
};

export const SocialIcons = ({ position, gap = '20px' }: SocialIconsProps) => {
  const { isPending, data: icons = [] } = useGetSocialContact();

  const reportGA = useCallback((url: string) => {
    GA.event({
      action: url,
      category: GA.categories.SOCIAL_VISITED,
    });
  }, []);

  return (
    <SocialIconsStyle $gap={gap}>
      {icons.map(({ icon, url, name }, key) => (
        <Tooltip content={isPending ? 'Is pending' : name} position={position} key={key}>
          <Reveal delay={key * 100}>
            <a
              href={url}
              target='_blank'
              rel='noopener noreferrer'
              onClick={() => reportGA(url)}
              className='social-icon'
            >
              <Icon name={icon as IconNameT} />
            </a>
          </Reveal>
        </Tooltip>
      ))}
    </SocialIconsStyle>
  );
};
