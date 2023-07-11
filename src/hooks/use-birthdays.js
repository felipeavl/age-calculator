import { useEffect, useState } from "react";

function useBirthdays(birthday) {
  const [personList, setPersonList] = useState([]);

  useEffect(() => {
    const handleBirthdays = async (day, month, year) => {
      setPersonList([]);
      let url = `https://api.wikimedia.org/feed/v1/wikipedia/en/onthisday/births/${String(
        month
      ).padStart(2, "0")}/${String(day).padStart(2, "0")}`;

      let response = await fetch(url);
      let data = await response.json();

      const filteredData = data.births.filter(
        (item) => item.year === parseInt(year)
      );

      let parsedPersonList = filteredData.map((person) => {
        let parts = person.text.split(", ");
        return {
          name: parts[0],
          description: parts.slice(1).join(", "),
        };
      });

      setPersonList(parsedPersonList);
    };
    if (birthday.year !== null) {
      handleBirthdays(birthday.day, birthday.month, birthday.year);
    }
  }, [birthday]);

  return personList;
}

export { useBirthdays };
