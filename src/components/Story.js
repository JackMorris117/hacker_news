import React from 'react'

const Story = (props) => {
    return (
        <div className='story'>
            <p className='story-title'><a href={props.story.url}>{props.story.title}</a></p>
        </div>
    )
}
export default Story