import {Icon, IconNameT, Tooltip, TooltipProps} from "@juanmsl/ui";
import {useGetSocialContact} from "@/hooks";
import {SocialIconsStyle} from "./social-icons.style.ts";
import {useTranslation} from "react-i18next";

type SocialIconsProps = {
  position: TooltipProps['position'];
  gap?: string;
}

export const SocialIcons = ({
  position,
  gap = "20px"
}: SocialIconsProps) => {
  const { i18n } = useTranslation();
  const { isPending, data: icons = [] } = useGetSocialContact(i18n.language);

  return (
    <SocialIconsStyle $gap={gap}>
      {icons.map(({ icon, url, name }, key) => (
        <Tooltip content={isPending ? 'Is pending' : name} position={position} key={key}>
          <a href={url} target='_blank' rel='noopener noreferrer' className="social-icon">
            <Icon name={icon as IconNameT} />
          </a>
        </Tooltip>
      ))}
    </SocialIconsStyle>
  );
}
