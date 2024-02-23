import { InputRange } from '@juanmsl/ui';
import { Meta, StoryObj } from '@storybook/react';
import { useCallback, useState } from 'react';

const InputRangeStory: Meta<typeof InputRange> = {
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
    rightIcon: 'caret-right',
    leftIcon: 'magnifying-glass',
  },
  render: args => {
    const Wrapper = () => {
      const [value, setValue] = useState('');

      const handleChange = useCallback((value: string) => {
        setValue(value);
      }, []);

      return <InputRange value={value} setValue={handleChange} {...args} />;
    };

    return <Wrapper />;
  },
};

export default InputRangeStory;

type Template = StoryObj<typeof InputRange>;

export const Data: Template = {
  args: {
    name: 'fieldName',
  },
};
