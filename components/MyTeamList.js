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
  View,
  Flex,
} from 'native-base';

const MyTeamList = () => {
  const data = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      name: 'Rashmi',
      present: true,
      jobRole: 'Trainee',
      avatarUrl:
        'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      name: 'Manisha',
      present: true,
      jobRole: 'HR',
      avatarUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyEaZqT3fHeNrPGcnjLLX1v_W4mvBlgpwxnA&usqp=CAU',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      name: 'Abhishek ',
      present: true,
      jobRole: 'Developer',
      avatarUrl: 'https://miro.medium.com/max/1400/0*0fClPmIScV5pTLoE.jpg',
    },
    {
      id: '68694a0f-3da1-431f-bd56-142371e29d72',
      name: 'Aditya',
      present: false,
      jobRole: 'Trainee',
      avatarUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr01zI37DYuR8bMV5exWQBSw28C1v_71CAh8d7GP1mplcmTgQA6Q66Oo--QedAN1B4E1k&usqp=CAU',
    },
    {
      id: '28694a0f-3da1-471f-bd96-142456e29d72',
      name: 'Neeraj',
      present: false,
      jobRole: 'HR',
      avatarUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU',
    },
  ];
  return (
    <Box>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <Box mb="3">
            <HStack justifyContent="space-around" alignItems={'center'}>
              <Avatar
                size="50px"
                source={{
                  uri: item.avatarUrl,
                }}
                ml={4}
              />
              <Text
                ml={8}
                w="1/4"
                style={{textAlign: 'left'}}
                _dark={{
                  color: 'warmGray.50',
                }}
                color="black"
                fontWeight={400}
                fontSize={16}>
                {item.name}
              </Text>
              <Text
                w="1/4"
                ml={2}
                style={{textAlign: 'left'}}
                color="coolGray.600"
                _dark={{
                  color: 'warmGray.200',
                }}>
                {item.jobRole}
              </Text>
              <HStack
                mr="2"
                w="1/4"
                alignSelf={'center'}
                justifyContent={'center'}
                space={2}>
                <Avatar
                  bg="green.600"
                  size={3}
                  mt="2"
                  source={{
                    uri: 'xyz',
                  }}>
                  .
                </Avatar>
                <Text
                  style={{textAlign: 'center'}}
                  color="coolGray.600"
                  _dark={{
                    color: 'warmGray.200',
                  }}>
                  {item.present ? 'Present' : 'Absent'}
                </Text>
              </HStack>
            </HStack>
          </Box>
        )}
        keyExtractor={item => item.id}
      />
    </Box>
  );
};

export default MyTeamList;
