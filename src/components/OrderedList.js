import {Table} from "antd";
import {NavLink} from "react-router-dom";

export default function OrderedList() {

    const products = [
        {id: 1, brand_name: "APPLE", short_details: "Temiz Telefon", price: 21000, photo_url: "https://cdn.dsmcdn.com/mnresize/1200/1800/ty733/product/media/images/20230215/16/281514998/111694438/1/1_org_zoom.jpg"},
        {id: 2, brand_name: "APPLE", short_details: "Temiz Telefon", price: 21000, photo_url: "https://cdn.dsmcdn.com/mnresize/1200/1800/ty733/product/media/images/20230215/16/281514998/111694438/1/1_org_zoom.jpg"},
        {id: 3, brand_name: "APPLE", short_details: "Temiz Telefon", price: 21000, photo_url: "https://cdn.dsmcdn.com/mnresize/1200/1800/ty733/product/media/images/20230215/16/281514998/111694438/1/1_org_zoom.jpg"},
        {id: 4, brand_name: "APPLE", short_details: "Temiz Telefon", price: 21000, photo_url: "https://cdn.dsmcdn.com/mnresize/1200/1800/ty733/product/media/images/20230215/16/281514998/111694438/1/1_org_zoom.jpg"},
        {id: 5, brand_name: "APPLE", short_details: "Temiz Telefon", price: 21000, photo_url: "https://cdn.dsmcdn.com/mnresize/1200/1800/ty733/product/media/images/20230215/16/281514998/111694438/1/1_org_zoom.jpg"}
    ]

    return (
        <div className={"mt-16 m-12"}>
            <Table columns={[
                {
                    dataIndex: "photo_url",
                    render: (text) => (
                        <NavLink to={"/phone-detail"}>
                            <img style={{height: "120px", width: "80px"}}  src={text}/>
                        </NavLink>
                    )
                },
                {
                    title: "Marka İsmi",
                    dataIndex: "brand_name"
                },
                {
                    title: "Açıklama",
                    dataIndex: "short_details"
                },
                {
                    title: "Price",
                    dataIndex: "price"
                }
            ]}
            dataSource={products}
            pagination={false}
            >
            </Table>
        </div>
    )
}