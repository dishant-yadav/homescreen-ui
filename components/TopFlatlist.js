import React from 'react';
import {
  Box,
  FlatList,
  Heading,
  Avatar,
  HStack,
  VStack,
  Text,
  Spacer,
  Center,
  NativeBaseProvider,
  WarningIcon,
} from 'native-base';

const TopFlatlist = () => {
  const data = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      messageText: 'Employees are expected to clock...',
      timeStamp: '1 hour ago',
      bgColor: 'yellow.100',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      messageText: 'Employees are expected to clock...',
      timeStamp: '2 hour ago',
      bgColor: 'red.100',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      messageText: 'Employees are expected to clock...',
      timeStamp: '3 hour ago',
      bgColor: 'green.100',
    },

    {
      id: '68694a0f-3da1-431f-bd56-142371e29d72',
      messageText: 'Employees are expected to clock...',
      timeStamp: '3 hour ago',
      bgColor: 'red.100',
    },

    {
      id: '28694a0f-3da1-471f-bd96-142456e29d72',
      messageText: 'Employees are expected to clock...',
      timeStamp: '5 hour ago',
      bgColor: 'orange.100',
    },
  ];
  return (
    <Box mt={5} ml={3} mb={8}>
      <FlatList
        horizontal
        data={data}
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => (
          <Box
            borderRadius={15}
            w={300}
            bgColor={item.bgColor}
            py={3}
            px={3}
            mr={2}
            opacity={0.9}>
            <HStack
              justifyContent={'flex-start'}
              alignItems={'flex-start'}
              space={3}>
              <Box size={12}>
                <WarningIcon size="12" />
              </Box>
              <VStack>
                <Text fontWeight={600} numberOfLines={1}>
                  {item.messageText}
                </Text>
                <Text color={'gray.500'}>{item.timeStamp}</Text>
              </VStack>
            </HStack>
          </Box>
        )}
        keyExtractor={item => item.id}
      />
    </Box>
  );
};

export default TopFlatlist;
