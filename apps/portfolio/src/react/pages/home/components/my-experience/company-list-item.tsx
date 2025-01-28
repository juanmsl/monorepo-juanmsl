import { Typography } from 'polpo/ui';

import { CompaniesListItemStyle } from './my-experience.style';

type CompanyItemProps = {
  title: string;
  subtitle: string;
  id: string;
};

export const CompanyListItem = ({ title, subtitle, id }: CompanyItemProps) => {
  return (
    <CompaniesListItemStyle id={id}>
      <Typography variant='body' weight='bold' className='company-item-name' noPadding>
        {title}
      </Typography>
      <Typography variant='label' noPadding>
        {subtitle}
      </Typography>
    </CompaniesListItemStyle>
  );
};
