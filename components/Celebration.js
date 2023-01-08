import {Box, Spacer, Text} from 'native-base';
import React from 'react';
import EventComponent from './EventComponent';

const events = [
  {
    name: 'Ravi',
    eventType: 'Birthday',
    bgColor: ['green.200'],
    imageURI:
      'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  },
  {
    name: 'Yash',
    eventType: 'Marriage Anniversary',
    bgColor: 'blue.200',
    imageURI:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyEaZqT3fHeNrPGcnjLLX1v_W4mvBlgpwxnA&usqp=CAU',
  },
  {
    name: 'Riku',
    eventType: 'Work Anniversary',
    bgColor: 'purple.200',
    imageURI: 'https://miro.medium.com/max/1400/0*0fClPmIScV5pTLoE.jpg',
  },
  {
    name: 'Priyank',
    eventType: "Kid's Birthday",
    bgColor: 'orange.200',
    imageURI:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr01zI37DYuR8bMV5exWQBSw28C1v_71CAh8d7GP1mplcmTgQA6Q66Oo--QedAN1B4E1k&usqp=CAU',
  },
];

const Celebration = () => {
  return (
    <Box alignItems={'center'} justifyContent={'center'}>
      <Box
        w={370}
        mx={4}
        my={2}
        px={'2'}
        rounded="xl"
        overflow="hidden"
        shadow={'4'}
        borderColor="coolGray.200"
        borderWidth="1"
        bgColor={'white'}>
        <Text py={6} pl={3} fontWeight={600} fontSize={'md'} color={'black'}>
          Celebrations
        </Text>
        {events.map((event, index) => {
          return (
            <EventComponent
              key={index}
              name={event.name}
              eventType={event.eventType}
              bgColor={event.bgColor}
              imageURI={event.imageURI}
            />
          );
        })}
      </Box>
    </Box>
  );
};

export default Celebration;
