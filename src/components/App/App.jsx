import  {useState,useEffect } from 'react';
import Searchbar from '../Searchbar/Searchbar';
import {Container}from'./App.styled'
import fetchImg from 'service/apiSersice';
import ImageGallery from '../ImageGallery/ImageGallery';
import Button from '../Button/Button';
import Loader from '../Loader/Loader';
import  Modal  from '../Modal/Modal';
import Message from '../Message/Message';


export function App() {
  const[query, setQuery]=useState('')
  const[page,setPage]=useState(1)
  const [totalHits, setTotalHits] = useState(null)
  const[items,setItems]=useState([])
  const[loading,setLoading]=useState(false)
  const[showModal,setShowModal]=useState(false)
  const[largeImageURL,setlargeImageURL]=useState(null)


  useEffect(() => {
    console.log('use');
    if (query === '') {
      return
    }
    fetchImg(query, page).then(data => {
      setItems([...data.hits])
      setTotalHits(data.totalHits)
    }).catch(error => { console.log(error) })
},[page,query])

  const onSubmit = value => {
    if (value.trim() === '') {
      return
    }
    setQuery(value);
    setPage(1);
    setItems([])
  };
  const handlerBtnLoadMore = () => {
    setPage(page+1)
  };
  const showBtnLoadMore = () => {
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
    const toggleModal = () => {
      setShowModal(!showModal)
      setlargeImageURL(null)
  }

  const setImageURL = (url) => {
    setlargeImageURL(url)
  }

    return (
      <Container>
        <Searchbar onSubmit={onSubmit} />
        {totalHits === 0?<Message/>:<ImageGallery images={items} setUrl={setImageURL} />}
        {<Loader visible={loading} />}
        {showBtnLoadMore()&& (
          <Button onClick={handlerBtnLoadMore} />
        )}
        {largeImageURL && <Modal onClose={toggleModal}><img src={largeImageURL} alt={query} /></Modal>}
      </Container>
    );

}


