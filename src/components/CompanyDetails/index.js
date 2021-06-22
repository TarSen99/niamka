import styles from "./CompanyDetails.module.scss";
import mac from "@/assets/images/mac.png";

const CompanyDetails = () => {
  return (
    <div className={`${styles.company} p-3 is-flex is-align-items-center`}>
      <div className={styles.company__image}>
        <img src={mac} alt="" />
      </div>

      <div className="is-flex is-flex-direction-column ml-2">
        <h2 className="medium fz-18">Best company</h2>
        <p className="thin fz-12">5 stars</p>
      </div>
    </div>
  );
};

export default CompanyDetails;
