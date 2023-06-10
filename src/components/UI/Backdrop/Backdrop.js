import classes from './Backdrop.module.css'

const Backdrop = (props) => {
  return (
    <div className={classes.Backdrop} onClick={props.backdropClick}>

    </div>
  );
}

export default Backdrop;