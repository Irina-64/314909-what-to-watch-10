import Film from '../../../types/film';
import AddReviewButton from './add-review-button/add-review-button';
import MyListAddButton from './mylist-add-button/mylist-add-button';
import PlayMovieButton from './play-movie-button/play-movie-button';

const FilmCardButtons = ({ movie }: { movie: Film }) => (
  <div className="film-card__buttons">
    <PlayMovieButton {...movie} />
    <MyListAddButton id={Number(movie.id)} />
    <AddReviewButton {...movie} />
  </div>
);

export default FilmCardButtons;
