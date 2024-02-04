import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import './Contact.scss';

const Contact = () => {
  return (
    <div className='contact'>
      <Helmet>
        <title>Contact page</title>
      </Helmet>
      <Navbar />

      <div className='hero'>
        <div className='main_text'>
          <h1 className='coloredSide'>
            <span>Contact</span>
          </h1>
        </div>
      </div>
      <div className='cnctTxtCtn'>
        <div className='cnctTxt'>
          <Form
            target='_blank'
            action='https://formsubmit.co/060ed68156ac1fe61ee779821bb25524'
            method='POST'
          >
            <Row className='mb-3'>
              <Form.Group as={Col} controlId='formGridEmail'>
                <Form.Label>Name</Form.Label>
                <Form.Control type='name' placeholder='Full Name' />
              </Form.Group>

              <Form.Group as={Col} controlId='formGridPassword'>
                <Form.Label>Email</Form.Label>
                <Form.Control type='email' placeholder='Email Address' />
              </Form.Group>
            </Row>

            <Form.Group className='mb-3' controlId='formGridAddress1'>
              <Form.Label>Subject</Form.Label>
              <Form.Control placeholder='Subject' />
            </Form.Group>
            <Form.Group
              className='mb-3'
              controlId='exampleForm.ControlTextarea1'
            >
              <Form.Label>Message</Form.Label>
              <Form.Control
                as='textarea'
                rows={3}
                name='message'
                placeholder='Your Message'
              />
            </Form.Group>
            {/* <Form.Group className="mb-3" controlId="formGridAddress1"> */}
            <Button
              type='submit'
              className='btn btn-lg btn-primary btn-block custBtn'
            >
              Submit Form
            </Button>
            {/* </Form.Group> */}
          </Form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
