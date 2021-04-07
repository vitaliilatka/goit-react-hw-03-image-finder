const pixabayKey = '18755055-2b7ea91b0bc0758970d9c18f6';

const fetchImagesWithQuery = (searchQuery, page = 1) => {

    return fetch(`https://pixabay.com/api/?q=${searchQuery}&key=${pixabayKey}&page=${page}&image_type=photo&orientation=horizontal&per_page=12`)
        .then(res => res.json())
        .then(data => data.hits);

}
// eslint-disable-next-line
export default { fetchImagesWithQuery };