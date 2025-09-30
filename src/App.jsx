import './App.css'

// no react, componentes são FUNÇÕES

function FormularioDeEvento(){
  return(
    <form className='form-evento'>
      <h2>Preencha para criar um evento:</h2>
      <fieldset>
        <label htmlFor="nome">Preencha para criar um evento:</label>
        <input type="text" id='nome'/>

        <label htmlFor="data">Data do evento:</label>
        <input type="date" id='data'/>

        <label htmlFor="tema">Tema do evento:</label>
        <input type="text" id='tema'/>
      </fieldset>
    </form>   
  )
}

function App() {
  return (
    <main>
      <header>
        <img src="/logo.png" alt="logo do tecboard" />
      </header>
      <section>
        <img src="/banner.png" alt="banner do tecboard" />
      </section>
      <FormularioDeEvento/>
    </main>

  )
}

export default App
