import PcBrandFilter from "../components/PcBrandFilter";
import CpuFilter from "../components/CpuFilter";
import GpuFilter from "../components/GpuFilter";
import PcRamFilter from "../components/PcRamFilter";
import {Card} from "antd";
import TvBrand from "../components/TvBrand";
import ScreenTypeFilter from "../components/ScreenTypeFilter";
import PcBrand from "../components/PcBrand";
import React from "react";
import CpuNewFilter from "../components/CpuNewFilter";

export default function AddProductDetail() {
    return (
        <div className={"m-20"}>
            <Card>
                <form>
                    <div className="space-y-12">
                        <div className="border-b border-gray-900/10 pb-12">
                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-7">
                                <div className="sm:col-span-4">
                                    <PcBrand/>
                                </div>
                                <div className="mt-20 sm:col-span-3">
                                    <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                                        Pc Modeli
                                    </label>
                                    <div className="mt-2 w-96">
                                        <input
                                            type="text"
                                            name="brand_model"
                                            id="brand_model"
                                            autoComplete="price"
                                            placeholder={"Titan GT77"}
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                                <div className="mt-8 sm:col-span-4">
                                    <CpuNewFilter/>
                                </div>
                                <div className="mt-20 sm:col-span-3">
                                    <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                                        İşlemci Hızı (GHz)
                                    </label>
                                    <div className="mt-2 w-96">
                                        <input
                                            type="text"
                                            name="brand_model"
                                            id="brand_model"
                                            autoComplete="price"
                                            placeholder={"3.2"}
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                                <div className="mt-8 sm:col-span-4">
                                    <GpuFilter/>
                                </div>
                                <div className="mt-20 sm:col-span-3">
                                    <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                                        Ekran Kartı Boyutu (GB)
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
                                <div className="mt-8 sm:col-span-4">
                                    <PcRamFilter/>
                                </div>
                                <div className="mt-20 sm:col-span-3">
                                    <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                                        Ram Hızı
                                    </label>
                                    <div className="mt-2 w-96">
                                        <input
                                            type="text"
                                            name="brand_model"
                                            id="brand_model"
                                            autoComplete="price"
                                            placeholder={"16"}
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                                <div className="mt-20 sm:col-span-4 ml-12">
                                    <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                                        Ekran Boyutu
                                    </label>
                                    <div className="mt-2 w-96">
                                        <input
                                            type="text"
                                            name="brand_model"
                                            id="brand_model"
                                            autoComplete="price"
                                            placeholder={"17"}
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                                <div className="mt-20 sm:col-span-3">
                                    <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                                        Çözünürlük
                                    </label>
                                    <div className="mt-2 w-96">
                                        <input
                                            type="text"
                                            name="brand_model"
                                            id="brand_model"
                                            autoComplete="price"
                                            placeholder={"2560x1600"}
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                                <div className="mt-20 sm:col-span-4 ml-12">
                                    <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                                        Model Yılı
                                    </label>
                                    <div className="mt-2 w-96">
                                        <input
                                            type="text"
                                            name="brand_model"
                                            id="brand_model"
                                            autoComplete="price"
                                            placeholder={"2022"}
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