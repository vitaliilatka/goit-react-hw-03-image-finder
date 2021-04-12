import React from 'react';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ webformatURL, largeImageURL, onClick }) => {
    const handleClick = () => {
        onClick(largeImageURL);
    };

    return (
        <li className="ImageGalleryItem">
            <img
                onClick={handleClick}
                src={webformatURL}
                alt="something went wrong"
                className="ImageGalleryItem-image"
            />
        </li>
    );
};

ImageGalleryItem.propTypes = {
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};


export default ImageGalleryItem;