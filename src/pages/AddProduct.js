import {Listbox, Transition} from "@headlessui/react";
import {CheckIcon, ChevronUpDownIcon} from "@heroicons/react/20/solid";
import {Fragment, useState} from "react";
import {NavLink} from "react-router-dom";
import ProductProperties from "../components/ProductProperties";
import {Card, Image, Upload} from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'


export default function AddProduct() {

    const categories = [
        {category_name: "PC"},
        {category_name: "Phone"},
        {category_name: "TV"},
        {category_name: "Gaming Console"},
        {category_name: "PC Accessories"}
    ]

    const [selected, setSelected] = useState(categories[0])

    return (
        <div className={"m-12"}>
        <Card>
        <form>
            <div className="space-y-12">
                <div className="border-b border-gray-900/10 pb-12">

                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-7">
                        <div className="sm:col-span-4">
                            <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                                Ürün Başlığı
                            </label>
                            <div className="mt-2">
                                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                    <input
                                        type="text"
                                        name="short_detail"
                                        id="short_detail"
                                        autoComplete="short_detail"
                                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                        placeholder="Ürün Başlığı"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                                Ürün Fiyatı
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    name="price"
                                    id="price"
                                    autoComplete="price"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-3">
                            <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                                Ürün Kategorisi
                            </label>
                            <div className="mt-2">
                                <select
                                    id="country"
                                    name="country"
                                    autoComplete="country-name"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                >
                                    {
                                        categories.map((category) => (<option>{category.category_name}</option>))
                                    }
                                </select>
                            </div>
                        </div>
                        <div className="col-span-full">
                            <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                                Ürün Detayı
                            </label>
                            <div className="mt-2">
                            <textarea
                                id="details"
                                name="details"
                                rows={3}
                                className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:py-1.5 sm:text-sm sm:leading-6"
                                defaultValue={''}
                            />
                            </div>
                        </div>
                        <div className="col-span-full">
                            <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">
                                Ürün Fotoğrafları
                            </label>
                            <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                                <div className="text-center">
                                    <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                                    <div className="mt-4 flex text-sm leading-6 text-gray-600">
                                        <label
                                            htmlFor="file-upload"
                                            className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                                        >
                                            <span>Upload a file</span>
                                            <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                                        </label>
                                        <p className="pl-1">or drag and drop</p>
                                    </div>
                                    <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                                </div>
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
                    Devam
                </button>
            </div>
        </form>
        </Card>
        </div>
    )
}


