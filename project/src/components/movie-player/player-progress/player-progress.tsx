import Film from '../../../types/film';
import { minutesToHoursAndMinutes } from '../../../utilites/utilites';

const PlayerProgress = ({ runTime, elapsed = 0, isPlaying }: Film & { elapsed?: number, isPlaying: boolean }) => (
  <>
    <div className="player__time">
      <progress className="player__progress" value={elapsed} max="100" />
      <div className="player__toggler" style={{ left: `${elapsed}%` }}>Toggler</div>
    </div>
    <div className="player__time-value">{isPlaying && elapsed ? elapsed : minutesToHoursAndMinutes(runTime, true)}</div>
  </>
);

export default PlayerProgress;

