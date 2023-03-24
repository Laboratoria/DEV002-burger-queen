import Header from "../../components/header/Header";
import "./home.css";
import { useNavigate } from "react-router-dom";

function Home({ user }) {
  const navigate = useNavigate();

  return (
    <>
      <Header user={user} />
      <div className="containerBtnAtentionChef">
        <button className="btnAttention" onClick={() => navigate("/attention")}>
          ATENCIÓN
        </button>
        <button className="btnChef" onClick={() => navigate("/chef")}>
          COCINA
        </button>
      </div>
    </>
  );
}

export default Home;
