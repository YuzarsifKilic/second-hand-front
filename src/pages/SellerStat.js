import {Table} from "antd";

export default function SellerStat() {
    const sellers = [
        {id: "1234", username: "yuzarsif", email: "yuzarsifkilic@gmail.com", product_count: 20},
        {id: "1234", username: "yuzarsif", email: "yuzarsifkilic@gmail.com", product_count: 20},
        {id: "1234", username: "yuzarsif", email: "yuzarsifkilic@gmail.com", product_count: 20},
        {id: "1234", username: "yuzarsif", email: "yuzarsifkilic@gmail.com", product_count: 20},
        {id: "1234", username: "yuzarsif", email: "yuzarsifkilic@gmail.com", product_count: 20},
        {id: "1234", username: "yuzarsif", email: "yuzarsifkilic@gmail.com", product_count: 20},
        {id: "1234", username: "yuzarsif", email: "yuzarsifkilic@gmail.com", product_count: 20},
        {id: "1234", username: "yuzarsif", email: "yuzarsifkilic@gmail.com", product_count: 20}
    ]

    return (
        <div className={"mt-16 m-12"}>
            <Table columns={[
                {
                    title: "Kullanıcı Adı",
                    dataIndex: "username"
                },
                {
                    title: "Email",
                    dataIndex: "email"
                },
                {
                    title: "Ürün Sayısı",
                    dataIndex: "product_count"
                },
                {
                    key: 'action',
                    render: (_, record) => (
                        <button
                            className={"bg-sky-800 rounded-xl p-2 text-white"}
                        >
                            Kullanıcıyı Sil
                        </button>
                    ),
                },
            ]}
                   dataSource={sellers}
                   pagination={false}
            >
            </Table>
        </div>
    )
}