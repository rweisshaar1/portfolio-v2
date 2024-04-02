import 'bootstrap/dist/css/bootstrap.min.css' ;
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import pdf from '../../src/assets/Weisshaar-Resume-2024.pdf'



export default function Resume () {

  return(
    <>
    <Container className={{ display:'flex', alignContent:'center' }}>
      <h1>RESUME:</h1>
      <Card>
        <Card.Body>Attached is a downloadable pdf of my resume. Feel free to email me on my contact page with any questions.
        <div style={{ margin:'10px' }}>
          <a href={pdf} target='_blank'>RESUME</a>
        </div>
        </Card.Body>
      </Card>
    </Container>
    </>
  )
}