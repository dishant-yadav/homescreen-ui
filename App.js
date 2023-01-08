import React from 'react';
import {
  HStack,
  Text,
  Box,
  Center,
  NativeBaseProvider,
  Container,
} from 'native-base';
import TopComponent from './components/TopComponent';

const App = () => {
  return (
    <NativeBaseProvider>
      <Box flex={1} bgColor={'gray.300'}>
        <TopComponent />
      </Box>
    </NativeBaseProvider>
  );
};

export default App;
