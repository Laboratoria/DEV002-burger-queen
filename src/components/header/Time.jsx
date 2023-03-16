import { useState, useEffect } from "react";

function Time() {
  const [timer, setTimer] = useState("");

  useEffect(() => {
    const updateTime = setInterval(() => {
      const today = new Date();
      let hour = today.getHours();
      let minutes = today.getMinutes();
      let seconds = today.getSeconds();

      if (hour < 10) {
        hour = "0" + hour;
      }
      if (minutes < 10) {
        minutes = "0" + minutes;
      }
      if (seconds < 10) {
        seconds = "0" + seconds;
      }

      const time = hour + ":" + minutes + ":" + seconds;
      setTimer(time);
    }, 1000);

    //console.log(updateTime)

    return () => {
      clearInterval(updateTime);
    };
  }, []);

  return <p>{timer}</p>;
}

export default Time;
