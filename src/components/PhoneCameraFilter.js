export default function PhoneCameraFilter() {
    return (
        <div className={"flex justify-start mt-4 columns-2"}>
            <div>
                <input className={"border border-gray-600 rounded-xl p-1 focus:ring-amber-50 hover:ring-2 focus:outline-none w-20"} />
            </div>

            <div>
                <input className={"border border-gray-600 rounded-xl ml-4 p-1 focus:ring-amber-50 hover:ring-2 focus:outline-none w-20"} />
            </div>
        </div>
    )
}