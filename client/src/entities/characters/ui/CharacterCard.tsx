import { NavLink } from 'react-router';
import { Character } from '../model';
import { JSX } from 'react';

type Prors = {
  character: Character;
};

export function CharacterCard({ character }: Prors): JSX.Element {
  return (
    <NavLink to={`/character/${character.id}`}>
      <div className="block bg-amber-50 shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
        <img
          src={character.image}
          alt={character.name}
          className="w-full h-max object-cover"
        />
        <div className="p-6">
          <h3 className="text-lg font-bold text-black mb-2 ">
            {character.name}
          </h3>
        </div>
      </div>
    </NavLink>
  );
}
