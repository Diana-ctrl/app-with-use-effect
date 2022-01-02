import s from './github.module.css';
import { useState, useCallback } from 'react';
import { Header } from './Header.js';
import { List } from './List.js';
import { Page } from './Page.js'

export const Github = () => {
  const [searchTerm, setSearchTerm] = useState('Diana');
  const [userDetails, setUserDetails] = useState(null);

  const setUserDetailsForList = useCallback((data) => {
    setUserDetails(data)
  }, [setUserDetails])

  const setSearchTermForHeader = useCallback((tempSearch) => {
    setSearchTerm(tempSearch)
  }, [setSearchTerm])

  return (
    <div className={s.container}>
      <div>
        <Header searchTerm={searchTerm} setSearchTerm={setSearchTermForHeader} />
        <List searchTerm={searchTerm} setUserDetails={setUserDetailsForList} />
      </div>
      <div>
        <Page userDetails={userDetails} />
      </div>


    </div>

  );
}
