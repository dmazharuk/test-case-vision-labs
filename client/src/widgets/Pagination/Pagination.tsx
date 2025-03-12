import { JSX } from 'react';

type Prors = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: Prors): JSX.Element {
  return (
    <div className="flex items-center justify-center mt-8 space-x-2">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="p-2 bg-gray-700 rounded-lg hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
      >
        <svg
          className="w-5 h-5 text-green-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <button
        onClick={() => onPageChange(1)}
        className={`min-w-[40px] h-10 px-3 rounded-lg transition-all
      ${
        currentPage === 1
          ? 'bg-gradient-to-br from-green-400 to-blue-500 text-black font-bold shadow-lg'
          : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
      }`}
      >
        1
      </button>

      {currentPage > 3 && <span className="text-gray-500 mx-1">...</span>}

      {currentPage > 2 && (
        <button
          onClick={() => onPageChange(currentPage - 1)}
          className="min-w-[40px] h-10 px-3 bg-gray-700 text-gray-300 rounded-lg hover:bg-gray-600"
        >
          {currentPage - 1}
        </button>
      )}

      {currentPage !== 1 && currentPage !== totalPages && (
        <button className="min-w-[40px] h-10 px-3 bg-gradient-to-br from-green-400 to-blue-500 text-black font-bold rounded-lg shadow-lg">
          {currentPage}
        </button>
      )}

      {currentPage < totalPages - 1 && (
        <button
          onClick={() => onPageChange(currentPage + 1)}
          className="min-w-[40px] h-10 px-3 bg-gray-700 text-gray-300 rounded-lg hover:bg-gray-600"
        >
          {currentPage + 1}
        </button>
      )}

      {currentPage < totalPages - 2 && (
        <span className="text-gray-500 mx-1">...</span>
      )}

      {totalPages > 1 && (
        <button
          onClick={() => onPageChange(totalPages)}
          className={`min-w-[40px] h-10 px-3 rounded-lg transition-all
        ${
          currentPage === totalPages
            ? 'bg-gradient-to-br from-green-400 to-blue-500 text-black font-bold shadow-lg'
            : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
        }`}
        >
          {totalPages}
        </button>
      )}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="p-2 bg-gray-700 rounded-lg hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
      >
        <svg
          className="w-5 h-5 text-green-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  );
}
