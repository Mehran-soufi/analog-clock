import React, { useEffect, useState } from "react";
import persianDate from "persian-date";
import image from "./assets/analogClock.webp";

function App() {
  const [date, setDate] = useState("");
  const [day, setDay] = useState("");
  const [time, setTime] = useState("");

  useEffect(() => {
    const hourHand = document.querySelector(".hour");
    const minuteHand = document.querySelector(".min");
    const secondHand = document.querySelector(".sec");

    function setClock() {
      const currentDate = new Date();
      const pd = new persianDate(currentDate);
      setDate(pd.format("DD"));
      setDay(pd.format("dddd"));
      setTime(pd.format("HH:mm:ss"));

      const secondsRatio = currentDate.getSeconds() / 60;
      const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;
      const hoursRatio = (minutesRatio + currentDate.getHours()) / 12;

      setRotation(secondHand, secondsRatio);
      setRotation(minuteHand, minutesRatio);
      setRotation(hourHand, hoursRatio);
    }

    function setRotation(element, rotationRatio) {
      element.style.transform = `translate(-50%, -100%) rotate(${
        rotationRatio * 360
      }deg)`;
    }

    setClock();
    setInterval(setClock, 1000);
  }, []);

  return (
    <div className="home">
      <div className="main">
        <div className="img">
          <img src={image} alt="" />
        </div>
        <div className="sircle"></div>
        <div className="hour"></div>
        <div className="min"></div>
        <div className="sec"></div>
        <div className="digital">
          <p>{time}</p>
        </div>
        <div className="date">
          <p>{date}</p>
        </div>
        <div className="day">
          <p>{day}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
