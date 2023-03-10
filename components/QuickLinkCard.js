import React from 'react';
import {ArrowUpIcon, Box, Text} from 'native-base';
import {TouchableOpacity} from 'react-native';

const Card = ({text}) => {
  return (
    <TouchableOpacity>
      <Box
        bg="blue.300"
        w="110px"
        h="20"
        rounded={'10'}
        justifyContent={'center'}
        alignItems={'center'}>
        <ArrowUpIcon />
        <Text
          fontSize={16}
          color={'gray.800'}
          numberOfLines={2}
          px={3}
          style={{textAlign: 'center'}}>
          {text}
        </Text>
      </Box>
    </TouchableOpacity>
  );
};

export default Card;
