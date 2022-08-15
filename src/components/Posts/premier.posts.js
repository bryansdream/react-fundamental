import Axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import { ButtonGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Loaders from "../Utilities/loaders";
import Card from "react-bootstrap/Card";

const Premier = () => {
  const [datas, setDatas] = useState([]);
  const [limit, setLimit] = useState(3);
  const [loading, setLoading] = useState(true);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    let isCancelled = false;

    if (isCancelled === false) {
      setLoading(true);
      Axios({
        method: "GET",
        url: `${process.env.REACT_APP_BASEURL}/posts?_limit=${limit}`,
      })
        .then((result) => setDatas(result.data))
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    }

    //clean up render
    return () => {
      isCancelled = true;
    };
  }, [limit]);

  const handleLimit = (option) => {
    option === "+"
      ? setLimit((prev) => prev + 1)
      : setLimit((prev) => prev - 1);
  };

  if (loading) return <Loaders />;

  return (
    <React.Fragment>
      <h3>Showing {limit} posts</h3>
      {/*mapping data start */}
      {datas.map((data, i) => {
        return (
          <div
            className="d-flex justify-content-center align-items-center"
            key={i}
          >
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>{data.title}</Card.Title>
                <Button variant="primary" onClick={handleShow}>
                  See Post
                </Button>
                <Modal show={show} onHide={handleClose}>
                  <Modal.Title>{data.title}</Modal.Title>
                  <Modal.Body>{data.body}</Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                  </Modal.Footer>
                </Modal>
              </Card.Body>
            </Card>
          </div>
        );
      })}
      {/*mapping data end */}
      <ButtonGroup className="d-flex justify-content-center align-item-center mt-2">
        <button
          className="btn btn-outline-primary"
          onClick={() => handleLimit("+")}
        >
          +
        </button>
        <button
          className="btn btn-outline-primary"
          onClick={() => handleLimit("-")}
        >
          -
        </button>
      </ButtonGroup>


    </React.Fragment>
  );
};

export default Premier;
