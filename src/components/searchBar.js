import React, { Component } from 'react';
// { } is similar to const Component = React.Component

//functional component
// const SearchBar = () => {
//   return <input />
// }

//class based component for added properties and methods
class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: ''};
  }

  //<input onChange={event => this.setState({ term: event.target.value })}/>

  render() {
    return (
      <div className="search-bar">
        <input
          value={this.state.term}
          onChange={(event) => {this.onInputChange(event.target.value)}}/>
      </div>
    )
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onVideoSearchChange(term);
  }
}

//State is a plain javascript object that is used to record and react to use events. each class based component
// has its own sate object. whenever a component's state is changed, the component imme. re renders. it also
//forces all of its children to re render.


export default SearchBar;
