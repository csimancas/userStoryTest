import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {fetchUsers} from '../../redux/users/thunks';

const useUsersScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return {};
};

export default useUsersScreen;
