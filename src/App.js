import UserContextProvider from './contexts/UserContext';
import Table from './components/Table';
import { useState } from 'react';
import Form from './components/Form';
function App() {
    // Hiển thị Form Tạo
    const [show, setShow] = useState(false);
    // Xử lí sự kiện click
    const handleShow = () => setShow(!show)
    return (
        <div className="container mt-5">
            <div className="row">
                <UserContextProvider>
                    <Table handleShow = {handleShow}/>
                    {show ? <Form handleShow = {handleShow}/>: <></>}
                </UserContextProvider>
            </div>
        </div>
    )
}

export default App;
