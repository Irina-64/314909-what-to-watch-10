import { PosterSize } from '../../../../const/enums';
import Film from '../../../../types/film';

type PosterProps = Pick<Film, 'name' | 'posterImage'> & {
  size?: PosterSize.Big | PosterSize.Small;
}

const FilmPosterElement = ({name, posterImage, size}: PosterProps) => (
  <div className={`film-card__poster ${size ? `film-card__poster--${size}` : ''}`}>
    <img src={posterImage} alt={`${name} poster`} width="218" height="327" />
  </div>
);

export default FilmPosterElement;
