import {HeaderStyle} from "./header.style.ts";
import {useTranslation} from "react-i18next";
import {Line, Typography} from "@juanmsl/ui";
import {SocialIcons} from "@/components/modules";
import {HeaderBottom} from "@/components/resources";
import {useAsset} from "@/hooks";

export const Header = () => {
  const { t } = useTranslation();
  const userLabels = t('common:userLabels', { returnObjects: true }) as Array<string>;
  const { data } = useAsset('7kZGbgXgeL1PtS0eyjA1VL');

  return (
    <HeaderStyle $background={data?.url}>
      <div className="layout-content">
        <div className="container">
          <Line orientation='horizontal' size='3px' className='header-lines' />
          <Typography variant='hero' className='names' withoutPadding>{t('common:shortName')}</Typography>
          <Line orientation='horizontal' size='3px' className='header-lines' />
          <div className="user-labels">
            {userLabels.map((label, key) => (
              <Typography variant='body' key={key} className='user-label'>{label}</Typography>
            ))}
          </div>
          <SocialIcons position='bottom' />
        </div>
      </div>
      <HeaderBottom />
    </HeaderStyle>
  );
}
