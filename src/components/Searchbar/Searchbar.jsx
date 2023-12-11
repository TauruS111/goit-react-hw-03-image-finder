import React, { Component } from 'react';

class Searchbar extends Component {
  state = {
    searchQuery: '',
  };
  handleChange = e => {
    this.setState({ searchQuery: e.target.value });
  };

  handleSubmit = e => {
    const { searchQuery } = this.state;
    e.preventDefault();
    if (!searchQuery.trim()) return alert('Can not be empty');
    this.props.onSubmit(searchQuery);
    this.setState({ searchQuery: '' });
  };

  render() {
    return (
      <div className="Searchbar">
        <form className="SearchForm " onSubmit={this.handleSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.searchQuery}
            onChange={this.handleChange}
          />
        </form>
      </div>
    );
  }
}

export default Searchbar;
