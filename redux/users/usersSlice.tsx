import {createSlice} from '@reduxjs/toolkit';

export const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
  },
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload;
    },

    deleteAlbumFromUser: (state, action) => {
      const {userId, albumId} = action.payload;
      const user = state.users.find((item: any) => item.id === userId);
      const albumIndex = user.albums.findIndex(
        (album: any) => album.id === albumId,
      );
      user.albums.splice(albumIndex, 1);
    },
  },
});

export const {setUsers, deleteAlbumFromUser} = usersSlice.actions;
