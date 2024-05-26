import { useUser } from '../CustomProviderComponent/CustomProviderComponent';
import css from './LibraryModal.module.css';
import svg from '../SharedLayout/icons.svg';
import { Loader } from '../Loader/Loader';

export const LibraryModal = () => {
  const { catImage, handleInfoClose, showCatInfo, isLoading } = useUser();

  return (
    <>
      {showCatInfo !== undefined && (
        <div className={css.overlay}>
          <button className={css.closeModal} onClick={handleInfoClose}>
            <svg width="20px" height="20px" className={css.modalIcon}>
              <use href={`${svg}#icon-cross`}></use>
            </svg>
          </button>
          <div className={css.galleryFrame}>
            <Loader />
            {isLoading === false && (
              <div className={css.modal}>
                
                  <>
                    <div>
                      <img
                        src={catImage}
                        alt="Cat Type"
                        height="500px"
                        className={css.catImage}
                      />
                    </div>
                   
                  </>
              
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};


