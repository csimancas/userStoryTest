import {useState, useEffect} from 'react';
import {useRoute} from '@react-navigation/native';

const usePicsScreen = () => {
  const route: any = useRoute();
  const {albumId} = route.params;
  const [allImages, setAllImages] = useState(albumId ? true : false);
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      const url = allImages
        ? `https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`
        : 'https://jsonplaceholder.typicode.com/photos';
      try {
        const response = await fetch(url);
        const data = await response.json();
        setImages(data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchImages();
  }, [allImages, albumId]);

  return {
    allImages,
    setAllImages,
    images,
  };
};

export default usePicsScreen;
