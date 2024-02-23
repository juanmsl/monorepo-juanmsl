import { Select } from '@juanmsl/ui';
import { Meta, StoryObj } from '@storybook/react';
import { useCallback, useState } from 'react';

const SelectStory: Meta<typeof Select> = {
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
    rightIcon: 'caret-right',
    leftIcon: 'magnifying-glass',
  },
  render: args => {
    const Wrapper = () => {
      const [value, setValue] = useState('');

      const handleChange = useCallback((value: string) => {
        setValue(value);
      }, []);

      return <Select value={value} setValue={handleChange} {...args} />;
    };

    return <Wrapper />;
  },
};

export default SelectStory;

type Template = StoryObj<typeof Select>;

export const Data: Template = {
  args: {
    name: 'fieldName',
  },
};
