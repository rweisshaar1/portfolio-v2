import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css' ;

const defaultUser = {
  name:"",
  email:"", 
  textarea:""
}

export default function Contact () {
  const [ userData, setDataState ] = useState(defaultUser);

  const [ alertState, setAlertState ] = useState({type: "", message:""})

  function handleInputChange(e) {
    e.preventDefault();
    setAlertState({type: "", message:""})
    setDataState({...userData, [e.target.name]: e.target.value}) 
  }

  function submitForm(e) {
    // console.log(e)
    console.log(userData)
    e.preventDefault()
    for (const key in userData) {
      if (!userData[key]) {
        return(checkErrors(true))
      }
      return(checkErrors(false))
    }}

    function checkErrors(boolean) {
      if( boolean === true) {
        setAlertState({type:"danger", message: "Please Enter all form fields!"})
        console.log("Please enter all form fields")
      } else {
        setAlertState({type:"success", message: "Thank you for submitting the form!"})
        console.log('Thank you for submitting the form!')
      }
    }

  return(
    <>
    <Container className={{ display:'flex', alignContent:'center' }}>
      <h1>CONTACT:</h1>
      <Card>
        <Card.Body>
          <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" name="name" placeholder="John Doe" value={userData.name} onChange={handleInputChange}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" name="email" placeholder="name@example.com" value={userData.email} onChange={handleInputChange}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Contact Message</Form.Label>
              <Form.Control type="textarea" name="textarea" as="textarea" rows={3} value={userData.textarea} onChange={handleInputChange}/>
            </Form.Group>
          </Form>
            <Button variant="primary" onClick={submitForm}>
              Submit
            </Button>
        </Card.Body>
      </Card>
    </Container>
    { alertState.type.length > 0 && (
      <>
      <Alert variant={alertState.type} className="mt-3">
          {alertState.message}
          </Alert>
      </>
        )}
    </>
  )
}