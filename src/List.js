import s from './github.module.css';

export const List = (props) => {
    return (
        <ul>
            {props.users.map(t =>
                <li key={t.id} className={props.selectedUser === t ? s.selected : ''} onClick={() => {props.setSelectedUserForList(t)}}>
                    {t.login}
                </li>)}
        </ul>
    )
}