import React from 'react';
import {View} from 'react-native';
import useUsersScreen from '../hooks/useUsersScreen';
import UsersList from '../components/usersList';

const UsersScreen = () => {
  const {} = useUsersScreen();

  return (
    <View>
      <UsersList />
    </View>
  );
};

export default UsersScreen;
