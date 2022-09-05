import FilmPlayerProgress from '../../components/movie-player/player-progress/player-progress';
import FilmPlayerTimeValue from '../../components/movie-player/player-time-value/player-time-value';
import FilmPlayerToggler from '../../components/movie-player/player-toggler/player-toggler';
import ExitPlayerButton from '../../components/movie-player/player-buttons/exit-player-button/exit-player-button';
import PlaybackToggleButton from '../../components/movie-player/player-buttons/play-toggle-button/play-toggle-button';
import VideoItem from '../../components/video-item/video-item';
import { ComponentText, PageTestID } from '../../const/enums';
import useCurrentFilm from '../../hooks/use-current-movie/use-current-movie';
import useVideoPlayer from '../../hooks/use-video-player/use-video-player';
import LoadingPage from '../loading/loading';
import { FullScreen, useFullScreenHandle } from "react-full-screen";

const MoviePlayerPage = () => {
  const { movie, isLoading } = useCurrentFilm();

  const handleFullScreenAction = useFullScreenHandle();

  const {
    videoRef,
    playerState,
    handlePlayButtonToggle,
    handleProgressUpdate,
  } = useVideoPlayer();

  return !movie || isLoading
    ? <LoadingPage />
    : (
      <FullScreen handle={handleFullScreenAction}>
        <div className="player" data-testid={PageTestID.MoviePlayerPage}>

          <VideoItem ref={videoRef} {...{ movie, handleProgressUpdate }} />

          <ExitPlayerButton id={movie.id} />

          <div className="player__controls">
            <div className="player__controls-row">
              <div className="player__time">
                <FilmPlayerProgress {...playerState} />
                <FilmPlayerToggler {...playerState} />
              </div>
              <FilmPlayerTimeValue {...playerState} />
            </div>

            <div className="player__controls-row">
              <PlaybackToggleButton {...playerState} handlePlayButtonToggle={handlePlayButtonToggle} />
              <div className="player__name">{movie.name}</div>

              <button type="button" className="player__full-screen" onClick={handleFullScreenAction.enter}>
                <svg viewBox="0 0 27 27" width="27" height="27">
                  <use xlinkHref="#full-screen" />
                </svg>
                <span>{ComponentText.FullScreen}</span>
              </button>
            </div>
          </div>
        </div>
      </FullScreen>
    );
};

export default MoviePlayerPage;
