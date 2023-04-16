import {NavLink} from "react-router-dom";

export default function Product({products}) {

    return (
        <div className={"mt-12"}>
            <div className={"flex m-3 flex-wrap justify-center gap-1 items-center md:columns-3"}>
                {
                    products.map((item) => (
                        <NavLink to={"/details"} >
                        <div key={item.id} className={"bg-white border border-gray-300 h-1/4 md:w-56 p-4 pt-9 rounded-2xl hover:drop-shadow-xl"}>
                            <button type={"button"} className={"text-2xl opacity-0.9 rounded-full"}>
                                <img src={item.photo_url} className={"rounded-xl"}/>
                            </button>
                            <p className={"mt-2"}>
                                <span className={"text-lg font-semibold text-green-400"}>
                                    {item.brand_name}
                                </span>
                            </p>
                            <p className={"mt-2"}>
                                <span className={"text-lg "}>
                                    {item.short_details}
                                </span>
                            </p>
                            <p className={"mt-2 ml-28 text-gray-500"}>
                                <span className={"text-lg font-semibold"}>
                                    {item.price} tl
                                </span>
                            </p>
                        </div>
                        </NavLink>
                    ))
                }
            </div>
        </div>
    )
}