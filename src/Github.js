import s from './github.module.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Header } from './Header.js';
import { List } from './List.js';
import {Page} from './Page.js'

export const Github = () => {

  const [selectedUser, setSelectedUser] = useState(null);
  const [userDetails, setUserDetails] = useState(null);
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('Diana');

  useEffect(() => {
    if (selectedUser) {
      document.title = selectedUser.login;
    }
  }, [selectedUser])
  useEffect(() => {
    axios
      .get(`https://api.github.com/search/users?q=${searchTerm}`)
      .then(res => {
        setUsers(res.data.items)
      })
  }, [searchTerm])
  useEffect(() => {
    if (!!selectedUser) {
      axios
        .get(`https://api.github.com/users/${selectedUser.login}`)
        .then(res => {
          setUserDetails(res.data)
        })
    }
  }, [selectedUser])

  const searchTermForInput = (tempSearch) => {
    setSearchTerm(tempSearch)
  }
  const setSelectedUserForList = (user) => {
    setSelectedUser(user)
  }

  return (
    <div className={s.container}>
      <div>
        <Header searchTermForInput={searchTermForInput} />
        <List users={users} setSelectedUserForList={setSelectedUserForList} selectedUser={selectedUser}/>
      </div>
      <div>
        <Page userDetails={userDetails}/>
      </div>


    </div>

  );
}
