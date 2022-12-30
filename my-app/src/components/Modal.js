function Modal(props) {
  return (
    <div className="modal">
      <p>Are u sure?</p>
      <button className="btn--alt" onClick={props.onCancel}>
        Cancel
      </button>
      <button className="btn" onClick={props.onConfirm}>
        Confirm
      </button>
    </div>
  );
}

export default Modal;
