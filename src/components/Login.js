import React, { useState, Component } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert2'

const Login = () =>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState('');
    const navigate = useNavigate();

    const Auth = async (e) =>{
        e.preventDefault();
        try{
            await axios.post('http://192.168.1.107:5000/login', {
                email: email,
                password: password
            });
            swal.fire({
                title: "",
                text:'ยินดีต้อนรับ',
                icon:'success',
                button: "OK"
            }).then(function() {
                window.location = "/home";
                //navigate.push("/dashboard", {replace: true})
            });
        }catch(error){
            if(error.response){
                setMsg(error.response.data.msg);
                swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'ไม่สามารถเข้าสู่ระบบได้'
                }).then(function() {
                    window.location = "/login";
                });
            }
        }
    }
    return(
        <section className="hero has-background-grey-light is-fullheight is-fullwidth">
            <div className="hero-body">
                <div className="container">
                    <div className="columns is-centered">
                        <div className="column is-4-desktop">
                            <form onSubmit={Auth} className="box">
                                <p className="has-text-centered">{msg}</p>
                                <div className="field mt-5">
                                    <label className="label">Email</label>
                                    <div className="controls">
                                        <input type="text" className="input" placeholder="Username" value={email} onChange={(e) => setEmail(e.target.value)} />
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <label className="label">Password</label>
                                    <div className="controls">
                                        <input type="password" className="input" placeholder="******" value={password} onChange={(e) => setPassword(e.target.value)} />
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <button className="button is-success is-fullwidth">Login</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Login