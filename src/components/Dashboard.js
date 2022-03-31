import React, { useState, useEffect } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import Swal from "sweetalert2";

const Dashboard = () => {
    const [name, setName] = useState('');
    const [token, setToken] = useState('');
    const [expire, setExpire] = useState('');
    const [users, setUsers] = useState([]);

    useEffect(() => {
        refreshToken();
        getUsers();
    }, []);
    const Logout = async () => {
        try {
            await axios.delete('http://localhost:5000/logout');
            Swal.fire({
                title: 'Are you sure?',
                text: "คุณต้องการออกจากระบบ หรือ ไม่",
                icon: 'warning'
              }).then(function() {
                window.location = "/";
            });
              
        } catch (error) {
            console.log(error);
        }
    }
    
    const refreshToken = async () => {
        try{
            const response = await axios.get('http://localhost:5000/token');
            setToken(response.data.accessToken);
            const decoded = jwt_decode(response.data.accessToken);
            setName(decoded.name);
            setExpire(decoded.exp);
        }catch(error){
            if(error.response){ 
                //navigete.push("/",{ replace: true});
            }
        }
    }
    const axiosJWT = axios.create();
    axiosJWT.interceptors.request.use(async(config) => {
        const currentDate = new Date();
        if(expire * 1000 < currentDate.getTime()){
            const response = await axios.get('http://localhost:5000/token');
            config.headers.Authorization = `Bearer ${response.data.accessToken}`;
            setToken(response.data.accessToken);
            const decoded = jwt_decode(response.data.accessToken);
            setName(decoded.name);
            setExpire(decoded.exp);
        }
        return config;
    },(error) => {
        return Promise.reject(error);
    });
    const getUsers = async() => {
        const response = await axiosJWT.get('http://localhost:5000/users',{
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        setUsers(response.data);
    }
    const [open, setOpen] = React.useState(true);
    const toggleDrawer = () => {
    setOpen(!open);
    };
    return (
        
        <div className="container mt-5">
            <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="buttons">
                                <button onClick={Logout} className="button is-light">
                                    Log Out
                                </button>
                            </div>
                        </div>
                    </div>
            <h1>Welcome Back: {name}</h1>
            <table className="table is-striped is-fullwidth">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={user.id}>
                            <td>{index + 1}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                        </tr>
                    ))}
 
                </tbody>
            </table>
        </div>
    )
}
export default Dashboard