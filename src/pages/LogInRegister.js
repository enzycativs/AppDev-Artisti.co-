import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./LogInRegister.module.css";

const LogInRegister = () => {
  const navigate = useNavigate();

  const onBtnLogInTextClick = useCallback(() => {
    navigate("/logincustomer");
  }, [navigate]);

  const onBtnRegisterTextClick = useCallback(() => {
    navigate("/registrationcustomer");
  }, [navigate]);

  const onBtnAboutTextClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='middleFrameContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div className={styles.logInRegister}>
      <div className={styles.lowerframe}>
        <div className={styles.lowerpart} />
        <div className={styles.allAboutTheContainer}>
          <p className={styles.allAboutThe}>
            <span>All about the</span>
            <span className={styles.span}>{` `}</span>
          </p>
          <p className={styles.allAboutThe}>creativity</p>
        </div>
        <img className={styles.socialicons} alt="" src="/socialicons@2x.png" />
        <div className={styles.privacyPolicy}>Privacy Policy</div>
        <div className={styles.termsConditions}>{`Terms & Conditions`}</div>
      </div>
      <div className={styles.middleframe} data-scroll-to="middleFrameContainer">
        <div className={styles.middleframeChild} />
        <img className={styles.image3Icon} alt="" src="/image3@2x.png" />
        <div className={styles.about}>
          This is an e-commerce platform for digital arts that will benefit
          those people who are having trouble finding an environment to showcase
          their work of art.
        </div>
        <div className={styles.labelabout}>About</div>
        <div className={styles.indicator}>|</div>
      </div>
      <div className={styles.upperframe}>
        <div className={styles.upperpart} />
        <img className={styles.image1Icon} alt="" src="/image1@2x.png" />
        <div className={styles.btnlogin} onClick={onBtnLogInTextClick}>
          Log In
        </div>
        <div className={styles.btnregister} onClick={onBtnRegisterTextClick}>
          Register
        </div>
        <div className={styles.btnabout} onClick={onBtnAboutTextClick}>
          About
        </div>
        <div className={styles.upperlogo}>
          <div className={styles.everyCanvassIs}>
            Every canvass is treated special
          </div>
          <img
            className={styles.a0f1baed2deef692f8b1e0ff257aa0Icon}
            alt=""
            src="/a0f1baed2deef692f8b1e0ff257aa0ectulipflowerslinearticon-1@2x.png"
          />
          <div className={styles.artistico}>Artisti.co</div>
          <img className={styles.image2Icon} alt="" src="/image2@2x.png" />
        </div>
        <div className={styles.painting}>
          <div className={styles.paintings}>Paintings</div>
          <img
            className={styles.image6paintingIcon}
            alt=""
            src="/image6painting@2x.png"
          />
        </div>
        <div className={styles.digitalart}>
          <div className={styles.digitalArt}>Digital Art</div>
          <img
            className={styles.image5digitalartIcon}
            alt=""
            src="/image5digitalart@2x.png"
          />
        </div>
        <div className={styles.sculpture}>
          <div className={styles.sculpture1}>Sculpture</div>
          <img
            className={styles.image4sculptureIcon}
            alt=""
            src="/image4sculpture@2x.png"
          />
        </div>
        <div className={styles.artarea} />
        <div className={styles.btnartistico}>Artisti.co</div>
      </div>
    </div>
  );
};

export default LogInRegister;
