import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IPhoto } from '../interfaces/photo.interface';

export interface FavoritePhoto extends IPhoto {
	count: number;
}

export interface FavoriteState {
	photos: FavoritePhoto[];
}

const initialState: FavoriteState = {
	photos: [],
};

export const favoriteSlice = createSlice({
	name: 'favorite',
	initialState,
	reducers: {
		add: (state, action: PayloadAction<FavoritePhoto>) => {
			state.photos.push(action.payload);
		},
	},
});

export default favoriteSlice.reducer;
export const favoriteActions = favoriteSlice.actions;
