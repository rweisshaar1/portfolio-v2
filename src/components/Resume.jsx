import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css' ;
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

export default function Resume () {

  return(
    <>
    <Container className={{ display:'flex', alignContent:'center' }}>
      <h1>RESUME:</h1>
      <Card>
        <Card.Body>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, fugit. Quae, laudantium! Iure eum dolore inventore beatae cumque, dolor, obcaecati eaque eveniet saepe, ab earum nobis sunt labore porro nesciunt! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem reiciendis rerum, aspernatur ipsum quisquam harum nihil impedit obcaecati voluptas explicabo quo corporis cumque quia officiis dolorum? Cupiditate asperiores adipisci obcaecati?</Card.Body>
      </Card>
    </Container>
    </>
  )
}