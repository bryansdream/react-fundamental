import React, { useEffect, useState } from "react";
import Axios from "axios";
import Carousel from "react-bootstrap/Carousel";
import { ButtonGroup, Alert } from "react-bootstrap";
import Loaders from "../Utilities/loaders";

const Collection = () => {
  const [datas, setDatas] = useState([]);
  const [getLimit, setLimit] = useState(3);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isCancelled = false;
    if (isCancelled === false) {
      setLoading(true);
      Axios({
        method: "GET",
        url: `${process.env.REACT_APP_BASEURL}/photos?_limit=${getLimit}`,
      })
        .then((result) => setDatas(result.data))
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    }

    // clean up render
    return () => {
      isCancelled = true;
    };
  }, [getLimit]);

  const handleLimit = (option) => {
    option === "+"
      ? setLimit((prev) => prev + 1)
      : setLimit((prev) => prev - 1);
  };

  if (loading) return <Loaders />;

  return (
    <React.Fragment>
      <Alert variant={"info"}>
        Currently showing "{getLimit}" {getLimit > 1 && "posts"}{" "}
        {getLimit === 1 && "post"}
      </Alert>
      <Carousel>
        {/* mapping data start */}
        {datas.map((data, i) => {
          return (
            <Carousel.Item key={i}>
              <img
                className="d-block w-100"
                src={data.url}
                alt={data.title}
                height={450}
                width={450}
              />
              <Carousel.Caption>
                <h3>{data.title}</h3>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
        {/* mapping data end */}
      </Carousel>
      <ButtonGroup className="d-flex justify-content-center align-items-center mt-2">
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
      </ButtonGroup>
    </React.Fragment>
  );
};

export default Collection;
