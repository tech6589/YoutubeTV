import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyBXUleK69pjriQhMBc3dkC3QOa1CVohFac';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { videos: [], selectedVideo: null };
        this.onVideoSelect = this.onVideoSelect.bind(this);
        this.searchVideos = this.searchVideos.bind(this);
        this.searchVideos('surfboards');
    }
    searchVideos(term) {
        YTSearch({ key: API_KEY, term: term }, (videos) => {
            this.setState({ videos: videos, selectedVideo: videos[0] });
        });
    }
    onVideoSelect(video) {
        this.setState({selectedVideo: video});
    }
    render() {
        const searchVideos = _.debounce(this.searchVideos, 300);
        return (
            <div>
                <SearchBar onSearchTermChange={ searchVideos } />
                <div>
                    <VideoDetail video={this.state.selectedVideo} />
                    <VideoList videos={ this.state.videos } onItemClicked={ this.onVideoSelect } />
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector(".mainContainer"));