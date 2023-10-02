import { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from '@juanmsl/ui';
import { useCallback, useState } from 'react';

export default {
  title: 'Components/Form/Checkbox',
  component: Checkbox,
  argTypes: {

  },
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

      return (
        <Checkbox value={value} setValue={handleChange} {...args} />
      );
    };

    return <Wrapper />;
  },
} as Meta<typeof Checkbox>;

type Template = StoryObj<typeof Checkbox>;

export const Data: Template = {
  args: {
    name: 'fieldName'
  },
};
