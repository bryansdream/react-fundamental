import Axios from "axios";
import React, { useEffect, useState } from "react";
import Loaders from "../Utilities/loaders";
import { Card, Alert, Button } from "react-bootstrap";
import CenteredModal from "../Utilities/modal";

const Articles = () => {
  const [getDatas, setDatas] = useState([]);
  const [getLimit, setLimit] = useState(3);
  const [getLoading, setLoading] = useState(true);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    let isCancelled = false;
    if (isCancelled === false) {
      setLoading(true);
      Axios({
        method: "GET",
        url: `${process.env.REACT_APP_BASEURL}/posts?_limit=${getLimit}`,
      })
        .then((result) => setDatas(result.data))
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    }

    return () => {
      isCancelled = true;
    };
  }, [getLimit]);

  const handleLimit = (option) => {
    option === "+"
      ? setLimit((prev) => prev + 1)
      : setLimit((prev) => prev - 1);
  };

  if (getLoading) return <Loaders />;

  return (
    <React.Fragment>
      <Alert variant={"info"}>
        Currently showing "{getLimit}" {getLimit > 1 && "posts"}{" "}
        {getLimit === 1 && "post"}
      </Alert>
      <div className="d-flex flex-column justify-content-center align-items-center">
        {/* Start Mapping Data */}
        {getDatas.map((data, i) => {
          return (
            <Card className="mt-2 mb-2" key={i} style={{ width: '30rem' }}>
              <Card.Header as="h5">Community Post</Card.Header>
              <Card.Body>
                <CenteredModal
                activator={({ setShow}) => (
                  <>
                  <Card.Title>{data.id} {data.title}</Card.Title>
                  <Card.Text>
                    <Button onClick={() => setShow(true)} className="text-sky-400 hover:text-sky-600">read more</Button>
                  </Card.Text>
                  </>
                )}
                >
                  <p>
                  <h3>Post ID {data.id}</h3>
                  <hr/>
                  <strong>Title</strong>: {data.title}
                  <br />
                  <strong>Description</strong>: {data.body}
                  </p>
                </CenteredModal>
              </Card.Body>

            </Card>
          );
        })}
        {/* end mapping data */}

        <div className="mt-2 mx-3">
          <button
            className="btn btn-primary me-2"
            onClick={() => handleLimit("+")}
          >
            +
          </button>
          {getLimit > 1 && (
            <button className="btn btn-danger" onClick={() => handleLimit("-")}>
              -
            </button>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Articles;
