import { fetchCharacterById } from '@/entities/characters/api/charactersApi';
import { Character } from '@/entities/characters/model';
import { JSX, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';

export function CharacterPage(): JSX.Element {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [character, setCharacter] = useState<Character | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  async function characterInformation(id: string) {
    try {
      const character = await fetchCharacterById(id);
      setCharacter(character);
    } catch (error) {
      console.error('Ошибка при загрузке данных:', error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    if (id) {
      characterInformation(id);
    } else {
      setIsLoading(false);
    }
  }, [id]);

  if (isLoading)
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin inline-block w-12 h-12 border-4 border-current border-t-transparent text-green-400 rounded-full mb-4"></div>
          <p className="text-2xl font-semibold text-gray-500 animate-pulse">
            Загрузка данных...
          </p>
        </div>
      </div>
    );

  if (!character)
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
          <p className="text-xl text-white">Персонаж не найден</p>
        </div>
      </div>
    );

  return (
    <div className="container mx-auto p-4 min-h-screen">
      <button
        onClick={() => navigate(-1)}
        className="inline-block mb-6 px-4 py-2 bg-green-400 text-gray-900 rounded-lg hover:bg-green-500 transition-colors font-semibold"
      >
        ← Вернуться к списку
      </button>

      <div className="bg-gray-800 rounded-xl p-6 shadow-2xl">
        <h1 className="text-4xl font-bold mb-6 text-green-400">
          {character.name}
        </h1>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/3">
            <img
              src={character.image}
              alt={character.name}
              className="w-full rounded-2xl border-4 border-green-400 shadow-xl hover:scale-105 transition-transform"
            />
          </div>

          <div className="md:w-2/3 space-y-4 text-gray-100">
            <div className="p-4 bg-gray-700 rounded-lg">
              <p className="text-xl">
                <span className="text-green-400 font-bold">🚀 Status:</span>
                <span className="ml-2">{character.status}</span>
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-gray-700 rounded-lg">
                <p className="text-xl">
                  <span className="text-green-400 font-bold">👽 Species:</span>
                  <span className="ml-2">{character.species}</span>
                </p>
              </div>

              <div className="p-4 bg-gray-700 rounded-lg">
                <p className="text-xl">
                  <span className="text-green-400 font-bold">⚧ Gender:</span>
                  <span className="ml-2">{character.gender}</span>
                </p>
              </div>

              <div className="p-4 bg-gray-700 rounded-lg">
                <p className="text-xl">
                  <span className="text-green-400 font-bold">🌍 Origin:</span>
                  <span className="ml-2">{character.origin.name}</span>
                </p>
              </div>

              <div className="p-4 bg-gray-700 rounded-lg">
                <p className="text-xl">
                  <span className="text-green-400 font-bold">📍 Location:</span>
                  <span className="ml-2">{character.location.name}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
