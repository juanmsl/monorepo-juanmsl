import { useClassNames } from '@juanmsl/hooks';
import { HTMLAttributes } from 'react';

import { TagStyle } from './tag.style';

export enum TagSize {
  SMALL = 'small',
  REGULAR = 'regular',
  LARGE = 'large',
}

type TagProps = HTMLAttributes<HTMLElement> & {
  children: React.ReactNode;
  isSelected?: boolean;
  size?: `${TagSize}`;
  rounded?: boolean;
};

export const Tag = ({
  children,
  className: customClassName = '',
  isSelected = false,
  size = 'regular',
  rounded = false,
  ...props
}: TagProps) => {
  const className = useClassNames({
    [customClassName]: !!customClassName,
    'tag-selected': isSelected,
    rounded: rounded,
    'small-size': size === TagSize.SMALL,
    'large-size': size === TagSize.LARGE,
  });

  return (
    <TagStyle className={className} {...props}>
      {children}
    </TagStyle>
  );
};
