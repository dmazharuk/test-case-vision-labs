import { CLIENT_ROUTES } from '@/shared/enums/clientRoutes';
import { JSX } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router';
import { MainPage, NotFoundPage } from '@/pages';
import { Layout } from '../layout/Layout';
import { CharacterPage } from '@/pages/CharacterPage/CharacterPage';

export default function Router(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={CLIENT_ROUTES.MAIN} element={<Layout />}>
          <Route path={CLIENT_ROUTES.MAIN} element={<MainPage />} />
          <Route path={CLIENT_ROUTES.CHARACTER} element={<CharacterPage />} />
          <Route path={CLIENT_ROUTES.NOT_FOUND} element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
