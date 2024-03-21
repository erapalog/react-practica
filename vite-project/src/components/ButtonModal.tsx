import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { ModalComponent } from './ModalComponent';

export const ButtonModal = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div>
            <Button className="button is-large" onClick={handleShow}>
                     Launch demo modal
            </Button>
            <ModalComponent show={show} onClose={handleClose}/>
        </div>
    </>
  )
}
