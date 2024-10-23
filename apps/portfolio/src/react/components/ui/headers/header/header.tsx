import { Typography } from 'juanmsl/ui';

import { HeaderContainerStyle, HeaderStyle } from './header.style';

import { Reveal } from '@components/animations';
import { HeaderBottom } from '@components/resources';

type HeaderProps = {
  title: string;
};

export const Header = ({ title }: HeaderProps) => {
  return (
    <HeaderContainerStyle>
      <HeaderStyle contentClassName='header-layout-content' fitHeightContent>
        <section className='container'>
          <Reveal delay={300} width='100%'>
            <Typography variant='hero' className='names' noPadding>
              {title}
            </Typography>
          </Reveal>
        </section>
      </HeaderStyle>
      <HeaderBottom />
    </HeaderContainerStyle>
  );
};
