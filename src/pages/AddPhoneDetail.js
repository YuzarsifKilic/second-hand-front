import PcBrandFilter from "../components/PcBrandFilter";
import CpuFilter from "../components/CpuFilter";
import GpuFilter from "../components/GpuFilter";
import PcRamFilter from "../components/PcRamFilter";
import PhoneBrandFilter from "../components/PhoneBrandFilter";
import PhoneCameraFilter from "../components/PhoneCameraFilter";
import PhoneOsFilter from "../components/PhoneOsFilter";
import PhoneColorFilter from "../components/PhoneColorFilter";
import {Card} from "antd";
import TvBrand from "../components/TvBrand";
import ScreenTypeFilter from "../components/ScreenTypeFilter";
import PhoneBrand from "../components/PhoneBrand";
import ColorFilter from "../components/ColorFilter";
import PhoneScreenType from "../components/PhoneScreenType";

export default function AddPhoneDetail() {

    return (
        <div className={"m-20"}>
            <Card>
                <form>
                    <div className="space-y-12">
                        <div className="border-b border-gray-900/10 pb-12">

                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-7">
                                <div className="sm:col-span-4">
                                    <PhoneBrand/>
                                </div>
                                <div className="mt-20 sm:col-span-3">
                                    <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                                        Telefon Modeli
                                    </label>
                                    <div className="mt-2 w-96">
                                        <input
                                            type="text"
                                            name="brand_model"
                                            id="brand_model"
                                            autoComplete="price"
                                            placeholder={"iPhone 13"}
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                                <div className="mt-4 sm:col-span-4">
                                    <ColorFilter/>
                                </div>
                                <div className="sm:col-span-3">
                                    <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                                        Telefon Ana Kamera (MP)
                                    </label>
                                    <div className="mt-2 w-96">
                                        <input
                                            type="text"
                                            name="brand_model"
                                            id="brand_model"
                                            autoComplete="price"
                                            placeholder={"20"}
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                                <div className="mt-4 sm:col-span-4">
                                    <PhoneOsFilter/>
                                </div>
                                <div className="mt-4 sm:col-span-3">
                                    <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                                        Telefon Ön Kamera (MP)
                                    </label>
                                    <div className="mt-2 w-96">
                                        <input
                                            type="text"
                                            name="brand_model"
                                            id="brand_model"
                                            autoComplete="price"
                                            placeholder={"12"}
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                                <div className="mt-4 sm:col-span-4 ml-12">
                                    <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                                        Telefon Depolama Alanı (GB)
                                    </label>
                                    <div className="mt-2 w-96">
                                        <input
                                            type="text"
                                            name="brand_model"
                                            id="brand_model"
                                            autoComplete="price"
                                            placeholder={"512"}
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                                <div className="mt-4 sm:col-span-3">
                                    <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                                        Telefon Ekran Boyutu (")
                                    </label>
                                    <div className="mt-2 w-96">
                                        <input
                                            type="text"
                                            name="brand_model"
                                            id="brand_model"
                                            autoComplete="price"
                                            placeholder={"6"}
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                                <div className="sm:col-span-4">

                                    <PhoneScreenType/>
                                </div>
                                <div className={"mt-12"}>
                                    <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                                        Telefon Ram Kapasitesi (GB)
                                    </label>
                                    <div className="mt-2 w-96">
                                        <input
                                            type="text"
                                            name="brand_model"
                                            id="brand_model"
                                            autoComplete="price"
                                            placeholder={"512"}
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 flex items-center justify-end gap-x-6">
                        <button
                            type="submit"
                            className="rounded-md bg-sky-800 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-sky-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Kaydet
                        </button>
                    </div>
                </form>
            </Card>
        </div>
    )
}