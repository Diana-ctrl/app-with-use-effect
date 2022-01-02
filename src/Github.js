import s from './github.module.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

export const Github = () => {
  const [selectidUser, setSelectedUser] = useState(null);
  const [users, setUsers] = useState([]);
  const [tempSearch, setTempSearch] = useState('');

  useEffect(() => { 
     if(selectidUser) {
        document.title = selectidUser.login;
      }
  }, [selectidUser])

  useEffect(() => {
    axios.get('https://api.github.com/search/users?q=it-kamasutra')
    .then(res=> {
      console.log(res)
      setUsers(res.data.items)
    })

  }, [])

   

  return (
    <div className={s.container}>
      <div>
        <input placeholder='Search' value={tempSearch} onChange={(e) => {setTempSearch(e.currentTarget.value)}}/>
        <button onClick={() => {
           axios.get(`https://api.github.com/search/users?${tempSearch}`)
           .then(res=> {
             console.log(res)
             setUsers(res.data.items)
           })

        }}>find</button>
      </div>

      <ul>
        {users.map(t =>
            <li key= {t.id} className={selectidUser === t ? s.selected : ''} onClick={() => {
              setSelectedUser(t);
            }}>
              {t.login}
            </li>
          )}
      </ul>
      <div>
        <h2>User name</h2>
        <div>Ditails</div>
        <div>{tempSearch}</div>
      </div>

    </div>
  );
}

