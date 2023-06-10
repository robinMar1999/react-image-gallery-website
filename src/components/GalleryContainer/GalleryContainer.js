import classes from './GalleryContainer.module.css'
import ImageBox from './ImageBox/ImageBox';

const GalleryContainer = (props) => {
  return (
    <div className={classes.GalleryContainer}>
      {props.dogsImageLinks.map(image => {
            return <ImageBox key={image.id} 
            imageLink={image.imageUrl} 
            imageId={image.id} 
            deleteImage={props.deleteImage}
            zoomImage={props.openMagnifier} />
        })}
    </div>
  );
}

export default GalleryContainer;