
import { LOCALSTORAGE_USERSESSION } from '@/const/value.js';
import axios from 'axios';

const setAuthenticate = (tokenConfig) => {
    console.log("tokenConfig", tokenConfig);

    setLocalStorage(LOCALSTORAGE_USERSESSION, JSON.stringify(tokenConfig))
    setAxiosHeader(tokenConfig.access_token)
    // setAuth(tokenConfig);
}

const setLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
}

const getLocalStorage = (key) => {
    if (!key) {
        key = LOCALSTORAGE_USERSESSION
    }
    const result = localStorage.getItem(key);
    return result ? JSON.parse(localStorage.getItem(key) || '') : null;
}

const removeLocalStorage = (key) => {
    if (!key) {
        key = LOCALSTORAGE_USERSESSION
    }
    localStorage.removeItem(key);
}


const setAxiosHeader = (token) => {
    if (!token) {
        delete axios.defaults.headers.common["Authorization"];
    }
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

export { setAuthenticate, removeLocalStorage, getLocalStorage }