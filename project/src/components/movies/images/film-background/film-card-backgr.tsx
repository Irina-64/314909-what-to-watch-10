import Film from '../../../../types/film';

const FilmCardBackground = ({ movie }: { movie: Film }) => (
  <div className="film-card__bg">
    <img src={movie.backgroundImage} alt={movie.name} />
  </div>
);

export default FilmCardBackground;
