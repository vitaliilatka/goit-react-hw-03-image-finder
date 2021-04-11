import ImageGalleryItem from '../ImageGalleryItem';
import PropTypes from 'prop-types';

const ImageGallery = ({ images, onClick }) => {
    return (
        <ul className="ImageGallery">
            {images.map(({ id, webformatURL, largeImageURL }) => (
                <ImageGalleryItem
                    onClick={onClick}
                    key={id}
                    webformatURL={webformatURL}
                    largeImageURL={largeImageURL}
                />
            ))}
        </ul>
    );
};

ImageGallery.propTypes = {
    images: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
        }),
    ).isRequired,
};

export default ImageGallery;