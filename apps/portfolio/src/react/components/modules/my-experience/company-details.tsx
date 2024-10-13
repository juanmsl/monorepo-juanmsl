import { formatDate, timeBetween } from '@juanmsl/helpers';
import { Grid, HoverCard, Icon, IconNameT, Image, Tag, Tooltip, Typography } from '@juanmsl/ui';

import { CompanyDetailsStyle } from './my-experience.style';

import { Reveal } from '@components/animations';
import { JobExperienceEntity } from '@domain';

type CompanyItemProps = {
  company: JobExperienceEntity;
};

export const CompanyDetails = ({ company }: CompanyItemProps) => {
  const { description, name, position, dateStart, dateEnd, icon, links, technologies } = company;

  return (
    <CompanyDetailsStyle>
      <section className='company-details-header'>
        <section className='company-logo'>
          <HoverCard width='100%'>
            <Image src={icon} alt='Company logo' />
          </HoverCard>
        </section>
        <section className='company-details-header--content'>
          <Grid flow='column' gap='1em' jc='start' ai='center'>
            <Typography className='company-details-name' variant='header4' noPadding>
              {name}
            </Typography>
            <Grid flow='column' gap='1em'>
              {links.items.map(({ icon, url, label }, key) => (
                <Tooltip content={label} key={key}>
                  <a href={url} target='_blank' rel='noopener' key={key}>
                    <Icon name={icon as IconNameT} />
                  </a>
                </Tooltip>
              ))}
            </Grid>
          </Grid>
          <Typography className='company-details-position' variant='body' weight='bold' noPadding>
            {position}
          </Typography>
          <Typography className='company-details-time' variant='small' noPadding>
            {formatDate(dateStart)} {dateEnd ? '- ' + formatDate(dateEnd) : ''} ({timeBetween(dateStart, dateEnd)})
          </Typography>
        </section>
      </section>
      <ul className='company-details-description'>
        {description.map((text, key) => (
          <li key={key}>
            <Typography variant='body' noPadding>
              {text}
            </Typography>
          </li>
        ))}
      </ul>
      <section className='company-details-labels'>
        {technologies.items.map((technology, key) => (
          <Reveal delay={50 * key} key={key}>
            <Tag>{technology.name}</Tag>
          </Reveal>
        ))}
      </section>
    </CompanyDetailsStyle>
  );
};
