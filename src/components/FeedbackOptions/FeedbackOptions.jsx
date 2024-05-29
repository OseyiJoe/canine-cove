import { useUser } from '../CustomProviderComponent/CustomProviderComponent';
import css from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';
//import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addVote } from '../../redux/operations';
import { selectVotes } from '../../redux/selectors';
import { useSelector } from 'react-redux';


export const FeedbackOptions = () => {
  
  const votes = useSelector(selectVotes);

  const { options } = useUser();




  const dispatch = useDispatch();

  const onVote = evt => {
    evt.target.style.boxShadow = 'inset 0 0 10px 5px rgba(0, 0, 0, 0.3)';
    setTimeout(() => {
      evt.target.style.boxShadow = 'none';
    }, 2000);
    const votes = JSON.parse(evt.target.getAttribute('data-votes'));
    //console.log(votes);
    //const { name } = evt.target;

    dispatch(addVote({ votesVar: votes, name: evt.target.name }));
    
    localStorage.setItem('hasVoted', JSON.stringify(true));
    
  };

  return (
    <>
      <div className={css.pictureBox}>
        <div className={css.movieItem}>
          <div className={css.catOverlay}>
            <img
              className={css.movieImage}
              src="https://i.pinimg.com/736x/a6/aa/2a/a6aa2a792c6fd769c4ebef223de23cca.jpg"
              alt="Unavailable"
            />
            <p className={css.catDescription}>
              Meet Scooby, the charismatic canine actor and proud owner of the
              town's beloved cinema. With his larger-than-life personality and
              infectious energy, Scooby brings glamour to the heart of our
              community. With Scooby at the helm, every movie night is an
              unforgettable adventure.
            </p>
          </div>
          <span className={css.movieName}>
            Scooby
            <span className={css.catName}>Pawsitive Progressive Party</span>
          </span>
        </div>
        <div className={css.movieItem}>
          <div className={css.catOverlay}>
            <img
              className={css.movieImage}
              src="https://i.pinimg.com/736x/e7/9c/e0/e79ce05e10e609d9dd08ddb0f88abf27.jpg"
              alt="Unavailable"
            />
            <p className={css.catDescription}>
              Presenting Mayor Goofy, the dynamic leader of Canine-Cove, a
              radiant metropolis brimming with canine camaraderie. With a heart
              as boundless as the sunny skies above, Mayor Goofy, a former Army
              General, has dedicated himself to uplifting the spirits of his
              fellow residents.
            </p>
          </div>
          <span className={css.movieName}>
            Mayor Goofy
            <span className={css.catName}>Canine Unity Coalition</span>
          </span>
        </div>
        <div className={css.movieItem}>
          <div className={css.catOverlay}>
            <img
              className={css.movieImage}
              src="https://i.pinimg.com/564x/99/ad/10/99ad1042ab520a579a99d35581f2785a.jpg"
              alt="Unavailable"
            />
            <p className={css.catDescription}>
              Meet Scooby, the charismatic canine actor and proud owner of the
              town's beloved cinema. With his larger-than-life personality and
              infectious energy, Scooby brings glamour to the heart of our
              community. With Scooby at the helm, every movie night is an
              unforgettable adventure.
            </p>
          </div>
          <span className={css.movieName}>
            Brain
            <span className={css.catName}>The Loyal Leash Party</span>
          </span>
        </div>
      </div>
      <div className={css.buttonBox}>
        {options.map(option => (
          <button
            className={css.button}
            type="button"
            name={option}
            data-votes={JSON.stringify(votes)}
            onClick={onVote}
            key={options.indexOf(option)}
            disabled={JSON.parse(localStorage.getItem('hasVoted'))}
          >
            {option}
          </button>
        ))}
      </div>
    </>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
