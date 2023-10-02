import {JobExperienceEntity} from "@/core";
import {CompanyDetailsStyle} from "./my-experience.style.ts";
import {Tag, Typography} from "@juanmsl/ui";
import moment from "moment";

type CompanyItemProps = {
  company: JobExperienceEntity;
}

export const CompanyDetails = ({
  company
}: CompanyItemProps) => {
  const { description, name, position, dateStart, dateEnd, icon, technologies } = company;

  const formatDate = (date) => Date.parse(date) ? moment( date, 'YYYY-MM-DD' ).format( 'MMM YYYY' ) : date;

  const timeBetween = (date_start, date_end) => {
    const momentStart = moment( date_start );

    return Date.parse(date_end) ? moment(date_end).from( momentStart, true ) : momentStart.fromNow();
  };

  return (
    <CompanyDetailsStyle>
      <div className='company-details-header'>
        <div className="company-logo">
          <img src={icon} alt='Company logo' />
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
