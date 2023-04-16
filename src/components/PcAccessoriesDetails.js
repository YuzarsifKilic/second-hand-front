import ProductProperties from "./ProductProperties";

export default function PcAccessoriesDetails() {
    const pc_accessories = {
        id: 1,
        short_details: "Uzun Şarj Süresi",
        photo_url: "https://productimages.hepsiburada.net/s/124/375/110000074307496.jpg",
        price: 1000,
        brand_name: "Logitech",
        brand_model: "G 305",
        seller_name: "Yusuf",
        connectivity_technology: "Bluetooth",
        color: "Beyaz",
        details: "Şarj süresi uzun gidiyor. Herhangi bir sıkıntısı yok."
    }

    return (
        <div className={"mt-24 ml-24 h-screen rounded-xl border mr-24 grid grid-cols-2 bg-white"}>
            <div className={"flex mt-48 flex-wrap justify-center"}>
                <div className={"flex h-3/5 justify-items-center border border-gray-300 bg-white rounded-2xl p-12"}>
                    <img src={pc_accessories.photo_url} style={{height: "400px", width: "400px"}} />
                </div>
            </div>
            <div className={"mt-12 divide-y"}>
                <div>
                    <div>
                        <div className={"font-semibold text-2xl"}>
                            {pc_accessories.short_details}
                        </div>
                        <div className={"mt-4"}>
                            <div className={"flex justify-start gap-3"}>
                                <div>
                                    Satıcı: Yusuf
                                </div>
                                <div className={"semibold text-gray-400"}>
                                    {pc_accessories.seller_username}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={"semibold text-cyan-800 mt-3"}>
                        <p>
                            {pc_accessories.brand_name}
                        </p>
                        <p>
                            {pc_accessories.brand_model}
                        </p>
                    </div>
                    <div className={"grid grid-cols-2"}>
                        <div className={"border border-gray-300 w-24 p-3 mt-3 rounded-xl text-green-400 hover:bg-gray-100 mb-2"}>
                            {pc_accessories.price} tl

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
                        <ProductProperties prop_name={"Bağlantı Türü"} prop={pc_accessories.connectivity_technology} />
                        <ProductProperties prop_name={"Renk"} prop={pc_accessories.color} />
                    </div>
                </div>
                <div className={"mt-4"}>
                    <div className={"mt-4 font-semibold"}>
                        Ürün Açıklaması
                    </div>
                    <div className={"mt-4"}>
                        {pc_accessories.details}
                    </div>
                </div>
            </div>

        </div>
    )
}