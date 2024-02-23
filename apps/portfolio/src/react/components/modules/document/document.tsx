import { Button } from '@juanmsl/ui';
import { DocumentStyle } from './document.style';
import { LoaderComponent } from '@components/ui';
import { useAsset } from '@hooks';

export const Document = () => {
  const { data: resume, isPending } = useAsset('2Sb2cM6MN8osN8kXMizuUd');

  return (
    <DocumentStyle>
      <LoaderComponent isPending={isPending}>
        <object width='100%' height='100%' data={resume?.url} type='application/pdf'>
          <section>
            <h4>Something happen loading the respective file</h4>
            <p>Please download it with the following button</p>
            <Button>Download</Button>
          </section>
        </object>
      </LoaderComponent>
    </DocumentStyle>
  );
};
