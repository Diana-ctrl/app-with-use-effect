import s from './github.module.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

export const List = ({searchTerm, setUserDetails}) => {
    const [selectedUser, setSelectedUser] = useState(null);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        if (!!selectedUser) {
            axios
                .get(`https://api.github.com/users/${selectedUser.login}`)
                .then(res => {
                    setUserDetails(res.data)
                })
        }
    }, [setUserDetails, selectedUser])


    useEffect(() => {
        axios
            .get(`https://api.github.com/search/users?q=${searchTerm}`)
            .then(res => {
                setUsers(res.data.items)
            })
    }, [searchTerm])

    useEffect(() => {
        if (selectedUser) {
            document.title = selectedUser.login;
        }
    }, [selectedUser])

    return (
        <ul>
            {users.map(t =>
                <li key={t.id} className={selectedUser === t ? s.selected : ''} onClick={() => { setSelectedUser(t) }}>
                    {t.login}
                </li>)}
        </ul>
    )
}