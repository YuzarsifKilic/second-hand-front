import TvBrandFilter from "../components/TvBrandFilter";
import TvScreenTypeFilter from "../components/TvScreenTypeFilter";
import ProductList from "../components/ProductList";
import TvBrand from "../components/TvBrand";
import ScreenTypeFilter from "../components/ScreenTypeFilter";
import Product from "../components/Product";

export default function Tv() {

    const products = [
        {id: 1, brand_name: "SAMSUNG", short_details: "Çiziksiz TV", price: 13000, photo_url: "https://images.samsung.com/is/image/samsung/p6pim/tr/ue75au7100uxtk/gallery/tr-uhd-au7000-382891-382891-ue75au7100uxtk-454401444?$650_519_PNG$"},
        {id: 2, brand_name: "SAMSUNG", short_details: "Çiziksiz TV", price: 13000, photo_url: "https://images.samsung.com/is/image/samsung/p6pim/tr/ue75au7100uxtk/gallery/tr-uhd-au7000-382891-382891-ue75au7100uxtk-454401444?$650_519_PNG$"},
        {id: 3, brand_name: "SAMSUNG", short_details: "Çiziksiz TV", price: 13000, photo_url: "https://images.samsung.com/is/image/samsung/p6pim/tr/ue75au7100uxtk/gallery/tr-uhd-au7000-382891-382891-ue75au7100uxtk-454401444?$650_519_PNG$"},
        {id: 4, brand_name: "SAMSUNG", short_details: "Çiziksiz TV", price: 13000, photo_url: "https://images.samsung.com/is/image/samsung/p6pim/tr/ue75au7100uxtk/gallery/tr-uhd-au7000-382891-382891-ue75au7100uxtk-454401444?$650_519_PNG$"},
        {id: 5, brand_name: "SAMSUNG", short_details: "Çiziksiz TV", price: 13000, photo_url: "https://images.samsung.com/is/image/samsung/p6pim/tr/ue75au7100uxtk/gallery/tr-uhd-au7000-382891-382891-ue75au7100uxtk-454401444?$650_519_PNG$"}
    ]

    return (
        <div className={"grid grid-cols-4"}>
            <div>
                <div>
                    <TvBrand/>
                </div>
                <div>
                    <ScreenTypeFilter/>
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