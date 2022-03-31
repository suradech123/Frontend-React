import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from '@mui/icons-material/Group';
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import AdbIcon from '@mui/icons-material/Adb';
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import DevicesIcon from '@mui/icons-material/Devices';
import TerminalIcon from '@mui/icons-material/Terminal';
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";
import axios from 'axios';
import React, { useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import swal from 'sweetalert2';
const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  
  const Logout = async () => {
    try {
        await axios.delete('http://192.168.1.107:5000/logout');
        swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'ได้ทำการ logout เรียบร้อยแล้ว',
          showConfirmButton: false,
          timer: 3000
        }).then(function() {
          window.location = "/login";
        })
    } catch (error) {
        console.log(error);
    }

    }
    const [name, setName] = useState('');
    const [token, setToken] = useState('');
    const [expire, setExpire] = useState('');
    const [users, setUsers] = useState([]);

    useEffect(() => {
        refreshToken();
        getUsers();
    }, []);
    
    const refreshToken = async () => {
        try{
            const response = await axios.get('http://192.168.1.107:5000/token');
            setToken(response.data.accessToken);
            const decoded = jwt_decode(response.data.accessToken);
            setName(decoded.name);
            setExpire(decoded.exp);
        }catch(error){
            if(error.response){
            }
        }
    }
    const axiosJWT = axios.create();
    axiosJWT.interceptors.request.use(async(config) => {
        const currentDate = new Date();
        if(expire * 1000 < currentDate.getTime()){
            const response = await axios.get('http://192.168.1.107:5000/token');
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
        const response = await axiosJWT.get('http://192.168.1.107:5000/users',{
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
    <div className="sidebar">
      <div className="top">
        <Link to="/home" style={{ textDecoration: "none" }}>
          <span className="logo">AdminPage OSN</span>
          <span>{name}</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
          <p className="title">LISTS</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <GroupIcon className="icon" />
              <span>Users</span>
            </li>
          </Link>
          <Link to="/products" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
              <span>Products</span>
            </li>
          </Link>
          <li>
            <DevicesIcon className="icon" />
            <span>Hardware</span>
          </li>
          <li>
            <AdbIcon className="icon" />
            <span>Software</span>
          </li>
          <li>
            <LocalShippingIcon className="icon" />
            <span>Delivery</span>
          </li>
          <li>
              <TerminalIcon className="icom" />
              <span>Program Device</span>
          </li>
          
          <p className="title">USEFUL</p>
          <li>
            <InsertChartIcon className="icon" />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsNoneIcon className="icon" />
            <span>Notifications</span>
          </li>
          <p className="title">SERVICE</p>
          <li>
            <SettingsSystemDaydreamOutlinedIcon className="icon" />
            <span>System Health</span>
          </li>
          <li>
            <PsychologyOutlinedIcon className="icon" />
            <span>Logs</span>
          </li>
          <li>
            <SettingsApplicationsIcon className="icon" />
            <span>Settings</span>
          </li>
          <p className="title">USER</p>
          <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>Profile</span>
          </li>
          <li>
            <ExitToAppIcon className="icon" />

            <span onClick={Logout}>Logout</span>
          </li>
        </ul>
      </div>
      
    </div>
  );
};

export default Sidebar;