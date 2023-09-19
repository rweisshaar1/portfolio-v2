import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';


export default function AboutMe () {

  return(
    <>
    <Container style={{display:'flex'}}>
      <Row>
        <Col style={{ marginLeft:'5%', marginTop:'5%', margin:'3%' }} xs={12} md={4}>
          <Image src="./images/profile-pic.jpg" height='300' width='200' thumbnail />
        </Col>
        <Col>
          <Card xs={6} style={{ marginTop:'5%', marginBottom:'10%', margin:'3%' }}>
            <Card.Body>
              <h3>ABOUT ME:</h3>
              I studied Web Development at the University of Minnesota Full Stack Web Development Bootcamp, under the instruction of Gary Almes. It was an amazing experience overall, and I am excited to start my journey as a Junior Web Developer. 
                <div style={{fontWeight:'bold'}}>
                My skills include: 
                  <div style={{fontWeight:'normal'}}>
                  HTML, JavaScript, CSS, Bootstrap, React, SQL, MongoDB, and GraphQL.
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