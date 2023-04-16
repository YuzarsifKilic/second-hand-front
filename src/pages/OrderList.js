

export default function OrderList() {

    const products = [
        {id: 1, brand_name: "APPLE", short_details: "Temiz Telefon", price: 21000, photo_url: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-finish-select-202207-6-1inch-blue?wid=2560&hei=1440&fmt=jpeg&qlt=95&.v=1656712888128"},
        {id: 2, brand_name: "APPLE", short_details: "Temiz Telefon", price: 21000, photo_url: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-finish-select-202207-6-1inch-blue?wid=2560&hei=1440&fmt=jpeg&qlt=95&.v=1656712888128"},
        {id: 3, brand_name: "APPLE", short_details: "Temiz Telefon", price: 21000, photo_url: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-finish-select-202207-6-1inch-blue?wid=2560&hei=1440&fmt=jpeg&qlt=95&.v=1656712888128"},
        {id: 4, brand_name: "APPLE", short_details: "Temiz Telefon", price: 21000, photo_url: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-finish-select-202207-6-1inch-blue?wid=2560&hei=1440&fmt=jpeg&qlt=95&.v=1656712888128"},
        {id: 5, brand_name: "APPLE", short_details: "Temiz Telefon", price: 21000, photo_url: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-finish-select-202207-6-1inch-blue?wid=2560&hei=1440&fmt=jpeg&qlt=95&.v=1656712888128"}
    ]

    return (
        <div>
            {
                products.map((product) => (
                    <div className={"ml-72 mt-4"}>
                        <button
                            type={"button"}
                            className={"rounded-xl hover:bg-green-300 p-3 bg-white w-5/12 h-24 ml-5"}
                        >
                            <div className={"flex justify-start flex-row"}>
                                <div>
                                    <img src={product.photo_url} className={"rounded-full bg-transparent p-1"} style={{height: "80px"}} />
                                </div>
                                <div className={"mt-4 ml-2"}>
                                    {product.short_details}
                                </div>
                                <div className={"mt-12 ml-2"}>
                                    {product.brand_name}
                                </div>
                                <div className={"mt-12 ml-2"}>
                                    {product.price}
                                </div>
                            </div>
                        </button>
                    </div>
                ))
            }
        </div>
    )
}