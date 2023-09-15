import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBan } from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';
function ModalDeny(props) {
    const [statusPost, setStatusPost] = useState();
    const handleDeny = () => {
        setStatusPost({
            postStatus: "rejected"
        })
    }
    const idPost = props.data;
    const handleDenyStatus = (event) => {
        event.preventDefault();
        axios.put("https://localhost:44331/api/v1/Post/update/status/" + idPost, { statusPost })
    }
    return (
        <React.Fragment>
            <button
                type="button"
                class="btn btn-danger"
                data-bs-toggle="modal"
                data-bs-target="#modalCenterDeny"
                title="Hủy"
                onClick={handleDeny}
            >
                <FontAwesomeIcon icon={faBan} />
            </button>
            <div class="modal fade" id="modalCenterDeny" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLongTitle">Xác nhận đăng tin</h5>
                            <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            Bạn có muốn <span className="fw-bold text-danger text-decoration-underline text-uppercase">hủy</span> đăng tin này?
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                            <button type="button" class="btn btn-danger" onSubmit={handleDenyStatus}>Xác nhận</button>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default ModalDeny;