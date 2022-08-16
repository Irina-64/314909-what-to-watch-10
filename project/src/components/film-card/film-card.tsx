import { Link } from 'react-router-dom';
import { FilmCardProps } from '../../types/props';
import VideoPlayer from '../video-player/video-player';

const FilmCard = ({ movie, activeMovieId, handleMouseEvent }: FilmCardProps) => {
  const isPlaying = movie.id === String(activeMovieId);
  const onMouseEnter = () => handleMouseEvent(Number(movie.id));
  const onMouseLeave = () => handleMouseEvent(null);

  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        {!isPlaying
          ? <img src={movie.previewImage} alt={movie.name} width="280" height="175" />
          : <VideoPlayer movie={movie} isMuted isPreview isPlaying />}
      </div>
      <h3 className="small-film-card__title">
        <Link to={`/films/${movie.id}/`} className="small-film-card__link" >{movie.name}</Link>
      </h3>
    </article>
  );
};

export default FilmCard;
