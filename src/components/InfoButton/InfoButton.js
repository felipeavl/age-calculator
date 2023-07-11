import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./InfoButton.module.css";

const InfoButton = ({ icon, onClick }) => {
  return (
    <button className={styles.infoButton} onClick={onClick}>
      <FontAwesomeIcon icon={icon} />
    </button>
  );
};

export default InfoButton;
