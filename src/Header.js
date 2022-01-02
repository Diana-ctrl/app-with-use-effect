import { useState } from 'react';

export const Header = (props) => {
    const [tempSearch, setTempSearch] = useState('Diana');
    return (
        <div>
            <input placeholder='Search' value={tempSearch} onChange={(e) => { setTempSearch(e.currentTarget.value) }} />
            <button onClick={() => { props.searchTermForInput(tempSearch) }}>Find</button>
        </div>
    )
}