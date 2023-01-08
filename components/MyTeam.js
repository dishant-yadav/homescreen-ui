import React from 'react';
import {
  Box,
  Heading,
  AspectRatio,
  Image,
  Text,
  Center,
  HStack,
  Stack,
  NativeBaseProvider,
} from 'native-base';
import {TouchableOpacity} from 'react-native';
import MyTeamList from './MyTeamList';

const MyTeam = () => {
  return (
    <Box alignItems="center">
      <Box
        w={370}
        mx={4}
        my={2}
        rounded="xl"
        overflow="hidden"
        shadow={'4'}
        borderColor="coolGray.200"
        borderWidth="1"
        bgColor={'gray.100'}>
        <HStack
          alignItems={'center'}
          justifyContent={'space-between'}
          space={7}
          mx={4}
          py={5}>
          <Text fontWeight={600} fontSize={'md'}>
            My Team
          </Text>
          <TouchableOpacity>
            <Text color={'green.700'} underline fontWeight={500}>
              View All
            </Text>
          </TouchableOpacity>
        </HStack>
        <MyTeamList />
      </Box>
    </Box>
  );
};

export default MyTeam;
