import PropTypes from "prop-types";
import s from "./section.module.css";

const Section = ({ title, children }) => {
  return (
    <div className={s.container}>
      <h3 className={s.title}>{title}</h3>
      {children}
    </div>
  );
};

export default Section;

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};
