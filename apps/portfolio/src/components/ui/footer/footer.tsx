import {FooterStyle} from "./footer.style.ts";
import {useTranslation} from "react-i18next";
import {Icon, Line, Typography} from "@juanmsl/ui";
import {SocialIcons} from "@/components/ui";
import {FooterTop} from "@/components/resources";

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <FooterStyle>
      <FooterTop />
      <div className="layout-content">
        <img className='footer-logo' src="/assets/images/logo.png" alt="logo" />

        <Typography variant='header3' className='name'>
          {t('common:shortName')}
        </Typography>

        <div className='footer-content'></div>

        <div className="columns">
          <div className='location'>
            <Icon name='pin-location' />
            <Typography variant='label'>
              {t('common:location')}
            </Typography>
          </div>

          <SocialIcons position='top' gap='10px' />
        </div>

        <Line orientation='horizontal' />

        <Typography variant='small' className='copyright' as='p'>
          {t('footer:copyright', { version: '3.0.0' })}
        </Typography>
      </div>
    </FooterStyle>
  );
}
