import React, { Component } from 'react';
import Searchbar from '../Searchbar/Searchbar';
import {Container}from'./App.styled'
import fetchImg from 'service/apiSersice';
import ImageGallery from '../ImageGallery/ImageGallery';
import Button from '../Button/Button';
import Loader from '../Loader/Loader';
import  Modal  from '../Modal/Modal';
import Message from '../Message/Message';


export class App extends Component {
  state = {
    query: '',
    page: 1,
    totalHits: null,
    items: [],
    loading: false,
    showModal: false,
    largeImageURL:null,
  };
  async componentDidUpdate(prevProps, prevState) {
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
      try {
        this.setState({ loading: true });
        const data = await fetchImg(this.state.query, this.state.page);
        this.setState(prevState => ({
          items: [...prevState.items, ...data.hits],
          totalHits: data.totalHits,
        }));
      } catch (error) {
      } finally {
        this.setState({ loading: false });
      }
    }
  }

  onSubmit = value => {
    if (value.trim() === '') {
      return
    }
    this.setState({ query: value, page: 1, items: [] });
  };
  handlerBtnLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };
  showBtnLoadMore = () => {
    const{loading,items,totalHits}=this.state
    if (loading) {
      return false
    }
    if (items.length === totalHits) {
      return false
    }
       if (totalHits > items.length) {
      return true
    }
  }
    toggleModal = () => {
    this.setState(({showModal,largeImageURL})=> ({
      showModal: !showModal,
      largeImageURL:null,
    }))
  }

  setlargeImageURL = (url) => {
    this.setState({ largeImageURL: url })
  }
  render() {
const{totalHits,items,loading,largeImageURL,query}=this.state
    return (
      <Container>
        <Searchbar onSubmit={this.onSubmit} />
        {totalHits === 0?<Message/>:<ImageGallery images={items} setUrl={this.setlargeImageURL} />}
        {<Loader visible={loading} />}
        {this.showBtnLoadMore()&& (
          <Button onClick={this.handlerBtnLoadMore} />
        )}
        {largeImageURL && <Modal onClose={this.toggleModal}><img src={largeImageURL} alt={query} /></Modal>}
      </Container>
    );
  }
}


