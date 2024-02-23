import { InputDate } from '@juanmsl/ui';
import { Meta, StoryObj } from '@storybook/react';
import { useCallback, useState } from 'react';

const InputDateStory: Meta<typeof InputDate> = {
  title: 'Components/Form/Input Date',
  component: InputDate,
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

      return <InputDate value={value} setValue={handleChange} {...args} />;
    };

    return <Wrapper />;
  },
};

export default InputDateStory;

type Template = StoryObj<typeof InputDate>;

export const Data: Template = {
  args: {
    name: 'fieldName',
  },
};
