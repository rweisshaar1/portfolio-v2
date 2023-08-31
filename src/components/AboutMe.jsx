import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';


export default function AboutMe () {

  return(
    <>
    <Container>
      <Row>
        
        <Col style={{ marginLeft:'30px', marginTop:'30px' }} xs={6} md={4}>
          <Image src="https://placehold.co/100x100" roundedCircle />
        </Col>
        <Col>
          <Card xs={6} style={{ marginTop:'30px' }}>
            <Card.Body>
              <h3>ABOUT ME:</h3>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, fugit. Quae, laudantium! Iure eum dolore inventore beatae cumque, dolor, obcaecati eaque eveniet saepe, ab earum nobis sunt labore porro nesciunt! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem reiciendis rerum, aspernatur ipsum quisquam harum nihil impedit obcaecati voluptas explicabo quo corporis cumque quia officiis dolorum? Cupiditate asperiores adipisci obcaecati?
              </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    </>
  )
}