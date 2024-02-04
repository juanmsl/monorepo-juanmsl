import { Meta, StoryObj } from '@storybook/react';
import { Textarea } from '@juanmsl/ui';
import { useCallback, useState } from 'react';

export default {
  title: 'Components/Form/Textarea',
  component: Textarea,
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

      return <Textarea value={value} setValue={handleChange} {...args} />;
    };

    return <Wrapper />;
  },
} as Meta<typeof Textarea>;

type Template = StoryObj<typeof Textarea>;

export const Data: Template = {
  args: {
    name: 'fieldName',
  },
};
