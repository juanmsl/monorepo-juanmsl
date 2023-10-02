import {JobExperienceEntity} from "@/core";
import {useClassNames} from "@juanmsl/hooks";
import moment from "moment/moment";
import {CompaniesListItemStyle} from "./my-experience.style.ts";
import {Typography} from "@juanmsl/ui";

type CompanyItemProps = {
  selected?: boolean;
  selectCompany: () => void;
  company: JobExperienceEntity;
}

export const CompanyListItem = ({
  selected = false,
  selectCompany,
  company
}: CompanyItemProps) => {
  const {name, dateStart, dateEnd} = company;
  const className = useClassNames({
    'selected': selected
  })

  const formatDate = (date) => Date.parse(date) ? moment( date, 'YYYY-MM-DD' ).format( 'MMM YYYY' ) : date;

  const timeBetween = (date_start, date_end) => {
    const momentStart = moment( date_start );

    return Date.parse(date_end) ? moment(date_end).from( momentStart, true ) : momentStart.fromNow();
  };

  return (
    <CompaniesListItemStyle className={className} onClick={selectCompany}>
      <Typography variant='body' weight='bold' withoutPadding>{name}</Typography>
      <Typography variant='label' withoutPadding>{formatDate(dateStart)} - {formatDate(dateEnd)} ({timeBetween(dateStart,dateEnd)})</Typography>
    </CompaniesListItemStyle>
  );
}
