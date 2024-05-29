import css from './Statistics.module.css';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { selectVotes } from '../../redux/selectors';
import { useSelector } from 'react-redux';


export const Statistics = ({ children }) => {
  const goodId = nanoid();
  const neutralId = nanoid();
  const badId = nanoid();
  const totalId = nanoid();
  const positiveFeedbackId = nanoid();


  const votes = useSelector(selectVotes);

  const countTotalFeedback = (good, neutral, bad) => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = (good, neutral, bad) => {
    if (good === 0 && neutral === 0 && bad === 0) {
      return 0;
    } else {
      return (good / (good + neutral + bad)) * 100;
    }
  };

  return (
    <div className={css.statistics}>
      <h3 className={css.statisticsTitle}>Statistics</h3>
      {votes.Scooby !== 0 || votes.Goofy !== 0 || votes.Brian !== 0 ? (
        <div className={css.stats}>
          <div className={css.statsCandidate}>
            <div key={goodId}>Scooby: {votes.Scooby}</div>
            <div key={neutralId}>Goofy: {votes.Goofy}</div>
            <div key={badId}>Brian: {votes.Brian}</div>
          </div>
          <div className={css.statsInfo}>
            <div key={totalId}>
              Total:{' '}
              {countTotalFeedback(votes.Scooby, votes.Goofy, votes.Brian)}
            </div>
            <div key={positiveFeedbackId}>
              Positive Feedback:{' '}
              {Number(
                countPositiveFeedbackPercentage(
                  votes.Scooby,
                  votes.Goofy,
                  votes.Brian
                ).toFixed(2)
              )}
              %
            </div>
          </div>
        </div>
      ) : (
        <>{children}</>
      )}
    </div>
  );
};

Statistics.propTypes = {
  children: PropTypes.node,
};
