//Posso usar um componente (como se fosse uma função) para chamá-lo em qualquer lugar do código
function Texto1(){
  return <p> Um outro parágrafo de Texto1</p>;
}

export default function Home() {
  const aula = 1;
  //Para escrever mais de uma linha tem que colocar parênteses e usar div
  return (
  //Para chamar uma variável eu preciso colocar entre chaves
    <div>
      <h1>Olá Turma!!!</h1>
      <p>Essa é a nossa {aula} ª primeira aula de React!</p>
      <Texto1/> 
      <Texto1/>
    </div>
  );
}

