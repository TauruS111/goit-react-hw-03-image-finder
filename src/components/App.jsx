import React, { Component } from 'react';

import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Loader from './Loader/Loader';
import { ImgModal } from './Modal/Modal';
import getImages from 'service/api';

class App extends Component {
  state = {
    query: '',
    page: 1,
    images: [],
    isLoading: false,
    showModal: false,
    largeImg: '',
    tags: '',
    error: null,
    isEmpty: false,
    isVisible: false,
  };

  componentDidUpdate(_, prevState) {
    const { page, query } = this.state;
    if (prevState.query !== query || prevState.page !== page) {
      this.getPhotos(query, page);
    }
  }

  getPhotos = async (query, page) => {
    if (!query) return;
    this.setState({ isLoading: true });

    try {
      const { hits, totalHits } = await getImages(query, page);
      if (hits.length === 0) {
        this.setState({ isEmpty: true });
      }
      this.setState(prevState => ({
        images: [...prevState.images, ...hits],
        isVisible: prevState.page < Math.ceil(totalHits / 12),
      }));
    } catch (error) {
      this.setState({ error: '❌ Oops something went wrong 😭' });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  handleSearchSubmit = searchQuery => {
    this.setState({
      query: searchQuery,
      page: 1,
      images: [],
      error: null,
      isEmpty: false,
    });
  };

  handleLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  handleImageClick = (largeImg, tags) => {
    this.setState({ showModal: true, largeImg, tags });
  };

  handleImageClose = () => {
    this.setState({ showModal: false, largeImg: '', tags: '' });
  };

  resetPage = () => {
    this.setState({ page: 1 });
  };

  render() {
    const {
      images,
      isLoading,
      isEmpty,
      error,
      showModal,
      largeImg,
      tags,
      isVisible,
    } = this.state;

    return (
      <div>
        <Searchbar onSubmit={this.handleSearchSubmit} />
        {isEmpty && <h2>Sorry. There are no images ... 😭</h2>}
        {error && <h2>{error}</h2>}
        {images.length > 0 && (
          <ImageGallery images={images} onClick={this.handleImageClick} />
        )}
        <ImgModal
          modalIsOpen={showModal}
          closeModal={this.handleImageClose}
          largeImg={largeImg}
          tags={tags}
        />
        {isLoading && <Loader />}
        {isVisible && !isLoading && images.length > 0 && (
          <div className="BtnCenter">
            <Button onClick={this.handleLoadMore} disabled={isLoading} />
          </div>
        )}
      </div>
    );
  }
}

export default App;
