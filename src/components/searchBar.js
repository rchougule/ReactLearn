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
      <div>
        <input
          value={this.state.term}
          onChange={(event) => {this.setState({ term: event.target.value })}}/>
        Value of the Input : {this.state.term}
      </div>
    )
  }

  // onInputChange(event) {
  //   //setState({ term: event.target.value}) setState undefined for this.setState as well
  //   //console.log(event.target.value)
  // }
}

//State is a plain javascript object that is used to record and react to use events. each class based component
// has its own sate object. whenever a component's state is changed, the component imme. re renders. it also
//forces all of its children to re render.


export default SearchBar;
