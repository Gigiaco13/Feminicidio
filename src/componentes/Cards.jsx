import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Dadosimg from '../assets/Dados de Feminicídio.png'
import Graficocor from '../assets/Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eleifend tempus elit efficitur sodales. Aenean facilisis viverra quam eget convallis..png'
import Grafico1 from '../assets/grafico.webp'

function Cards() {
  return (
    <CardGroup>
      <Card>
        <Card.Img variant="top" src={Dadosimg} />
        <Card.Body>
          <Card.Title>Taxa de feminicídio de 2015 a 2022</Card.Title>
          <Card.Text>
          
          </Card.Text>
        </Card.Body>

      </Card>
      <Card>
        <Card.Img variant="top" src={Graficocor} />
        <Card.Body>
          <Card.Title>Taxa de feminicídio entre mulheres brancas, pardas e negras, de 2019 a 2022</Card.Title>
          <Card.Text>
          {' '}
          </Card.Text>
        </Card.Body>

      </Card>
      <Card>
        <Card.Img variant="top" src={Grafico1} />
        <Card.Body>
          <Card.Title>Taxa de feminicídio em relação ao total de mulheres assasinadas</Card.Title>
          <Card.Text>
         
          </Card.Text>
        </Card.Body>

      </Card>
    </CardGroup>
  );
}

export default Cards;