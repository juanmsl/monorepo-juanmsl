import {JobExperienceEntity} from "@/core";
import {useClassNames} from "@juanmsl/hooks";
import {CompaniesListItemStyle} from "./my-experience.style.ts";
import {Typography} from "@juanmsl/ui";
import {formatDate, timeBetween} from "@juanmsl/helpers";

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
  });

  return (
    <CompaniesListItemStyle className={className} onClick={selectCompany}>
      <Typography variant='body' weight='bold' withoutPadding>{name}</Typography>
      <Typography variant='label' withoutPadding>{formatDate(dateStart)} - {formatDate(dateEnd)} ({timeBetween(dateStart,dateEnd)})</Typography>
    </CompaniesListItemStyle>
  );
}
