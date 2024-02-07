import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import {
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  CardFooter,
  Box,
  ButtonGroup,
  SimpleGrid,
  Divider,
  Button,
} from '@chakra-ui/react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import productArr from './profileArray.jsx';

const Portfolio = () => {

  return (
    <div className='portfolio'>
      <Helmet>
        <title>Portfolio page</title>
      </Helmet>
      <Navbar />

      <Box className='hero' p={5}>
        <Box className='main_text'>
          <Heading as='h1' mb={4}>
            Portfolio
          </Heading>
          <Divider mb={6} />
        </Box>
        <SimpleGrid columns={[1, 2, 2, 3, 4]} spacing={5}>
          {productArr.map((product, index) => (
            <Card maxW='sm' key={index}>
              <CardBody>
                <Image src={product.img} alt={product.alt} borderRadius='lg' />
                <Stack mt='6' spacing='3'>
                  <Heading size='md'>{product.h3}</Heading>
                  <Text>{product.p}</Text>
                </Stack>
              </CardBody>
              {/* <Divider /> */}
              <CardFooter>
                <ButtonGroup spacing='2'>
                  <Link to={product.github}>
                    <Button variant='solid' colorScheme='blue'>
                      GitHub
                    </Button>
                  </Link>
                  <Link to={product.site}>
                    <Button variant='ghost' colorScheme='blue'>
                      Visit Site
                    </Button>
                  </Link>
                </ButtonGroup>
              </CardFooter>
            </Card>
          ))}
        </SimpleGrid>
      </Box>
      <Footer />
    </div>
  );
};

export default Portfolio;
