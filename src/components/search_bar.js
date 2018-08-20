import React, { Component } from 'react';

class SearchBar extends Component{
    constructor(props) {
        super(props);
        this.state = { term: 'surfboards' };
        this.onInputChange = this.onInputChange.bind(this);
    }
    // <p>Value of the input: {this.state.term}</p>
    onInputChange(value) {
        this.setState({ term: value });
        this.props.onSearchTermChange(value);
    }
    render() {
        return (
            <div className='search-bar'>
                <input
                    value={ this.state.term }
                    onChange={ e => this.onInputChange(e.target.value) }
                />
                
            </div>
        );
    }
}
export default SearchBar;