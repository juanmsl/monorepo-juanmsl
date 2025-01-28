import { Typography } from 'polpo/ui';

import { SectionTitleStyle } from './section-title.style';

type SectionTitleProps = {
  children: React.ReactNode;
  center?: boolean;
};

export const SectionTitle = ({ children, center = false }: SectionTitleProps) => {
  return (
    <SectionTitleStyle className={center ? 'align-center' : ''}>
      <Typography className='section-title' variant='header1'>
        {children}
      </Typography>
      <span className='section-title-underline' />
    </SectionTitleStyle>
  );
};
