import Login from "../pages/Login";
import Event from "../pages/Event";
import React from "react";

export interface IRoute {
	path: string;
	element: React.ReactNode;
}

export enum RouteNames {
	LOGIN = '/login',
	EVENT = '/'
}

export const publicRoutes: IRoute[] = [
	{
		path: RouteNames.LOGIN,
		element: <Login/>,
	}
]

export const privateRoutes: IRoute[] = [
	{
		path: RouteNames.EVENT,
		element: <Event/>,
	}
]