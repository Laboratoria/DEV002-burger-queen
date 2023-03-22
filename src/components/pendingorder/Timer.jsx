import { useEffect, useState } from "react";

function Timer( {horaInicio}) {
  const [timer, setTimer] = useState({h:0,m:0,s:0});
  const [ showTimer, setShowTimer] = useState(`00:00:00`)
  const [ intervalo, setIntervalo] = useState()
  //console.log(timer);

  let hour = timer.h;
  let minutes = timer.m;
  let seconds = timer.s;
  //console.log(hour);
  //const { ms, s, m, h} = time

  if (hour < 10) {
    hour = "0" + hour;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  //const showTimer = hour + ":" + minutes + ":" + seconds;

  let updatedH = timer.h;
  let updatedM = timer.m;
  let updatedS = timer.s;

  function run() {
    if (updatedS === 59) {
      updatedM++;
      updatedS = 0;
    }
    if (updatedM === 59) {
      updatedH++;
      updatedM = 0;
    }
    updatedS++;
    //console.log({ s: updatedS, m: updatedM, h: updatedH })
    return setShowTimer( `${updatedH}:${updatedM}:${updatedS}`);
  }

  const intervalTimer = () => {
    setIntervalo(setInterval(run,1000));
  };
  
  // intervalTimer()
  useEffect(()=> {
    intervalTimer()

   return () => {
     clearInterval(intervalTimer);
   };
 }, [])

  return (
    <>
      <div>
        <span>{showTimer}</span>
        {/* <button onClick={intervalTimer}>start</button> */}
      </div>
    </>
  );
}

export default Timer;
