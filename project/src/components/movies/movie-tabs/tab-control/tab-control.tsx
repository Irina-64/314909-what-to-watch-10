import React from 'react';
import { Link } from 'react-router-dom';
import { FilmNavigation } from '../../../../const/enums';

const NAV_ITEM_ACTIVE_CLASS = 'film-nav__item--active';

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
    <li className={`film-nav__item ${name === activeTab ? NAV_ITEM_ACTIVE_CLASS : ''}`}>
      <Link to={`${name.toLowerCase()}`} className="film-nav__link" onClick={onTabClick}>{name}</Link>
    </li>
  );
};

export default React.memo(FilmTabNavigation);

