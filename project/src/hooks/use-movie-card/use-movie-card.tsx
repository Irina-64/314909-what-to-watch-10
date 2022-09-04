import { useCallback, useState } from 'react';

const useFilmCard = () => {
  const [activeFilmId, setActiveFilmId] = useState<null | number>(null);

  const handleFilmMouseOver = useCallback(
    (movieId: number | null) => setActiveFilmId(movieId),
    [],
  );

  return {
    activeFilmId,
    handleFilmMouseOver
  };
};

export default useFilmCard;
