import axios from "axios";
import React, { lazy, useEffect, useState, } from "react";
import { data } from "../../data";
const Paging = lazy(() => import("../../components/Paging"));
const CardPostList = lazy(() =>
  import("../../components/card/CardPostList")
);

function PostListView() {

  const [currentPosts, setCurrentPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(null);
  const [totalPages, setTotalPages] = useState(null);
  const [totalItems, setTotalItems] = useState(0);
  const [postList, setPostList] = useState([]);
  const [filterStatus, setFilterStatus] = useState({
    status:''
  });

  const [selectedFilterStatus, setSecletedFilterStatus] = useState('');

  useEffect(() => {
    const totalItems = getPosts().length;
    setTotalItems(totalItems);
    axios.get("https://localhost:44331/api/v1/Post/getAll")
      .then(res => {
        setPostList(res.data);
      })
  }, [setPostList]);

  const handleFilterStatus = (event) => {
    setSecletedFilterStatus(event.target.value);
  };

  const onPageChanged = (page) => {
    let posts = getPosts();
    const { currentPage, totalPages, pageLimit } = page;
    const offset = (currentPage) * pageLimit;
    const currentPosts = posts.slice(offset, offset + pageLimit);

    setCurrentPage(currentPage);
    setCurrentPosts(currentPosts);
    setTotalPages(totalPages);
  };

  const getPosts = () => {
    let posts = data.posts;
    return posts;
  };

  return (
    <React.Fragment>
      <div className="container text-center">
        <span className="display-5 px-3 bg-white rounded shadow">
          Tin Đăng
        </span>
      </div>
      <div className="container-fluid mb-3 mt-3 justify-content-center">
        <div className="col-10 d-flex justify-content-end">
          <select
            className="form-select mw-180 float-start"
            aria-label="Default select"
            value={selectedFilterStatus.toString()} 
            onChange={handleFilterStatus}
          >
            <option value={0}>Chờ xét duyệt</option>
            <option value={1}>Tin xác nhận</option>
            <option value={2}>Tin đã hủy</option>
          </select>
        </div>
        <div className="row">
          <div className="col mt-3">
            <div className="row g-3">
              {currentPosts.map((post) => {
                return (
                  <div className="col-md-12">
                    <CardPostList data={post} />
                  </div>
                );
              })}
            </div>
            <Paging
              totalRecords={totalItems}
              pageLimit={9}
              pageNeighbours={3}
              onPageChanged={onPageChanged}
              sizing=""
              alignment="justify-content-center"
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}


export default PostListView;
