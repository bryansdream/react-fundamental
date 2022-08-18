import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import { createPortal } from "react-dom";
import { Modal } from "react-bootstrap";  
import {Button} from "react-bootstrap";

const CenteredModal = ({ children, activator }) => {
  const [show, setShow] = useState(false);

  const content = show && (
    <Modal 
    show={show} 
    onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Bryan's Community</Modal.Title>
      </Modal.Header>
      <div className="max-w-md">
      <Modal.Body>
        {children}
      </Modal.Body>
      </div>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => {setShow(false)}}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );

  return (
    <>
      {activator({ setShow })}
      {createPortal(
        <CSSTransition
          in={show}
          timeout={200}
          classNames="modal-transition"
          unmountOnExit
        >
          {() => <div>{content}</div>}
        </CSSTransition>,
        document.body
      )}
    </>
  );
};

export default CenteredModal;
