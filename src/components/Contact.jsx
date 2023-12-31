import { useState, useRef } from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert';
import 'bootstrap/dist/css/bootstrap.min.css' ;
import emailjs from '@emailjs/browser';

const defaultUser = {
  name:"",
  email:"", 
  textarea:""
}

export default function Contact () {
  const form = useRef();
  const [ userData, setDataState ] = useState(defaultUser);

  const [ alertState, setAlertState ] = useState({type: "", message:""})

  function handleInputChange(e) {
    e.preventDefault();
    setAlertState({type: "", message:""})
    setDataState({...userData, [e.target.name]: e.target.value}) 
  }

  // function submitForm(e) {
  //   // console.log(e)
  //   console.log(userData)
  //   let errorsFound = 0 
  //   e.preventDefault()
  //   for (const key in userData) {
  //     if (!userData[key] || !userData[key].length) {
  //       errorsFound++
  //     }
  //   }
  //   if( errorsFound > 0 ){
  //     checkErrors(true)
  //   } else {
  //     checkErrors(false)
  //   }
  // }

  function checkErrors(boolean) {
    if( boolean === true) {
      setAlertState({type:"danger", message: "Please Enter all form fields!"})
      console.log("Please enter all form fields")
    } else {
      setAlertState({type:"success", message: "Thank you for submitting the form! I will get back to you shortly."})
      console.log('Thank you for submitting the form!')
    }
  }

  const sendEmail = (e) => {
    e.preventDefault();
    // console.log(userData)
    let errorsFound = 0 
    e.preventDefault()
    for (const key in userData) {
      if (!userData[key] || !userData[key].length) {
        errorsFound++
      }
    }
    if( errorsFound > 0 ){
      checkErrors(true)
      return
    } else {
      checkErrors(false)
    }
    

    emailjs.sendForm('service_y0sutuy', 'contact_form', form.current, 'KWzelhOc3CbgqQTsM')
      .then((result) => {
          console.log(result.text);

      }, (error) => {
          console.log(error.text);
          
      });
  };

  return(
    <>
    <Container className={{ display:'flex', alignContent:'center' }}>
      <h1>CONTACT:</h1>
      <Card>
        <Card.Body>
          <Form ref={form} onSubmit={sendEmail}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" name="name" placeholder="John Doe" value={userData.name} onChange={handleInputChange}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" name="email" placeholder="name@example.com" value={userData.email} onChange={handleInputChange}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Contact Message</Form.Label>
              <Form.Control type="textarea" name="textarea" as="textarea" rows={3} value={userData.textarea} onChange={handleInputChange}/>
            </Form.Group>
          </Form>
            <Button variant="primary" onClick={sendEmail}>
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