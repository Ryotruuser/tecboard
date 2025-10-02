import './formulario-de-evento.estilo.css';
import { CampoDeEntrada } from "../CampoDeEntrada";
import { CampoDeFormulario } from "../CampoDeFormulario";
import { Label } from "../Label";
import { TituloFormulario } from "../TituloFormulario";


export function FormularioDeEvento(){
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