import { HeaderBottom } from '@components/resources';
import { Reveal } from '@components/animations';
import { Typography } from '@juanmsl/ui';
import { HeaderContainerStyle, HeaderStyle } from './header.style';

type HeaderProps = {
  title: string;
};

export const Header = ({ title }: HeaderProps) => {
  return (
    <HeaderContainerStyle>
      <HeaderStyle>
        <div className='container'>
          <Reveal delay={300} width='100%'>
            <Typography variant='hero' className='names' withoutPadding>
              {title}
            </Typography>
          </Reveal>
        </div>
      </HeaderStyle>
      <HeaderBottom />
    </HeaderContainerStyle>
  );
};
