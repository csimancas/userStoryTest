import React, {useState} from 'react';
import {
  Text,
  FlatList,
  StyleSheet,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useDispatch} from 'react-redux';
import {deleteAlbum} from '../../redux/users/thunks';
import {useNavigation} from '@react-navigation/native';

type UserItemType = {
  user: {
    id: number;
    name: string;
    albums: [];
  };
};

type ItemType = {
  item: {
    id: number;
    title: string;
  };
};

const RenderItemList = ({user}: UserItemType) => {
  const [expanded, setExpanded] = useState(false);
  const dispatch: any = useDispatch();
  const navigation: any = useNavigation();
  const renderItemAlbum = ({item}: ItemType) => {
    return (
      <Pressable
        style={styles.item}
        onPress={() =>
          navigation.navigate('Photos', {
            albumId: item.id,
            albumTitle: item.title,
          })
        }>
        <Text style={styles.itemTextStyle}>{item.title}</Text>
        <TouchableOpacity
          onPress={() => dispatch(deleteAlbum(item.id, user.id))}>
          <Icon name="minus-circle" size={20} color={'#E0E0E2'} />
        </TouchableOpacity>
      </Pressable>
    );
  };
  return (
    <>
      <Pressable
        style={styles.container}
        onPress={() => setExpanded(!expanded)}>
        <Text style={styles.nameText}>{user.name}</Text>
        <Icon name={expanded ? 'chevron-up' : 'chevron-down'} size={20} />
      </Pressable>

      {expanded && (
        <FlatList
          data={user.albums}
          renderItem={renderItemAlbum}
          keyExtractor={item => item.id.toString()}
        />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: '#B5BAD0',
  },
  nameText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#416788',
  },
  item: {
    backgroundColor: '#81D2C7',
    borderRadius: 1,
    padding: 10,
    borderWidth: 0.5,
    borderColor: '#E0E0E2',
    marginLeft: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemTextStyle: {
    flex: 1,
    fontSize: 14,
    color: '#416788',
    fontWeight: 'bold',
  },
  title: {
    fontSize: 32,
  },
});
export default RenderItemList;
