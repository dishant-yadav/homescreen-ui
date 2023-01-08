import React from 'react';
import {
  HStack,
  Text,
  Box,
  Center,
  NativeBaseProvider,
  Divider,
  Spacer,
} from 'native-base';
import TopComponent from './components/TopComponent';
import MyTeam from './components/MyTeam';

const App = () => {
  return (
    <NativeBaseProvider>
      <Box flex={1} bgColor={'gray.300'}>
        <TopComponent />
        <MyTeam />
      </Box>
    </NativeBaseProvider>
  );
};

export default App;
