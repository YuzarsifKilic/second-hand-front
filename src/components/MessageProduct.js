import { Collapse, Space } from 'antd';
import { Button } from 'antd';
import { Input } from 'antd';
const { Panel } = Collapse;


export default function MessageProduct() {

    return (
        <div className={"bg-white w-5/6 rounded-xl border p-4 divide-y-1 m-4"}>
            <div className={"h-12"}>
                Yuzarsif
            </div>
            <div className={"h-96"}>
                <div className={"p-4 bg-sky-500 rounded-xl m-4 mr-10"}>
                    Hello
                </div>
                <div className={"p-4 bg-sky-800 rounded-xl m-4 ml-10"}>
                    Hello
                </div>
                <div className={"p-4 bg-sky-500 rounded-xl m-4 mr-10"}>
                    Hello
                </div>
                <div className={"p-4 bg-sky-800 rounded-xl m-4 ml-10"}>
                    Hello
                </div>
            </div>
            <div className={"p-8"}>
                <div className={"grid grid-cols-2"}>
                    <input className={"rounded-xl border border-gray-600 hover:border-gray-400 p-2 w-56"} />
                    <button className={"rounded-xl bg-sky-800 hover:bg-sky-700 text-white ml-12"}>Gönder</button>
                </div>
            </div>
        </div>
    )
}