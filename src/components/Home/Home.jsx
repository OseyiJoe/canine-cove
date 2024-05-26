import css from './Home.module.css';
import { Link } from 'react-router-dom';
import { Loader } from '../InitLoader/Loader';


export const Home = () => {
  

  return (
    <main>
      <span className={css.movieGalleryLabel}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/869/869869.png"
          alt="Sun"
          width="100"
          className={css.movieGalleryAnimation}
        />
        <span className={css.movieGalleryTitle}>Welcome To Dog Town</span>
        <img
          src="https://cdn-icons-png.flaticon.com/512/869/869869.png"
          alt="Sun"
          width="100"
          className={css.movieGalleryAnimation}
        />
      </span>
      <h3 className={css.townOfficialsIntro}>Get to know our town Officials</h3>
      <div className={css.galleryFrame}>
        <Loader />
        <ul className={css.movieGallery}>
          <li key="townMayor" className={css.movieItem}>
            <Link to="/" className={css.movieInfo}>
              <div className={css.catOverlay}>
                <img
                  className={css.movieImage}
                  src="https://i.pinimg.com/736x/e7/9c/e0/e79ce05e10e609d9dd08ddb0f88abf27.jpg"
                  alt="Unavailable"
                />
                <p className={css.catDescription}>
                  Presenting Mayor Goofy, the dynamic leader of Canine-Cove, a
                  radiant metropolis brimming with canine camaraderie. With a
                  heart as boundless as the sunny skies above, Mayor Goofy, a
                  former Army General, has dedicated himself to uplifting the
                  spirits of his fellow residents.
                </p>
              </div>
              <span className={css.movieName}>
                Mayor Goofy
                <span className={css.catName}>Town Mayor</span>
              </span>
            </Link>
          </li>

          <li key="townLibrarian" className={css.movieItem}>
            <Link to="/Library" className={css.movieInfo}>
              <div className={css.catOverlay}>
                <img
                  className={css.movieImage}
                  src="https://i.pinimg.com/736x/ed/bf/ad/edbfade1923c96e542899a2e921d4cea.jpg"
                  alt="Unavailable"
                />
                <p className={css.catDescription}>
                  Mr. Snoopy, with his boundless energy and infectious
                  enthusiasm, has transformed the town's library into a vibrant
                  hub of activity. Every corner bursts with color and
                  creativity, from the whimsical reading nooks to the
                  interactive storytelling corners.
                </p>
              </div>
              <span className={css.movieName}>
                Mr Snoopy
                <span className={css.catName}>Town Librarian</span>
              </span>
            </Link>
          </li>
          <li key="townPhotographer" className={css.movieItem}>
            <Link to="/gallery" className={css.movieInfo}>
              <div className={css.catOverlay}>
                <img
                  className={css.movieImage}
                  src="https://i.pinimg.com/564x/18/82/b8/1882b847e754337bc00b03ab93354252.jpg"
                  alt="Unavailable"
                />
                <p className={css.catDescription}>
                  Courage the Canine Clicker, the town’s beloved photographer,
                  has an eye for capturing the most heartwarming moments. His
                  cozy gallery, adorned with playful backdrops and twinkling
                  lights, is always bustling with wagging tails and joyful
                  barks.
                </p>
              </div>
              <span className={css.movieName}>
                Courage the Canine Clicker
                <span className={css.catName}>
                  Town Photographer / Gallery Owner
                </span>
              </span>
            </Link>
          </li>
          <li key="townHero" className={css.movieItem}>
            <Link to="/cinema" className={css.movieInfo}>
              <div className={css.catOverlay}>
                <img
                  className={css.movieImage}
                  src="https://i.pinimg.com/736x/a6/aa/2a/a6aa2a792c6fd769c4ebef223de23cca.jpg"
                  alt="Unavailable"
                />
                <p className={css.catDescription}>
                  Meet Scooby, the charismatic canine actor and proud owner of
                  the town's beloved cinema. With his larger-than-life
                  personality and infectious energy, Scooby brings glamour to
                  the heart of our community. With Scooby at the helm, every
                  movie night is an unforgettable adventure.
                </p>
              </div>
              <span className={css.movieName}>
                Scooby
                <span className={css.catName}>Cinema Owner / Actor</span>
              </span>
            </Link>
          </li>
          <li key="townCinemaOwner" className={css.movieItem}>
            <Link to="/cinema" className={css.movieInfo}>
              <div className={css.catOverlay}>
                <img
                  className={css.movieImage}
                  src="https://i.pinimg.com/564x/3a/85/f2/3a85f29f94dfa093d3b8bf1eef3eb1a8.jpg"
                  alt="Unavailable"
                />
                <p className={css.catDescription}>
                  Introducing Krypto, the esteemed town hero whose courage knows
                  no bounds, both on-screen and off. With a heart as pure as his
                  gleaming fur, Krypto fearlessly protects our community from
                  danger, earning him the title of our beloved guardian.
                </p>
              </div>
              <span className={css.movieName}>
                Krypto
                <span className={css.catName}>Town Hero / Actor</span>
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </main>
  );
};



export default Home;
