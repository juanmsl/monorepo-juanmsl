import { Icon } from 'polpo/ui';

import { SimpleLoaderStyle } from './simple-loader.style';

export const SimpleLoader = () => {
  return (
    <SimpleLoaderStyle>
      <Icon name='spinner' className='simple-loader-spinner' />
    </SimpleLoaderStyle>
  );
};
