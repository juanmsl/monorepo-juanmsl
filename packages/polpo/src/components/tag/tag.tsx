import { HTMLAttributes } from 'react';

import { RadiusVariants, SizeVariants } from '../../core/variants';

import { TagStyle } from './tag.style';

import { useClassNames } from '@polpo/hooks';

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
  const className = useClassNames({
    [customClassName]: !!customClassName,
    'tag-selected': isSelected,
  });

  return (
    <TagStyle className={className} {...props} $size={size} $radius={radius}>
      {children}
    </TagStyle>
  );
};
