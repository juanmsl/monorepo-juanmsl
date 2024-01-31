import {HoverCard, Typography} from "@juanmsl/ui";
import {Reveal} from "@components/animations";
import {Document} from "@components/modules";
import {SectionLayout} from "@components/layouts";

const Resume = () => {

  return (
    <SectionLayout>
      <Typography variant='hero'>
        Resume
      </Typography>
      <HoverCard threshold={1} translationZ={20} width='100%'>
        <Reveal width='100%'>
          <Document />
        </Reveal>
      </HoverCard>
    </SectionLayout>
  );
}

export default Resume;
