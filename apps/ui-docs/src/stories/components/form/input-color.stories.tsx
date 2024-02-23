import { InputColor } from '@juanmsl/ui';
import { Meta, StoryObj } from '@storybook/react';
import { useCallback, useState } from 'react';

const InputColorStory: Meta<typeof InputColor> = {
  title: 'Components/Form/Input Color',
  component: InputColor,
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

      return <InputColor value={value} setValue={handleChange} {...args} />;
    };

    return <Wrapper />;
  },
};

export default InputColorStory;

type Template = StoryObj<typeof InputColor>;

export const Data: Template = {
  args: {
    name: 'fieldName',
  },
};
