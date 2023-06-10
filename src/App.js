import { useState } from 'react';
import './App.css';
import GalleryContainer from './components/GalleryContainer/GalleryContainer';
import AddImage from './components/AddImage/AddImage';
import ImageMagnifier from './components/ImageMagnifier/ImageMagnifier';

function App() {
  const [dogsImageLinks, setDogsImageLinks] = useState([
    {
      imageUrl: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
      id: "image-1"
    },
    {
      imageUrl: "https://plus.unsplash.com/premium_photo-1668114375111-e90b5e975df6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
      id: "image-2"
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1535930891776-0c2dfb7fda1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      id: "image-3"
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1558929996-da64ba858215?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80",
      id: "image-4"
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1444212477490-ca407925329e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1528&q=80",
      id: "image-5"
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1534859563435-852a491d410c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      id: "image-6"
    }
  ])

  const [magnifierState, setMagnifierState] = useState({
    zoom: false,
    imageUrl: null,
    imageId: null
  })

  const deleteImage = (imageId) => {
    setDogsImageLinks((prevImages) => {
      return prevImages.filter(image => image.id !== imageId)
    })
  }

  const addImage = (imageLink) => {
    setDogsImageLinks((prevLinks) => {
      return prevLinks.concat({
        imageUrl: imageLink,
        id: Date.now()
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
      const currentImageIdIndex = dogsImageLinks.findIndex(image => image.id === prevImageId)
      const length = dogsImageLinks.length
      const newIndex = (currentImageIdIndex + 1)%length
      return {
        zoom: true,
        imageUrl: dogsImageLinks[newIndex].imageUrl,
        imageId: dogsImageLinks[newIndex].id
      }
    })
  }

  const prevImageHandler = () => {
    console.log("clicked in nextImageHandler in App.js")
    setMagnifierState(prevMagnifierState => {
      const prevImageId = prevMagnifierState.imageId
      const currentImageIdIndex = dogsImageLinks.findIndex(image => image.id === prevImageId)
      const length = dogsImageLinks.length
      const newIndex = (currentImageIdIndex - 1 + length)%length
      return {
        zoom: true,
        imageUrl: dogsImageLinks[newIndex].imageUrl,
        imageId: dogsImageLinks[newIndex].id
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
      <GalleryContainer dogsImageLinks={dogsImageLinks} deleteImage={deleteImage} 
      openMagnifier={openMagnifierHandler} />
    </div>
  );
}

export default App;
