import { useState, useEffect } from 'react';
import axios from 'axios';

export const Header = ({ value, setSearchTerm }) => {

    const [tempSearch, setTempSearch] = useState('Diana');

    useEffect(() => {
        axios
            .get(`https://api.github.com/search/users?q=${value}`)
            .then(res => {
                setSearchTerm(res.data.items)
            })
    }, [value, setSearchTerm])

    return (
        <div>
            <input placeholder='Search' value={tempSearch} onChange={(e) => { setTempSearch(e.currentTarget.value) }} />
            <button onClick={() => { setSearchTerm(tempSearch) }}>Find</button>
        </div>
    )
}