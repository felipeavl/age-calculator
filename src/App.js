import { faBirthdayCake } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";

import "./App.css";
import AgeCalculator from "./components/AgeCalculator/AgeCalculator";
import Birthdays from "./components/Birthdays/Birthdays";
import InfoButton from "./components/InfoButton/InfoButton";
import { useBirthdays } from "./hooks/use-birthdays";
import usePopup from "./hooks/use-pop-up";

function App() {
  const [birthday, setBirthday] = useState({
    year: null,
    month: null,
    day: null,
  });

  const { popupRef, isOpen, togglePopup } = usePopup();

  const personList = useBirthdays(birthday);

  return (
    <div className="App">
      <main className="parent">
        <AgeCalculator setBirthday={setBirthday} />

        {isOpen && <Birthdays ref={popupRef} bornThisDay={personList} />}
        {personList.length > 0 && (
          <InfoButton icon={faBirthdayCake} onClick={togglePopup} />
        )}
      </main>
    </div>
  );
}

export default App;
