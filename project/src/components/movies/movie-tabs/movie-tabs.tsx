import { useCallback, useState } from 'react';
import { FilmNavigation } from '../../../const/enums';
import Film from '../../../types/film';
import FilmTabNavigation from './tab-control/tab-control';
import FilmTabDetails from './tab-details/tab-details';
import FilmTabOverview from './tab-overview/tab-overview';
import FilmTabReviews from './tab-reviews/tab-reviews';

const FilmTabs = ({ movie }: { movie: Film }) => {
  const [activeTab, setActiveTab] = useState(FilmNavigation.Overview);

  const handleTabEvent = useCallback(
    (tab: FilmNavigation) => setActiveTab(activeTab === tab ? activeTab : tab)
    ,
    [activeTab],
  );

  const getTabElement = (tab: FilmNavigation) => {
    switch (tab) {
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

export default FilmTabs;
