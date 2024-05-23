import { Button, FieldVariant, Form, InputPassword, Select, Textarea } from '@juanmsl/ui';
import { Input } from '@juanmsl/ui/src/components/form2';
import { AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';

import { MainLayout, SandboxLayout } from '@components/layouts';
import { PATHS } from '@core/constants';
import { GA } from '@core/ga';
import { LazyBoxShadow, LazyHome, LazyTextShadow } from '@pages';

const Test = () => {
  const [variant, setVariant] = useState<
    | undefined
    | {
        variant: `${FieldVariant}`;
        label: string;
      }
  >({
    variant: 'line',
    label: 'Line',
  });

  return (
    <main>
      <Form style={{ maxWidth: '400px', display: 'grid', gap: '1em', padding: '2em' }} onSubmit={() => null}>
        <Input.Controller variant={variant?.variant} label='Names' name='names' rightIcon='dropper' />
        <Input.Controller variant={variant?.variant} label='Lastnames' name='lastnames' leftIcon='bicycle' />
        <Input.Controller
          variant={variant?.variant}
          label='Age'
          name='age'
          leftIcon='airplane'
          rightIcon='airplane'
          type='number'
        />
        <InputPassword.Controller variant={variant?.variant} label='Password' name='password' leftIcon='eye' />
        <Input.Controller
          variant={variant?.variant}
          name='email'
          label='Email'
          leftIcon='envelope'
          rules={{
            pattern: {
              message: 'Invalid email expression',
              value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g,
            },
          }}
        />
        <Textarea.Controller label='Message' variant={variant?.variant} name='message' />
        <Select
          value={variant}
          setValue={value => {
            setVariant(value);
          }}
          label='Variants'
          variant={variant?.variant}
          name='variant'
          leftIcon='airplane'
          isEqualComparator={(a, b) => a.variant === b.variant}
          rightIcon='airplane'
          renderOption={item => <span>{item.label}</span>}
          options={[
            {
              variant: FieldVariant.CONTENT_BORDER,
              label: 'Content Border',
            },
            {
              variant: FieldVariant.FULL_BORDER,
              label: 'Full Border',
            },
            {
              variant: FieldVariant.CONTENT_LINE,
              label: 'Line',
            },
          ]}
        />
        <Select.Controller
          label='Options'
          variant={variant?.variant}
          name='options'
          leftIcon='airplane'
          multiselect
          renderOption={item => <span>{item}</span>}
          options={[
            'Option 1',
            'Option 2',
            'Option 3',
            'Option 4',
            'Option 5',
            'Option 6',
            'Option 7',
            'Option 8',
            'Option 9',
            'Option 10',
          ]}
        />
        <Button type='submit'>Send</Button>
      </Form>
    </main>
  );
};

export const Router = () => {
  const location = useLocation();

  useEffect(() => {
    GA.pageView(location.pathname + location.search);
    GA.webVitals();
  }, [location]);

  useEffect(() => {
    if (window.performance) {
      GA.gtag('event', 'timing_complete', {
        name: 'load',
        value: Math.round(performance.now()),
        event_category: GA.categories.JS_DEPENDENCIES,
      });
    }
  }, []);

  return (
    <AnimatePresence mode='wait'>
      <Routes location={location} key={location.key}>
        <Route path='/' element={<MainLayout />}>
          <Route path={PATHS.HOME_URL} element={<LazyHome />} index />
          <Route path='/' element={<SandboxLayout />}>
            <Route path={PATHS.BOX_SHADOW_URL} element={<LazyBoxShadow />} />
            <Route path={PATHS.TEXT_SHADOW_URL} element={<LazyTextShadow />} />
            <Route path='/test' element={<Test />} />
          </Route>
          <Route path='*' element={<Navigate to={PATHS.HOME_URL} />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};
