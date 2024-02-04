import { Meta, StoryObj } from '@storybook/react';
import { InputRange } from '@juanmsl/ui';
import { useCallback, useState } from 'react';

export default {
  title: 'Components/Form/Input Range',
  component: InputRange,
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

      return <InputRange value={value} setValue={handleChange} {...args} />;
    };

    return <Wrapper />;
  },
} as Meta<typeof InputRange>;

type Template = StoryObj<typeof InputRange>;

export const Data: Template = {
  args: {
    name: 'fieldName',
  },
};
