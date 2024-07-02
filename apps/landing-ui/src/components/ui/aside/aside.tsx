'use client';

import { Icon, Line, Typography } from '@juanmsl/ui';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';

import { AsideItemStyle, AsideStyle } from '@components/ui/aside/aside.style';
import { ASIDE_ITEMS } from '@core/constants';

export const Aside = () => {
  const { t } = useTranslation('aside');
  const pathname = usePathname();

  return (
    <AsideStyle>
      {ASIDE_ITEMS.map(({ label, items }) => (
        <AsideItemStyle key={label}>
          <section className='aside-item-header'>
            <Typography weight='bold'>{t(label)}</Typography>
            <Line
              orientation='horizontal'
              className='aside-item-header--line'
              lineStyle='dotted'
              dotSize={2}
              spacing={4}
            />
          </section>
          <section className='aside-item-body'>
            {items.map(({ label, path }, key) => (
              <Typography withoutPadding variant='label' weight='bold' key={key}>
                <Link href={path} className={`aside-accordion-item--link ${pathname.endsWith(path) ? 'active' : ''}`}>
                  <Icon name='arrow-right' className='aside-accordion-item--icon' />
                  <span>{t(label)}</span>
                </Link>
              </Typography>
            ))}
          </section>
        </AsideItemStyle>
      ))}
    </AsideStyle>
  );
};
