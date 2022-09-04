import React from 'react';
import { Link } from 'react-router-dom';
import { ElementTestID, FilmNavigation } from '../../../../const/enums';
import { MOVIE_TAB_ACTIVE_CLASS, MOVIE_TAB_CLASS } from '../../../../const/const';

type FilmTabProps = {
  name: FilmNavigation;
  activeTab: FilmNavigation;
  handleTabEvent: (activeTab: FilmNavigation) => void;
}

const FilmTabNavigation = ({ name, activeTab, handleTabEvent }: FilmTabProps) => {
  const onTabClick = (e: React.MouseEvent) => {
    e.preventDefault();
    handleTabEvent(name);
  };
  return (
    <li className={name === activeTab ? MOVIE_TAB_ACTIVE_CLASS : MOVIE_TAB_CLASS} data-testid={ElementTestID.MovieTab}>
      <Link to={name.toLowerCase()} className="film-nav__link" onClick={onTabClick}>{name}</Link>
    </li>
  );
};

export default React.memo(FilmTabNavigation);
