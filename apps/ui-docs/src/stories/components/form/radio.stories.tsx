import { Meta, StoryObj } from '@storybook/react';
import { Radio } from '@juanmsl/ui';
import { useCallback, useState } from 'react';

export default {
  title: 'Components/Form/Radio',
  component: Radio,
  argTypes: {

  },
  args: {
    autoComplete: 'off',
    autoFocus: false,
    placeholder: 'Placeholder',
    disabled: false,
    rightIcon: 'save',
    leftIcon: 'magnifying-glass',
  },
  render: (args) => {
    const Wrapper = () => {
      const [value, setValue] = useState('');

      const handleChange = useCallback((value: string) => {
        setValue(value);
      }, []);

      return (
        <section>
          <Radio name='option' radioValue='a' label='Option A' value={value} setValue={handleChange} {...args} />
          <Radio name='option' radioValue='b' label='Option B' value={value} setValue={handleChange} {...args} />
          <Radio name='option' radioValue='c' label='Option C' value={value} setValue={handleChange} {...args} />
          <Radio name='option' radioValue='d' label='Option D' value={value} setValue={handleChange} {...args} />
          <Radio name='option' radioValue='e' label='Option E' value={value} setValue={handleChange} {...args} />
        </section>
      );
    };

    return <Wrapper />;
  },
} as Meta<typeof Radio>;

type Template = StoryObj<typeof Radio>;

export const Data: Template = {
  args: {},
};
