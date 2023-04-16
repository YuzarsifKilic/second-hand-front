export default function ProductProperties({prop_name, prop}) {
    return (
        <div className={"container grid grid-cols-2 bg-gray-100 hover:bg-gray-100 rounded-xl p-2 gap-24 justify-between"}>
            <div className={"text-gray-600 font-semibold"}>
                {prop_name}:
            </div>
            <div className={"grid justify-items-end font-medium"}>
                {prop}
            </div>
        </div>
    )
}