import PhoneBrandFilter from "../components/PhoneBrandFilter";
import PhoneOsFilter from "../components/PhoneOsFilter";
import PhoneColorFilter from "../components/PhoneColorFilter";
import TvScreenTypeFilter from "../components/TvScreenTypeFilter";
import TvBrandFilter from "../components/TvBrandFilter";
import {Card} from "antd";
import AccessoriesBrandFilter from "../components/AccessoriesBrandFilter";
import ConnectionTechnologyFilter from "../components/ConnectionTechnologyFilter";
import ColorFilter from "../components/ColorFilter";
import TvBrand from "../components/TvBrand";
import ScreenTypeFilter from "../components/ScreenTypeFilter";
import TvQualityFilter from "../components/TvQualityFilter";

export default function AddTvDetails() {

    return (
        <div className={"m-20"}>
            <Card>
                <form>
                    <div className="space-y-12">
                        <div className="border-b border-gray-900/10 pb-12">

                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-7">
                                <div className="ml-2 sm:col-span-4">
                                    <TvBrand/>
                                </div>
                                <div className="mt-20 sm:col-span-3">
                                    <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                                        Ürün Modeli
                                    </label>
                                    <div className="mt-2 w-96">
                                        <input
                                            type="text"
                                            name="brand_model"
                                            id="brand_model"
                                            autoComplete="price"
                                            placeholder={"AU7100 UHD"}
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                                <div className="mt-2 ml-12 sm:col-span-4">
                                    <ScreenTypeFilter/>
                                </div>
                                <div className={"mt-8"}>
                                    <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                                        Çözünürlük
                                    </label>
                                    <div className="mt-2 w-96">
                                        <input
                                            type="text"
                                            name="brand_model"
                                            id="brand_model"
                                            autoComplete="price"
                                            placeholder={"3,840 x 2,160"}
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                                <div className="mt-16 ml-10 sm:col-span-4">
                                    <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                                        Ekran Boyutu
                                    </label>
                                    <div className="mt-2 w-96">
                                        <input
                                            type="text"
                                            name="brand_model"
                                            id="brand_model"
                                            autoComplete="price"
                                            placeholder={"42\" / 106 "}
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <TvQualityFilter/>
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