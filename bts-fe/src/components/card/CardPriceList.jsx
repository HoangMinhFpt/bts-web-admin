import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as IconStarFill } from "bootstrap-icons/icons/star-fill.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faBan } from "@fortawesome/free-solid-svg-icons";

const CardPriceList = (props) => {
  const post = props.data;
  return (
    <div className="card">
      <div className="row g-0">
        <div className="col-md-3 text-center">
          <img src={post.img} className="img-fluid" alt="..." />
        </div>
        <div className="col-md-6">
          <div className="card-body">
            <h6 className="card-subtitle me-2 d-inline">
              <Link to={post.link} className="text-decoration-none">
                {post.name}
              </Link>
            </h6>

            <div>
              {post.star > 0 &&
                Array.from({ length: 5 }, (_, key) => {
                  if (key <= post.star)
                    return (
                      <IconStarFill className="text-warning me-1" key={key} />
                    );
                  else
                    return (
                      <IconStarFill className="text-secondary me-1" key={key} />
                    );
                })}
            </div>
            {post.description &&
              post.description.includes("|") === false && (
                <p className="small mt-2">{post.description}</p>
              )}
            {post.description && post.description.includes("|") && (
              <ul className="mt-2">
                {post.description.split("|").map((desc, idx) => (
                  <li key={idx}>{desc}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
        <div className="col-md-3">
          <div className="card-body">
          </div>
          <div className="d-grid gap-5 col-5" role="group" border-radius="50px" margin="13px">
            <button
              type="button"
              className="btn btn-success"
              title="Chấp nhận"
              
            >
              <FontAwesomeIcon icon={faCheck} />
            </button>
            <button
              type="button"
              className="btn btn-danger"
              title="Hủy"
            >
              <FontAwesomeIcon icon={faBan} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPriceList;
