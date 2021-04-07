import React from 'react';
import PropTypes from 'prop-types';

const ApiKey = https://pixabay.com/api/?q=что_искать&page=номер_страницы&key=20273026-5f41ec9ec9512e6f61de79333&image_type=photo&orientation=horizontal&per_page=12

<header className="Searchbar">
    <form className="SearchForm">
        <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
        </button>

        <input
            className="SearchForm-input"
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
        />
    </form>
</header>

export default Searchbar;