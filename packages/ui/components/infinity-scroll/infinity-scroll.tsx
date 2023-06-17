import { Icon } from '../../contexts';
import { InfiniteScrollStyle } from './infinity-scroll.style';
import React, { LegacyRef, useEffect } from 'react';
import { useInView } from '@juanmsl/hooks';

type InfinityScrollProps<T> = {
  isLoading: boolean;
  hasNextPage: boolean;
  loadMore: () => void;
  data: Array<T>;
  renderItem: (item: T, key: number) => React.ReactElement;
  customLoadMoreElement?: (ref: LegacyRef<HTMLElement>) => React.ReactElement;
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
    <React.Fragment>
      <InfiniteScrollStyle />
      {!!emptyMessage && data.length === 0 && !isLoading && <p className="empty-message">{emptyMessage}</p>}
      {data.map(renderItem)}
      {(hasNextPage || isLoading) &&
        (customLoadMoreElement ? (
          customLoadMoreElement(ref)
        ) : (
          <section ref={ref} className="loading">
            {isLoading && <Icon name="spinner" className="loading--icon" />}
          </section>
        ))}
    </React.Fragment>
  );
};
