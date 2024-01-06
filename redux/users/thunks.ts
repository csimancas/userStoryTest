import {Action, ThunkAction} from '@reduxjs/toolkit';
import {setUsers} from './usersSlice';

type User = {
  id: number;
  name: string;
  email: string;
};

type Album = {
  id: number;
  title: string;
  userId: number;
};

type UserWithAlbumsType = {
  id: number;
  name: string;
  albums: Album[];
};

export const fetchUsers = (): ThunkAction<void, {}, {}, Action> => {
  return async dispatch => {
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/users?_limit=2',
      );
      const users: User[] = await response.json();

      const userWithAlbums: UserWithAlbumsType[] = [];

      for (const user of users) {
        const responseData = await fetch(
          `https://jsonplaceholder.typicode.com/albums?userId=${user.id}`,
        );
        const albums: Album[] = await responseData.json();

        const objUser = {
          id: user.id,
          name: user.name,
          albums,
        };

        userWithAlbums.push(objUser);
      }

      dispatch(setUsers(userWithAlbums));
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
};

export const deleteAlbum = (albumId: number, userId: number) => {
  return async (dispatch: any, getState: any) => {
    try {
      const state = getState();
      const users = state.users.users;

      const updatedUsers = users.map((user: UserWithAlbumsType) => {
        if (user.id === userId) {
          const updatedAlbums = user.albums.filter(
            (album: Album) => album.id !== albumId,
          );
          return {
            ...user,
            albums: updatedAlbums,
          };
        }
        return user;
      });

      dispatch(setUsers(updatedUsers));
    } catch (error) {
      console.error('Error deleting album:', error);
    }
  };
};
