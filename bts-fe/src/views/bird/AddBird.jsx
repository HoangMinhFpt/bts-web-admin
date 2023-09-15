import React from "react";

function AddBird() {
    return (
        <div>
            <form class="row g-3 needs-validation mt-3" novalidate>
                <div class="col-md-2 offset-md-4">
                    <input type="text" class="form-control" placeholder="Tên loại chim" aria-label="Name" required />
                </div>
                <div class="col-md-4">
                    <button class="btn btn-primary" type="submit">Thêm loại chim</button>
                </div>
            </form>
        </div>
    )
}
export default AddBird;