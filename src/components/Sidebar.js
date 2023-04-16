import {NavLink} from "react-router-dom";

export default function Sidebar() {
    return (
        <div className={"ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10"}>
            <div className={"flex justify-between items-center"}>
                <div className={"items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900"}>
                    <span>Second-Hand</span>
                </div>
            </div>
            <div className={"mt-10"}>
                <div>
                    <p className={"text-gray-400 m-3 mt-4 uppercase"}>Pc</p>
                    <NavLink to={"/pc"} key={"pc"} className={"flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2"}>
                        <span className={"capitalize"}>PC</span>
                    </NavLink>
                </div>
                <div>
                    <p className={"text-gray-400 m-3 mt-4 uppercase"}>Phone</p>
                    <button type={"button"} className={"flex items-center w-60 gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2"}>
                        Phone
                    </button>
                </div>
                <div>
                    <p className={"text-gray-400 m-3 mt-4 uppercase"}>TV</p>
                </div>
                <div>
                    <p className={"text-gray-400 m-3 mt-4 uppercase"}>Gaming Console</p>
                </div>
            </div>
        </div>
    )
}