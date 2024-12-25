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
		toggle: (state, action: PayloadAction<FavoritePhoto>) => {
			const existingPhotoIndex = state.photos.findIndex(
				photo => photo.id === action.payload.id
			);
			console.log(existingPhotoIndex);
			console.log(state.photos);

			if (existingPhotoIndex === -1) {
				state.photos.push(action.payload);
			} else {
				state.photos.splice(existingPhotoIndex, 1);
			}
		},
	},
});

export default favoriteSlice.reducer;
export const favoriteActions = favoriteSlice.actions;
