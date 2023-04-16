import {RiProfileFill} from "react-icons/ri";
import {NavLink} from "react-router-dom";

export default function Header() {
    return (
        <div className={"bg-slate-800 fixed w-full md:static p-3 flex justify-between gap-1"}>
            <NavLink to={"/home"}>
                <p className={"text-gray-200 m-2 text-xl uppercase"}>Second-Hand</p>
            </NavLink>

            <NavLink to={"/customer"}>
            <button
                type={"button"}
                style={{color: "#F0FFFF"}}
                className={"relative rounded-full p-3 hover:bg-slate-700"}
            >
                <RiProfileFill/>
            </button>
            </NavLink>

        </div>
    )
}