import Header from "../../components/header/Header";
import Button from "../../components/button/Button";
import { useNavigate } from "react-router-dom";


function Orders(){
    const navigate = useNavigate();
    return(
        <>
        <Header></Header>
        <Button name={"Nueva Orden"} onClick={() => {
            navigate("/attention");
          }}></Button>
        </>
    )
}

export default Orders