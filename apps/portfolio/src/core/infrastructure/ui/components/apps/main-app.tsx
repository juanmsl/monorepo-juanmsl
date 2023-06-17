import {
  CheckboxController,
  ColorController,
  Form,
  InputController,
  InputDateController,
  InputFileController,
  PasswordController,
  RadioController,
  RangeController,
  Select,
  TextareaController,
  useFetch,
  useLanguages,
} from '@juanmsl/ui';
import { useToggleValues } from '@juanmsl/hooks';
import { useCallback, useEffect, useState } from 'react';
import { Trans, useTranslation } from 'react-i18next';

type FormDataT = {
  checkbox1: boolean;
  checkbox2: boolean;
  color: string;
  date: string;
  'datetime-local': string;
  email: string;
  file: string;
  hidden: string;
  image: string;
  month: string;
  number: number;
  password: string;
  radio: string;
  range: string;
  search: string;
  tel: string;
  text: string;
  time: string;
  url: string;
  week: string;
  textarea: string;
};

type PokemonType = {
  name: string;
};

export const MainApp = () => {
  const { httpClient } = useFetch();
  const [pokemon, setPokemon] = useState<PokemonType | ''>('');
  const [pokemonList, setPokemonList] = useState<Array<PokemonType>>([]);
  const { i18n } = useTranslation();
  const { languages } = useLanguages();
  const [language, nextLanguage] = useToggleValues(languages);

  useEffect(() => {
    httpClient.get('/pokemon').then((res) => setPokemonList(res.data?.results ?? []));
  }, [httpClient]);

  const handleSubmit = (data: FormDataT) => {
    console.log(data);
  };

  const changeLanguage = useCallback(() => {
    void i18n.changeLanguage(language);
    nextLanguage();
  }, [i18n, nextLanguage, language]);

  return (
    <section style={{ display: 'grid', placeContent: 'center', padding: 20 }}>
      <Form
        onSubmit={handleSubmit}
        style={{
          display: 'grid',
          gap: 20,
          width: '400px',
          boxShadow: '0 8px 15px -5px white',
          background: 'white',
          padding: 20,
          borderRadius: 25,
        }}
      >
        <h1>
          <Trans i18nKey="hello" />
        </h1>
        <h2>
          <Trans i18nKey="titles.test" />
        </h2>
        <h3>
          <Trans i18nKey="titles.button" />
        </h3>
        <button type="button" onClick={changeLanguage}>
          Change
        </button>
        <section
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            gap: 10,
          }}
        >
          <CheckboxController name="checkbox1" label="Checkbox 1" />
          <CheckboxController name="checkbox2" label="Checkbox 2" />
        </section>
        <ColorController leftIcon="check-mark" rightIcon="magnifying-glass" name="color" label="InputColor" />
        <RangeController leftIcon="check-mark" rightIcon="magnifying-glass" name="range" label="InputRange" />
        <section
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            gap: 10,
          }}
        >
          <RadioController name="radio" radioValue="1" label="Radio 1" />
          <RadioController name="radio" radioValue="2" label="Radio 2" />
          <RadioController name="radio" radioValue="3" label="Radio 3" />
        </section>
        <Select<{ name: string }>
          leftIcon="check-mark"
          rightIcon="magnifying-glass"
          label="Select"
          options={pokemonList}
          name="select"
          renderOption={(item) => {
            return item.name.charAt(0).toUpperCase() + item.name.substring(1);
          }}
          value={pokemon}
          setValue={(value) => {
            if (!Array.isArray(value)) {
              setPokemon(value);
            }
          }}
        />
        <InputDateController
          leftIcon="check-mark"
          rightIcon="check-mark"
          name="time"
          type="time"
          placeholder="Time"
          label="Time"
        />
        <InputDateController leftIcon="check-mark" rightIcon="check-mark" name="date" type="date" label="Date" />
        <InputDateController
          leftIcon="check-mark"
          rightIcon="check-mark"
          name="datetime-local"
          type="datetime-local"
          label="Datetime Local"
        />
        <InputDateController
          leftIcon="check-mark"
          rightIcon="check-mark"
          name="week"
          type="week"
          placeholder="Week"
          label="Week"
        />
        <InputDateController
          leftIcon="check-mark"
          rightIcon="check-mark"
          name="month"
          type="month"
          placeholder="Month"
          label="Month"
        />
        <InputFileController name="file" multiple />
        <InputController
          leftIcon="check-mark"
          rightIcon="check-mark"
          name="email"
          type="email"
          placeholder="user@mail.com"
          label="Email"
        />
        <InputController
          leftIcon="check-mark"
          rightIcon="check-mark"
          name="number"
          type="number"
          placeholder="Number"
          label="Number"
        />
        <PasswordController
          leftIcon="check-mark"
          rightIcon="check-mark"
          name="password"
          placeholder="Password"
          label="Password"
        />
        <InputController
          leftIcon="magnifying-glass"
          rightIcon="check-mark"
          name="search"
          type="search"
          placeholder="Search"
          label="Search"
        />
        <InputController
          leftIcon="check-mark"
          rightIcon="check-mark"
          name="tel"
          type="tel"
          placeholder="Telephone"
          label="Telephone"
        />
        <InputController
          leftIcon="check-mark"
          rightIcon="check-mark"
          name="text"
          type="text"
          placeholder="Text"
          label="Text"
        />
        <InputController
          leftIcon="check-mark"
          rightIcon="check-mark"
          name="url"
          type="url"
          placeholder="Url search"
          label="Url search"
        />
        <TextareaController name="textarea" placeholder="Textarea" label="Textarea" />
        <section
          style={{
            display: 'grid',
            gridAutoFlow: 'column',
            gap: 10,
            paddingTop: 20,
          }}
        >
          <button type="reset">Reset</button>
          <button type="submit">Send</button>
        </section>
      </Form>
    </section>
  );
};
