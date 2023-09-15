import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoneyBill1 } from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';

function ModalDeposite(props) {
    const [money, setMoney] = useState();
    const [selectedAmount, setSelectedAmount] = useState('');
    const [selectStatus, setSelectedStatus] = useState();
    const handleAccept = () => {
        setMoney({
            id: idAccount,
            availableBalance: selectedAmount,

        })
    }
    const handleAmount = (event) => {
        setSelectedAmount(parseInt(event.target.value));
    };
    const handleSelecltedStatus=(event)=>{
        setSelectedStatus(event.target.value);
    };
    const idAccount = props.data;
    const handleAcceptWallet = (event) => {
        event.preventDefault();
        axios.put("https://localhost:44331/api/v1/Wallet/" + idAccount, { money })
    }
    return (
        <React.Fragment>
            <button
                type="button"
                class="btn btn-primary col-md-3 offset-md-2"
                data-bs-toggle="modal"
                data-bs-target="#myModal"
                title="Nạp tiền"
                onClick={handleAccept}>
                <FontAwesomeIcon icon={faMoneyBill1} />
            </button>

            <div
                class="modal fade"
                id="myModal"
                tabindex="-1" role="dialog"
                aria-labelledby="modalCenterAcceptTitle"
                aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLongTitle">Giao dịch</h5>
                            <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div class="mb-3">
                                <label for="formGroupExampleInput" class="form-label">ID</label>
                                <input type="text" class="form-control" id="formGroupExampleInput" value={idAccount} placeholder={idAccount.id} />
                            </div>
                            <div class="mb-3">
                                <label for="formGroupExampleInput" class="form-label">Thao tác</label>
                                <select class="form-select" aria-label="Default select example" value={selectStatus} onChange={handleSelecltedStatus}> 
                                   {/* <option selected>Open this select menu</option> */}
                                    <option value="0">Nạp tiền</option>
                                    <option value="1">Rút tiền</option>
                                </select>
                            </div>
                            <div class="mb-3">
                                <label for="formGroupExampleInput2" class="form-label">Số tiền</label>
                                <input type="text" class="form-control" id="formGroupExampleInput2" value={selectedAmount} onChange={handleAmount} />
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                            <button type="submit" class="btn btn-primary" onSubmit={handleAcceptWallet}>Xác nhận</button>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default ModalDeposite;