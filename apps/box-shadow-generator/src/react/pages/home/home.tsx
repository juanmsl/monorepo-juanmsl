import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { HomeStyle } from './home.style';

import { BoxShadow, BoxShadowExample, Navbar } from '@components/ui';
import { Footer } from '@components/ui/footer';
import { BoxShadowLine } from '@hooks';

const boxShadowList: Array<Array<BoxShadowLine>> = [
  [{ x: 0, y: 8, blur: 24, spread: 0, color: '#000000', isInset: false }],
  [{ x: 0, y: 1, blur: 4, spread: 0, color: '#000000', isInset: false }],
  [{ x: 0, y: 10, blur: 25, spread: 5, color: '#000000', isInset: false }],
  [
    { x: 0, y: 50, blur: 100, spread: -20, color: '#000000', isInset: false },
    { x: 0, y: 30, blur: 60, spread: -30, color: '#000000', isInset: false },
    { x: 0, y: -2, blur: 6, spread: 0, color: '#000000', isInset: true },
  ],
  [
    { x: 15, y: 15, blur: 35, spread: 10, color: '#000000', isInset: false },
    { x: 0, y: 0, blur: 0, spread: 6, color: '#5600d6', isInset: false },
    { x: 0, y: 0, blur: 0, spread: 12, color: '#7752ff', isInset: false },
    { x: 0, y: 0, blur: 0, spread: 18, color: '#8e81ff', isInset: false },
  ],
  [
    { x: 0, y: 30, blur: 60, spread: -12, color: '#000000', isInset: true },
    { x: 0, y: 18, blur: 36, spread: -18, color: '#000000', isInset: true },
  ],
  [
    { x: 0, y: -30, blur: 60, spread: -12, color: '#000000', isInset: true },
    { x: 0, y: -6, blur: 36, spread: 8, color: '#000000', isInset: true },
  ],
  [
    { x: 0, y: 1, blur: 2, spread: 0, color: '#0040ff', isInset: false },
    { x: 0, y: 2, blur: 4, spread: 0, color: '#00fffb', isInset: false },
    { x: 0, y: 4, blur: 8, spread: 0, color: '#99ff00', isInset: false },
    { x: 0, y: 8, blur: 16, spread: 0, color: '#ffd500', isInset: false },
    { x: 0, y: 16, blur: 20, spread: 0, color: '#ff4d00', isInset: false },
    { x: 0, y: 20, blur: 24, spread: 0, color: '#ff0000', isInset: false },
  ],
  [
    { x: -10, y: 10, blur: 0, spread: 0, color: '#660EAF64', isInset: false },
    { x: -20, y: 20, blur: 0, spread: 0, color: '#660EAF48', isInset: false },
    { x: -30, y: 30, blur: 0, spread: 0, color: '#660EAF32', isInset: false },
    { x: -40, y: 40, blur: 0, spread: 0, color: '#660EAF16', isInset: false },
    { x: -50, y: 50, blur: 0, spread: 0, color: '#660EAF08', isInset: false },
  ],
  [
    { x: 10, y: 10, blur: 0, spread: 0, color: '#0C41DF64', isInset: false },
    { x: 20, y: 20, blur: 0, spread: 0, color: '#0C41DF48', isInset: false },
    { x: 30, y: 30, blur: 0, spread: 0, color: '#0C41DF32', isInset: false },
    { x: 40, y: 40, blur: 0, spread: 0, color: '#0C41DF16', isInset: false },
    { x: 50, y: 50, blur: 0, spread: 0, color: '#0C41DF08', isInset: false },
  ],
  [
    { x: 0, y: 4, blur: 0, spread: 10, color: '#0C41DF64', isInset: false },
    { x: 0, y: 7, blur: 0, spread: 20, color: '#0C41DF48', isInset: false },
    { x: 0, y: 12, blur: 0, spread: 30, color: '#0C41DF32', isInset: false },
    { x: 0, y: 17, blur: 0, spread: 40, color: '#0C41DF16', isInset: false },
    { x: 0, y: 22, blur: 0, spread: 50, color: '#0C41DF08', isInset: false },
  ],
  [
    { x: 5, y: -5, blur: 0, spread: 0, color: '#1FC11B', isInset: false },
    { x: 10, y: -10, blur: 0, spread: 0, color: '#FFD913', isInset: false },
    { x: 15, y: -15, blur: 0, spread: 0, color: '#FF9C55', isInset: false },
    { x: 20, y: -20, blur: 0, spread: 0, color: '#FF5555', isInset: false },
  ],
];

export const Home = () => {
  const { t } = useTranslation();
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <HomeStyle>
      <section className='home-examples'>
        {boxShadowList.map((boxShadow, key) => (
          <BoxShadowExample key={key} boxShadowList={boxShadow} onClick={() => setSelectedIndex(key)}>
            {t('box-shadow:shadow-#', { index: key + 1 })}
          </BoxShadowExample>
        ))}
      </section>
      <section className='home-body'>
        <Navbar />
        <section className='home-body--content'>
          <BoxShadow initialShadow={boxShadowList[selectedIndex]} />
        </section>
        <Footer />
      </section>
    </HomeStyle>
  );
};
