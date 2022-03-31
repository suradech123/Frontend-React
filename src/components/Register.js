import React, { useState } from 'react'
import axios from "axios";
import swal from 'sweetalert2';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confPassword, setConfPassword] = useState('');
    const [msg, setMsg] = useState('');
    
    const Register = async (e) => {
        e.preventDefault();
        try{
            await axios.post('http://192.168.1.107:5000/users',{
                name: name,
                email: email,
                password: password,
                confPassword: confPassword
            });
            swal({
                title: "",
                text: "บันทึกข้อมูลสำเร็จ ไปหน้า Login ต่อ",
                icon: "success",
                button: "OK"
              }).then(()=>{
                window.location = "/home";
              });
        }catch(error){
            if(error.response){
                setMsg(error.response.data.msg);
            }
        }
    }
    return (
        <section className='hero is-fullhight is-fullwidth'>
            <div className='hero-body'>
                <div className='container'>
                    <div className='columns is-centered'>
                        <div className='column is-4-desktop'>
                            <form onSubmit={Register} className='box'>
                                <p className='has-text-centered'>{msg}</p>
                                <div className='field mt-5'>
                                    <label className='label'>Name</label>
                                    <div className='controls'>
                                        <input type="text" className="input" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}/>
                                    </div>
                                </div>
                                <div className='field mt-5'>
                                    <label className='label'>Email</label>
                                    <div className='controls'>
                                        <input type="text" className="input" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                                    </div>
                                </div>
                                <div className='field mt-5'>
                                    <label className='label'>Password</label>
                                    <div className='controls'>
                                        <input type="password" className="input" placeholder="******" value={password} onChange={(e) => setPassword(e.target.value)}/>
                                    </div>
                                </div>
                                <div className='field mt-5'>
                                    <label className='label'>Confirm Password</label>
                                    <div className='controls'>
                                        <input type="password" className="input" placeholder="*******" value={confPassword} onChange={(e) => setConfPassword(e.target.value)}/>
                                    </div>
                                </div>
                                <div className='field mt-5'>
                                    <button className='button is-success is-fullwidth'>Register</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Register;