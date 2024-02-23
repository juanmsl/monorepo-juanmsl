import { Input } from '@juanmsl/ui';
import { Meta, StoryObj } from '@storybook/react';
import { useCallback, useState } from 'react';

const InputStory: Meta<typeof Input> = {
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
    rightIcon: 'caret-right',
    leftIcon: 'magnifying-glass',
  },
  render: args => {
    const Wrapper = () => {
      const [value, setValue] = useState('');

      const handleChange = useCallback((value: string) => {
        setValue(value);
      }, []);

      return <Input value={value} setValue={handleChange} {...args} />;
    };

    return <Wrapper />;
  },
};

export default InputStory;

type Template = StoryObj<typeof Input>;

export const Data: Template = {
  args: {
    name: 'fieldName',
  },
};
