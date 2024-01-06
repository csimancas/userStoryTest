import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import UsersScreen from '../screens/usersScreen';
import PhotosScreen from '../screens/PhotosScreen';

const Stack = createNativeStackNavigator();

export const RootStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Users"
        component={UsersScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Photos"
        component={PhotosScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};
