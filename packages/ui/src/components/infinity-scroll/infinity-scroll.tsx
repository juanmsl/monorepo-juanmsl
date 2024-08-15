import { useInView } from '@juanmsl/hooks';
import { LegacyRef, RefObject, useEffect } from 'react';

import { Icon } from '../icon';

import { InfinityScrollFooterStyle } from './infinity-scroll.style';

type InfinityScrollProps<T> = {
  isLoading: boolean;
  hasNextPage: boolean;
  loadMore: () => void;
  data: Array<T>;
  renderItem: (item: T, key: number) => React.ReactElement;
  customLoadMoreElement?: (ref: RefObject<Element>) => React.ReactElement;
  emptyMessage?: string;
  children?: React.ReactNode;
};

export const InfinityScroll = <T,>({
  isLoading,
  hasNextPage,
  loadMore,
  data,
  renderItem,
  customLoadMoreElement,
  emptyMessage,
  children,
}: InfinityScrollProps<T>): React.ReactElement => {
  const { ref, inView } = useInView();

  useEffect(() => {
    if (hasNextPage && inView && !isLoading) {
      loadMore();
    }
  }, [hasNextPage, isLoading, loadMore, inView]);

  return (
    <>
      {children}
      {data.map(renderItem)}
      <InfinityScrollFooterStyle>
        {!!emptyMessage && data.length === 0 && !isLoading && <p className='empty-message'>{emptyMessage}</p>}
        {(hasNextPage || isLoading) &&
          (customLoadMoreElement ? (
            customLoadMoreElement(ref)
          ) : (
            <section ref={ref as LegacyRef<HTMLElement>} className='loading'>
              {isLoading && <Icon name='spinner' className='loading--icon' />}
            </section>
          ))}
      </InfinityScrollFooterStyle>
    </>
  );
};
