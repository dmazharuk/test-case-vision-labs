import { CLIENT_ROUTES } from '@/shared/enums/clientRoutes';
import { JSX } from 'react';
import { useNavigate } from 'react-router';

export function NotFoundPage(): JSX.Element {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="mb-4 text-red-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-16 mx-auto"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
        </div>
        <h2 className="text-3xl font-bold text-red-600 mb-2">Ошибка!</h2>
        <p className="text-xl text-white">Такой страницы не существует</p>
        <button
          onClick={() => navigate(CLIENT_ROUTES.MAIN)}
          className="inline-block mb-6 mt-6 px-4 py-2 bg-green-400 text-gray-900 rounded-lg hover:bg-green-500 transition-colors font-semibold"
        >
          На главуню
        </button>
      </div>
    </div>
  );
}
