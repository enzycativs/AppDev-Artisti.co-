import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./RegistrationCustomer.module.css";

const RegistrationCustomer = () => {
  const navigate = useNavigate();

  const onBtnLogInTextClick = useCallback(() => {
    navigate("/logincustomer");
  }, [navigate]);

  const onBtnRegisterTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='registerText']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onBtnAboutTextClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='middleFrameContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onBtnArtisticoTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onNonActiveBtnContainerClick = useCallback(() => {
    navigate("/logincustomer");
  }, [navigate]);

  const onNonActiveBtnSellerContainerClick = useCallback(() => {
    navigate("/registrationseller");
  }, [navigate]);

  return (
    <div className={styles.registrationcustomer}>
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
        <div className={styles.btnartistico} onClick={onBtnArtisticoTextClick}>
          Artisti.co
        </div>
      </div>
      <div className={styles.registration}>
        <div className={styles.loginregisterarea} />
        <div className={styles.submitbtn}>
          <div className={styles.submit}>Submit</div>
        </div>
        <div
          className={styles.nonactivebtn}
          onClick={onNonActiveBtnContainerClick}
        >
          <div className={styles.submit}>Log In</div>
        </div>
        <div className={styles.activebtn}>
          <div className={styles.submit} data-scroll-to="registerText">
            Register
          </div>
        </div>
        <div
          className={styles.nonactivebtnseller}
          onClick={onNonActiveBtnSellerContainerClick}
        >
          <div className={styles.submit}>Seller</div>
        </div>
        <div className={styles.activebtncustomer}>
          <div className={styles.submit}>Customer</div>
        </div>
        <div className={styles.confirmpass}>
          <div className={styles.confirmpasswordlb}>Confirm Password:</div>
          <img
            className={styles.txtbconfirmpassIcon}
            alt=""
            src="/txtbconfirmpass@2x.png"
          />
        </div>
        <div className={styles.password}>
          <div className={styles.confirmpasswordlb}>Password:</div>
          <img
            className={styles.txtbpasswordIcon}
            alt=""
            src="/txtbpassword@2x.png"
          />
        </div>
        <div className={styles.contactno}>
          <div className={styles.confirmpasswordlb}>Contact Number:</div>
          <img
            className={styles.txtbcontactnoIcon}
            alt=""
            src="/txtbcontactno@2x.png"
          />
        </div>
        <div className={styles.emailadd}>
          <div className={styles.confirmpasswordlb}>Email Address:</div>
          <img
            className={styles.txtbemailaddressIcon}
            alt=""
            src="/txtbpassword@2x.png"
          />
        </div>
        <div className={styles.address}>
          <div className={styles.confirmpasswordlb}>Address:</div>
          <img
            className={styles.txtbaddressIcon}
            alt=""
            src="/txtbpassword@2x.png"
          />
        </div>
        <div className={styles.middlename}>
          <div className={styles.confirmpasswordlb}>Middle Name:</div>
          <img
            className={styles.txtbemailaddressIcon}
            alt=""
            src="/txtbpassword@2x.png"
          />
        </div>
        <div className={styles.firstname}>
          <div className={styles.confirmpasswordlb}>First Name:</div>
          <img
            className={styles.txtbfirstnameIcon}
            alt=""
            src="/txtbpassword@2x.png"
          />
        </div>
        <div className={styles.lastname}>
          <div className={styles.confirmpasswordlb}>Last Name:</div>
          <img
            className={styles.txtbemailaddressIcon}
            alt=""
            src="/txtbpassword@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default RegistrationCustomer;
