import ProductProperties from "./ProductProperties";

export default function PhoneDetail() {

    const phone = {
        short_details: "Temiz Telefon",
        photo_url: "https://cdn.dsmcdn.com/mnresize/1200/1800/ty733/product/media/images/20230215/16/281514998/111694438/1/1_org_zoom.jpg",
        seller_name: "Yusuf",
        price: 21000,
        brand: "APPLE",
        brand_model: "iPhone 13",
        color_name: "Lacivert",
        os: "ios",
        camera: 12,
        front_camera: 10,
        storage: 512,
        screen_size: 6.1,
        ram_size: 6,
        screen_type: "AMOLED",
        details: "İhtiyaç dolayısıyla satılıktır. 0 gibi."
    }

    return (
        <div className={"mt-24 ml-24 h-screen rounded-xl border mr-24 grid grid-cols-2 bg-white"}>
            <div className={"flex mt-48 flex-wrap justify-center"}>
                <div className={"flex h-4/5 justify-items-center border border-gray-300 bg-white rounded-2xl p-12"}>
                    <img src={phone.photo_url} style={{height: "500px", width: "350px"}} />
                </div>
            </div>
            <div className={"mt-12 divide-y"}>
                <div>
                    <div>
                        <div className={"font-semibold text-2xl"}>
                            {phone.short_details}
                        </div>
                        <div className={"mt-4"}>
                            <div className={"flex justify-start gap-3"}>
                                <div>
                                    Satıcı: Yusuf
                                </div>
                                <div className={"semibold text-gray-400"}>
                                    {phone.seller_username}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={"semibold text-cyan-800 mt-3"}>
                        <p>
                            {phone.brand}
                        </p>
                        <p>
                            {phone.brand_model}
                        </p>
                    </div>
                    <div className={"grid grid-cols-2"}>
                        <div className={"border border-gray-300 w-24 p-3 mt-3 rounded-xl text-green-400 hover:bg-gray-100 mb-2"}>
                            {phone.price} tl

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
                        <ProductProperties prop_name={"İşletim Sistemi"} prop={phone.os} />
                        <ProductProperties prop_name={"Renk"} prop={phone.color_name} />
                        <ProductProperties prop_name={"Depolama Alanı"} prop={`${phone.storage} GB`} />
                        <ProductProperties prop_name={"Ön Kamera"} prop={`${phone.front_camera} MP`} />
                        <ProductProperties prop_name={"Ana Kamera"} prop={`${phone.camera} MP`} />
                        <ProductProperties prop_name={"Ekran Boyutu"} prop={`${phone.screen_size} "`} />
                        <ProductProperties prop_name={"Ekran Cinsi"} prop={phone.screen_type} />
                        <ProductProperties prop_name={"Ram Kapasitesi"} prop={`${phone.ram_size} GB`} />
                    </div>
                </div>
                <div className={"mt-4"}>
                    <div className={"mt-4 font-semibold"}>
                        Ürün Açıklaması
                    </div>
                    <div className={"mt-4"}>
                        {phone.details}
                    </div>
                </div>
            </div>

        </div>
    )
}