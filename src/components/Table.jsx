import { useState } from "react";

export default function Table({ TurnOnForm, Users, DeleteUser, GetUser }) {
    // const [span, setSpan] = useState('');
    // const [input, setInput] = useState('hide');

    // const HandleEdit = (id) => {
    //     setSpan('hide');
    //     setInput('');
    // }
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
                    {
                        Users != null ? Users.map((user, index) => (
                            <tr key={index}>
                                <th scope="row">{index}</th>
                                <td>
                                    <span>{user.name}</span>
                                    {/* <input className={input} type="text" onChange={(e) => { NewUser("name", e.target.value) }} value={user.name} /> */}
                                </td>
                                <td>
                                    <span>{user.address}</span>
                                    {/* <input className={input} type="text" onChange={(e) => { NewUser("address", e.target.value) }} value={user.address} /> */}
                                </td>
                                <td >
                                    <button className='btn btn-warning me-1' onClick={() => GetUser(user)} type="button">
                                        V
                                    </button>
                                    <button className="btn btn-danger" onClick={() => DeleteUser(index)} type="button">X</button>
                                </td>
                                {/* <td className={input}>
                                    <button className='btn btn-warning me-1' type="button">
                                        V
                                    </button>
                                </td> */}
                            </tr>
                        )) : <tr className="text-center"><td>Không có dữ liệu</td></tr>}
                </tbody>
            </table>
            <div className="d-grid gap-2 d-md-flex justify-content-center">
                <button className="btn btn-primary" onClick={TurnOnForm}>Create</button>
            </div>
        </div>

    )
}