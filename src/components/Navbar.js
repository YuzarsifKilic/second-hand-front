import {NavLink} from "react-router-dom";

export default function Navbar() {
    return (
        <div className={"w-full flex justify-center bg-gray-700 p-3 md:mr-6 relative"}>
            <div className={"flex gap-20"}>
                <NavLink to={"/pc"}>
                <button
                    type={"button"}
                    className={"relative rounded-full p-3 text-gray-200 hover:bg-gray-500"}
                >
                    PC
                </button>
                </NavLink>
                <NavLink to={"/phone"}>
                <button
                    type={"button"}
                    className={"relative rounded-full p-3 text-gray-200 hover:bg-gray-500"}
                >
                    Phone
                </button>
                </NavLink>
                <NavLink to={"/tv"}>
                <button
                    type={"button"}
                    className={"relative rounded-full p-3 text-gray-200 hover:bg-gray-500"}
                >
                    TV
                </button>
                </NavLink>
                <NavLink to={"/gaming-console"}>
                <button
                    type={"button"}
                    className={"relative rounded-full p-3 text-gray-200 hover:bg-gray-500"}
                >
                    Gaming Console
                </button>
                </NavLink>
                <NavLink to={"/pc-accessories"}>
                <button
                    type={"button"}
                    className={"relative rounded-full p-3 text-gray-200 hover:bg-gray-500"}
                >
                    Pc Accessories
                </button>
                </NavLink>
            </div>
        </div>
    )
}