import { ToggleSelectorStyle } from './toggle-selector.style';
import { Tooltip, TooltipPosition, useClassNames } from '@juanmsl/ui';

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
  tooltipPosition?: `${TooltipPosition}`;
  orientation?: `${ToggleSelectorOrientation}`;
};

export const ToggleSelector = ({
  children,
  leftLabel,
  rightLabel,
  position,
  toggle,
  tooltipPosition = 'top',
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
