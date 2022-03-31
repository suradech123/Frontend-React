import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useState, useEffect } from "react";
import axios from "axios";

const List = () => {
  const [computers, setComputer] = useState([]);

    useEffect(() => {
        getComputers();
    }, []);
    const getComputers = async() => {
        //const response = await axios.get('http://localhost:5000/computers');
        //setComputer(response.data);
    }
    const deleteComputer = async(id) => {
       // await axios.delete(`http://localhost:5000/computers/${id}`);
        getComputers();
    }
  
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Tracking ID</TableCell>
            <TableCell className="tableCell">รหัสคอม</TableCell>
            <TableCell className="tableCell">Product</TableCell>
            <TableCell className="tableCell">Customer</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Amount</TableCell>
            <TableCell className="tableCell">Payment Method</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {computers.map((computers, index) => (
            <TableRow key={computers.id}>
              <TableCell className="tableCell">{computers.id}</TableCell>
              <TableCell className="tableCell">{computers.Asset_number}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={computers.img} alt="" className="image" />
                  {computers.product}
                </div>
              </TableCell>
              <TableCell className="tableCell">{computers.customer}</TableCell>
              <TableCell className="tableCell">{computers.date}</TableCell>
              <TableCell className="tableCell">{computers.amount}</TableCell>
              <TableCell className="tableCell">{computers.method}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${computers.status}`}>{computers.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;