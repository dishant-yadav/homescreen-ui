import React from 'react';
import {Box, Flex, HStack, Text, VStack} from 'native-base';
import Tasks from './Tasks';

const tasks = [
  {
    title: 'Attendance',
    count: '17',
  },
  {
    title: 'Leave',
    count: '8',
  },
  {
    title: 'Job Offers',
    count: '11',
  },
  {
    title: 'Interview Schedule',
    count: '4',
  },
];

const MyTasks = () => {
  return (
    <Box alignItems={'center'} justifyContent={'center'}>
      <Box
        w={370}
        mx={4}
        my={2}
        px={'2'}
        rounded="xl"
        overflow="hidden"
        shadow={'4'}
        borderColor="coolGray.200"
        borderWidth="1"
        bgColor={'gray.100'}>
        <Text py={4} pl={3} fontWeight={600} fontSize={'md'} color={'black'}>
          My Teams
        </Text>
        <VStack
          space="2"
          alignItems={'center'}
          justifyContent={'center'}
          mb="4">
          {tasks.map((task, index) => {
            return <Tasks key={index} title={task.title} count={task.count} />;
          })}
        </VStack>
      </Box>
    </Box>
  );
};

export default MyTasks;
