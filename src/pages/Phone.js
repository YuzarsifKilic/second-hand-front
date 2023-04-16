import PhoneBrandFilter from "../components/PhoneBrandFilter";
import PhoneColorFilter from "../components/PhoneColorFilter";
import PhoneOsFilter from "../components/PhoneOsFilter";
import PhoneCameraFilter from "../components/PhoneCameraFilter";
import ProductList from "../components/ProductList";
import PhoneBrand from "../components/PhoneBrand";
import ColorFilter from "../components/ColorFilter";
import Product from "../components/Product";

export default function Phone() {

    const products = [
        {id: 1, brand_name: "APPLE", short_details: "Temiz Telefon", price: 21000, photo_url: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-finish-select-202207-6-1inch-blue?wid=2560&hei=1440&fmt=jpeg&qlt=95&.v=1656712888128"},
        {id: 2, brand_name: "APPLE", short_details: "Temiz Telefon", price: 21000, photo_url: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-finish-select-202207-6-1inch-blue?wid=2560&hei=1440&fmt=jpeg&qlt=95&.v=1656712888128"},
        {id: 3, brand_name: "APPLE", short_details: "Temiz Telefon", price: 21000, photo_url: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-finish-select-202207-6-1inch-blue?wid=2560&hei=1440&fmt=jpeg&qlt=95&.v=1656712888128"},
        {id: 4, brand_name: "APPLE", short_details: "Temiz Telefon", price: 21000, photo_url: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-finish-select-202207-6-1inch-blue?wid=2560&hei=1440&fmt=jpeg&qlt=95&.v=1656712888128"},
        {id: 5, brand_name: "APPLE", short_details: "Temiz Telefon", price: 21000, photo_url: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-finish-select-202207-6-1inch-blue?wid=2560&hei=1440&fmt=jpeg&qlt=95&.v=1656712888128"}
    ]

    return (
        <div className={"grid grid-cols-4"}>
            <div>
                <div>
                    <PhoneBrand/>
                </div>
                <div>
                    <ColorFilter/>
                </div>
                <div>
                    <PhoneOsFilter/>
                </div>
                <div className={"ml-12 mt-12"}>
                    Kamera MP Aralığı
                    <PhoneCameraFilter/>
                </div>
                <div className={"ml-12 mt-12"}s>
                    Kamera MP Aralığı
                    <PhoneCameraFilter/>
                </div>
                <div>
                    <button
                        type={"button"}
                        className={"rounded-xl bg-gray-700 p-3 text-white mt-12 ml-48 w-36 hover:bg-sky-800"}
                    >
                        Filtrele
                    </button>
                </div>
            </div>
            <div className={"col-span-3"}>
                <Product products={products} />
                <Product products={products} />
                <Product products={products} />
                <Product products={products} />
            </div>

        </div>
    )
}