import React from 'react'
import TextField from '@material-ui/core/TextField';

const Search = ({orgValue, currentValue, setCurrentValue}) => {
    const onSearch = (e) => {
        if(e.target.value === ""){
            setCurrentValue(orgValue)
        }else{
            const result = orgValue.filter(value => {
                const object = Object.values(value).toString().toLowerCase()
                return object.includes((e.target.value).toLowerCase())
            })
            setCurrentValue(result)
        }        
    }

    return (
        <div>
             <TextField  fullWidth id="outlined-search" label="Search field" type="search" variant="outlined"  onChange={(e) => onSearch(e)}/>
        </div>
    )
}

export default Search
