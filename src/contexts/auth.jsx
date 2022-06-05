import React, {createContext, useState, useEffect} from 'react';

import { useNavigate } from 'react-router-dom';
import { createSession } from '../services/fechApi';


export const AuthContext = createContext();

export const AutheProvider = ({children}) => {
    const navigate = useNavigate();
    const [token, setToken] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const recoveredToken = localStorage.getItem('token');

        if (recoveredToken) {
            setToken(recoveredToken);
        }
        
        setLoading(false);
    },[]);
    


    const login = async (email, password) => {

        const response = await createSession(email, password);

        if (response) {
            localStorage.setItem('token', JSON.stringify(response));
            setToken(response);
            navigate('/table');
        } else {
            alert('Usuário ou senha incorretos');
        }
    };

    const logout = () => {
        localStorage.removeItem('token');
        setToken(null);
        navigate('/');
    };




    return (
        <AuthContext.Provider value={{ authenticated: !!token, token,loading, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}