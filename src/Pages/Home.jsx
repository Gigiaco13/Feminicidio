import NavBar from "../componentes/NavBar";
import Cards from "../componentes/cards";
import Rodape from "../componentes/footer";

function Home () {
    return (
        <div>
          <NavBar></NavBar>
          <h1 className="titulo">Feminicídio</h1>
          <p>Feminicídio é um termo que se refere ao assassinato de mulheres por razões relacionadas à sua condição de gênero. O termo foi cunhado para destacar a violência de gênero específica direcionada às mulheres, reconhecendo que elas são frequentemente mortas devido ao machismo, à misoginia e a outras formas de discriminação baseadas no gênero.

O feminicídio vai além de um simples homicídio de uma mulher. Ele implica que a motivação do crime está ligada à discriminação e à opressão de gênero que as mulheres enfrentam em muitas sociedades. Geralmente, as vítimas de feminicídio são mortas por seus parceiros íntimos ou por pessoas com as quais têm algum tipo de relação próxima.

É importante ressaltar que o feminicídio não se limita a um único país ou cultura. É um problema global que afeta mulheres em diversas partes do mundo. Muitas vezes, ocorre em um contexto de violência doméstica, abuso emocional, físico ou sexual e desigualdade de gênero.

Para combater o feminicídio, é necessário um esforço conjunto da sociedade, governos e instituições para promover a igualdade de gênero, conscientizar sobre os direitos das mulheres e implementar leis e políticas que protejam as mulheres contra a violência baseada no gênero.




</p>
         <Cards></Cards>
         <Rodape></Rodape>
         </div>
      );
    }

    export default Home