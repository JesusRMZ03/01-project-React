import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Cabecera</h1>
        <nav role="navegation">
          <div className="menu">
            <input type="checkbox" />

            <span></span>
            <span></span>
            <span></span>

            

          </div>
        </nav>
        <li className='Nav'>Materias</li>
          <li className='Nav'>Documentos</li>
          <li className='Nav'>Links a otras paginas</li>
      </header>
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
