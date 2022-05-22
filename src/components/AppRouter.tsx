import React, {useEffect} from 'react';
import {Routes, Route, useNavigate} from "react-router-dom";
import {privateRoutes, publicRoutes} from "../router";
import {useTypedSelector} from "../hooks/useTypedSelector";

const AppRouter = () => {
	const isAuth = useTypedSelector(state => state.auth.isAuth)
	const navigate = useNavigate()

	useEffect(() => {
		if (isAuth) navigate('')
		else navigate('/login')
	},[isAuth])

	return (
		<>
			{
				isAuth ?
					<Routes>
						{privateRoutes.map(route =>
						<Route
							path={route.path}
							element={route.element}
							key={route.path}
						/>)}
					</Routes>
					: <Routes>
						{publicRoutes.map(route =>
							<Route
								path={route.path}
								element={route.element}
								key={route.path}
							/>)}
					</Routes>
			}
		</>
	);
};

export default AppRouter;