import { useState } from "react";
import './Timer.css'

export default function Timer() {
  const [time, setTime] = useState({ hour: 0, minutes: 0, seconds: 0 });

  
  const updateTimer = () => {
    setInterval(() => {
      setTime(prev => {
        let newSeconds = prev.seconds + 1;
        let newMinutes = prev.minutes;
        let newHour = prev.hour;

        if (newSeconds === 60) {
          newMinutes += 1;
          newSeconds = 0;
        }

        if (newMinutes === 60) {
          newHour += 1;
          newMinutes = 0;
        }

        return {
          hour: newHour,
          minutes: newMinutes,
          seconds: newSeconds
        };
      });
    }, 1000);
  };

  return (
    <>
      <h1 className="timerBoxes">{time.hour} Hours</h1>
      <h1 className="timerBoxes">{time.minutes} Minutes</h1>
      <h1 className="timerBoxes">{time.seconds} Seconds</h1>

      <button onClick={updateTimer}>Start</button>
    </>
  );
}
