import classes from './ImageContainer.module.css'

const ImageContainer = (props) => {
  return (
    <div className={classes.ImageContainer}>
      <button className={classes.prevButton} onClick={props.prevImage}>Prev</button>
      <div className={classes.Image}>
        <img src={props.imageUrl} alt="" />
      </div>
      
      <button className={classes.nextButton} onClick={props.nextImage}>Next</button>
    </div>
  );
}

export default ImageContainer;
