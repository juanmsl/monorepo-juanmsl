import { Icon } from '../../icon';

import { SimpleLoaderStyle } from './simple-loader.style';

type SimpleLoaderProps = {
  spinDuration?: number;
};

export const SimpleLoader = ({ spinDuration = 500 }: SimpleLoaderProps) => {
  return (
    <SimpleLoaderStyle>
      <Icon name='spinner' className='simple-loader-spinner' style={{ animationDuration: `${spinDuration}ms` }} />
    </SimpleLoaderStyle>
  );
};
