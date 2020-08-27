import React from 'react'
import Story from './Story.js'
const StoryList = (props) => {
    const options = props.stories.map((story, i) => {
        return (
            <Story story={story} key={i}/>
        )
    });
    


    return (
        <div className='results' id='story-list' defaultValue="default">
            {options}
        </div>
    )


}
export default StoryList;