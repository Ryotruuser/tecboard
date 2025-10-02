import './App.css'

// no react, componentes são FUNÇÕES

function TituloFormulario ({children}){
  return (
    <h2>{children}</h2>
  )
}

function CampoDeFormulario({children}){
  return (
    <fieldset>
      {children}
    </fieldset>
  )
}

function Label({children, htmlFor}){
  return (
    <label htmlFor={htmlFor}>
      {children}
    </label>
  )
}

function CampoDeEntrada(props){
  return (
    <input {...props} />
  )
}

function FormularioDeEvento(){
  return(
    <form className='form-evento'>
      <TituloFormulario>
        Preencha para criar um evento:
      </TituloFormulario>
      <CampoDeFormulario>
        <Label htmlFor="nome">Preencha para criar um evento:</Label>
        <CampoDeEntrada 
          type="text" 
          id='nome' 
          placeholder='Summer dev hits'
          name='nomeEvento'
        />
      </CampoDeFormulario>
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
