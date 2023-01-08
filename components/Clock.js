import React from 'react';
import {Text, HStack, VStack, ChevronRightIcon, Box} from 'native-base';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Clock = () => {
  return (
    <HStack
      mt={2}
      mb={2}
      space={'3'}
      alignItems={'center'}
      justifyContent={'space-between'}
      px={'2'}
      rounded={'xl'}
      bgColor={'primary.200'}
      opacity={0.95}
      w={'90%'}
      h={'24'}
      mx={'auto'}>
      <Icon name="clock" size={56} color={'primary.800'} />
      <VStack>
        <Text fontSize={16} fontWeight={600} color={'gray.800'}>
          03/01/23
        </Text>
        <Text fontSize={16} fontWeight={600} color={'gray.800'}>
          Clock In - hh:mm AM
        </Text>
        <Text fontSize={16} fontWeight={600} color={'gray.800'}>
          Clock Out - hh:mm AM
        </Text>
      </VStack>
      <HStack justifyContent={'center'} alignItems={'center'} space={1}>
        <Box>
          <Box
            px={1.5}
            py={1}
            alignSelf="center"
            bg="blue.600"
            rounded={'xl'}
            _text={{
              fontSize: 'md',
              fontWeight: 'medium',
              color: 'warmGray.50',
              letterSpacing: 'lg',
            }}>
            Clock In
          </Box>
        </Box>
        <ChevronRightIcon size="7" />
      </HStack>
    </HStack>
  );
};

export default Clock;
