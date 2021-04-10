import { useState } from 'react';
import PropTypes from 'prop-types';

const ApiKey = https://pixabay.com/api/?q=что_искать&page=номер_страницы&key=20273026-5f41ec9ec9512e6f61de79333&image_type=photo&orientation=horizontal&per_page=12

const SearchBar = ({ onSubmit }) => {
    const [query, setQuery] = useState('');

    const handleChange = e => {
        setQuery(e.currentTarget.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        onSubmit(query);
        setQuery('');
        e.currentTarget.reset();
    };

    return (
        <header className="Searchbar">
            <form className="SearchForm" onSubmit={handleSubmit}>
                <button type="submit" className="SearchForm-button">
                    <span className="SearchForm-button-label">Search</span>
                </button>

                <input
                    className="SearchForm-input"
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    onChange={handleChange}
                />
            </form>
        </header>
    );
};

SearchBar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

export default SearchBar;