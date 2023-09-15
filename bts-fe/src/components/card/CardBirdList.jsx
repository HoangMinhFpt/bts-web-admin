import React, { createContext, useState } from "react";
// import { Link } from "react-router-dom";
//import { ReactComponent as IconStarFill } from "bootstrap-icons/icons/star-fill.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBan, faCheckDouble, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
// import { Alert, Button } from "react-bootstrap";
// import { useAlert, positions, Provider as AlertProvider } from "react-alert";
// import AlertTemplate from 'react-alert-template-basic'

const CardBirdList = (props) => {
  const bird = props.data;
  // const TopRightAlertContext = createContext();
  //const [birdList, setBirdList] = useState(birdList);

  // function ModalEdit(bird, birdList, setBirdList) {
  //   // function handleInput(e) {
  //   //   const newList = birdList.map(li => (
  //   //     li.id === bird.id ? { ...li, [e.target.name]: [e.target.image] } : li
  //   //   ))
  //   //   setBirdList(newList);
  //   // }
  //   return (

  //   )
  // }
  // function alertEdit() {
  //   return (
  //     <div class="alert alert-primary d-flex align-items-center" role="alert">
  //       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-2" viewBox="0 0 16 16" role="img" aria-label="Warning:">
  //         <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
  //       </svg>
  //       <div>
  //         An example alert with an icon
  //       </div>
  //       <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  //     </div>
  //   )
  // }
  // const alert = useAlert(TopRightAlertContext);
  // const Root = () => (
  //   <AlertProvider template={AlertTemplate}>
  //     <AlertProvider
  //       template={AlertTemplate}
  //       position={positions.TOP_RIGHT}
  //       context={TopRightAlertContext}
  //     >
  //       <CardBirdList />  
  //     </AlertProvider>
  //   </AlertProvider>
  // )
  return (
    <table class="table table-bordered text-center">
      <tbody>
        <tr>
          <td className="col-1 text-center">{bird.id}</td>
          <td className="col-5">
            <input className="fs-5 fw-bold text-primary" type="text" class="form-control" value={bird.name} placeholder="Tên loại chim" aria-label="Name" />
          </td>
          <td className="d-grid gap-2 d-md-block">
            {/* <Alert variant="success" onClose={() => setShow(false)} dismissible>

              <span className="fs-5">
                <FontAwesomeIcon icon={faCheckDouble} style={{ height: 25 }} className="mx-2" />
                Đã chỉnh sửa
              </span>
            </Alert>

            {!show && <button
              type="button"
              className="btn btn-primary col-md-2"
              title="Chỉnh sửa"
              onClick={() => setShow(true)}>
              <FontAwesomeIcon icon={faPenToSquare} />
            </button>} */}
            <button
              type="button"
              className="btn btn-primary col-md-2"
              title="Chỉnh sửa"
              onClick={() =>
                alert.show('Oh look, an alert in the top right corner!')
              }
            >
              <FontAwesomeIcon icon={faPenToSquare} />
            </button>
            {/* <button
              type="button"
              className="btn btn-primary col-md-2"
              onClick={ }
              title="Chỉnh sửa"
            >
              <FontAwesomeIcon icon={faPenToSquare} />
            </button>
            <div class="alert alert-success alert-dismissible fade show" role="alert">
              <FontAwesomeIcon icon={faCheckDouble} style={{ height: 25 }} className="mx-2" />
              <strong>Holy guacamole!</strong> You should check in on some of those fields below.
              <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div> */}
            <button
              type="button"
              className="btn btn-danger col-md-2 offset-md-2"
              data-bs-toggle="modal"
              data-bs-target="#modalDeletedBird"
              title="Xóa"
            >
              <FontAwesomeIcon icon={faBan} />
            </button>
            <div
              class="modal fade"
              id="modalDeletedBird"
              tabindex="-1" role="dialog"
              aria-hidden="true">
              <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title">Xác nhận loại chim</h5>
                    <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    Bạn có muốn <span className="fw-bold text-danger text-decoration-underline text-uppercase">xóa</span> loại chim này?
                  </div>
                </div>
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default CardBirdList;
