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
} from 'native-base';
import {TouchableOpacity} from 'react-native';
import TopFlatlist from '../components/TopFlatlist';
import DividerWhite from './DividerWhite';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const TopComponent = () => {
  return (
    <Box pt={16} bgColor={'gray.500'}>
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
    </Box>
  );
};

export default TopComponent;
