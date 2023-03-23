import User from "./User";
import { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";
const Table = ({handleShow}) => {
    //Lấy biến cục bộ
  const {users} = useContext(UserContext);
  return (
    <div className="col-7 justify-content-center">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Address</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <User user={user} index={index} />
            </tr>
          ))}
        </tbody>
      </table>
      <div className="d-grid gap-2 d-md-flex justify-content-center">
        <button onClick={handleShow} className="btn btn-primary">Create</button>
      </div>
    </div>
  );
};
export default Table;
