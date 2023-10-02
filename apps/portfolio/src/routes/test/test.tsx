import {
  CheckboxController,
  ColorController,
  Form, InputController, InputDateController, InputFileController, InputPasswordController,
  RadioController,
  RangeController,
  Select, TextareaController,
} from "@juanmsl/ui";
import {useState} from "react";
import {useTranslation} from "react-i18next";
import {useLoaderData} from "react-router-dom";
import {LanguagesList, PokemonEntity} from "@/core";

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

type LoaderType = {
  pokemons: Array<PokemonEntity>;
};

const Test = () => {
  const { pokemons }: LoaderType = useLoaderData() as LoaderType;
  const [pokemon, setPokemon] = useState<PokemonEntity | ''>('');
  const { t, i18n } = useTranslation();

  const handleSubmit = (data: FormDataT) => {
    console.log(data);
  };

  return (
    <section style={{ display: 'grid', placeContent: 'center', padding: 20 }}>
      <Form
        onSubmit={handleSubmit}
        style={{
          display: 'grid',
          gap: 20,
          width: '400px',
        }}
      >
        <h1>
          {t('language')}
        </h1>
        <p>{t('message')}</p>
        {LanguagesList.map(({label, locale}) => (
          <button
            key={locale}
            type="button"
            onClick={() => i18n.changeLanguage(t(locale))}
          >
            {t(label)}
          </button>
        ))}
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
        <Select<PokemonEntity>
          leftIcon="check-mark"
          rightIcon="magnifying-glass"
          label="Select"
          options={pokemons}
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
        <InputPasswordController
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
}

export default Test;
