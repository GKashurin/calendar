import {IUser} from "../../../models/IUser";
import {AuthActionsEnum, ISetAuthAction, ISetErrorAction, ISetIsLoadingAction, ISetUserAction} from "./types";
import axios from "axios";
import {AppDispatch} from "../../index";
import UserService from "../../../api/UserService";

export const AuthActions = {
	setUser: (user: IUser): ISetUserAction => ({type: AuthActionsEnum.SET_USER, payload: user}),
	setIsAuth: (auth: boolean): ISetAuthAction => ({type: AuthActionsEnum.SET_AUTH, payload: auth}),
	setIsLoading: (load: boolean): ISetIsLoadingAction => ({type: AuthActionsEnum.SET_IS_LOADING, payload: load}),
	setError: (err: string): ISetErrorAction => ({type: AuthActionsEnum.SET_ERROR, payload: err}),
	login: (username: string, password: string) => async(dispatch: AppDispatch) => {
		try {
			dispatch(AuthActions.setIsLoading(true));
			setTimeout(async () => {
				const response = await UserService.getUsers()
				const mockUser = response.data.find(user => user.username === username && user.password === password)
				if (mockUser) {
					localStorage.setItem('auth', 'true');
					localStorage.setItem('username', mockUser.username);
					dispatch(AuthActions.setUser(mockUser))
					dispatch(AuthActions.setIsAuth(true));
				} else {
					dispatch(AuthActions.setError('Пользователь не найден'))
					dispatch(AuthActions.setIsLoading(false));
				}
			}, 1000)
		}
		catch (err) {
			dispatch(AuthActions.setIsLoading(false));
			dispatch(AuthActions.setError('err'));
		}
	},
	logout: () => async(dispatch: AppDispatch) => {
		localStorage.removeItem('auth')
		localStorage.removeItem('username')
		dispatch(AuthActions.setUser({} as IUser));
		dispatch(AuthActions.setIsAuth(false));
	}
}