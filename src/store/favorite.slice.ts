import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IPhoto } from '../interfaces/photo.interface';
import { loadState } from './storage';

export interface FavoritePhoto extends IPhoto {
	count?: number;
}

export interface FavoriteState {
	photos: FavoritePhoto[];
}

export const FAVORITE_PERSISTENT_STATE = 'favoritePhotosData';

const initialState: FavoriteState = loadState<FavoriteState>(
	FAVORITE_PERSISTENT_STATE
) ?? {
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
