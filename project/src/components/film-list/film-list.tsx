import withVideoPlayer from '../../hocs/with-vodeo-player/with-video-player';
import Film from '../../types/film';
import FilmCard from '../film-card/film-card';

const MovieCardComponentWrapped = withVideoPlayer(FilmCard);

const FilmCardsList = ({ movies, count }: { movies: readonly Film[], count: number }) => (
  <div className="catalog__films-list">
    {movies.slice(0, count - 1).map(
      (movie: Film, id: number) => <MovieCardComponentWrapped key={`${movie.id}-${movie.name}`} movie={movie} playerId={id} isMuted isPreview />
    )}
  </div>
);

export default FilmCardsList;
