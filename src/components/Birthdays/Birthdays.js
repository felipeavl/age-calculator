import React from "react";
import styles from "./Birthdays.module.css";

const Birthdays = React.forwardRef((props, ref) => {
  const { bornThisDay } = props;

  return (
    <div className={styles.popup} ref={ref}>
      <h2>Born this day</h2>
      <ul>
        {bornThisDay.map((person, index) => (
          <li key={index}>
            <h3>{person.name}</h3>
            <p>
              <strong>Nationality: </strong>
              {person.nationality}
            </p>
            <p>{person.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
});

export default Birthdays;
