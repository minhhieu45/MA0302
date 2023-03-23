import Table from './components/Table';
import Form from './components/Form';
import { useState } from 'react';
function App() {
    const [isActive, setActive] = useState(false);
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState({});
    const TurnOnForm = () => {
        setActive(!isActive);
    }
    const AddUser = (user) => {
        setUsers([...users, user]);
        setUser({});
    }
    const DeleteUser = (id) => {
        let listUsers = users.filter((user, index) => index != id);
        setUsers([...listUsers]);
    }
    const GetUser = (userUpdate) => {
        setUser(userUpdate);        
    }
    const Update = (newUser) => {
        const index = users.findIndex(user);
        console.log(newUser);
        console.log(index);
    }
    return(
        <div className="container mt-5">
            <div className="row">
                <Table TurnOnForm={TurnOnForm} GetUser={GetUser} DeleteUser={DeleteUser} Users={users} />
                {isActive ? <Form AddUser={AddUser} Update = {Update} User = {user}/> : <></>}
            </div>
        </div>
    )
}

export default App;
