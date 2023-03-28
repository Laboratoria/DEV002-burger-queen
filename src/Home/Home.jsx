import Logo from "../Imagenes/logoLasaña.png";
import './Home.css';

const Home = () => {
  return (
    <>
      <header className="Home">
        <section className="Logo">
        <p className="textoLogo">LASAGNA</p> 
        <p className="textoLogoDos">HOUSE</p>
          <h1><img className="logoLasaña" src={Logo} alt="logoLasagnaHouse" /></h1>
        </section>

        <nav className="opciones">
          <section className='btn-nav'>
            <a className="opcionMesero" href='/menu'><h3>MESERO</h3></a>
            
          </section>
          <section className='btn-nav'>
            <a className="opcionChef" href='/chef'><h3>CHEF</h3></a>
            
          </section>
        </nav>
      </header>
      <footer>@2023 - Erika Ríos Suesca</footer>
    </>
  )
};

export default Home;