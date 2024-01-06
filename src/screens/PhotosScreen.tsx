import React, {useState, useEffect} from 'react';
import {Dimensions, FlatList, Image, StyleSheet, View} from 'react-native';
import AppBarCustom from '../components/AppBarCustom';
import usePicsScreen from '../hooks/usePicsScreen';

type PhotosScreenProps = {
  route: {
    params: {
      albumTitle: string;
    };
  };
};

const PhotosScreen: React.FC<PhotosScreenProps> = ({route}) => {
  const {allImages, setAllImages, images} = usePicsScreen();
  const {albumTitle} = route.params;
  const [windowDimensions, setWindowDimensions] = useState(
    Dimensions.get('window'),
  );

  useEffect(() => {
    const updateWindowDimensions = () => {
      setWindowDimensions(Dimensions.get('window'));
    };

    Dimensions.addEventListener('change', updateWindowDimensions);

    return () => {};
  }, []);

  const imageWidth = (windowDimensions.width - 20) / 3;

  const renderImage = ({item}: {item: {id: number; thumbnailUrl: string}}) => {
    return (
      <Image
        source={{uri: item.thumbnailUrl}}
        style={[styles.image, {width: imageWidth, height: imageWidth}]}
        resizeMode="contain"
      />
    );
  };

  return (
    <View style={styles.container}>
      <AppBarCustom
        title={albumTitle}
        action={() => setAllImages(!allImages)}
        starColor={allImages ? 'white' : 'blue'}
      />
      <FlatList
        data={images}
        numColumns={3}
        renderItem={renderImage}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.imageContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    justifyContent: 'space-around',
    padding: 5,
  },
  image: {
    marginVertical: 5,
    marginHorizontal: 2,
    borderRadius: 8,
    overflow: 'hidden',
  },
});

export default PhotosScreen;
