import { LegacyRef, RefObject, useEffect } from 'react';

import { Icon } from '../../contexts';
import { useInView } from '../../hooks';

import { InfiniteScrollStyle } from './infinity-scroll.style';

type InfinityScrollProps<T> = {
  isLoading: boolean;
  hasNextPage: boolean;
  loadMore: () => void;
  data: Array<T>;
  renderItem: (item: T, key: number) => React.ReactElement;
  customLoadMoreElement?: (ref: RefObject<Element>) => React.ReactElement;
  emptyMessage?: string;
};

export const InfinityScroll = <T,>({
  isLoading,
  hasNextPage,
  loadMore,
  data,
  renderItem,
  customLoadMoreElement,
  emptyMessage,
}: InfinityScrollProps<T>): React.ReactElement => {
  const { ref, inView } = useInView();

  useEffect(() => {
    if (hasNextPage && inView && !isLoading) {
      loadMore();
    }
  }, [hasNextPage, isLoading, loadMore, inView]);

  return (
    <>
      <InfiniteScrollStyle />
      {!!emptyMessage && data.length === 0 && !isLoading && <p className='empty-message'>{emptyMessage}</p>}
      {data.map(renderItem)}
      {(hasNextPage || isLoading) &&
        (customLoadMoreElement ? (
          customLoadMoreElement(ref)
        ) : (
          <section ref={ref as LegacyRef<HTMLElement>} className='loading'>
            {isLoading && <Icon name='spinner' className='loading--icon' />}
          </section>
        ))}
    </>
  );
};
