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
import TopFlatlist from '../components/TopFlatlist';
import DividerWhite from './DividerWhite';

const TopComponent = () => {
  return (
    <Box mt={16}>
      <Center>
        <HStack space={3}>
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
          <PlayIcon size="8" color={'green.900'} />
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
        <Text color={'green.700'} underline fontWeight={400}>
          View All
        </Text>
      </HStack>
      <TopFlatlist />
      <DividerWhite />
    </Box>
  );
};

export default TopComponent;
