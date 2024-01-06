import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

type AppBarCustomType = {
  title: string;
  action?: () => void;
  starColor?: string;
};

const AppBarCustom = ({title, action, starColor}: AppBarCustomType) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {title !== 'Users' ? (
        <Icon
          name="arrow-left"
          size={18}
          color="white"
          onPress={() => navigation.goBack()}
        />
      ) : null}
      <Text style={styles.title}>{title}</Text>
      {title !== 'Users' && (
        <Icon name="star" size={18} color={starColor} onPress={action} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '8%',
    backgroundColor: '#416788',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
});

export default AppBarCustom;
