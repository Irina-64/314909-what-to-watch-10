import React from 'react';
import { ComponentTestID } from '../../../const/enums';
import useUserData from '../../../hooks/use-user-data/use-user-data';
import AddReviewButton from './add-review-button/add-review-button';
import MyListButton from './mylist-button/mylist-button';
import PlayButton from './play-movie-button/play-movie-button';

const FilmButtons = ({id}: {id: number}) => {
  const {
    isAuth,
    isFavorite,
    favoritesCount,
    handleFavoriteAction
  } = useUserData(id);

  return (
    <div className="film-card__buttons" data-testid={ComponentTestID.FilmButtons}>
      <PlayButton id={id} />
      <MyListButton isAuth={isAuth} isFavorite={isFavorite} favoritesCount={favoritesCount} handleFavoriteAction={handleFavoriteAction} />
      <AddReviewButton id={id} />
    </div>
  );};

export default React.memo(FilmButtons);
