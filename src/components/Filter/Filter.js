import React from "react";
import PropTypes from "prop-types";
import styles from "../Filter/Filter.module.css";

const Filter = ({ value, onFilter }) => {
  return (
    <input
      className={styles.input}
      type="text"
      value={value}
      onChange={onFilter}
    />
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onFilter: PropTypes.func.isRequired,
};

export default Filter;
