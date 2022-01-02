import s from './github.module.css';
import { useState, useEffect } from 'react';

export const Github = () => {
  const [selectidUser, setSelectedUser] = useState(null);
  useEffect(() => { 
     if(selectidUser) {
        document.title = selectidUser;
      }
  }, [selectidUser])

  return (
    <div className={s.container}>
      <div>
        <input placeholder='Search' />
        <button>find</button>
      </div>

      <ul>
        {['Diana', 'Dima', 'Veronika']
          .map(t =>
            <li className={selectidUser === t ? s.selected : ''} onClick={() => {
              setSelectedUser(t);
            }}>
              {t}
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

