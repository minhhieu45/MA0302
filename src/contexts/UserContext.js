import { createContext, useState } from "react";
export const UserContext = createContext();

const UserContextProvider = (props) => {
    const [users, setUsers] = useState([{
        "id": 1,
        "name": "Delila Glencross",
        "age": "260",
        "address": "630 Brown Road",
        "phone": "391-961-7134"
    }, {
        "id": 2,
        "name": "Glen Feedome",
        "age": "230",
        "address": "9531 Steensland Point",
        "phone": "466-449-1775"
    }, {
        "id": 3,
        "name": "Wendel Renol",
        "age": "170",
        "address": "13201 Graedel Alley",
        "phone": "381-849-8975"
    }, {
        "id": 4,
        "name": "Trip Priddey",
        "age": "1300",
        "address": "331 Gina Park",
        "phone": "758-212-4279"
    }, {
        "id": 5,
        "name": "Lonnie Portt",
        "age": "49",
        "address": "07718 Hermina Pass",
        "phone": "666-674-2894"
    }, {
        "id": 6,
        "name": "Bethanne Ivers",
        "age": "478",
        "address": "3 American Center",
        "phone": "139-314-2775"
    }, {
        "id": 7,
        "name": "Jase Masters",
        "age": null,
        "address": "7456 Kedzie Avenue",
        "phone": "678-332-9286"
    }, {
        "id": 8,
        "name": "Elva Lacrouts",
        "age": "927",
        "address": "14925 Columbus Plaza",
        "phone": "205-336-7944"
    }, {
        "id": 9,
        "name": "Almeta Edmands",
        "age": "17",
        "address": "7282 Tennyson Lane",
        "phone": "386-523-5265"
    }, {
        "id": 10,
        "name": "Pat Macellar",
        "age": "1214",
        "address": "1413 Vera Street",
        "phone": "303-557-6567"
    }]);
    const addUser = (newUser) => {
        setUsers([...users, newUser]);
    }
    const deleteUser = (id) => {
        setUsers(users.filter(user => user.id !== id));
    }
    const updateUser = (id, updatedUser) => {
        setUsers(users.map((user) => user.id === id ? updatedUser : user));
    }
    return (
        <UserContext.Provider value={{ users, addUser, deleteUser, updateUser }}>
            {props.children}
        </UserContext.Provider>
    )
}
export default UserContextProvider;