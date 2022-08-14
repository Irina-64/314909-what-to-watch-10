import { useState } from 'react';
import TList from '../../../types/list';
import Film from '../../../types/film';
import FilmCard from '../../film-card/film-card';

type ActiveFilmState = {
  activeMovie: Film | null
};

const FilmCardsListComponent = ({ movies }: TList<Film>) => {
  const [activeMovie, setActiveMovie] = useState<ActiveFilmState>({ activeMovie: null });

  const handleMouseOver = (movie: Film) => setActiveMovie({ ...activeMovie, activeMovie: movie });

  return (
    <div className="catalog__films-list">
      {movies.map(
        (movie: Film) => <FilmCard key={`${movie.id}`} value={movie} handleMouseOver={handleMouseOver} />
      )}
    </div>
  );
};

export default FilmCardsListComponent;
