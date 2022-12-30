import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

function Todo(props) {
  const [showModal, setModalIsOpen] = useState(false);

  function deleteHandler() {
    setModalIsOpen(true);
  }
  function closeModalHandler() {
    setModalIsOpen(false);
  }
  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {showModal && (
        <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} />
      )}
      {showModal && <Backdrop onClick={closeModalHandler} />}
    </div>
  );
}

export default Todo;
