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
} from 'native-base';

const TopFlatlist = () => {
  const data = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      messageText: 'Employees are expected to clock...',
      timeStamp: '1 hour ago',
      avatarUrl:
        'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      bgColor: 'yellow.100',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',

      timeStamp: '2 hour ago',
      avatarUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyEaZqT3fHeNrPGcnjLLX1v_W4mvBlgpwxnA&usqp=CAU',
      bgColor: 'red.100',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      messageText: 'Employees are expected to clock...',
      timeStamp: '3 hour ago',
      avatarUrl: 'https://miro.medium.com/max/1400/0*0fClPmIScV5pTLoE.jpg',
      bgColor: 'green.100',
    },

    {
      id: '68694a0f-3da1-431f-bd56-142371e29d72',
      messageText: 'Employees are expected to clock...',
      timeStamp: '3 hour ago',
      avatarUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr01zI37DYuR8bMV5exWQBSw28C1v_71CAh8d7GP1mplcmTgQA6Q66Oo--QedAN1B4E1k&usqp=CAU',
      bgColor: 'red.100',
    },

    {
      id: '28694a0f-3da1-471f-bd96-142456e29d72',
      messageText: 'Employees are expected to clock...',
      timeStamp: '5 hour ago',
      avatarUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU',
      bgColor: 'orange.100',
    },
  ];
  return (
    <Box mt={5} mx={3}>
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
              <Avatar
                size={12}
                source={{
                  uri: item.avatarUrl,
                }}>
                A
              </Avatar>
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
