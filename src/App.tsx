import React, {useEffect} from 'react';
import AppRouter from "./components/AppRouter";
import Navbar from "./components/Navbar";
import {Layout} from "antd";
import 'antd/dist/antd.css'
import {useActions} from "./hooks/useActions";
import {IUser} from "./models/IUser";

const App = () => {
const {setUser, setIsAuth} = useActions()
    useEffect(() => {
        if(localStorage.getItem('auth')) {
            setUser({username: localStorage.getItem('username' || '')} as IUser)
            setIsAuth(true)
        }
    }, [])

  return (
    <Layout>
        <Navbar/>
        <Layout.Content>
            <AppRouter/>
        </Layout.Content>
    </Layout>
  );
}

export default App;
