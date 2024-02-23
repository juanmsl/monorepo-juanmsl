import { InputPassword } from '@juanmsl/ui';
import { Meta, StoryObj } from '@storybook/react';
import { useCallback, useState } from 'react';

const InputPasswordStory: Meta<typeof InputPassword> = {
  title: 'Components/Form/Input Password',
  component: InputPassword,
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

      return <InputPassword value={value} setValue={handleChange} {...args} />;
    };

    return <Wrapper />;
  },
};

export default InputPasswordStory;

type Template = StoryObj<typeof InputPassword>;

export const Data: Template = {
  args: {
    name: 'fieldName',
  },
};
