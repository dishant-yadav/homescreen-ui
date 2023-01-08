import React from 'react';
import {Avatar, Box, ChevronRightIcon, HStack, Text, Circle} from 'native-base';
import {TouchableOpacity} from 'react-native';

const EventComponent = ({eventType, name, imageURI, bgColor}) => {
  return (
    <Box>
      <Box
        alignSelf="center" // bg="primary.500"
        w={'100%'}
        h={'24'}
        _text={{
          fontSize: 'md',
          fontWeight: 'medium',
          color: 'warmGray.50',
          letterSpacing: 'lg',
        }}
        rounded={'2xl'}
        mb={'8'}
        bg={bgColor}>
        <HStack
          mx={3}
          alignItems="center"
          justifyContent={'space-between'}
          h="100%">
          <Text fontSize="14" fontWeight={500} w="1/4" ml={2}>
            {eventType}
          </Text>
          <Circle size="125px" bg={bgColor}>
            <Avatar
              size={'100px'}
              source={{
                uri: imageURI,
              }}>
              .
            </Avatar>
          </Circle>
          <HStack
            justifyContent={'center'}
            alignItems={'center'}
            space={3}
            w="1/4">
            <TouchableOpacity>
              <HStack justifyContent={'center'} alignItems={'center'} space={2}>
                <Text
                  fontSize="16"
                  fontWeight={600}
                  style={{textAlign: 'left'}}>
                  {name}
                </Text>
                <ChevronRightIcon size="5" />
              </HStack>
            </TouchableOpacity>
          </HStack>
        </HStack>
      </Box>
    </Box>
  );
};

export default EventComponent;
