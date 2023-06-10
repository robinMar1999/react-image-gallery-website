import { useEffect, useState } from 'react';
import './App.css';
import GalleryContainer from './components/GalleryContainer/GalleryContainer';
import AddImage from './components/AddImage/AddImage';
import ImageMagnifier from './components/ImageMagnifier/ImageMagnifier';
import axios from 'axios';

function App() {
  const [imageLinks, setImageLinks] = useState([])

  const [magnifierState, setMagnifierState] = useState({
    zoom: false,
    imageUrl: null,
    imageId: null
  })

  useEffect(() => {
    
    axios.get("/images")
    .then(res => res.data)
    .then(data => {
      setImageLinks(data.images)
    })
  }, [])

  const deleteImage = (imageId) => {
    axios.delete(`/images/${imageId}`)
    .then(res => res.data)
    .then(data => {
      setImageLinks(prevImages => {
        const newImages = prevImages.filter(image => image._id !== imageId)
        return newImages
      })
    })
    
  }

  const addImage = (imageLink) => {
    axios.post("/images", {
      imageUrl: imageLink
    }).then(res => res.data)
    .then(data => {
      setImageLinks(prevImages => {
        return prevImages.concat(data.image)
      })
    })
  }

  const closeMagnifierHandler = () => {
    setMagnifierState({
      zoom: false,
      imageUrl: null,
      imageId: null
    })
  }

  const openMagnifierHandler = (imageUrl, imageId) => {
    setMagnifierState({
      zoom: true,
      imageUrl: imageUrl,
      imageId: imageId
    })
  }

  const nextImageHandler = () => {
    console.log("clicked in nextImageHandler in App.js")
    setMagnifierState(prevMagnifierState => {
      const prevImageId = prevMagnifierState.imageId
      const currentImageIdIndex = imageLinks.findIndex(image => image._id === prevImageId)
      const length = imageLinks.length
      const newIndex = (currentImageIdIndex + 1)%length
      return {
        zoom: true,
        imageUrl: imageLinks[newIndex].imageUrl,
        imageId: imageLinks[newIndex]._id
      }
    })
  }

  const prevImageHandler = () => {
    console.log("clicked in nextImageHandler in App.js")
    setMagnifierState(prevMagnifierState => {
      const prevImageId = prevMagnifierState.imageId
      const currentImageIdIndex = imageLinks.findIndex(image => image._id === prevImageId)
      const length = imageLinks.length
      const newIndex = (currentImageIdIndex - 1 + length)%length
      return {
        zoom: true,
        imageUrl: imageLinks[newIndex].imageUrl,
        imageId: imageLinks[newIndex]._id
      }
    })
  }

  return (
    <div className="App">
      {magnifierState.zoom && 
      <ImageMagnifier 
      imageUrl={magnifierState.imageUrl} 
      closeMagnifier={closeMagnifierHandler}
      nextImage={nextImageHandler}
      prevImage={prevImageHandler} />}
      
      <h1>Image Gallery</h1>
      <AddImage addImage={addImage} />
      <GalleryContainer imageLinks={imageLinks} deleteImage={deleteImage} 
      openMagnifier={openMagnifierHandler} />
    </div>
  );
}

export default App;
