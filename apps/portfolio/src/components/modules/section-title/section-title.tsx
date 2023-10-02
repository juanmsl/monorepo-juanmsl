import {SectionTitleStyle} from "./section-title.style.ts";

type SectionTitleProps = {
  children: React.ReactNode;
};

export const SectionTitle = ({
  children
}: SectionTitleProps) => {
  return (
    <SectionTitleStyle variant='header1'>
      {children}
    </SectionTitleStyle>
  );
};
