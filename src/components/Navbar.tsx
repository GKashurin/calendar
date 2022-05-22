import React, {FC} from 'react';
import {useNavigate} from 'react-router-dom'
import {Layout, Menu, Row} from "antd";
import {RouteNames} from "../router";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";

const Navbar: FC = () => {
	const itemsAuth = [
		{label: 'Выйти', key: 'logout'}
	]
	const itemsNotAuth = [
		{label: 'Логин', key: 'login'}
	]

	const {logout} = useActions();
	const navigate = useNavigate()
	const {isAuth, user} = useTypedSelector(state => state.auth)

	return (
		<Layout.Header>
			<Row justify='end'>
				{isAuth
					? <>
						<div style={{color: 'white'}}>{user.username}</div>
						<Menu
							selectable={false}
							disabledOverflow
							theme='dark'
							mode='horizontal'
							items={itemsAuth}
							onClick={logout}
						/>
					</>
					: <Menu
						selectable={false}
						disabledOverflow
						theme='dark'
						mode='horizontal'
						items={itemsNotAuth}
						onClick={() => navigate(RouteNames.LOGIN)}
					/>}

			</Row>
		</Layout.Header>
	);
};

export default Navbar;