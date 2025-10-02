import './App.css'
import { FormularioDeEvento } from './componentes/FormularioDeEvento'

// no react, componentes são FUNÇÕES

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
