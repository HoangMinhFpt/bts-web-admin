import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';
function ModalAccept(props) {
    const [statusPost, setStatusPost] = useState();
    const handleAccept = () => {
        setStatusPost({
            postStatus: "approve"
        })
    }
    const idPost = props.data;
    const handleAcceptStatus = (event) => {
        event.preventDefault();
        axios.put("https://localhost:44331/api/v1/Post/update/status/" + idPost, { statusPost })
    }
    return (
        <React.Fragment>
            <button
                type="button"
                class="btn btn-success"
                data-bs-toggle="modal"
                data-bs-target="#modalCenterAccept"
                title="Chấp nhận"
                onClick={handleAccept}>
                <FontAwesomeIcon icon={faCheck} />
            </button>

            <div
                class="modal fade"
                id="modalCenterAccept"
                tabindex="-1" role="dialog"
                aria-labelledby="modalCenterAcceptTitle"
                aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLongTitle">Xác nhận đăng tin</h5>
                            <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            Bạn có muốn <span className="fw-bold text-success text-decoration-underline text-uppercase">chấp nhận</span> đăng tin này?
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                            <button type="submit" class="btn btn-success" onSubmit={handleAcceptStatus}>Xác nhận</button>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default ModalAccept;