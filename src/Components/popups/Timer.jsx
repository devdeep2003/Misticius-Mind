import React, { useState, useEffect } from "react";

const CountdownTimer = ({ initialMinutes = 1, initialSeconds = 0 }) => {
  const [time, setTime] = useState({
    minutes: initialMinutes,
    seconds: initialSeconds,
  });

  const [timerobj, setTimer] = useState(0);

  useEffect(() => {
    // Timer logic
    const timer = setInterval(() => {
      if (time.seconds > 0) {
        console.log(timerobj);
        setTime((prevTime) => ({
          ...prevTime,
          seconds: prevTime.seconds - 1,
        }));
      } else if (time.minutes > 0) {
        setTime((prevTime) => ({
          minutes: prevTime.minutes - 1,
          seconds: 59,
        }));
      } else {
        console.log(timerobj);
        clearInterval(timer);
      }
    }, 1000);

    setTimer(timer);
    

    // Cleanup the interval on unmount
    return () => clearInterval(timer);
  }, [time]);



  return (
    <div>
      <h2>
        {time.minutes.toString().padStart(2, "0")}:
        {time.seconds.toString().padStart(2, "0")}
      </h2>
    </div>
  );
};

export default CountdownTimer;
