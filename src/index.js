import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/searchBar';
import VideoList from './components/videoList';
import VideoDetail from './components/videoDetail';

const API_KEY = 'AIzaSyDuGBFyPBRB5LR1lmNyTw5baJ8yf8s6GiU';

// create a new component. this component should produce some html


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
        videos : [],
        selectedVideo : null
      };

    this.onVideoSearch("surf");
  };

  onVideoSearch(term) {
    YTSearch({ key: API_KEY, term: term}, (videos) => {
      this.setState({
          videos: videos,
          selectedVideo: videos[0]
        }); //automatically changes to this.setState({ videos: videos }), when key and value are same
    });
  }


  render() {
    const videoSearch = _.debounce((term) => {this.onVideoSearch(term)}, 400);
    return (
      <div>
        <SearchBar onVideoSearchChange={videoSearch}/>
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos}/>
      </div>
    );
  };
};
//we are returning JSX here, not HTML. it looks like HTML. This is what is transpiled by webpack and babel so that the content
// which wasn't ready to be shown by browser, is made ready finally. Browser doesn't understand JSX.
//JSX gets transpiled to vanilla javascript, i.e. normal javascript, to be interpreted by the browser
//===============================================================================================================================

//Take this component's generated HTML and put it on the page ( in the DOM )
ReactDOM.render(<App />, document.querySelector('.container'));
//first argument is the instance of the component, second is the "Where to run it"
