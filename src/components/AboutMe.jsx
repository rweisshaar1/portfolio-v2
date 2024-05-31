import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';


export default function AboutMe () {

  return(
    <>
    <Container className='d-flex justify-content-end align-items-center'>
      <Row>
        <Col xs={12} md={4}>
          <Image src="./images/profile-pic.jpg" height='300' width='200' thumbnail alt='A picture of Robbie Weisshaar'/>
          {/* <Image src="./images/full-stack-web-development-certificate-coding-boot-camp.png" /> */}
        </Col>
        <Col>
          <Card xs={6}>
            <Card.Body>
              <h3 className='justify-content-center'>ABOUT ME:</h3>
              <div className='text-start'>
              I studied Web Development at the University of Minnesota Full Stack Web Development Bootcamp, under the instruction of Gary Almes. I am currently working as a Freelance Web Developer. 
              </div>
                <div style={{fontWeight:'bold'}}>
                My skills include: 
                  <div style={{fontWeight:'normal'}}>
                Golang, Python, React, HTML, HTMX, JavaScript, Docker, CSS, Bootstrap, MDBootstrap, SQL, PostgreSQL, MongoDB, and GraphQL.
                  </div>
                </div>
              </Card.Body>
          </Card>
        </Col>
      </Row>
      
    </Container>
    </>
  )
}