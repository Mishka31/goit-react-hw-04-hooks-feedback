import PropTypes from "prop-types";
import s from "./notification.module.css";

const Notification = ({ message }) => <p className={s.title}>{message}</p>;

export default Notification;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
