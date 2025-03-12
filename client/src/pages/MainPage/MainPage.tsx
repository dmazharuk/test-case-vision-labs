import { fetchCharacters } from '@/entities/characters/api/charactersApi';
import { Character } from '@/entities/characters/model';
import { CharacterCard } from '@/entities/characters/ui/CharacterCard';
import { CharacterFilterParams } from '@/shared/types';
import { Filters } from '@/widgets/Filters/Filters';
import { Pagination } from '@/widgets/Pagination/Pagination';
import { JSX, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router';

export function MainPage(): JSX.Element {
  const [searchParams, setSearchParams] = useSearchParams();
  const [characters, setCharacters] = useState<Character[]>([]);
  const [totalPages, setTotalPages] = useState(1);

  const currentPage = Number(searchParams.get('page')) || 1;
  const searchTerm = searchParams.get('name') || '';
  const selectedStatus = searchParams.get('status') || 'All';

  const updateSearchParams = (newParams: Record<string, string>) => {
    setSearchParams((prev) => {
      const updated = new URLSearchParams(prev);
      Object.entries(newParams).forEach(([key, value]) => {
        if (value) {
          updated.set(key, value);
        } else {
          updated.delete(key);
        }
      });
      return updated;
    });
  };

  const handlePageChange = (newPage: number) => {
    updateSearchParams({ page: newPage.toString() });
  };

  const handleSearch = (name: string) => {
    updateSearchParams({
      name: name.trim(),
      page: '1',
      ...(selectedStatus !== 'All' && { status: selectedStatus }),
    });
  };

  const handleStatusChange = (status: string) => {
    updateSearchParams({
      status,
      page: '1',
      ...(searchTerm && { name: searchTerm }),
    });
  };

  const handleResetFilters = () => {
    updateSearchParams({
      name: '',
      status: 'All',
      page: '1',
    });
  };

  useEffect(() => {
    async function characterInformation() {
      try {
        const params: CharacterFilterParams = {
          page: currentPage,
        };
        if (searchTerm) params.name = searchTerm;
        if (selectedStatus !== 'All') params.status = selectedStatus;

        const characters = await fetchCharacters(params);

        setCharacters(characters.results);
        setTotalPages(characters.info.pages);
      } catch (error) {
        console.error('Ошибка при загрузке данных:', error);
      }
    }
    characterInformation();
  }, [currentPage, searchTerm, selectedStatus]);

  const filteredCharacters = characters.filter(
    (character) =>
      selectedStatus === 'All' || character.status === selectedStatus
  );

  return (
    <div className="container p-4 mx-auto">
      <h1 className="text-2xl font-bold mb-4">Rick and Morty Characters</h1>
      <Filters
        onSearch={handleSearch}
        onStatusChange={handleStatusChange}
        selectedStatus={selectedStatus}
        onReset={handleResetFilters}
      />
      <div className="grid grid-cols-1 mb-6 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {filteredCharacters.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
}
