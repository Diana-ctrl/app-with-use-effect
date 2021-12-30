import logo from './logo.svg';
import './App.css';

export const Github = () => {
  return (
    <div>
      <div>
        <input placeholder='Search' />
        <button>find</button>
      </div>
      <div>
        <ul>
          {['Diana', 'Dima', 'Veronika']
            .map(t => <li onClick={() => document.title = t}>{t}</li>)}
        </ul>

      </div>
      <div>
        <h2>User name</h2>
        <div>Ditails</div>
      </div>

    </div>
  );
}

