import React from 'react';
import StoryList from '../components/StoryList'
import Filter from '../components/Filter'
import Title from '../components/Title'

class NewsContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
           
            stories: [],
            inputValue: ''
        };
        this.storyFilterOnChange = this.storyFilterOnChange.bind(this);
    }

    storyFilterOnChange = (event) => {
        console.log("ONCHANGE OVER HERE YO", event.target.value)
        this.setState({
            inputValue: event.target.value
        })
    }

    componentDidMount(){
        const url = 'https://hacker-news.firebaseio.com/v0/topstories.json'

        fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            const splitData = data.slice(0,50);
            const requests = splitData.map(id => {
                return fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
                .then(res => res.json())
            })

            Promise.all(requests)
            .then(results => {
                this.setState({stories: results})
            })
        })
        .catch(err => console.error)
    }


    render() {
        const filteredStories =
            this.state.stories.filter(story => {
                return story.title.toLowerCase()
                .includes(this.state.inputValue.toLowerCase())
            })

        return (
            <div>
                <Title/>
                <Filter storyFilterOnChange={this.storyFilterOnChange}/>
                <StoryList 
                stories={filteredStories}
                inputValue={this.state.inputValue}/>
                
            </div>
        )
    }


}

export default NewsContainer;