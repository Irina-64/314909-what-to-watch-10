import React, { useCallback, useState } from 'react';
import { FilmNavigation } from '../../../const/enums';
import Film from '../../../types/film';
import FilmTabNavigation from './tab-control/tab-control';
import FilmTabDetails from './tab-details/tab-details';
import FilmTabOverview from './tab-overview/tab-overview';
import FilmTabReviews from './tab-reviews/tab-reviews';

const FilmTabs = ({ movie, tab }: { movie: Film, tab?: FilmNavigation }) => {
  const [activeTab, setActiveTab] = useState(tab ?? FilmNavigation.Overview);

  const handleTabEvent = useCallback(
    (selectedTab: FilmNavigation) => setActiveTab(activeTab === selectedTab ? activeTab : selectedTab)
    , [activeTab]
  );

  const getTabElement = (selectedTab: FilmNavigation) => {
    switch (selectedTab) {
      case FilmNavigation.Overview:
        return <FilmTabOverview {...movie} />;
      case FilmNavigation.Details:
        return <FilmTabDetails {...movie} />;
      case FilmNavigation.Reviews:
        return <FilmTabReviews />;
    }
  };

  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          {Object.values(FilmNavigation).map(
            (navElementName) => <FilmTabNavigation key={navElementName} name={navElementName} activeTab={activeTab} handleTabEvent={handleTabEvent} />
          )}
        </ul>
      </nav>
      {getTabElement(activeTab)}
    </div>
  );
};

export default React.memo(FilmTabs);
