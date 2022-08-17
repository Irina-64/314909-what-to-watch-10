import { MOVIE_CARD_MAIN_COUNT } from '../../const/const';

type ShowMoreButtonProps = {
  totalFilmCount: number;
  renderedFilmsCount: number;
  handleShowMoreButtonClick: (count: number) => void;
};

const ShowMoreButton = ({ totalFilmCount, renderedFilmsCount, handleShowMoreButtonClick }: ShowMoreButtonProps) => {
  const filmsToLoadCount = Math.min((totalFilmCount - renderedFilmsCount), MOVIE_CARD_MAIN_COUNT);

  const onShowMoreButtonClick = () => {
    handleShowMoreButtonClick(filmsToLoadCount);
  };

  return (
    <div className="catalog__more">
      <button className="catalog__button" type="button" onClick={onShowMoreButtonClick}>Show more</button>
    </div>
  );
};

export default ShowMoreButton;
