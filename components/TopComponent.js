import React from 'react';
import {
  HStack,
  VStack,
  Input,
  PlayIcon,
  SearchIcon,
  Text,
  Center,
  Box,
  Spacer,
  Avatar,
  Circle,
} from 'native-base';
import {TouchableOpacity} from 'react-native';
import TopFlatlist from '../components/TopFlatlist';
import DividerWhite from './DividerWhite';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const todayJoinings = [
  {
    name: 'Sahil',
    role: 'UX Designer',
    imageURI:
      'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    bgColor: 'warning.100',
    accentColor: 'warning.200',
    color: 'yellow.600',
  },
  {
    name: 'Megha',
    role: 'UX Designer',
    imageURI:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyEaZqT3fHeNrPGcnjLLX1v_W4mvBlgpwxnA&usqp=CAU',
    bgColor: 'primary.100',
    accentColor: 'primary.200',
    color: 'blue.600',
  },
  {
    name: 'Ravi',
    role: 'UX Designer',
    imageURI: 'https://miro.medium.com/max/1400/0*0fClPmIScV5pTLoE.jpg',
    bgColor: 'danger.200',
    accentColor: 'danger.300',
    color: 'red.700',
  },
];

const TopComponent = () => {
  return (
    <Box pt={10} pb={10} bgColor={'gray.500'} roundedBottom={'35'} shadow={2}>
      <Center>
        <HStack space={2}>
          <Input
            placeholder="Search"
            placeholderTextColor={'gray.700'}
            fontSize={16}
            variant="filled"
            width="70%"
            borderRadius={10}
            py="1"
            px="2"
            InputLeftElement={<SearchIcon size="4" color="gray.500" ml="2" />}
          />
          <Icon name="message" size={40} color="green" />
        </HStack>
      </Center>
      <HStack
        alignItems={'center'}
        justifyContent={'space-between'}
        space={7}
        mt={10}
        mx={4}>
        <Text fontWeight={700} fontSize={'md'}>
          Announcements
        </Text>
        <TouchableOpacity>
          <Text color={'green.700'} underline fontWeight={500}>
            View All
          </Text>
        </TouchableOpacity>
      </HStack>
      <TopFlatlist />
      <DividerWhite />
      <Box>
        <Text
          mt="2"
          mb="2"
          color={'yellow.500'}
          fontSize={40}
          fontStyle={'italic'}
          style={{textAlign: 'center'}}>
          Welcome
        </Text>
        <HStack justifyContent={'space-between'} alignItems={'center'} px="2">
          {todayJoinings.map((joining, index) => {
            return (
              <Box
                key={index}
                justifyContent={'center'}
                alignItems={'center'}
                rounded={'20'}
                // w="24"
                py="2"
                px="4"
                shadow={4}
                bgColor={joining.bgColor}
                borderColor={'blue.100'}
                opacity={0.9}>
                <Circle size="80px" bg={joining.accentColor}>
                  <Avatar
                    size="68px"
                    source={{
                      uri: joining.imageURI,
                    }}>
                    A
                  </Avatar>
                </Circle>
                <Text fontSize={20} color={joining.color}>
                  {joining.name}
                </Text>
                <Text color={'gray.500'} fontSize={14} fontWeight={500}>
                  {joining.role}
                </Text>
                <Text color={'gray.500'} fontSize={14} fontWeight={500}>
                  Joined Today
                </Text>
              </Box>
            );
          })}
        </HStack>
      </Box>
    </Box>
  );
};

export default TopComponent;
