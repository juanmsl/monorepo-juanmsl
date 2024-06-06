import { formatDate, timeBetween } from '@juanmsl/helpers';
import { HoverCard, Image, Tag, Typography } from '@juanmsl/ui';

import { CompanyDetailsStyle } from './my-experience.style';

import { Reveal } from '@components/animations';
import { JobExperienceEntity } from '@domain';

type CompanyItemProps = {
  company: JobExperienceEntity;
};

export const CompanyDetails = ({ company }: CompanyItemProps) => {
  const { description, name, position, dateStart, dateEnd, icon, technologies } = company;

  return (
    <CompanyDetailsStyle>
      <section className='company-details-header'>
        <section className='company-logo'>
          <HoverCard width='100%'>
            <Image src={icon} alt='Company logo' />
          </HoverCard>
        </section>
        <section className='company-details-header--content'>
          <Typography className='company-details-name' variant='label' withoutPadding>
            {name}
          </Typography>
          <Typography className='company-details-position' variant='header4' withoutPadding>
            {position}
          </Typography>
          <Typography className='company-details-time' variant='small' withoutPadding>
            {formatDate(dateStart)} {dateEnd ? '- ' + formatDate(dateEnd) : ''} ({timeBetween(dateStart, dateEnd)})
          </Typography>
        </section>
      </section>
      <ul className='company-details-description'>
        {description.map((text, key) => (
          <li key={key}>
            <Typography variant='body' withoutPadding>
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
