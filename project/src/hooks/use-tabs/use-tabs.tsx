import { useCallback, useState } from 'react';
import { FilmNavigation } from '../../const/enums';
import Film from '../../types/film';
import TReview from '../../types/review';
import { getTabElement } from '../../utilites/utilites';

const useTabs = (movie: Film, reviews: TReview[]) => {
  const [activeTab, setActiveTab] = useState(FilmNavigation.Overview);

  const tabElement = getTabElement(activeTab, movie, reviews);

  const handleTabEvent = useCallback(
    (selectedTab: FilmNavigation) => setActiveTab(selectedTab), []
  );

  return {
    tabElement,
    activeTab,
    handleTabEvent
  };
};

export default useTabs;
