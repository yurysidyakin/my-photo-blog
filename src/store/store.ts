import { configureStore } from "@reduxjs/toolkit";
import favoriteSlice, { FAVORITE_PERSISTENT_STATE } from "./favorite.slice";
import { saveState } from "./storage";

export const store = configureStore({
	reducer: {
		favorite: favoriteSlice,
	},
});

store.subscribe(() => {
	saveState(store.getState().favorite, FAVORITE_PERSISTENT_STATE);
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
