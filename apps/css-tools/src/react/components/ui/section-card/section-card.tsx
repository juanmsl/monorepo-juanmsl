import { SectionCardStyle } from './section-card.style';

type SectionCardProps = {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
};

export const SectionCard = ({ children, className = '', style = {}, onClick }: SectionCardProps) => {
  return (
    <SectionCardStyle className={className} style={style} onClick={onClick}>
      {children}
    </SectionCardStyle>
  );
};
