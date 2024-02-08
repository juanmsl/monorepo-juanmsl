import { Document } from '@components/modules';
import { SectionLayout } from '@components/layouts';
import { Typography } from '@juanmsl/ui';

export const Resume = () => {
  return (
    <SectionLayout>
      <Typography variant="hero">Resume</Typography>
      <Document />
    </SectionLayout>
  );
};
