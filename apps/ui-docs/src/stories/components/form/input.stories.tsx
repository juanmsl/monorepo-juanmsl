import { Meta, StoryObj } from '@storybook/react';
import { Input } from '@juanmsl/ui';
import { useCallback, useState } from 'react';

export default {
  title: 'Components/Form/Input',
  component: Input,
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

      return <Input value={value} setValue={handleChange} {...args} />;
    };

    return <Wrapper />;
  },
} as Meta<typeof Input>;

type Template = StoryObj<typeof Input>;

export const Data: Template = {
  args: {
    name: 'fieldName',
  },
};
