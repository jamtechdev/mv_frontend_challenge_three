import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  links: ['https://www.youtube.com/embed/uVzT6D-yhZg'],
  play: 'https://www.youtube.com/embed/uVzT6D-yhZg'
};
export const playlistSlice = createSlice({
  name: 'playlist',
  links: ['https://www.youtube.com/embed/uVzT6D-yhZg'],
  play: 'https://www.youtube.com/embed/uVzT6D-yhZg',
  initialState,
  reducers: {
    add: (state, action) => {
      state.links.push(action.payload);
    },
    remove: (state, action) => {
      state.links = state.links.filter((link, index) => index !== action.payload);
    },
    play: (state, action) => {
      const selected = state.links.filter((link, index) => index === action.payload);
      state.play = selected.toString();
    }
  }
});
export const { add, remove, play } = playlistSlice.actions;
export const getPlaylist = (state) => state.playlist.links;
export const getSelectedVideo = (state) => state.playlist.play;

export default playlistSlice.reducer;
