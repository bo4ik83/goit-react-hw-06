import PropTypes from "prop-types";
import s from "./Contact.module.css";

const Contact = ({ name, number, onDelete }) => (
  <div className={s.contactCard}>
    <div className={s.info}>
      <div className={s.name}>
        <span className={s.icon}>
          <img src="/svg/user.svg" alt="name" width={18} height={18} />
        </span>{" "}
        {name}
      </div>
      <div className={s.number}>
        <span className={s.icon}>
          <img src="/svg/phone.svg" alt="number" width={18} height={18} />
        </span>{" "}
        {number}
      </div>
    </div>
    <button className={s.deleteButton} onClick={onDelete}>
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
