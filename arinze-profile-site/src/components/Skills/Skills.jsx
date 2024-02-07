import React from 'react';
import {
  Box,
  Image,
  HStack,
  Text,
  Heading,
  Stack,
  Progress
} from '@chakra-ui/react';
import Carousel from 'react-elastic-carousel';
import docker from '../../assets/docker-icon.svg';
import nodejs from '../../assets/nodejs-icon.svg';
import javascript from '../../assets/js-icon.png';
import next from '../../assets/Nextjs-01.jpg';
import java from '../../assets/Java-01.png';
import typescript from '../../assets/ts-icon.svg';
import reactjs from '../../assets/reactjs-icon.svg';
import aws from '../../assets/aws.png';
import './Skills.scss';

// Import Swiper styles
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/scrollbar';
import 'swiper/scss/autoplay';

const breakPoints = [
  { width: 200, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 780, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

const Skills = () => {

  const skills = [
    { img: docker, alt: 'Docker logo', level: '80' },
    { img: javascript, alt: 'Javascript logo', level: '95' },
    { img: nodejs, alt: 'NodeJs logo', level: '90' },
    { img: typescript, alt: 'Typescript logo', level: '80' },
    { img: next, alt: 'NextJs logo', level: '70' },
    { img: reactjs, alt: 'ReactJs logo', level: '90' },
    { img: aws, alt: 'AWS logo', level: '80' },
    { img: java, alt: 'Java logo', level: '80' }
  ];

  return (
    <Box paddingBlock={1} >
      <Heading as='h5' textAlign={['center', 'center', 'center', 'center', 'right']} color='#CCCCCC'>
        Technical Skills
      </Heading>
      <Carousel
        breakPoints={breakPoints}
        autoplay={{ delay: 2000 }}
        enableAutoPlay={true}
        pagination={false}
        focusOnSelect={false}
        className=''>
        {skills.map((skill, index) => {
          return (
            <HStack alignItems='center' color='white' key={index}>
              <Image src={skill.img} alt={skill.alt} boxSize='64px' />
              <Stack>
                <Text marginBottom='0'>{skill.alt.split(' ')[0]}</Text>
                <Progress value={skill.level} size='sm' />
              </Stack>
            </HStack>
          );
        })}
      </Carousel>
    </Box>
  );
};
export default Skills;
