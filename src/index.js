//create a new component to produce some HTML
import ReactDOM from "react-dom";
import React, { Component } from "react";
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoDetail from './components/video_detail';
import VideoList from './components/video_list';

const API_KEY = "AIzaSyD3a2tscmqaZ10nz44BXnmdMrckNXaUkGM";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        }

        YTSearch({ key: API_KEY, term: 'surfboards' }, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
        });
    }

    render() {
        return <div>
            <SearchBar />
            <VideoDetail video={this.state.selectedVideo} />
            <VideoList videos={this.state.videos} />
        </div>
    }
}

ReactDOM.render(<App />, document.querySelector(".container"));
