import {BrowserRouter, NavLink, Route, Routes} from "react-router-dom";
import SellerProfile from "../components/SellerProfile";
import PersonIcon from "@mui/icons-material/Person";
import MailIcon from "@mui/icons-material/Mail";
import AddBoxIcon from "@mui/icons-material/AddBox";
import AutoAwesomeMotionIcon from '@mui/icons-material/AutoAwesomeMotion';

export default function SellerPage() {
     return (
         <div className={"grid grid-cols-1 gap-12 place-items-center mt-16"}>
              <div>
                   <PersonIcon sx={{fontSize: 100}}/>
              </div>
              <div>
                   <p>
                        Kullanıcı Adı
                   </p>
                   <input className={"rounded-xl mt-2 p-2 focus:outline-none w-96"} />
              </div>
              <div className={"mt-4"}>
                   <p>
                        Telefon Numarası
                   </p>
                   <input className={"rounded-xl mt-2 p-2 focus:outline-none w-96"} />
              </div>
              <div className={"mt-4"}>
                   <p>
                        Adres Bilgisi
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
                  <div className={"mt-2"}>
                       <NavLink to={"/add-product"}>
                            <button
                                type={"button"}
                                className={"rounded-xl p-3 bg-white w-72"}
                            >
                                 <AddBoxIcon/> Ürün Ekle
                            </button>
                       </NavLink>
                  </div>
                 <div className={"mt-2"}>
                     <NavLink to={"/seller-products"}>
                         <button
                             type={"button"}
                             className={"rounded-xl p-3 bg-white w-72"}
                         >
                             <AutoAwesomeMotionIcon/> Ürünlerim
                         </button>
                     </NavLink>
                 </div>
         </div>
     )
}