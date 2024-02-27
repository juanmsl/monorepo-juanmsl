import { MainAppStyle } from './main-app.style';
import { RouterAnimated } from './router';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export const MainApp = () => {
  return (
    <MainAppStyle>
      <BrowserRouter>
        <Routes>
          <Route path='/*' element={<RouterAnimated />} />
        </Routes>
      </BrowserRouter>
    </MainAppStyle>
  );
};
