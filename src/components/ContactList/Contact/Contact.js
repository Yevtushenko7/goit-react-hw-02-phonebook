import React from "react";
import styles from "../Contact/Contact.module.css";

const Contact = ({ contacts, onDeleteClick }) =>
  contacts.map(({ id, name, number }) => {
    return (
      <li className={styles.Contact} key={id}>
        {name}: {number}
        <button
          className={styles.button}
          onClick={() => onDeleteClick(id)}
          type="button"
        >
          Delete
        </button>
      </li>
    );
  });

export default Contact;
