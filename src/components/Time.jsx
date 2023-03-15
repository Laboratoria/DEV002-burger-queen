import { useState, useEffect} from "react";

function Time (){
    const [ hora, sethora] = useState("")

     useEffect(()=>{
        const verHora = setInterval(() => {
            const today = new Date();
            const hourN = today.getHours();
            const minutes = today.getMinutes();
            const seconds = today.getSeconds();
            const time = hourN + ":" + minutes + ":" + seconds;
            sethora(time)
          }, 1000);

          console.log(verHora)

        return(()=> {
            clearInterval(verHora)
        })
     }, [])

    return(
       <p>{hora}</p>
    )
}

export default Time