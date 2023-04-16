import ConnectionTechnologyFilter from "../components/ConnectionTechnologyFilter";
import ProductList from "../components/ProductList";
import PcAccessoriesBrandFilter from "../components/PcAccessoriesBrandFilter";
import CustomFilter from "../components/CustomFilter";
import Example from "../components/CustomFilter";
import CpuNewFilter from "../components/CpuNewFilter";
import AccessoriesBrandFilter from "../components/AccessoriesBrandFilter";
import Product from "../components/Product";
import ColorFilter from "../components/ColorFilter";

export default function ComputerAccessories() {

    const products = [
        {id: 1, brand_name: "Logitech", short_details: "Uzun Şarj Süresi", price: 1000, photo_url: "https://productimages.hepsiburada.net/s/124/375/110000074307496.jpg"},
        {id: 2, brand_name: "Logitech", short_details: "Uzun Şarj Süresi", price: 1000, photo_url: "https://productimages.hepsiburada.net/s/124/375/110000074307496.jpg"},
        {id: 3, brand_name: "Logitech", short_details: "Uzun Şarj Süresi", price: 1000, photo_url: "https://productimages.hepsiburada.net/s/124/375/110000074307496.jpg"},
        {id: 4, brand_name: "Logitech", short_details: "Uzun Şarj Süresi", price: 1000, photo_url: "https://productimages.hepsiburada.net/s/124/375/110000074307496.jpg"},
        {id: 5, brand_name: "Logitech", short_details: "Uzun Şarj Süresi", price: 1000, photo_url: "https://productimages.hepsiburada.net/s/124/375/110000074307496.jpg"}
    ]

    return (
        <div className={"grid grid-cols-4"}>
            <div>
                <div>
                    <AccessoriesBrandFilter/>
                </div>
                <div>
                    <ConnectionTechnologyFilter/>
                </div>
                <div>
                    <ColorFilter/>
                </div>
                <button
                    type={"button"}
                    className={"rounded-xl bg-gray-700 p-3 text-white mt-12 ml-48 w-36 hover:bg-sky-800"}
                >
                    Filtrele
                </button>
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