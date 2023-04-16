import ProductProperties from "./ProductProperties";

export default function TvDetails() {
    const tv = {
        id: 1,
        short_details: "Çiziksiz TV",
        photo_url: "https://images.samsung.com/is/image/samsung/p6pim/tr/ue75au7100uxtk/gallery/tr-uhd-au7000-382891-382891-ue75au7100uxtk-454401444?$650_519_PNG$",
        price: 13000,
        seller_name: "Yusuf",
        brand_name: "SAMSUNG",
        brand_model: "AU7100 UHD",
        screen_size: "42\" / 106",
        resolution: "3,840 x 2,160",
        quality: "Full HD",
        screen_type: "DÜZ",
        details: "Televizyonda hiç çizik yoktur."
    }

    return (
        <div className={"mt-24 ml-24 h-screen rounded-xl border mr-24 grid grid-cols-2 bg-white"}>
            <div className={"flex mt-48 flex-wrap justify-center"}>
                <div className={"flex h-3/5 justify-items-center border border-gray-300 bg-white rounded-2xl p-12"}>
                    <img src={tv.photo_url} style={{height: "350px", width: "400px"}} />
                </div>
            </div>
            <div className={"mt-12 divide-y"}>
                <div>
                    <div>
                        <div className={"font-semibold text-2xl"}>
                            {tv.short_details}
                        </div>
                        <div className={"mt-4"}>
                            <div className={"flex justify-start gap-3"}>
                                <div>
                                    Satıcı: Yusuf
                                </div>
                                <div className={"semibold text-gray-400"}>
                                    {tv.seller_username}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={"semibold text-cyan-800 mt-3"}>
                        <p>
                            {tv.brand_name}
                        </p>
                        <p>
                            {tv.brand_model}
                        </p>
                    </div>
                    <div className={"grid grid-cols-2"}>
                        <div className={"border border-gray-300 w-24 p-3 mt-3 rounded-xl text-green-400 hover:bg-gray-100 mb-2"}>
                            {tv.price} tl

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
                        <ProductProperties prop_name={"Ekran Boyutu"} prop={`${tv.screen_size} Ekran`} />
                        <ProductProperties prop_name={"Görüntü Kalitesi"} prop={tv.quality} />
                        <ProductProperties prop_name={"Çözünürlük"} prop={tv.resolution} />
                        <ProductProperties prop_name={"Ekran Tipi"} prop={tv.screen_type} />
                    </div>
                </div>
                <div className={"mt-4"}>
                    <div className={"mt-4 font-semibold"}>
                        Ürün Açıklaması
                    </div>
                    <div className={"mt-4"}>
                        {tv.details}
                    </div>
                </div>
            </div>

        </div>
    )
}