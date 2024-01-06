import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import RenderItemList from './renderItemList';
import {useSelector} from 'react-redux';
import AppBarCustom from './AppBarCustom';

const UsersList = () => {
  const users = useSelector((state: any) => state.users);

  return (
    <>
      <AppBarCustom title="Users" />
      <View style={styles.container}>
        <FlatList
          data={users.users}
          renderItem={({item}) => {
            return <RenderItemList user={item} albums={users.albums} />;
          }}
          keyExtractor={item => item.id}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: 'white',
  },
});

export default UsersList;
