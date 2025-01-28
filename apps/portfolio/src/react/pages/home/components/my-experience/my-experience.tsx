import { motion } from 'framer-motion';
import { formatDate, timeBetween } from 'polpo/helpers';
import { Accordion, AccordionItem, Image, Tabs, Typography } from 'polpo/ui';
import { useMemo } from 'react';
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

  const renderedCompanies = useMemo(
    () =>
      jobExperience.map(({ name, dateStart, dateEnd }, key) => (
        <Reveal delay={100 * key} key={key} width='100%'>
          <CompanyListItem
            id={name}
            title={name}
            subtitle={`${formatDate(dateStart)} ${dateEnd ? '- ' + formatDate(dateEnd) : ''} (${timeBetween(
              dateStart,
              dateEnd,
            )})`}
          />
        </Reveal>
      )),
    [jobExperience],
  );

  const renderedMobileCompanies = useMemo(
    () =>
      jobExperience.flatMap((company, key) => {
        const { name, dateStart, dateEnd, icon, position } = company;

        return (
          <Reveal delay={100 * key} key={key} width='100%'>
            <AccordionItem
              classNames={{
                header: 'companies-accordion-item-header',
              }}
              startContent={() => (
                <section className='company-logo'>
                  <Image src={icon} alt={name} />
                </section>
              )}
              content={isOpen => (
                <section className='accordion-header-content'>
                  <Typography variant='header4' noPadding>
                    {name}
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
                    <Typography className='position' variant='body' noPadding weight='bold'>
                      {position}
                    </Typography>
                  </motion.section>
                  <Typography variant='small' noPadding>
                    {`${formatDate(dateStart)} ${dateEnd ? '- ' + formatDate(dateEnd) : ''} (${timeBetween(
                      dateStart,
                      dateEnd,
                    )})`}
                  </Typography>
                </section>
              )}
            >
              <CompanyDetails company={company} />
            </AccordionItem>
          </Reveal>
        );
      }),
    [jobExperience],
  );

  return (
    <MyExperienceStyle contentClassName='layout-content'>
      <LoaderComponent isPending={jobExperience.length === 0}>
        <Tabs defaultOpenTab={jobExperience[0]?.name}>
          <SectionTitle center>{t('home:myExperience.title')}</SectionTitle>
          <Accordion className='mobile-experience'>{renderedMobileCompanies}</Accordion>
          <section className='laptop-experience'>
            <section className='companies-list'>{renderedCompanies}</section>
            <section className='company-details'>
              {jobExperience.map((experience, key) => (
                <Tabs.TabPanel id={experience.name} key={key}>
                  <CompanyDetails company={experience} />
                </Tabs.TabPanel>
              ))}
            </section>
          </section>
        </Tabs>
      </LoaderComponent>
    </MyExperienceStyle>
  );
};
