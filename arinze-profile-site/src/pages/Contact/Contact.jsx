import React from 'react';
import { Helmet } from 'react-helmet';
import { Box, Heading, Divider } from '@chakra-ui/react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import './Contact.scss';

const Contact = () => {
  return (
    <Box display='flex' flexDirection='column' height='100vh'>
      <Helmet>
        <title>Contact page</title>
      </Helmet>
      <Navbar />

      <Box className='main_text' p={[4, 8]} pt={[24, 20, 20, 4, 4]}>
        <Heading as='h1' mb={4}>
          Contact
        </Heading>
        <Divider mb={6} />
        <Box>
          <Form
            target='_blank'
            action='https://formsubmit.co/060ed68156ac1fe61ee779821bb25524'
            method='POST'>
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
              controlId='exampleForm.ControlTextarea1'>
              <Form.Label>Message</Form.Label>
              <Form.Control
                as='textarea'
                rows={3}
                name='message'
                placeholder='Your Message'
              />
            </Form.Group>
            <Button
              type='submit'
              className='btn btn-lg btn-primary btn-block custBtn'>
              Submit Form
            </Button>
          </Form>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default Contact;
