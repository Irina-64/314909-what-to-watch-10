import Film from '../../../../types/film';

type PosterProps = Pick<Film, 'name' | 'posterImage'> & {
  isBig?: boolean;
  isSmall?: boolean;
}

const FilmPosterElement = ({ name, posterImage, isBig = false, isSmall = false }: PosterProps) => (
  <div className={`film-card__poster ${isBig ? 'film-card__poster--big' : ''} ${isSmall ? 'film-card__poster--small' : ''}`}>
    <img src={posterImage} alt={`${name} poster`} width="218" height="327" />
  </div>
);

export default FilmPosterElement;
