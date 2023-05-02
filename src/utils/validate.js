export const validate = (day, month, year) => {
  const errors = { day: "", month: "", year: "" };
  const currentYear = new Date().getFullYear();
  const daysInMonth = new Date(year, month - 1, 0).getDate();

  if (!day) {
    errors.day = "Day is required.";
  } else if (day < 1 || day > 31) {
    errors.day = "Must be a valid day";
  }

  if (!month) {
    errors.month = "Month is required.";
  } else if (month < 1 || month > 12) {
    errors.month = "Must be a valid month";
  }

  if (!year) {
    errors.year = "Year is required.";
  } else if (year > currentYear) {
    errors.year = "Must be in the past";
  } else if (year < 1900) {
    errors.year = "Must be after 1900";
  }

  if (day > daysInMonth) {
    errors.day = `Must be a valid day`;
  }

  return errors;
};
