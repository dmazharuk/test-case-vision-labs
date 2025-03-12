import { Header } from '@/widgets/Header/Header';
import { JSX } from 'react';
import { Outlet } from 'react-router';

export function Layout(): JSX.Element {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}
