import {Table} from "antd";
import {NavLink} from "react-router-dom";

export default function CustomerStat() {

    const customers = [
        {id: "1234", first_name: "Yusuf", last_name: "Kılıç", email: "yuzarsifkilic@gmail.com"},
        {id: "12345", first_name: "Yusuf", last_name: "Kılıç", email: "yuzarsifkilic@gmail.com"},
        {id: "12346", first_name: "Yusuf", last_name: "Kılıç", email: "yuzarsifkilic@gmail.com"},
        {id: "12347", first_name: "Yusuf", last_name: "Kılıç", email: "yuzarsifkilic@gmail.com"},
        {id: "12348", first_name: "Yusuf", last_name: "Kılıç", email: "yuzarsifkilic@gmail.com"},
        {id: "12349", first_name: "Yusuf", last_name: "Kılıç", email: "yuzarsifkilic@gmail.com"},
        {id: "12341", first_name: "Yusuf", last_name: "Kılıç", email: "yuzarsifkilic@gmail.com"},
        {id: "12342", first_name: "Yusuf", last_name: "Kılıç", email: "yuzarsifkilic@gmail.com"},
        {id: "12343", first_name: "Yusuf", last_name: "Kılıç", email: "yuzarsifkilic@gmail.com"}
    ]

    return (
        <div className={"mt-16 m-12"}>
            <Table columns={[
                {
                    title: "Müşteri İsmi",
                    dataIndex: "first_name"
                },
                {
                    title: "Müşteri Soyadı",
                    dataIndex: "last_name"
                },
                {
                    title: "Email",
                    dataIndex: "email"
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
                   dataSource={customers}
                   pagination={false}
            >
            </Table>
        </div>
    )
}