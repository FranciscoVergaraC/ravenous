import React from 'react';
import './SearchBar.css';



class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            term: '',
            location: '',
            sortBy: 'best_match',
        };

        this.handleTermChange = this.handleTermChange.bind(this);
        this.handleLocationChange = this.handleLocationChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);

        this.sortByOptions = {
            'Best Match': 'best_match',
            'Highest Rated': 'rating',
            'Most Reviewed': 'review_count'
        }
    }

    getSortByClass(sortByOption){ /* Revisamos si el sort by option actual es el elegido por el usuario y retornamos el valor 
        active, que sera usado como la className active */
        if (this.state.sortBy == sortByOption){
            return 'active'
        } else return '';
    }

    handleSortByChange(sortByOption){
        this.setState({sortBy: sortByOption});
    }

    renderSortByOptions() { /* Aca simplemente estamos renderizando la lista "best match", "Highest Rated" y "Most Reviewed"*/
        return Object.keys(this.sortByOptions).map(sortByOption => {
            let sortByOptionValue = this.sortByOptions[sortByOption];
            return <li onClick={this.handleSortByChange.bind(this,sortByOptionValue)} className={this.getSortByClass(sortByOptionValue)} key={sortByOptionValue}>{sortByOption}</li>;
        });
    };

    handleTermChange(event){
        this.setState({term: event.target.value});
    };

    handleLocationChange(event){
        this.setState({location: event.target.value});
    };

    handleSearch(event){
        this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);
        event.preventDefault();
    }
    

    render() { 
        return (
        <div className="SearchBar">
            <div className="SearchBar-sort-options">
                <ul>
                    {this.renderSortByOptions()}
                </ul>
            </div>
            <div className="SearchBar-fields">
            <input onChange={this.handleTermChange} placeholder="Search Businesses" />
            <input onChange={this.handleLocationChange} placeholder="Where?" />
            </div>
            <div onClick={this.handleSearch} className="SearchBar-submit">
                <a>Let's Go</a>
            </div>
        </div>
    )
    }
}

export default SearchBar;