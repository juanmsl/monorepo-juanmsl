import { Checkbox } from '@juanmsl/ui';
import { Meta, StoryObj } from '@storybook/react';
import { useCallback, useState } from 'react';

const CheckboxStory: Meta<typeof Checkbox> = {
  title: 'Components/Form/Checkbox',
  component: Checkbox,
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

      return <Checkbox value={value} setValue={handleChange} {...args} />;
    };

    return <Wrapper />;
  },
};

export default CheckboxStory;

type Template = StoryObj<typeof Checkbox>;

export const Data: Template = {
  args: {
    name: 'fieldName',
  },
};
