import { formatDate, timeBetween } from '@juanmsl/helpers';
import { Accordion, Image, Typography } from '@juanmsl/ui';
import { motion } from 'framer-motion';
import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { CompanyDetails } from './company-details';
import { CompanyListItem } from './company-list-item';
import { MyExperienceStyle } from './my-experience.style';

import { Reveal } from '@components/animations';
import { LoaderComponent, SectionTitle } from '@components/ui';
import { useGetJobExperience } from '@hooks';

export const MyExperience = () => {
  const { t } = useTranslation();
  const { data: jobExperience = [] } = useGetJobExperience();
  const [index, setIndex] = useState<number>(0);

  const renderedCompanies = useMemo(
    () =>
      jobExperience.map(({ name, dateStart, dateEnd }, key) => (
        <Reveal delay={100 * key} key={key} width='100%'>
          <CompanyListItem
            isSelected={jobExperience?.[index]?.name === name}
            onClick={() => setIndex(key)}
            title={name}
            subtitle={`${formatDate(dateStart)} ${dateEnd ? '- ' + formatDate(dateEnd) : ''} (${timeBetween(
              dateStart,
              dateEnd,
            )})`}
          />
        </Reveal>
      )),
    [index, jobExperience],
  );

  const renderedMobileCompanies = useMemo(
    () =>
      jobExperience.flatMap((company, key) => {
        const { name, dateStart, dateEnd, icon, position } = company;

        return (
          <Reveal delay={100 * key} key={key} width='100%'>
            <Accordion.Item
              title={name}
              subtitle={`${formatDate(dateStart)} ${dateEnd ? '- ' + formatDate(dateEnd) : ''} (${timeBetween(
                dateStart,
                dateEnd,
              )})`}
              startContent={() => (
                <section className='company-logo'>
                  <Image src={icon} alt={name} />
                </section>
              )}
              middleContent={({ isOpen, title, subtitle }) => (
                <section className='accordion-header-content'>
                  <Typography variant='body' noPadding weight='bold'>
                    {title}
                  </Typography>
                  <motion.section
                    variants={{
                      open: {
                        height: 'auto',
                        opacity: 1,
                      },
                      closed: {
                        height: 0,
                        opacity: 0,
                        overflow: 'hidden',
                      },
                    }}
                    initial='closed'
                    animate={isOpen ? 'open' : 'closed'}
                  >
                    <Typography className='position' variant='header4' noPadding weight='bold'>
                      {position}
                    </Typography>
                  </motion.section>
                  <Typography variant='label' noPadding weight='light'>
                    {subtitle}
                  </Typography>
                </section>
              )}
            >
              <CompanyDetails company={company} />
            </Accordion.Item>
          </Reveal>
        );
      }),
    [jobExperience],
  );

  return (
    <MyExperienceStyle>
      <SectionTitle>{t('home:myExperience.title')}</SectionTitle>
      <Accordion className='mobile-experience'>{renderedMobileCompanies}</Accordion>
      <section className='laptop-experience'>
        <section className='companies-list'>{renderedCompanies}</section>
        <section className='company-details'>
          <LoaderComponent isPending={!jobExperience?.[index]}>
            <CompanyDetails company={jobExperience[index]} key={index} />
          </LoaderComponent>
        </section>
      </section>
    </MyExperienceStyle>
  );
};
