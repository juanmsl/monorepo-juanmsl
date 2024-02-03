import { SectionTitleStyle } from './section-title.style';

type SectionTitleProps = {
  children: React.ReactNode;
};

export const SectionTitle = ({ children }: SectionTitleProps) => {
  return <SectionTitleStyle variant="header1">{children}</SectionTitleStyle>;
};
