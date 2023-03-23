import { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";

const Form = (user) => {
    const [newUser, getUpUser] = useState({
        id: user.id,
        name: user.id,
        age: user.age,
        address: user.address,
        phone: user.phone,
    });
    //Lấy hàm thêm dữ liệu
    const { updateUser } = useContext(UserContext);
    // Khởi tạo error
    const [formErrors, setFormErrors] = useState({});
    // Kiểm tra đối tượng
    const validateForm = () => {
        const errors = {};
        if (!newUser.name) {
            errors.name = "Name is required";
        }
        // if (!formData.email) {
        //     errors.email = 'Email is required';
        // } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
        //     errors.email = 'Email is invalid';
        // }
        if (!newUser.age.match(/^\d+/)) {
            errors.age = "Age is required";
        }
        if (!newUser.address) {
            errors.address = "Address is required";
        }
        if (!newUser.phone) {
            errors.phone = "Phone is required";
        }
        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    return (
        <div className="col-5">
            <div className="row g-3 align-items-center">
                <div className="col-3" style={{ marginTop: "-10px" }}>
                    <label className="col-form-label">Name</label>
                </div>
                <div className="col-9">
                    <input
                        type="text"
                        name="name"
                        value={newUser.name}
                        className="form-control"
                        style={{ marginBottom: 10 }}
                    />
                    <span className="form-text text-danger">
                        {formErrors.name}
                    </span>
                </div>
            </div>
            <div className="row g-3 align-items-center mt-1">
                <div className="col-3" style={{ marginTop: "-10px" }}>
                    <label htmlFor="inputPassword6" className="col-form-label">
                        Age
                    </label>
                </div>
                <div className="col-9">
                    <input
                        type="number"
                        name="age"
                        value={newUser.age}
                        className="form-control"
                        style={{ marginBottom: 10 }}
                        aria-describedby="passwordHelpInline"
                    />
                    <span
                        id="passwordHelpInline"
                        className="form-text text-danger"
                    >
                        {formErrors.age}
                    </span>
                </div>
            </div>
            <div className="row g-3 align-items-center mt-1">
                <div className="col-3" style={{ marginTop: "-10px" }}>
                    <label htmlFor="inputPassword6" className="col-form-label">
                        Address
                    </label>
                </div>
                <div className="col-9">
                    <input
                        type="text"
                        name="address"
                        value={newUser.address}
                        className="form-control"
                        style={{ marginBottom: 10 }}
                        aria-describedby="passwordHelpInline"
                    />
                    <span
                        id="passwordHelpInline"
                        className="form-text text-danger"
                    >
                        {formErrors.address}
                    </span>
                </div>
            </div>
            <div className="row g-3 align-items-center mt-1">
                <div className="col-3" style={{ marginTop: "-10px" }}>
                    <label htmlFor="inputPassword6" className="col-form-label">
                        Phone
                    </label>
                </div>
                <div className="col-9">
                    <input
                        type="text"
                        name="phone"
                        value={newUser.phone}
                        className="form-control"
                        style={{ marginBottom: 10 }}
                        aria-describedby="passwordHelpInline"
                    />
                    <span
                        id="passwordHelpInline"
                        className="form-text text-danger"
                    >
                        {formErrors.phone}
                    </span>
                </div>
            </div>
            <div className="row g-3 d-flex flex-row justify-content-between mt-1">
                <button className="btn btn-warning" type="button">
                    Update
                </button>
                {/* ) : (
          <button className="btn btn-warning" type="button">
            Update
          </button>
        )} */}
            </div>
        </div>
    );
};
export default Form;
