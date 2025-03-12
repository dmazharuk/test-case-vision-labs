import { ApiResponse, CharacterFilterParams } from '@/shared/types';
import { Character } from '../model';

const API_URL = 'https://rickandmortyapi.com/api/character';

export const fetchCharacters = async (
  params: CharacterFilterParams = {}
): Promise<ApiResponse<Character>> => {
  const { page = 1, name = '', status = '' } = params;

  const queryParams = new URLSearchParams({
    page: page.toString(),
  });

  if (name) queryParams.set('name', name);
  if (status) queryParams.set('status', status);

  const response = await fetch(`${API_URL}?${queryParams}`);
  if (!response.ok) {
    throw new Error('Failed to fetch characters');
  }
  return response.json();
};

export const fetchCharacterById = async (id: string): Promise<Character> => {
  const response = await fetch(`${API_URL}/${id}`);
  if (!response.ok) {
    throw new Error('Failed to fetch character');
  }
  return response.json();
};
