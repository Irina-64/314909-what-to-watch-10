import Film from '../../../../types/film';

const FilmCardBackground = ({ name, backgroundImage }: Film) => (
  <div className="film-card__bg">
    <img src={backgroundImage} alt={name} />
  </div>
);

export default FilmCardBackground;
