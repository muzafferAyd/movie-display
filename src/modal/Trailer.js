import { Modal, Button } from "react-bootstrap";
import { useState } from "react";
import ReactPlayer from "react-player";

export default function Trailer({ movieTitle,videoKey }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const urlKey=`https://youtu.be/${videoKey}`
  console.log("urlKey",urlKey)
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        WATCH TRAILER
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> Watch {movieTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="video-wrapper">
            <ReactPlayer
              width= "auto"
              height="345px"
              url={urlKey} 
              controls
              config={{
                youtube: {
                  playerVars: { showinfo: 1 },
                },
              }}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            CLOSE
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
