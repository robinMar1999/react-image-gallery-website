import classes from './ImageBox.module.css'

const ImageBox = (props) => {
  return (
    <div className={classes.ImageBox}>
      <img src={props.imageLink} alt="" className={classes.Image} />
      <div className={classes.Actions}>
        <button className={classes.Zoom} onClick={props.zoomImage.bind(this, props.imageLink, props.imageId)}>Zoom</button>
        <button className={classes.Delete} onClick={props.deleteImage.bind(this, props.imageId)}>Delete</button>
      </div>
    </div>
  );
}

export default ImageBox;