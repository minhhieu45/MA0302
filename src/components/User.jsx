import { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";
const User = ({ user, index, handleShow}) => {
    const { deleteUser } = useContext(UserContext);
    return (
        <>
            <th scope="row">{index + 1}</th>
            <td>
                <span>{user.name}</span>
            </td>
            <td>
                <span>{user.address}</span>
            </td>
            <td>
                <button onClick={handleShow} className="btn btn-warning me-1">
                    <i className="fa-solid fa-pen-to-square"></i>
                </button>
                <button
                    className="btn btn-danger"
                    onClick={() => deleteUser(user.id)}
                >
                    <i className="fa-sharp fa-solid fa-circle-xmark"></i>
                </button>
            </td>
        </>
    );
};
export default User;
