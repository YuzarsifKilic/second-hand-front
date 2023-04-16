import GamingConsoleColorFilter from "../components/GamingConsoleColorFilter";
import ProductList from "../components/ProductList";
import ConsoleBrandFilter from "../components/ConsoleBrandFilter";
import ColorFilter from "../components/ColorFilter";
import ConsoleColorFilter from "../components/ConsoleColorFilter";
import Product from "../components/Product";

export default function GamingConsole() {

    const products = [
        {id: 1, brand_name: "XBOX", short_details: "2 Kol 6 oyun", price: 8000, photo_url: "https://cdn.cimri.io/image/1000x1000/microsoftxboxseriesxtboyunkonsolusiyah_622648424.jpg"},
        {id: 2, brand_name: "XBOX", short_details: "2 Kol 6 oyun", price: 8000, photo_url: "https://cdn.cimri.io/image/1000x1000/microsoftxboxseriesxtboyunkonsolusiyah_622648424.jpg"},
        {id: 3, brand_name: "XBOX", short_details: "2 Kol 6 oyun", price: 8000, photo_url: "https://cdn.cimri.io/image/1000x1000/microsoftxboxseriesxtboyunkonsolusiyah_622648424.jpg"},
        {id: 4, brand_name: "XBOX", short_details: "2 Kol 6 oyun", price: 8000, photo_url: "https://cdn.cimri.io/image/1000x1000/microsoftxboxseriesxtboyunkonsolusiyah_622648424.jpg"},
        {id: 5, brand_name: "XBOX", short_details: "2 Kol 6 oyun", price: 8000, photo_url: "https://cdn.cimri.io/image/1000x1000/microsoftxboxseriesxtboyunkonsolusiyah_622648424.jpg"}
    ]

    return (
        <div className={"grid grid-cols-4"}>
            <div>
                <div>
                    <ConsoleBrandFilter/>
                </div>
                <div>
                    <ConsoleColorFilter/>
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