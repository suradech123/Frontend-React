import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Employeelist = () => {
    const [employees, setEmployee] = useState([]);

    useEffect(() => {
        getEmployees();
    }, []);
    const getEmployees = async() => {
        const response = await axios.get('http://localhost:5000/emp');
        setEmployee(response.data);
    }
    const deleteEmployee = async(id) => {
        await axios.delete(`http://localhost:5000/emp/${id}`);
        getEmployees();
    }
    return(
        <div>
        <Link to="/addemp" className="button is-primary mt-2">Add New</Link>
        <table className="table is-striped is-fullwidth">
            <thead>
                <tr>
                    <th>No</th>
                    <th>รหัสทรัพย์สิน</th>
                    <th>ประเภททรัพย์สิน</th>
                    <th>ชื่ออุปกรณ์</th>
                    <th>ยี่ห้อสินค้า</th>
                    <th>Model</th>
                    
                </tr>
            </thead>
            <tbody>
                { employees.map((employees, index) => (
                    <tr key={ employees.id }>
                        <td>{ index + 1 }</td>
                        <td>{ employees.firstname }</td>
                        <td>{ employees.lastname }</td>
                        <td>{ employees.nikname }</td>
                        <td>{ employees.Position }</td>
                        <td>{ employees.Department }</td>
                        <td>
                            <Link to={`/edit/${employees.id}`} className="button is-small is-info">Edit</Link>
                            <button onClick={ () => deleteEmployee(employees.id) } className="button is-small is-danger">Delete</button>
                        </td>
                    </tr>
                )) }
                 
            </tbody>
        </table>
    </div>
    )
}
export default Employeelist