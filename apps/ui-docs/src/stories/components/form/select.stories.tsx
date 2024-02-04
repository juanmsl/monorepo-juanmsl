import { Meta, StoryObj } from '@storybook/react';
import { Select } from '@juanmsl/ui';
import { useCallback, useState } from 'react';

export default {
  title: 'Components/Form/Select',
  component: Select,
  argTypes: {},
  args: {
    name: 'fieldName',
    autoComplete: 'off',
    autoFocus: false,
    placeholder: 'Placeholder',
    disabled: false,
    label: 'Field label',
    rightIcon: 'save',
    leftIcon: 'magnifying-glass',
  },
  render: (args) => {
    const Wrapper = () => {
      const [value, setValue] = useState('');

      const handleChange = useCallback((value: string) => {
        setValue(value);
      }, []);

      return <Select value={value} setValue={handleChange} {...args} />;
    };

    return <Wrapper />;
  },
} as Meta<typeof Select>;

type Template = StoryObj<typeof Select>;

export const Data: Template = {
  args: {
    name: 'fieldName',
  },
};
