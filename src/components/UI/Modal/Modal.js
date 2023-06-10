import classes from './Modal.module.css'

const Modal = (props) => {
  return (
    <div className={[classes.Modal, props.clearBg ? classes.ModalClear : classes.ModalFill].join(" ")}>
      {props.children}
    </div>
  );
}

export default Modal;