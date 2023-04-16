import {Card} from "antd";
import PersonIcon from '@mui/icons-material/Person';
import {NavLink} from "react-router-dom";
import MailIcon from "@mui/icons-material/Mail";
import AddBoxIcon from "@mui/icons-material/AddBox";

export default function AdminPage() {
    return (
        <div className={"grid grid-cols-1 gap-12 place-items-center mt-16"}>
            <div>
                <PersonIcon sx={{fontSize: 100}}/>
            </div>
            <div>
                <p>
                    Username
                </p>
                <input className={"rounded-xl mt-2 p-2 focus:outline-none w-96"} />
            </div>
            <div>
            <NavLink to={"/customer-stat"} >
                <div
                    className={"bg-white hover:bg-blue-600 rounded-xl gap-4 p-8 w-60 h-24 flex justify-center mt-4"}
                >
                    <PersonIcon style={{
                        color: "black"
                    }} /> Müşteri Sayısı
                </div>
            </NavLink>
            </div>
            <div>
            <NavLink to={"/seller-stat"}>
                <div
                    className={"bg-white hover:bg-blue-600 rounded-xl gap-4 p-8 w-60 h-24 flex justify-center mt-4"}
                >
                    <PersonIcon style={{
                        color: "black"
                    }} /> Satıcı Sayısı
                </div>
            </NavLink>
            </div>
            <div>
            <NavLink to={"/check-product"}>
                <div
                    className={"bg-white hover:bg-blue-600 rounded-xl gap-4 p-8 w-60 h-24 flex justify-center mt-4"}
                >
                    <PersonIcon style={{
                        color: "black"
                    }} /> Onaylanmayı Bekleyen Ürünler
                </div>
            </NavLink>
            </div>
        </div>
    )
}

