import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
	name: 'user',
	initialState: {
		user: null
	},
	reducers: {
		login: (state, action) => {
			state.user = action.payload;
			localStorage.setItem('userSession', state.user.user);
			localStorage.setItem('passwordSession', state.user.password);
		},
		logout: (state) => {
			state.user = null;
			localStorage.removeItem('userSession');
			localStorage.removeItem('passwordSession');
		},
	}
});

export const { login, logout } = userSlice.actions;

export const checkUser = (state) => { 
	return state.user;
};

export default userSlice.reducer;