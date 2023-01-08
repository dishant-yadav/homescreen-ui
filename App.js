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
} from 'native-base';
import TopComponent from './components/TopComponent';
import MyTeam from './components/MyTeam';
import QuickLink from './components/QuickLink';
import Celebrations from './components/Celebration.js';

const App = () => {
  return (
    <NativeBaseProvider>
      <ScrollView flex={1} bgColor={'gray.300'}>
        <TopComponent />
        <MyTeam />
        <QuickLink />
        <Celebrations />
      </ScrollView>
    </NativeBaseProvider>
  );
};

export default App;
