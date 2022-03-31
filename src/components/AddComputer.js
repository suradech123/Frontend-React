import { useState } from "react";
import axios from "axios";

const AddComputer = ()=>{
    const [Asset_number, setAsset_number] = useState('');
    const [Type, setType] = useState('');
    const [Item_Name, setItem_Name] = useState('');
    const [Brand, setBrand] = useState('');
    const [Model, setModel] = useState('');
    const [Size, setSize] = useState('');
    const [CPU, setCPU] = useState('');
    const [RAM, setRAM] = useState('');
    const [HDD_SSD, setHDD_SSD] = useState('');
    const [Graphic_card, setGraphic_card] = useState('');
    const [SN, setSN] = useState('');
    const [mac_address, setmac_address] = useState('');
    const [purchase_price, setpurchase_price] = useState('');
    const [Purchase_date, setPurchase_date] = useState('');
    const [Year, setYear] = useState('');
    const [Warranty, setWarranty] = useState('');
    const [Remark, setRemark] = useState('');

    const saveComputer = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:5000/com',{
            Asset_number: Asset_number,
            Type: Type,
            Item_Name: Item_Name,
            Brand: Brand,
            Model: Model,
            Size: Size,
            CPU: CPU,
            RAM:RAM,
            HDD_SSD: HDD_SSD,
            Graphic_card: Graphic_card,
            SN : SN,
            mac_address: mac_address,
            purchase_price: purchase_price,
            Purchase_date: Purchase_date,
            Year : Year,
            Warranty : Warranty,
            Remark: Remark
        });
    }
    return(
        <div>
            <form onSubmit={ saveComputer }>
                <div className="field">
                    <label className="label">รหัสทรัพย์สิน</label>
                    <input 
                        className="input"
                        type="text"
                        placeholder="ใส่รหัสทรัพย์สิน"
                        value={ Asset_number }
                        onChange={ (e) => setAsset_number(e.target.value) }
                    />
                </div>
 
                <div className="field">
                    <label className="label">ชนิดทรัพย์สิน</label>
                    <input 
                        className="input"
                        type="text"
                        placeholder="ใส่ชนิดทรัพย์สิน"
                        value={ Type }
                        onChange={ (e) => setType(e.target.value) }
                    />
                </div>

                <div className="field">
                    <label className="label">Item_Name</label>
                    <input 
                        className="input"
                        type="text"
                        placeholder="Item_Name"
                        value={ Item_Name }
                        onChange={ (e) => setItem_Name(e.target.value) }
                    />
                </div>
                <div className="field">
                    <label className="label">Brand</label>
                    <input 
                        className="input"
                        type="text"
                        placeholder="Brand"
                        value={ Brand }
                        onChange={ (e) => setBrand(e.target.value) }
                    />
                </div>
                <div className="field">
                    <label className="label">Model</label>
                    <input 
                        className="input"
                        type="text"
                        placeholder="Model"
                        value={ Model }
                        onChange={ (e) => setModel(e.target.value) }
                    />
                </div>
 
                <div className="field">
                    <label className="label">Size</label>
                    <input 
                        className="input"
                        type="text"
                        placeholder="Size"
                        value={ Size }
                        onChange={ (e) => setSize(e.target.value) }
                    />
                </div>
                <div className="field">
                    <label className="label">CPU</label>
                    <input 
                        className="input"
                        type="text"
                        placeholder="CPU"
                        value={ CPU }
                        onChange={ (e) => setCPU(e.target.value) }
                    />
                </div>
                <div className="field">
                    <label className="label">RAM</label>
                    <input 
                        className="input"
                        type="text"
                        placeholder="RAM"
                        value={ RAM }
                        onChange={ (e) => setRAM(e.target.value) }
                    />
                </div>
                <div className="field">
                    <label className="label">HDD/SSD</label>
                    <input 
                        className="input"
                        type="text"
                        placeholder="HDD/SSD"
                        value={ HDD_SSD }
                        onChange={ (e) => setHDD_SSD(e.target.value) }
                    />
                </div>
                <div className="field">
                    <label className="label">Graphic_card</label>
                    <input 
                        className="input"
                        type="text"
                        placeholder="Graphic_card"
                        value={ Graphic_card }
                        onChange={ (e) => setGraphic_card(e.target.value) }
                    />
                </div>
                <div className="field">
                    <label className="label">SN</label>
                    <input 
                        className="input"
                        type="text"
                        placeholder="SN"
                        value={ SN }
                        onChange={ (e) => setSN(e.target.value) }
                    />
                </div>
                <div className="field">
                    <label className="label">mac_address</label>
                    <input 
                        className="input"
                        type="text"
                        placeholder="mac_address"
                        value={ mac_address }
                        onChange={ (e) => setmac_address(e.target.value) }
                    />
                </div>
                <div className="field">
                    <label className="label">purchase_price</label>
                    <input 
                        className="input"
                        type="text"
                        placeholder="purchase_price"
                        value={ purchase_price }
                        onChange={ (e) => setpurchase_price(e.target.value) }
                    />
                </div>
                <div className="field">
                    <label className="label">Purchase_date</label>
                    <input 
                        className="input"
                        type="text"
                        placeholder="Purchase_date"
                        value={ Purchase_date }
                        onChange={ (e) => setPurchase_date(e.target.value) }
                    />
                </div>
                <div className="field">
                    <label className="label">ปีที่ซื้อ</label>
                    <input 
                        className="input"
                        type="text"
                        placeholder="Year"
                        value={ Year }
                        onChange={ (e) => setYear(e.target.value) }
                    />
                </div>
                <div className="field">
                    <label className="label">Warranty</label>
                    <input 
                        className="input"
                        type="text"
                        placeholder="Warranty"
                        value={ Warranty }
                        onChange={ (e) => setWarranty(e.target.value) }
                    />
                </div>
                <div className="field">
                    <label className="label">Remark</label>
                    <input 
                        className="input"
                        type="text"
                        placeholder="Remark"
                        value={ Remark }
                        onChange={ (e) => setRemark(e.target.value) }
                    />
                </div>
                <div className="field">
                    <button className="button is-primary">Save</button>
                </div>
            </form>
        </div>
    )
    			
}
export default AddComputer