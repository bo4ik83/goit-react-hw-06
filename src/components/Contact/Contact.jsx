import PropTypes from "prop-types";
import userIcon from "../../assets/icons/user.svg";
import phoneIcon from "../../assets/icons/phone.svg";
import s from "./Contact.module.css";

const Contact = ({ name, number, onDelete }) => (
  <div className={s.contactCard}>
    <div className={s.info}>
      <div className={s.name}>
        <span className={s.icon}>
          <img src={userIcon} alt="User icon" width={18} height={18} />
        </span>
        {name}
      </div>
      <div className={s.number}>
        <span className={s.icon}>
          <img src={phoneIcon} alt="Phone icon" width={18} height={18} />
        </span>
        {number}
      </div>
    </div>
    <button
      className={s.deleteButton}
      onClick={() => onDelete(name)}
      aria-label={`Delete contact ${name}`}
    >
      Delete
    </button>
  </div>
);

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Contact;
