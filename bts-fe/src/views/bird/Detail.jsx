import React from "react";
import { ReactComponent as IconStarFill } from "bootstrap-icons/icons/star-fill.svg";
import { useNavigate } from "react-router-dom";
import ModalAccept from "../../components/modal/ModalAccept";
import ModalDeny from "../../components/modal/ModalDeny";
function BirdDetailView() {
  const navigate = useNavigate();

  return (
    <div className="container-fluid mt-3">
      <div className="row">
        <div className="col-md-10">
          <div className="row mb-3">
            <div className="col-md-5 text-center">
              <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                  <button type="button" data-bs-target="#carouselExampleIndicators"
                    style={{ backgroundImage: "url(../../images/products/chim-cu-gay.jpg)" }}
                    data-bs-slide-to="0" aria-current="true" class="active">
                  </button>
                  <button type="button" data-bs-target="#carouselExampleIndicators"
                    style={{ backgroundImage: "url(../../images/chim/chimbachthanh.webp)" }}
                    data-bs-slide-to="1">
                  </button>
                  <button type="button"  data-bs-target="#carouselExampleIndicators"
                    style={{ backgroundImage: "url(../../images/chim/chimbocau.webp)" }}
                    data-bs-slide-to="2">
                  </button>
                </div>
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img src="../../images/products/chim-cu-gay.jpg" class="d-block w-100" alt="..." />
                  </div>
                  <div class="carousel-item">
                    <img src="../../images/chim/chimbachthanh.webp" class="d-block w-100" alt="..." />
                  </div>
                  <div class="carousel-item">
                    <img src="../../images/chim/chimbocau.webp" class="d-block w-100" alt="..." />
                  </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </button>

              </div>
              {/* <img
                src="../../images/products/chim-cu-gay.jpg"
                className="img-fluid mb-3"
                alt=""
              />
              <img
                src="../../images/products/chim-cu-gay.jpg"
                className="border border-secondary me-2" width="75"
                alt="..."
              />
              <img
                src="../../images/products/chim-cu-gay.jpg"
                className="border border-secondary me-2" width="75"
                alt="..."
              />
              <img
                src="../../images/products/chim-cu-gay.jpg"
                className="border border-secondary me-2" width="75"
                alt="..."
              /> */}
            </div>
            <div className="col-md-7">
              <h1 className="h3 d-inline me-2">
                {
                  (() => {
                    switch (4) {
                      case 0:
                        return <span className="text-danger fw-bold">
                          <IconStarFill className="text-warning me-1 fs-1" />
                          Cần Bán Gấp Chim Cu Gáy
                        </span>;
                      case 1:
                        return <span className="text-danger">
                          Cần Bán Gấp Chim Cu Gáy
                        </span>;
                      case 2:
                        return <span className="text-warning fw-bold">
                          Cần Bán Gấp Chim Cu Gáy
                        </span>;
                      case 3:
                        return <span className="text-warning">
                          Cần Bán Gấp Chim Cu Gáy
                        </span>;
                      default:
                        return <span className="text-info">
                          Cần Bán Gấp Chim Cu Gáy
                        </span>;
                    }
                  })()
                }
              </h1>
              <hr />
              <dl className="row small mb-3 fs-5">
                <dt className="col-sm-6">Giống thú cưng</dt>
                <dd className="col-sm-6">Chim cu gáy</dd>
                <dt className="col-sm-6">Người đăng</dt>
                <dd className="col-sm-6">Học trò thầy Nhàn</dd>
                <dt className="col-sm-6">Giới tính</dt>
                <dd className="col-sm-6">Chim trống</dd>
                <dt className="col-sm-6">Độ tuổi</dt>
                <dd className="col-sm-6">abc</dd>
                <dt className="col-sm-6">Địa điểm</dt>
                <dd className="col-sm-6">Tp Hồ Chí Minh</dd>
                <dt className="col-sm-6">Thời gian đăng</dt>
                <dd className="col-sm-6">23/03/2023 - 03/04/2023</dd>
                <dt className="col-sm-6">Giá tiền</dt>
                <dt className="col-sm-6">190000(VND)</dt>
              </dl>
              <nav>
                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                  <a
                    className="nav-link active"
                    id="nav-details-tab"
                    data-bs-toggle="tab"
                    href="#nav-details"
                    role="tab"
                    aria-controls="nav-details"
                    aria-selected="true"
                  >
                    Chi tiết
                  </a>
                </div>
              </nav>
              <div className="tab-content p-3 small" id="nav-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="nav-details"
                  role="tabpanel"
                  aria-labelledby="nav-details-tab"
                >
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500s, when an unknown printer took a galley of type and
                    scrambled it to make a type specimen book.
                  </p>
                </div>
              </div>
              <div className="d-grid gap-2 col-2 mx-5" role="group">
                <ModalAccept />
                <ModalDeny />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default BirdDetailView;
