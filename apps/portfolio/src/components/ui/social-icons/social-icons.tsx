import {Icon, IconNameT, Tooltip, TooltipProps} from "@juanmsl/ui";
import {useGetSocialContact} from "@/hooks";
import {SocialIconsStyle} from "./social-icons.style.ts";
import {Reveal} from "@/components/animations";

type SocialIconsProps = {
  position: TooltipProps['position'];
  gap?: string;
}

export const SocialIcons = ({
  position,
  gap = "20px"
}: SocialIconsProps) => {
  const { isPending, data: icons = [] } = useGetSocialContact();

  return (
    <SocialIconsStyle $gap={gap}>
      {icons.map(({ icon, url, name }, key) => (
        <Tooltip content={isPending ? 'Is pending' : name} position={position} key={key}>
          <Reveal delay={key * 100}>
            <a href={url} target='_blank' rel='noopener noreferrer' className="social-icon">
              <Icon name={icon as IconNameT} />
            </a>
          </Reveal>
        </Tooltip>
      ))}
    </SocialIconsStyle>
  );
}
