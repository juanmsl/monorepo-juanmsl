import { Meta, StoryObj } from '@storybook/react';
import { InputPassword } from '@juanmsl/ui';
import { useCallback, useState } from 'react';

export default {
  title: 'Components/Form/Input Password',
  component: InputPassword,
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
        <InputPassword value={value} setValue={handleChange} {...args} />
      );
    };

    return <Wrapper />;
  },
} as Meta<typeof InputPassword>;

type Template = StoryObj<typeof InputPassword>;

export const Data: Template = {
  args: {
    name: 'fieldName'
  },
};
