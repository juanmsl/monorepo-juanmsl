import { useCallback, useState } from 'react';

import { Grid } from '../../layouts';
import { Typography } from '../typography';

import { InfinityScroll } from './infinity-scroll';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof InfinityScroll> = {
  title: 'Components/InfinityScroll',
  component: InfinityScroll,
  tags: ['autodocs'],
  argTypes: {
    isLoading: { control: 'boolean' },
    hasNextPage: { control: 'boolean' },
    loadMore: { control: false },
    data: { control: false },
    renderItem: { control: false },
    customLoadMoreElement: { control: false },
    emptyMessage: { control: 'text' },
    children: { control: 'text' },
  },
  args: {
    renderItem: (item, key) => <p key={key}>{item as string}</p>,
  },
  decorators: [
    Story => (
      <Grid style={{ height: '300px', width: '300px', overflow: 'auto', border: '1px solid' }}>
        <Story />
      </Grid>
    ),
  ],
  render: args => {
    const [data, setData] = useState<Array<string>>([]);
    const [hasNextPage, setHasNextPage] = useState(true);
    const [isLoading, setIsLoading] = useState(false);

    const loadMore = useCallback(() => {
      if (!hasNextPage) return;

      setIsLoading(true);
      setTimeout(() => {
        setData([...data, ...['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']]);
        setHasNextPage(data.length < 100);
        setIsLoading(false);
      }, 1000);
    }, [data, hasNextPage]);

    return (
      <Grid gap='10px' style={{ padding: '10px' }}>
        <InfinityScroll
          {...args}
          data={data}
          hasNextPage={hasNextPage}
          isLoading={isLoading}
          loadMore={loadMore}
          renderItem={(v: string) => (
            <section style={{ padding: '10px', background: '#55882233' }}>
              <Typography variant='label' weight='bold' align='center' as='p'>
                {v}
              </Typography>
            </section>
          )}
        />
      </Grid>
    );
  },
};

export default meta;
type Story = StoryObj<typeof InfinityScroll>;

export const Default: Story = {
  args: {},
};
