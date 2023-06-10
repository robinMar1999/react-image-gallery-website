import classes from './GalleryContainer.module.css'
import ImageBox from './ImageBox/ImageBox';

const GalleryContainer = (props) => {
  return (
    <div className={classes.GalleryContainer}>
      {props.imageLinks.map(image => {
            return <ImageBox key={image._id} 
            imageLink={image.imageUrl} 
            imageId={image._id} 
            deleteImage={props.deleteImage}
            zoomImage={props.openMagnifier} />
        })}
    </div>
  );
}

export default GalleryContainer;