import axios from 'axios';

const API_KEY = '20273026-5f41ec9ec9512e6f61de79333';
axios.defaults.baseURL = 'https://pixabay.com/api';

const fetchImages = ({
    searchQuery = 'nature',
    currentPage = 1,
    perPage = 12,
}) => {
    return axios
        .get(
            `/?q=${searchQuery}&page=${currentPage}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${perPage}`,
        )
        .then(({ data: { hits } }) => hits);
};

export default { fetchImages };