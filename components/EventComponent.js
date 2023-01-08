import React from 'react';
import {Avatar, Box, ChevronRightIcon, HStack, Text} from 'native-base';

const EventComponent = ({eventType, name, imageURI}) => {
  return (
    <Box>
      <Box
        alignSelf="center" // bg="primary.500"
        w={'100%'}
        h={'20'}
        _text={{
          fontSize: 'md',
          fontWeight: 'medium',
          color: 'warmGray.50',
          letterSpacing: 'lg',
        }}
        rounded={'lg'}
        mb={'6'}
        bg={['red.300', 'blue.400']}>
        <HStack
          mx={3}
          alignItems="center"
          justifyContent={'space-between'}
          h="100%">
          <Text fontSize="16" fontWeight={400} w="2/6">
            {eventType}
          </Text>
          <Box position={'relative'}>
            <Avatar
              size={'xl'}
              source={{
                uri: imageURI,
              }}>
              .
            </Avatar>
          </Box>
          <HStack justifyContent={'center'} alignItems={'center'}>
            <Text fontSize="14" fontWeight={600} w="2/6">
              {name}
            </Text>
            <ChevronRightIcon size="5" />
          </HStack>
        </HStack>
      </Box>
    </Box>
  );
};

export default EventComponent;
