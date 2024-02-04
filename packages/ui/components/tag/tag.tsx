import { TagStyle } from './tag.style';
import { Typography } from '../typography';
import { useClassNames } from '@juanmsl/hooks';
import { HTMLAttributes } from 'react';

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
      <Typography variant="label">{children}</Typography>
    </TagStyle>
  );
};
