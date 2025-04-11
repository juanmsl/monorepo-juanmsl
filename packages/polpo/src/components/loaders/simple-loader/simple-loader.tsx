import { useMemo } from 'react';

import { Box1 } from '../icons/box-1';
import { Box2 } from '../icons/box-2';
import { Box3 } from '../icons/box-3';
import { Clock1 } from '../icons/clock-1';
import { Clock2 } from '../icons/clock-2';
import { Dots1 } from '../icons/dots-1';
import { Dots2 } from '../icons/dots-2';
import { Dots3 } from '../icons/dots-3';
import { Dots4 } from '../icons/dots-4';
import { Dots5 } from '../icons/dots-5';
import { Dots6 } from '../icons/dots-6';
import { Dots7 } from '../icons/dots-7';
import { Dots8 } from '../icons/dots-8';
import { Dots9 } from '../icons/dots-9';
import { Lines1 } from '../icons/lines-1';
import { Lines2 } from '../icons/lines-2';
import { Pulse1 } from '../icons/pulse-1';
import { Pulse2 } from '../icons/pulse-2';
import { Pulse3 } from '../icons/pulse-3';
import { Pulse4 } from '../icons/pulse-4';
import { Pulse5 } from '../icons/pulse-5';
import { Spinner1 } from '../icons/spinner-1';
import { Spinner2 } from '../icons/spinner-2';
import { Spinner3 } from '../icons/spinner-3';
import { Spinner4 } from '../icons/spinner-4';

import { SimpleLoaderStyle } from './simple-loader.style';

export enum LoaderIcons {
  BOX_1 = 'box-1',
  BOX_2 = 'box-2',
  BOX_3 = 'box-3',
  CLOCK_1 = 'clock-1',
  CLOCK_2 = 'clock-2',
  DOTS_1 = 'dots-1',
  DOTS_2 = 'dots-2',
  DOTS_3 = 'dots-3',
  DOTS_4 = 'dots-4',
  DOTS_5 = 'dots-5',
  DOTS_6 = 'dots-6',
  DOTS_7 = 'dots-7',
  DOTS_8 = 'dots-8',
  DOTS_9 = 'dots-9',
  LINES_1 = 'lines-1',
  LINES_2 = 'lines-2',
  PULSE_1 = 'pulse-1',
  PULSE_2 = 'pulse-2',
  PULSE_3 = 'pulse-3',
  PULSE_4 = 'pulse-4',
  PULSE_5 = 'pulse-5',
  SPINNER_1 = 'spinner-1',
  SPINNER_2 = 'spinner-2',
  SPINNER_3 = 'spinner-3',
  SPINNER_4 = 'spinner-4',
}

const LoaderIconsMap: Record<LoaderIcons, React.FC> = {
  [LoaderIcons.BOX_1]: Box1,
  [LoaderIcons.BOX_2]: Box2,
  [LoaderIcons.BOX_3]: Box3,
  [LoaderIcons.CLOCK_1]: Clock1,
  [LoaderIcons.CLOCK_2]: Clock2,
  [LoaderIcons.DOTS_1]: Dots1,
  [LoaderIcons.DOTS_2]: Dots2,
  [LoaderIcons.DOTS_3]: Dots3,
  [LoaderIcons.DOTS_4]: Dots4,
  [LoaderIcons.DOTS_5]: Dots5,
  [LoaderIcons.DOTS_6]: Dots6,
  [LoaderIcons.DOTS_7]: Dots7,
  [LoaderIcons.DOTS_8]: Dots8,
  [LoaderIcons.DOTS_9]: Dots9,
  [LoaderIcons.LINES_1]: Lines1,
  [LoaderIcons.LINES_2]: Lines2,
  [LoaderIcons.PULSE_1]: Pulse1,
  [LoaderIcons.PULSE_2]: Pulse2,
  [LoaderIcons.PULSE_3]: Pulse3,
  [LoaderIcons.PULSE_4]: Pulse4,
  [LoaderIcons.PULSE_5]: Pulse5,
  [LoaderIcons.SPINNER_1]: Spinner1,
  [LoaderIcons.SPINNER_2]: Spinner2,
  [LoaderIcons.SPINNER_3]: Spinner3,
  [LoaderIcons.SPINNER_4]: Spinner4,
};

type SimpleLoaderProps = {
  icon?: `${LoaderIcons}`;
};

export const SimpleLoader = ({ icon = LoaderIcons.SPINNER_1 }: SimpleLoaderProps) => {
  const iconRendered = useMemo(() => {
    const Icon = LoaderIconsMap[icon] ?? Spinner1;

    return <Icon />;
  }, [icon]);

  return <SimpleLoaderStyle>{iconRendered}</SimpleLoaderStyle>;
};
