import { formatDate, timeBetween } from '@juanmsl/helpers';
import { Grid, HoverCard, Icon, IconNameT, Image, Tag, Tooltip, Typography } from '@juanmsl/ui';

import { CompanyDetailsStyle } from './my-experience.style';

import { Reveal } from '@components/animations';
import { Markdown } from '@components/ui';
import { JobExperienceEntity } from '@domain';

type CompanyItemProps = {
  company: JobExperienceEntity;
};

export const CompanyDetails = ({ company }: CompanyItemProps) => {
  const { name, position, dateStart, dateEnd, icon, links, technologies, content } = company;

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
      <Markdown>{content}</Markdown>
      <section className='company-details-labels'>
        {technologies.items.map(({ name, icon }, key) => (
          <Reveal delay={50 * key} key={key}>
            <Tag rounded className='company-details-label'>
              <Image className='company-details-labels-icon' src={icon} alt={name} />
              {name}
            </Tag>
          </Reveal>
        ))}
      </section>
    </CompanyDetailsStyle>
  );
};
