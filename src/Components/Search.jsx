import React, { Component, useRef} from 'react'
import './Search.css'

function Search(props) {
    const searchInput = useRef()
    return (
        <div>
            <div className='input-div'>
                <input type="text" className="search-bar" value={props.searchData} onChange={()=> {
                    props.eventHandler(searchInput.current.value)}}
                    ref={searchInput}
                    />
                <button className="btn" onClick={props.searchWeather}>Search</button>
            </div>
        </div>
    )
}

export default Search;

// searchData={search} eventHandler={changeSearch} searchWeather=            
// {searchWeatherHandler} 