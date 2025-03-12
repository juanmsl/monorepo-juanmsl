import { LegacyRef, RefObject, useEffect } from 'react';

import { Icon } from '../icon';

import { InfinityScrollFooterStyle } from './infinity-scroll.style';

import { useDebounce, useInView } from '@polpo/hooks';

export type InfinityScrollProps = {
  isLoading: boolean;
  hasNextPage: boolean;
  loadMore: () => void;
  customLoadMoreElement?: (ref: RefObject<Element>) => React.ReactNode;
  emptyMessage?: string;
  children?: React.ReactNode;
};

export const InfinityScroll = ({
  isLoading: isLoadingProp = false,
  hasNextPage = false,
  loadMore,
  customLoadMoreElement,
  emptyMessage,
  children,
}: InfinityScrollProps): React.ReactElement => {
  const { ref, inView } = useInView();
  const isLoading = useDebounce(isLoadingProp, 100);

  useEffect(() => {
    if (hasNextPage && inView && !isLoading) {
      loadMore();
    }
  }, [hasNextPage, isLoading, loadMore, inView]);

  const childrenExists = Array.isArray(children) ? children.length > 0 : Boolean(children);

  return (
    <>
      {children}
      <InfinityScrollFooterStyle>
        {Boolean(emptyMessage) && !childrenExists && !isLoading && <p className='empty-message'>{emptyMessage}</p>}
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
