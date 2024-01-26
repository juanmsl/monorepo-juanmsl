import {JobExperienceEntity} from "@/core";
import {CompanyDetailsStyle} from "./my-experience.style.ts";
import {HoverCard, Tag, Typography} from "@juanmsl/ui";
import {formatDate, timeBetween} from "@juanmsl/helpers";

type CompanyItemProps = {
  company: JobExperienceEntity;
}

export const CompanyDetails = ({
  company
}: CompanyItemProps) => {
  const { description, name, position, dateStart, dateEnd, icon, technologies } = company;

  return (
    <CompanyDetailsStyle>
      <div className='company-details-header'>
        <div className="company-logo">
          <HoverCard>
            <img src={icon} alt='Company logo' />
          </HoverCard>
        </div>
        <div className="company-details-header--content">
          <Typography variant='label' withoutPadding>{name}</Typography>
          <Typography variant='header4' withoutPadding>{position}</Typography>
          <Typography variant='small' withoutPadding>{formatDate(dateStart)} - {formatDate(dateEnd)} ({timeBetween(dateStart,dateEnd)})</Typography>
        </div>
      </div>
      <ul className='company-details-description'>
        {description.map((text, key) => (
          <li key={key}>
            <Typography variant='body' withoutPadding>{text}</Typography>
          </li>
        ))}
      </ul>
      <div className='company-details-labels'>
        {technologies.items.map((technology, key) => (
          <Tag key={key}>{technology.name}</Tag>
        ))}
      </div>
    </CompanyDetailsStyle>
  );
}
