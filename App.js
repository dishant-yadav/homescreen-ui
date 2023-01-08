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
import {View} from 'react-native';
import TopComponent from './components/TopComponent';
import MyTeam from './components/MyTeam';
import QuickLink from './components/QuickLink';
import Celebrations from './components/Celebration';
import MyTask from './components/MyTasks';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {LogBox} from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications

function Home() {
  return (
    <ScrollView flex={1} bgColor={'gray.300'} mb="2">
      <VStack space={1}>
        <TopComponent />
        <MyTeam />
        <QuickLink />
        <Celebrations />
        <MyTask />
      </VStack>
    </ScrollView>
  );
}

const MySpace = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text fontSize={36} fontWeight={700}>
        MySpace!
      </Text>
    </View>
  );
};

const Notification = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <MIcon name={'home'} size={'small'} />
      <Text fontSize={36} fontWeight={700}>
        Notifications!
      </Text>
    </View>
  );
};

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName={Home}
          screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
              let iconName;

              if (route.name === 'Home') {
                iconName = 'home';
              } else if (route.name === 'Profile') {
                iconName = 'user';
              } else if (route.name === 'Notifications') {
                iconName = 'bell';
              }

              // You can return any component that you like here!
              return <MIcon name={iconName} size={size} color={color} />;
            },
            tabBarStyle: {
              height: 60,
            },
            tabBarLabelStyle: {
              fontSize: 16,
              marginBottom: 5,
            },
            tabBarActiveTintColor: 'green',
            tabBarInactiveTintColor: 'gray',
          })}>
          <Tab.Screen
            name="Home"
            component={Home}
            options={{headerShown: false}}
          />
          <Tab.Screen
            name="Notifications"
            component={Notification}
            options={{headerShown: false}}
          />
          <Tab.Screen
            name="My Space"
            component={MySpace}
            options={{
              headerShown: false,
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
