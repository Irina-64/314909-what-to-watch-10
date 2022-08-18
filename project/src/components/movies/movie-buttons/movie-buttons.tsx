import Film from '../../../types/film';
import AddReviewButton from './add-review-button/add-review-button';
import MyListAddButton from './my-list-add-button/my-list-add-button';
import PlayMovieButton from './play-movie-button/play-movie-button';

const FilmCardButtons = ({movie}: {movie: Film}) => (
  <div className="film-card__buttons">
    <PlayMovieButton {...movie} />
    <MyListAddButton id={movie.id} />
    <AddReviewButton {...movie} />
  </div>
);

export default FilmCardButtons;
