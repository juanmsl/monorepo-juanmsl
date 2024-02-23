import { Textarea } from '@juanmsl/ui';
import { Meta, StoryObj } from '@storybook/react';
import { useCallback, useState } from 'react';

const TextareaStory: Meta<typeof Textarea> = {
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
    rightIcon: 'caret-right',
    leftIcon: 'magnifying-glass',
  },
  render: args => {
    const Wrapper = () => {
      const [value, setValue] = useState('');

      const handleChange = useCallback((value: string) => {
        setValue(value);
      }, []);

      return <Textarea value={value} setValue={handleChange} {...args} />;
    };

    return <Wrapper />;
  },
};

export default TextareaStory;

type Template = StoryObj<typeof Textarea>;

export const Data: Template = {
  args: {
    name: 'fieldName',
  },
};
