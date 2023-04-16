import PersonIcon from '@mui/icons-material/Person';
import MailIcon from '@mui/icons-material/Mail';
import AddBoxIcon from '@mui/icons-material/AddBox';
import {NavLink} from "react-router-dom";

export default function CustomerPage() {
    return (
            <div className={"grid grid-cols-1 gap-12 place-items-center mt-16"}>
                <div>
                    <PersonIcon sx={{fontSize: 100}}/>
                </div>
                <div>
                    <p>
                        İsim
                    </p>
                    <input className={"rounded-xl mt-2 p-2 focus:outline-none w-96"} />
                </div>
                <div>
                    <p>
                        Soyad
                    </p>
                    <input className={"rounded-xl mt-2 p-2 focus:outline-none w-96"} />
                </div>
                <div>
                    <NavLink to={"/deal-list"}>
                    <button
                        type={"button"}
                        className={"rounded-xl p-3 bg-white w-72"}
                    >
                        <MailIcon/> Mesajlar
                    </button>
                    </NavLink>
                </div>
                <div>
                    <NavLink to={"/order-list"}>
                    <button
                        type={"button"}
                        className={"rounded-xl p-3 bg-white w-72"}
                    >
                        <AddBoxIcon/> Aldığım Ürünler
                    </button>
                    </NavLink>
                </div>
            </div>
    )
}