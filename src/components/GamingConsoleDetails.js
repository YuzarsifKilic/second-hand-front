import ProductProperties from "./ProductProperties";

export default function GamingConsoleDetails() {
    const gaming_console = {
        id: 1,
        short_details: "2 Kol 6 oyun",
        photo_url: "https://cdn.cimri.io/image/1000x1000/microsoftxboxseriesxtboyunkonsolusiyah_622648424.jpg",
        price: 8000,
        seller_name: "Yusuf",
        brand_name: "XBOX",
        brand_model: "Series X",
        storage: 512,
        color: "Siyah",
        details: "Hiçbir sıkıntısı yoktur."
    }

    return (
        <div className={"mt-24 ml-24 h-screen rounded-xl border mr-24 grid grid-cols-2 bg-white"}>
            <div className={"flex mt-48 flex-wrap justify-center"}>
                <div className={"flex h-3/5 justify-items-center border border-gray-300 bg-white rounded-2xl p-12"}>
                    <img src={gaming_console.photo_url} style={{height: "400px", width: "400px"}} />
                </div>
            </div>
            <div className={"mt-12 divide-y"}>
                <div>
                    <div>
                        <div className={"font-semibold text-2xl"}>
                            {gaming_console.short_details}
                        </div>
                        <div className={"mt-4"}>
                            <div className={"flex justify-start gap-3"}>
                                <div>
                                    Satıcı: Yusuf
                                </div>
                                <div className={"semibold text-gray-400"}>
                                    {gaming_console.seller_username}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={"semibold text-cyan-800 mt-3"}>
                        <p>
                            {gaming_console.brand_name}
                        </p>
                        <p>
                            {gaming_console.brand_model}
                        </p>
                    </div>
                    <div className={"grid grid-cols-2"}>
                        <div className={"border border-gray-300 w-24 p-3 mt-3 rounded-xl text-green-400 hover:bg-gray-100 mb-2"}>
                            {gaming_console.price} tl

                        </div>
                        <div>
                            <button
                                className={"bg-sky-800 rounded-xl p-3 w-36 hover:bg-sky-600 text-white"}
                            >
                                Anlaş
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div className={"font-semibold mt-4"}>
                        Detaylar
                    </div>
                    <div className={"mt-4 grid grid-cols-2 gap-4 mr-2"}>
                        <ProductProperties prop_name={"Hafıza"} prop={`${gaming_console.storage} GB`} />
                        <ProductProperties prop_name={"Renk"} prop={gaming_console.color} />
                    </div>
                </div>
                <div className={"mt-4"}>
                    <div className={"mt-4 font-semibold"}>
                        Ürün Açıklaması
                    </div>
                    <div className={"mt-4"}>
                        {gaming_console.details}
                    </div>
                </div>
            </div>

        </div>
    )
}