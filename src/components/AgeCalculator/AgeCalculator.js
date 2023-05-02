import React, { useState } from "react";
import IconArrow from "../../assets/icon-arrow.svg";
import DateInput from "../DateInput/DateInput";

import { useAnimatedValue } from "../../hooks/use-animated-value";
import { Button } from "../Button/Button";

import { calculateAge } from "../../utils/calculate-age";
import { validate } from "../../utils/validate";
import styles from "./AgeCalculator.module.css";

const AgeCalculator = () => {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  const [age, setAge] = useState({ years: null, months: null, days: null });

  const [errors, setErrors] = useState({ day: "", month: "", year: "" });

  const animatedYears = useAnimatedValue(age.years);
  const animatedMonths = useAnimatedValue(age.months);
  const animatedDays = useAnimatedValue(age.days);

  const handleSubmit = () => {
    const validationErrors = validate(day, month, year);

    if (
      validationErrors.day ||
      validationErrors.month ||
      validationErrors.year
    ) {
      setErrors(validationErrors);
      return;
    }

    setErrors([]);

    setAge(calculateAge(day, month, year));
  };

  return (
    <div className={styles.calculatorContainer}>
      <div className={styles.fieldsContainer}>
        <DateInput
          label="Day"
          value={day}
          onChange={(e) => setDay(e.target.value)}
          placeholder="DD"
          errors={errors.day}
          maxLength={2}
        />
        <DateInput
          label="Month"
          value={month}
          onChange={(e) => setMonth(e.target.value)}
          placeholder="MM"
          errors={errors.month}
          maxLength={2}
        />
        <DateInput
          label="Year"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          placeholder="YYYY"
          errors={errors.year}
          maxLength={4}
        />
      </div>

      <div className={styles.buttonContainer}>
        <Button className="submit" onClick={handleSubmit}>
          <img src={IconArrow} alt="Calculate Age" />
        </Button>
      </div>

      <p className={styles.ageInfo}>
        <span className={styles.number}>{animatedYears ?? "--"}</span> years
      </p>
      <p className={styles.ageInfo}>
        <span className={styles.number}>{animatedMonths ?? "--"}</span> months
      </p>
      <p className={styles.ageInfo}>
        <span className={styles.number}>{animatedDays ?? "--"}</span> days
      </p>
    </div>
  );
};

export default AgeCalculator;
