import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/searchBar';
import VideoList from './components/videoList';
const API_KEY = 'AIzaSyCqZxGne6_e6NAb2l7jtQ3LcsUmK7IanaQ';

// create a new component. this component should produce some html


class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos : [] };

    YTSearch({ key: API_KEY, term: 'sketching'}, (videos) => {
      this.setState({ videos }); //automatically changes to this.setState({ videos: videos }), when key and value are same
    });
  };

  render() {
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos}/>
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
