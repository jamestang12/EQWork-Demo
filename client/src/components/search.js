import React from 'react'
import TextField from '@material-ui/core/TextField';

const Search = ({orgValue, currentValue, setCurrentValue}) => {
    const onSearch = (e) => {
        orgValue.filter(item => {})
    }

    return (
        <div>
             <TextField  fullWidth id="outlined-search" label="Search field" type="search" variant="outlined"  onChange={(e) => onSearch(e)}/>
        </div>
    )
}

export default Search
