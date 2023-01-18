import './App.css';
import Text from './components/text/text'
import Button from './components/button/button'

const title = {
  p1: 'O nome do componente e o nome das props devem ser bem pensados, lembre-se de dar bons nomes que sejam fáceis de outras pessoas entenderem',
  p2: '1 - Dê um bom nome ao seu componente',
  p3: '2 - Faça o componente renderizar na tela um parágrafo colorido e com todas as letras maiúsculas usando JS; ',
  p4: '3 - Utilize props para passar o texto e a cor de texto desejada para dentro do componente (a cor pode ser uma palavra, como "red", ou um hexadecimal); ',
  p5: '4 - Pode utilizar o style inline para colorir o componente da forma que foi mostrado nas aulas;'

}

function App() {
  return (

    <>
      <div className='cnt'>
        
        <Button label='BAIXAR CV"'></Button>
        <Text> <p> {title.p1} </p></Text>
        <Text color={'lightslategray'} label="add"> <p> {title.p2} </p> </Text>
        <Text color={'lightgreen'}> <p> {title.p3} </p></Text>
        <Text > <p> {title.p4}</p> </Text>
        <Text color={'blueviolet'}> <p>{title.p5} </p></Text>

        <Text> 
          <p> 
          Crie um componente Button com um evento de clique que
          apresente um alerta informando a prop label do botão que
          foi clicado, com a seguinte mensagem: A label desse botão é 'insira a label aqui via JS'.
          Exemplo:
          Com um botão com essa label, 'button label="Baixar CV"'
          Ao clicar no botão deve mostrar um alert com a mensagem
          "A label desse botão é Baixar CV"
          </p>

        </Text>

      </div>
    </>
  );
}

export default App;
