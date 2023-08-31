import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';


export default function Portfolio () {
  
  const cardInfo = [
    { img:"", title:"", text:"", btn:"" }, 
    { img:"", title:"", text:"", btn:"" },
    { img:"", title:"", text:"", btn:"" },
    { img:"", title:"", text:"", btn:"" },
    { img:"", title:"", text:"", btn:"" }
  ]

  return(
    <>
    <h1 style={{marginTop:'30px'}}>PORTFOLIO:</h1>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://placehold.co/40x40" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">To Project</Button>
      </Card.Body>
    </Card>
    </>
  )
}