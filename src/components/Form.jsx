import { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import { v4 as uuidv4 } from "uuid";

const Form = ({ handleShow }) => {
    //Lấy hàm thêm dữ liệu
    const { addUser } = useContext(UserContext);
    // Khởi tạo newUser
    const [formData, setFormData] = useState({
        id: "",
        name: "",
        age: "",
        address: "",
        phone: "",
    });
    // Khởi tạo error
    const [formErrors, setFormErrors] = useState({});
    // Kiểm tra đối tượng
    const validateForm = () => {
        const errors = {};
        if (!formData.name) {
            errors.name = "Name is required";
        }
        // if (!formData.email) {
        //     errors.email = 'Email is required';
        // } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
        //     errors.email = 'Email is invalid';
        // }
        if (!formData.age.match(/^\d+/)) {
            errors.age = "Age is required";
        }
        if (!formData.address) {
            errors.address = "Address is required";
        }
        if (!formData.phone) {
            errors.phone = "Phone is required";
        }
        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };
    // Sự kiện submit
    const handleSubmit = () => {
        // Nếu kiểm tra thành công
        if (validateForm()) {
            //Khởi tạo id
            formData.id = uuidv4();
            // Thêm newUser vào danh sách
            addUser(formData);
            // Set lại form
            setFormData({
                id: "",
                name: "",
                age: "",
                address: "",
                phone: "",
            });
            handleShow();
        }
    };
    // Lắng nghe sự kiện thay đổi
    const handleChange = (event) => {
        const target = event.target;
        // const value = target.type === 'checkbox' ? target.checked : target.value;
        const value = target.value;
        const name = target.name;
        setFormData({ ...formData, [name]: value });
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
                        value={formData.name}
                        onChange={handleChange}
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
                        value={formData.age}
                        onChange={handleChange}
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
                        value={formData.address}
                        onChange={handleChange}
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
                        value={formData.phone}
                        onChange={handleChange}
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
                <button
                    className="btn btn-primary"
                    onClick={handleSubmit}
                    type="button"
                >
                    Create
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
