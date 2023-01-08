import React from 'react';
import {
  HStack,
  Text,
  Box,
  Center,
  NativeBaseProvider,
  Divider,
  Spacer,
  ScrollView,
  VStack,
} from 'native-base';
import TopComponent from './components/TopComponent';
import MyTeam from './components/MyTeam';
import QuickLink from './components/QuickLink';
import Celebrations from './components/Celebration';
import MyTask from './components/MyTasks';

const App = () => {
  return (
    <NativeBaseProvider>
      <ScrollView flex={1} bgColor={'gray.300'}>
        <VStack space={1}>
          <TopComponent />
          <MyTeam />
          <QuickLink />
          <Celebrations />
          <MyTask />
        </VStack>
      </ScrollView>
    </NativeBaseProvider>
  );
};

export default App;
