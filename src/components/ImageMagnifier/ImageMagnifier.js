import { Fragment } from 'react';
import ReactDOM from 'react-dom'
import Backdrop from '../UI/Backdrop/Backdrop';
import Modal from '../UI/Modal/Modal';
import ImageContainer from './ImageContainer/ImageContainer';

const ImageMagnifier = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop backdropClick={props.closeMagnifier} />, document.getElementById("backdrop-root"))}
      {ReactDOM.createPortal(<Modal>
        <ImageContainer imageUrl={props.imageUrl} nextImage={props.nextImage} prevImage={props.prevImage} />
      </Modal>, document.getElementById("overlay-root"))}
      
    </Fragment>
  );
}

export default ImageMagnifier;