import s from './github.module.css';
import { useState } from 'react';

export const Github = () => {
  const [selectidUser, setSelectedUser] = useState(null);
  return (
    <div className={s.container}>
      <div>
        <input placeholder='Search' />
        <button>find</button>
      </div>

      <ul>
        {['Diana', 'Dima', 'Veronika']
          .map(t =>
            <li className={selectidUser === t ? s.selected : ''}onClick={() => {
              setSelectedUser(t)
              document.title = t
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

