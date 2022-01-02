import s from './github.module.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

export const Github = () => {
  const [selectidUser, setSelectedUser] = useState(null);
  const [users, setUsers] = useState([]);
  useEffect(() => { 
     if(selectidUser) {
        document.title = selectidUser.login;
      }
  }, [selectidUser])

  useEffect(() => {
    axios.get('https://api.github.com/search/users?q=it-kamasutra')
    .then(res=> {
      console.log(res)
      setUser(res.data.items)
    })

  }, [])

   

  return (
    <div className={s.container}>
      <div>
        <input placeholder='Search' />
        <button>find</button>
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
      </div>

    </div>
  );
}

