import { Icon } from 'polpo/ui';

import { LoaderComponentStyle } from './loader-component.style';

type LoaderComponentProps = {
  isPending: boolean;
  children: React.ReactNode;
};

export const LoaderComponent = ({ isPending, children }: LoaderComponentProps) => {
  if (isPending) {
    return (
      <LoaderComponentStyle>
        <Icon name='spinner' className='loader-icon' />
      </LoaderComponentStyle>
    );
  }

  return children;
};
