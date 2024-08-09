import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './HomeScreen';
import AboutUs from './AboutUS';
import AgentComplaint from'./AgentComplaint';
import Login from './Login';
import Employee from './Employee';
import User from './User';
import UserComplaint from './UserComplaint';
import Tracker from './Tracker';
import AgentDashboard from './AgentDashboard';
import Controller from './Controller';
import DC from './DC';





const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator >
        <Stack.Screen name="HomeScreen" component={HomeScreen}  options={{headerShown:false}}  />
        <Stack.Screen name="AboutUS" component={AboutUs}  options={{headerShown:false}}  />
        <Stack.Screen name="AgentComplaint" component={AgentComplaint}  options={{headerShown:false}}/>
        <Stack.Screen name="Login" component={Login}  options={{headerShown:false}}  />
        <Stack.Screen name="Employee" component={Employee}  options={{headerShown:false}}  />
        <Stack.Screen name="User" component={User}  options={{headerShown:false}}  />
        <Stack.Screen name="UserComplaint" component={UserComplaint}  options={{headerShown:false}}  />
        <Stack.Screen name="Tracker" component={Tracker}  options={{headerShown:false}}  />
        <Stack.Screen name="AgentDashboard" component={AgentDashboard}  options={{headerShown:false}}  />
        <Stack.Screen name="Controller" component={Controller}  options={{headerShown:false}}  />
        <Stack.Screen name="DC" component={DC}  options={{headerShown:false}}  />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;           

