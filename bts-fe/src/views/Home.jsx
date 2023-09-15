import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckSquare, faTimesSquare } from "@fortawesome/free-solid-svg-icons";
import ChartBar from "../components/chart/ChartBar";

// import { Link } from "react-router-dom";
// import { link45, file, check2all } from "../npm/icon";
// import { data } from "../data";
// import { ReactComponent as IconWifi } from "bootstrap-icons/icons/twitter.svg"

// const Support = lazy(() => import("../components/Support"));
// const Banner = lazy(() => import("../components/carousel/Banner"));
// const Carousel = lazy(() => import("../components/carousel/Carousel"));
// const CardIcon = lazy(() => import("../components/card/CardIcon"));
// const CardLogin = lazy(() => import("../components/card/CardLogin"));
// const CardImage = lazy(() => import("../components/card/CardImage"));
// const CardDealsOfTheDay = lazy(() =>
//   import("../components/card/CardDealsOfTheDay")
// );

function HomeView() {
  return (
    <React.Fragment>

      <div class="container px-1 mt-5 mb-5">
        <div class="row">
          <div class="col">
            <div class="p-4 bg-white rounded-4 shadow">
              <div class="fs-3 mb-2">
                Số tin đã duyệt
              </div>
              <div class="row text-success">
                <FontAwesomeIcon className="fs-1 col-sm-2" icon={faCheckSquare}></FontAwesomeIcon>
                <h5 className="col-sm-9 text-end">abc</h5>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="p-4 border bg-white rounded-4 shadow">
              <div class="fs-3 mb-2">
                Số tin đã hủy
              </div>
              <div class="row text-danger">
                <FontAwesomeIcon className="fs-1 col-sm-2" icon={faTimesSquare}></FontAwesomeIcon>
                <h5 className="col-sm-9 text-end">abc</h5>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="p-4 border bg-white rounded-4 shadow">
              <div class="fs-3 mb-2">
                Số tin đã hủy
              </div>
              <div class="row text-danger">
                <FontAwesomeIcon className="fs-1 col-sm-2" icon={faTimesSquare}></FontAwesomeIcon>
                <h5 className="col-sm-9 text-end">abc</h5>
              </div>
            </div>
          </div>
        </div>
        <hr/>
        <div class="col-md-8">
          <ChartBar />
        </div>
      </div>
    </React.Fragment>
  );
}

export default HomeView;
