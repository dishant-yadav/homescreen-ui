import React from 'react';
import {HStack, Text} from 'native-base';
import {TouchableOpacity} from 'react-native';

const Tasks = ({title, count}) => {
  return (
    <HStack
      alignItems={'center'}
      justifyContent={'space-between'}
      px={5}
      rounded="xl"
      w="95%"
      py={4}
      borderWidth="0.8"
      borderColor="gray.500">
      <Text w="1/3" fontSize="16" color={'black'} style={{textAlign: 'left'}}>
        {title}
      </Text>
      <Text
        w="1/3"
        fontSize="16"
        color={'gray.600'}
        style={{textAlign: 'center'}}>
        {count}
      </Text>
      <TouchableOpacity>
        <Text
          w="10"
          fontSize="16"
          color={'green.800'}
          underline
          style={{textAlign: 'left'}}>
          View
        </Text>
      </TouchableOpacity>
    </HStack>
  );
};

export default Tasks;
