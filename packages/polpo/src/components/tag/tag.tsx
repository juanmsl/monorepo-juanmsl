import { HTMLAttributes } from 'react';

import { RadiusVariants, SizeVariants, useRadiusClassName, useSizeClassName } from '../../core/variants';

import { TagStyle } from './tag.style';

import { useClassNames } from '@polpo/hooks';

export enum TagSize {
  SMALL = 'small',
  REGULAR = 'regular',
  LARGE = 'large',
}

type TagProps = HTMLAttributes<HTMLElement> & {
  children: React.ReactNode;
  isSelected?: boolean;
  size?: `${SizeVariants}`;
  radius?: `${RadiusVariants}`;
};

export const Tag = ({
  children,
  className: customClassName = '',
  isSelected = false,
  size = SizeVariants.Medium,
  radius = RadiusVariants.Medium,
  ...props
}: TagProps) => {
  const tagSize = useSizeClassName(size);
  const tagRadius = useRadiusClassName(radius);
  const className = useClassNames({
    [customClassName]: !!customClassName,
    [tagRadius]: true,
    [tagSize]: true,
    'tag-selected': isSelected,
  });

  return (
    <TagStyle className={className} {...props}>
      {children}
    </TagStyle>
  );
};
