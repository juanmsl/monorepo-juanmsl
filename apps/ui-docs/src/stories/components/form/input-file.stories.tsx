import { InputFile } from '@juanmsl/ui';
import { Meta, StoryObj } from '@storybook/react';
import { useCallback, useState } from 'react';

const InputFileStory: Meta<typeof InputFile> = {
  title: 'Components/Form/Input File',
  component: InputFile,
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

      return <InputFile value={value} setValue={handleChange} {...args} />;
    };

    return <Wrapper />;
  },
};

export default InputFileStory;

type Template = StoryObj<typeof InputFile>;

export const Data: Template = {
  args: {
    name: 'fieldName',
  },
};
