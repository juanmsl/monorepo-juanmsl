import { PositionContainer } from 'polpo/helpers';
import { useClassNames } from 'polpo/hooks';
import { Tooltip, TooltipProps } from 'polpo/ui';

import { ToggleSelectorStyle } from './toggle-selector.style';

enum ToggleSelectorOrientation {
  VERTICAL = 'vertical',
  HORIZONTAL = 'horizontal',
}

type ToggleSelectorProps = {
  children: [React.ReactNode, React.ReactNode];
  leftLabel?: string;
  rightLabel?: string;
  position: 'left' | 'right';
  toggle: () => void;
  tooltipPosition?: TooltipProps['position'];
  orientation?: `${ToggleSelectorOrientation}`;
};

export const ToggleSelector = ({
  children,
  leftLabel,
  rightLabel,
  position,
  toggle,
  tooltipPosition = PositionContainer.TOP,
  orientation = ToggleSelectorOrientation.HORIZONTAL,
}: ToggleSelectorProps) => {
  const className = useClassNames({
    'right-position': position === 'right',
    vertical: orientation === ToggleSelectorOrientation.VERTICAL,
  });

  return (
    <ToggleSelectorStyle className={className} onClick={toggle}>
      <Tooltip content={leftLabel} disabled={!leftLabel} position={tooltipPosition}>
        <span className='left-option'>{children[0]}</span>
      </Tooltip>
      <Tooltip content={rightLabel} disabled={!rightLabel} position={tooltipPosition}>
        <span className='right-option'>{children[1]}</span>
      </Tooltip>
    </ToggleSelectorStyle>
  );
};
