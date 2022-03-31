import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ComputerList = () => {
    const [computers, setComputer] = useState([]);

    useEffect(() => {
        getComputers();
    }, []);
    const getComputers = async() => {
        const response = await axios.get('http://localhost:5000/com');
        setComputer(response.data);
    }
    const deleteComputer = async(id) => {
        await axios.delete(`http://localhost:5000/com/${id}`);
        getComputers();
    }
    return(
        <div>
        <Link to="/addcomputer" className="button is-primary mt-2">Add New</Link>
        <table className="table is-striped is-fullwidth">
            <thead>
                <tr>
                    <th>No</th>
                    <th>รหัสทรัพย์สิน</th>
                    <th>ประเภททรัพย์สิน</th>
                    <th>ชื่ออุปกรณ์</th>
                    <th>ยี่ห้อสินค้า</th>
                    <th>Model</th>
                    <th>Size</th>
                    <th>CPU</th>
                    <th>RAM</th>
                    <th>HDD/SSD</th>
                    <th>Graphic Card</th>
                    <th>SN</th>
                    <th>Mac Address</th>
                    <th>Purchase Price</th>
                    <th>Purchase Date</th>
                    <th>Year</th>
                    <th>Warranty</th>
                    <th>Remark</th>
                </tr>
            </thead>
            <tbody>
                { computers.map((computers, index) => (
                    <tr key={ computers.id }>
                        <td>{ index + 1 }</td>
                        <td>{ computers.Asset_number }</td>
                        <td>{ computers.Type }</td>
                        <td>{ computers.Item_Name }</td>
                        <td>{ computers.Brand }</td>
                        <td>{ computers.Model }</td>
                        <td>{ computers.Size }</td>
                        <td>{ computers.CPU }</td>
                        <td>{ computers.RAM }</td>
                        <td>{ computers.HDD_SSD }</td>
                        <td>{ computers.Graphic_card }</td>
                        <td>{ computers.SN }</td>
                        <td>{ computers.mac_address }</td>
                        <td>{ computers.purchase_price }</td>
                        <td>{ computers.purchase_date }</td>
                        <td>{ computers.Year }</td>
                        <td>{ computers.Warranty }</td>
                        <td>{ computers.Remark }</td>
                        <td>
                            <Link to={`/edit/${computers.id}`} className="button is-small is-info">Edit</Link>
                            <button onClick={ () => deleteComputer(computers.id) } className="button is-small is-danger">Delete</button>
                        </td>
                    </tr>
                )) }
                 
            </tbody>
        </table>
    </div>
    )
}
export default ComputerList