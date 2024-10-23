import { Typography } from 'juanmsl/ui';
import Link from 'next/link';

import { PageWithParams } from '@core/entities';
import initTranslations from '@core/i18n';

const Home = async ({ params: { lang } }: PageWithParams) => {
  const { t } = await initTranslations(lang);

  return (
    <main>
      <Typography>{t('common:language')}</Typography>
      <Link href='/docs'>
        <Typography>{t('common:shortName')}</Typography>
      </Link>
    </main>
  );
};

export default Home;
