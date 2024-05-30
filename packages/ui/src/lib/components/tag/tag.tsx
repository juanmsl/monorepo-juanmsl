import { HTMLAttributes } from 'react';

import { useClassNames } from '../../hooks';
import { Typography } from '../typography';

import { TagStyle } from './tag.style';

type TagProps = HTMLAttributes<HTMLElement> & {
  children: string;
  isSelected?: boolean;
};

export const Tag = ({ children, className: customClassName = '', isSelected = false, ...props }: TagProps) => {
  const className = useClassNames({
    [customClassName]: !!customClassName,
    'tag-selected': isSelected,
  });

  return (
    <TagStyle className={className} {...props}>
      <Typography variant='label'>{children}</Typography>
    </TagStyle>
  );
};
