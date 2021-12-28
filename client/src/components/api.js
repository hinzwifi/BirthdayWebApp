import axios from 'axios';

const BRUHurl = 'http://localhost:3003/bruh';


export const getUsers = async (id) => {
    id = id || '';
    return await axios.get(`${BRUHurl}/${id}`);
}

export const addUser = async (user) => {
    return await axios.post(`${BRUHurl}/add`, user);
}


export const editUser = async (id, user) => {
    return await axios.put(`${BRUHurl}/${id}`, user)
}