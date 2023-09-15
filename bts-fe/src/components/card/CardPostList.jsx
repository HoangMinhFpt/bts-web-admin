import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as IconStarFill } from "bootstrap-icons/icons/star-fill.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ModalAccept from "../modal/ModalAccept";
import ModalDeny from "../modal/ModalDeny";
import { faCheckCircle, faCity, faClock, faHistory, faTimes, faTimesCircle, faTimesSquare, faUser } from "@fortawesome/free-solid-svg-icons";

const CardPostList = (props) => {
  const post = props.data;
  return (
    <div className="card">
      <div className="row g-0">
        <div className="col-md-2 text-center">
          <img src={post.img} className="img-fluid" alt="..." />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h6 className="card-subtitle me-2 d-inline">
              {/* {post.star && (<IconStarFill className="text-warning me-2 fs-10" />)} */}
              <Link to={post.link} className="text-decoration-none fs-4">
                {
                  (() => {
                    switch (post.vip) {
                      case 0:
                        return <span className="text-danger fw-bold">
                          {post.name}
                          <IconStarFill className="text-warning me-1 fs-1" />
                        </span>;
                      case 1:
                        return <span className="text-danger">
                          {post.name}
                        </span>;
                      case 2:
                        return <span className="text-warning fw-bold">
                          {post.name}
                        </span>;
                      case 3:
                        return <span className="text-warning">
                          {post.name}
                        </span>;
                      default:
                        return <span className="text-info">
                          {post.name}
                        </span>;
                    }
                  })()
                }
              </Link>
            </h6>
            {post.description &&
              post.description.includes("|") === false && (
                <p className="mt-2">{post.description}</p>
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
        <div className="col-md-2">
          <div className="card-body">
          </div>
          <div className="d-grid gap-5 col-5" role="group" border-radius="50px" margin="13px">
            <ModalAccept data={post.id} />
            <ModalDeny data={post.id} />
          </div>
        </div>
        <div className="card-footer">
          <div className="row">
            <div className="col-3">
              <span className="me-2">Trạng thái:</span>
              {
                (() => {
                  switch (post.status) {
                    case 0:
                      return <span className="text-primary">
                        <FontAwesomeIcon icon={faHistory} className="me-1" />
                        Chờ xét duyệt
                      </span>;
                    case 1:
                      return <span className="text-success">
                        <FontAwesomeIcon icon={faCheckCircle} className="me-1" />
                        Tin xác nhận
                      </span>;
                    default:
                      return <span className="text-danger">
                        <FontAwesomeIcon icon={faTimesCircle} className="me-1" />
                        Tin đã hủy
                      </span>;
                  }
                })()
              }
            </div>
            <div className="col-5">
              <span className="fs-6 p-2">
                <FontAwesomeIcon icon={faUser} className="mx-1" />
                Minh
              </span>
              <span className="fs-6 p-2">
                <FontAwesomeIcon icon={faClock} className="mx-1" />
                17 giờ trước
              </span>
              <span className="fs-6">
                <FontAwesomeIcon icon={faCity} className="mx-1" />
                Tp Hồ Chí Minh
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPostList;
