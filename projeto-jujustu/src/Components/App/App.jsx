import './App.css'
import '../Css/reset.css'
import '../Css/response.css'

function App() {

  return (
    <>
      <main className="personagens">
        <div className="personagem selecionado">
          <picture>
            <source srcSet="src\imagens\gojo.png" media="(min-width:768px)" />
            <img src="src\imagens\gojo.png" alt="alt" />
          </picture>
          <div className="conteudo">
            <h2 className="nome-personagem">Gojo Satoru</h2>
            <p className="descricao">
              Satoru Gojo é um dos personagens principais de Jujutsu Kaisen e um
              dos feiticeiros mais poderosos da história. Ele é professor na
              Escola Jujutsu de Tóquio e mentor de Yuji Itadori e seus amigos.
              Gojo pertence ao clã Gojo e herdou a Técnica Seis Olhos e o
              Ilimitado, que lhe concedem habilidades extremamente avançadas de
              manipulação da energia amaldiçoada. Seu comportamento é
              frequentemente despreocupado e arrogante, mas ele se importa
              profundamente com seus alunos e busca mudar o mundo do Jujutsu.
              Além de suas habilidades de combate avassaladoras, seu visual
              marcante inclui cabelos brancos e uma venda ou óculos escuros que
              escondem seus olhos brilhantes.
            </p>
          </div>
        </div>
        <div className="personagem">
          <picture>
            <source srcset="src\imagens\sukuna.png" />
            <img src="src\imagens\sukuna.png" alt="alt" />
          </picture>
          <div className="conteudo">
            <h2 className="nome-personagem">Sukuna Ryomen</h2>
            <p className="descricao">
              Ryomen Sukuna, conhecido simplesmente como Sukuna, é o principal
              antagonista de Jujutsu Kaisen. Ele é um espírito amaldiçoado
              extremamente poderoso que já foi um feiticeiro humano na era
              antiga, considerado o Rei das Maldições. Após sua morte, seu poder
              foi selado em 20 dedos mumificados, que ainda contêm sua imensa
              energia amaldiçoada. Sukuna ressurge parcialmente quando Yuji
              Itadori ingere um de seus dedos, tornando-se seu receptáculo.
              Embora compartilhe o corpo de Yuji, ele mantém sua própria
              consciência e personalidade sádica, cruel e arrogante,
              considerando-se superior a todos. Sua força e habilidades são
              aterrorizantes, incluindo técnicas como o Santuário Malevolente e
              cortes transdimensionais. Apesar de sua natureza vil, ele
              demonstra um interesse peculiar em Yuji e no mundo ao seu redor,
              tornando-se uma ameaça constante para feiticeiros e humanos.
            </p>
          </div>
        </div>
        <div className="personagem">
          <picture>
            <source srcset="src\imagens\toji.png" />
            <img src="src\imagens\toji.png" alt="alt" />
          </picture>
          <div className="decricao">
            <h2 className="nome-personagem">Toji Fushiguro</h2>
            <p className="conteudo">
              Toji Fushiguro é um dos personagens mais formidáveis de Jujutsu
              Kaisen, conhecido como o "Assassino de Feiticeiros". Ele nasceu no
              Clã Zenin, mas, por não possuir energia amaldiçoada, foi
              desprezado por sua família. No entanto, essa falta de energia foi
              compensada por sua habilidade única: o Corpo Celestial Restrito,
              que lhe concedeu força, velocidade e sentidos sobre-humanos,
              tornando-o um lutador letal capaz de derrotar até os feiticeiros
              mais poderosos. Toji abandonou o clã Zenin e adotou o sobrenome
              Fushiguro, vivendo como mercenário e assassino. Ele se destaca por
              seu uso magistral de armas amaldiçoadas e sua estratégia
              implacável em combate. Apesar de sua natureza fria e impiedosa,
              ele demonstrava algum interesse pelo futuro de seu filho, Megumi
              Fushiguro, mesmo que de forma indireta. Sua presença na história
              deixa um impacto profundo, especialmente devido ao seu confronto
              memorável contra Satoru Gojo.
            </p>
          </div>
        </div>
        <div className="personagem">
          <picture>
            <source srcset="src\imagens\yuji.png" />
            <img src="src\imagens\yuji.png" alt="alt" />
          </picture>
          <div className="descricao">
            <h2 className="nome-personagem">Yuji Itadori</h2>
            <p className="conteudo">
              Yuji Itadori é o protagonista de Jujutsu Kaisen, um jovem de bom
              coração e força física extraordinária. Inicialmente um estudante
              comum, sua vida muda drasticamente quando ele ingere um dos dedos
              de Ryomen Sukuna para salvar seus amigos, tornando-se o
              receptáculo do Rei das Maldições. Apesar de carregar uma das
              maiores ameaças do mundo dentro de si, Yuji continua sendo
              altruísta e determinado a ajudar os outros, seguindo a última
              vontade de seu avô: garantir que tenha uma morte significativa.
              Ele se junta à Escola Jujutsu de Tóquio, onde treina para
              controlar sua energia amaldiçoada e lutar contra maldições. Seu
              estilo de combate combina golpes físicos avassaladores com
              técnicas como o Black Flash. Ao longo da história, Yuji enfrenta
              dilemas morais sobre a morte e a natureza das maldições,
              questionando seu papel no mundo do Jujutsu. Mesmo diante de
              tragédias, ele se mantém resiliente, buscando proteger aqueles ao
              seu redor enquanto lida com a ameaça constante de Sukuna dentro de
              si.
            </p>
          </div>
        </div>
      </main>
      <ul className="botoes">
        <li>
          <button className="botao gojo selecionado">
            <img src="src\imagens\gojo-icon.png" alt="" />
          </button>
        </li>
        <li>
          <button className="botao sukuna ">
            <img src="src\imagens\sukuna-icon.png" alt="" />
          </button>
        </li>
        <li>
          <button className="botao toji ">
            <img src="src\imagens\toji-icon.png" alt="" />
          </button>
        </li>
        <li>
          <button className="botao yuji ">
            <img src="src\imagens\yuji-icon.png" alt="" />
          </button>
        </li>
      </ul>
    </>
  );
}

export default App;
