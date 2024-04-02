import { Typography, useClassNames } from '@juanmsl/ui';

import { CompaniesListItemStyle } from './my-experience.style';

type CompanyItemProps = {
  isSelected?: boolean;
  onClick: () => void;
  title: string;
  subtitle: string;
};

export const CompanyListItem = ({ isSelected = false, onClick, title, subtitle }: CompanyItemProps) => {
  const className = useClassNames({
    selected: isSelected,
  });

  return (
    <CompaniesListItemStyle className={className} onClick={onClick}>
      <Typography variant='body' weight='bold' className='company-item-name' withoutPadding>
        {title}
      </Typography>
      <Typography variant='label' withoutPadding>
        {subtitle}
      </Typography>
    </CompaniesListItemStyle>
  );
};
