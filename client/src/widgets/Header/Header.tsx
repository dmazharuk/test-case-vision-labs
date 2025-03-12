import { CLIENT_ROUTES } from '@/shared/enums/clientRoutes';
import { JSX } from 'react';
import { NavLink } from 'react-router';

export function Header(): JSX.Element {
  return (
    <header className="py-6 shadow-lg">
      <div className="container mx-auto text-center">
        <NavLink to={CLIENT_ROUTES.MAIN}>
          <h1 className="text-2xl font-bold text-white font-get-schwifty animate-pulse">
            All about Rick and Morty
          </h1>
        </NavLink>
      </div>
    </header>
  );
}
