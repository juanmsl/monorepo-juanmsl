import { CompaniesListItemStyle } from './my-experience.style';
import { CompanyDetails } from '@components/modules/my-experience/company-details';
import { JobExperienceEntity } from '@domain';
import { Icon, Typography, formatDate, timeBetween, useClassNames } from '@juanmsl/ui';

type CompanyItemProps = {
  selected?: boolean;
  selectCompany: () => void;
  company: JobExperienceEntity;
};

export const CompanyListItem = ({ selected = false, selectCompany, company }: CompanyItemProps) => {
  const { name, dateStart, dateEnd, position } = company;
  const className = useClassNames({
    selected: selected,
  });

  return (
    <CompaniesListItemStyle className={className} onClick={selectCompany}>
      <section className='company-item-header'>
        <section className='header-left'>
          <Typography variant='body' weight='bold' className='company-item-name' withoutPadding>
            {name}
          </Typography>
          <Typography className='company-item-position' variant='header4' withoutPadding>
            {position}
          </Typography>
          <Typography variant='label' withoutPadding>
            {formatDate(dateStart)} - {formatDate(dateEnd)} ({timeBetween(dateStart, dateEnd)})
          </Typography>
        </section>
        <section className='header-right'>
          <Icon name={selected ? 'caret-up' : 'caret-down'} />
        </section>
      </section>
      <section className='company-item-body'>
        <CompanyDetails company={company} />
      </section>
    </CompaniesListItemStyle>
  );
};
