import { useRef } from 'react';
import classes from './AddImage.module.css'

const AddImage = (props) => {

  const imageUrlRef = useRef()

  const submitForm = (e) => {
    e.preventDefault();
    props.addImage(imageUrlRef.current.value)
    imageUrlRef.current.value = ""
  }

  return (
    <div className={classes.AddImage}>
      <form className={classes.Form} onSubmit={submitForm}>
        <div className={classes.Input}>
          <input type="text" 
          name="imageUrl" 
          id="imageUrl" 
          placeholder="Add image url here"
          ref={imageUrlRef} />
        </div>
        <div className={classes.Input}>
          <button type="submit">Add Image!</button>
        </div>
      </form>
    </div>
  );
}

export default AddImage;