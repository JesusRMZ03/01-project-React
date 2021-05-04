import './App.css';

function App() {
  return (
    <div className="App">
        <h1>Cabecera</h1>
        <nav role="navegation">
          <div className="menu">
            <input type="checkbox" />

            <span></span>
            <span></span>
            <span></span>

            <ul className="menu-list">
              <a href="#"><li className='Nav'>Materias</li></a>
              <a href="#"><li className='Nav'>Documentos</li></a>
              <a href="#"><li className='Nav'>Links a otras paginas</li></a>
            </ul>            

          </div>
        </nav>
      <div className="Content">
        <h1>Hola Mundo</h1>

        <section className="cuadroInfo">

        </section>

        <section className="cuadroInfo">
          
        </section>

        <section className="cuadroInfo">
          
        </section>
          
        <section className="cuadroInfo">
          
        </section>

      </div>
      <div className="Footer">

      </div>
    </div>
  );
}

export default App;
