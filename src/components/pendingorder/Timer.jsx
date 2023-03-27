import { useEffect, useState } from "react";

function Timer({ timerOrder }) {
  //console.log(timerOrder)
  const [timer, setTimer] = useState({ m: 0, s: 0 });

  //console.log(timer);

  const agregarCero = (valor) => {
    if (valor < 10) {
      return "0" + valor;
    } else {
      return "" + valor;
    }
  };

  const milisegundosAMinutosYSegundos = (milisegundos) => {
    const minutos = parseInt(milisegundos / 1000 / 60);
    milisegundos -= minutos * 60 * 1000;
    const segundos = milisegundos / 1000;
    //  return (`${agregarCero(minutos)}:${agregarCero(segundos.toFixed(0))}`);
    //console.log(minutos, segundos.toFixed(0));
    return { m: minutos, s: segundos.toFixed(0) };
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const timeNow = Date.now();
      //console.log(timeNow)

      const milisegundos = timeNow - timerOrder;
      //console.log(milisegundos);

      setTimer(milisegundosAMinutosYSegundos(milisegundos));
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <div>
        <span>{`${agregarCero(timer.m)}:${agregarCero(timer.s)}`}</span>
        {/* <button onClick={intervalTimer}>start</button> */}
      </div>
    </>
  );
}

export default Timer;
