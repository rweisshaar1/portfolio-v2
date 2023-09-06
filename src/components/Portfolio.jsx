import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css' ;


export default function Portfolio () {
  
  const cardInfo = [
    { key:1, img:'weather-dashboard.jpg', title:"Weather API Dashboard", text:`Using a weather API to gather data and display it using flexbox and CSS.`, btn:"https://github.com/rweisshaar1/weather-app" }, 
    { key:2, img:"logo-generator.svg", title:"Logo Generator", text:`This app creates a simple logo based on some command line prompts.`, btn:"https://github.com/rweisshaar1/logo-generator" },
    { key:3, img:"note-taker.jpg", title:"Note Taker", text:`A basic note taking website to help keep track of ideas and tasks.`, btn:"https://github.com/rweisshaar1/note-taker" },
    { key:4, img:"screen-shot-calendar.jpg", title:"Weekly Calendar App", text:`A simple daily calendar app that helps you keep track of your schedule.`, btn:"https://github.com/rweisshaar1/daily-calendar" },
    { key:5, img:"password-generator.jpg", title:"Password Generator", text:`A simple password generator that changes depending on prompt answers.`, btn:"https://github.com/rweisshaar1/password-generator" },
    { key:6, img:"jate.jpg", title:"PWA Text Editor", text:`A basic text editor that can be downloaded to your local machine.`, btn:"https://github.com/rweisshaar1/pwa-text-editor" }
  ]

  return(
    <>
    <Container className={{ display:'flex', alignContent:'center' }}>
    <h1 style={{marginTop:'70px'}}>PORTFOLIO:</h1>
      <Row>
      { cardInfo.map( info => (
        <Card key={info.key} style={{ width: '18rem', margin:'auto', marginBottom:'40px', marginLeft:'auto', marginRight:'auto'}}>
          <a href={info.btn}>
          <Card.Img variant="top" src={`/images/${info.img}`}/>
          </a>
          <Card.Body>
            <Card.Title>{info.title}</Card.Title>
            <Card.Text>
              {info.text}
            </Card.Text>
            <a href={info.btn}>
            <Button variant="primary">To Project</Button>
            </a>
          </Card.Body>
        </Card>
      ))}
      </Row>
    </Container> 
    </>
  )
}