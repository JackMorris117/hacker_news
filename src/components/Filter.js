import React from 'react'

const Filter = (props) => {
    return (
    <div>
        <input type="text" class="bar"onChange={props.storyFilterOnChange}></input>
    </div>
    )
}


export default Filter
