import React from 'react';
import { useState, useEffect } from 'react';
import Searchbar from './Components/Searchbar/Searchbar';
import Container from './Components/Container/Container';
import './styles.css';

function App() {
  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [largeImgUrl, setLargeImgUrl] = useState('');

  useEffect(() => {
    if (!searchQuery) return;
    fetchArticles();
  }, [searchQuery]);

  const onChangeQuery = query => {
    setSearchQuery(query);
    setImages([]);
    setCurrentPage(1);
    setError(null);
  };

  const fetchArticles = () => {
    const options = { currentPage, searchQuery };
    setIsLoading(true);

    searchImgApi
      .fetchImages(options)
      .then(hits => {
        const imgData = hits.map(({ id, webformatURL, largeImageURL }) => ({
          id,
          webformatURL,
          largeImageURL,
        }));
        setImages(prState => [...prState, ...imgData]);
        setCurrentPage(prState => prState + 1);
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        });
      })
      .catch(error => setError(error))
      .finally(() => setIsLoading(false));
  };

  const openModal = e => {
    if (e.target.nodeName !== 'IMG') return;
    setLargeImgUrl(e.target.dataset.url);
  };

  const closeModal = () => {
    setLargeImgUrl('');
  };

  const shouldRenderLoadMoreBtn = images.length > 0 && !isLoading;

  return (
    <div className="App">
      <Searchbar onSubmit={onChangeQuery} />
      {error && <h2>Ой, ошибка, все пропало (((</h2>}
      <ImageGallery images={images} onClick={openModal} />
      {isLoading && <Loader />}
      {shouldRenderLoadMoreBtn && <Button onClick={fetchArticles} />}
      {largeImgUrl && (
        <Modal onClose={closeModal}>
          <img src={largeImgUrl} alt="Большое изображение" />
        </Modal>
      )}
    </div>
  );
}

export default App;